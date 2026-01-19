# استفاده از Node.js LTS با Alpine (سبک‌تر و امن‌تر)
FROM node:20-alpine AS base

# نصب dependencies مورد نیاز برای Next.js
RUN apk add --no-cache libc6-compat

WORKDIR /app

# مرحله Dependencies
FROM base AS deps

# کپی فایل‌های package
COPY package.json package-lock.json* ./

# نصب dependencies فقط production
RUN npm ci --only=production && \
    npm cache clean --force

# مرحله Builder
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build
RUN npm run build

# مرحله Runner (Production)
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# ایجاد user غیر root برای امنیت
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# کپی فایل‌های public
COPY --from=builder /app/public ./public

# کپی فایل‌های standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# تنظیم دسترسی‌ها
RUN chown -R nextjs:nodejs /app

# استفاده از user غیر root
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start
CMD ["node", "server.js"]
