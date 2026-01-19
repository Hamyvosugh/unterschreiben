# Unterschreiben - سیستم امضای آنلاین امن

یک پلتفرم Next.js با امنیت سطح A برای مقاومت در برابر حملات سایبری.

## 🔒 ویژگی‌های امنیتی

- ✅ **بدون ذخیره‌سازی داده**: هیچ دیتابیس و کوکی ای وجود ندارد
- ✅ **Rate Limiting**: محدودیت درخواست برای جلوگیری از DDoS
- ✅ **Security Headers**: CSP, HSTS, X-Frame-Options و...
- ✅ **Input Validation**: Sanitization تمام ورودی‌ها
- ✅ **محافظت در برابر**: XSS, SQL Injection, Path Traversal, CSRF
- ✅ **بررسی امنیتی خودکار**: GitHub Actions و اسکریپت‌های مانیتورینگ

## 🚀 شروع سریع

### 1. نصب Dependencies

```bash
npm install
```

### 2. تنظیم Environment Variables

```bash
cp .env.example .env
# سپس OPENAI_API_KEY خود را در .env وارد کنید
```

### 3. اجرای بررسی امنیتی

```bash
npm run security
npm audit
```

### 4. اجرای Development Server

```bash
npm run dev
```

باز کردن [http://localhost:3000](http://localhost:3000) در مرورگر.

## 📋 دستورات مهم

```bash
# Development
npm run dev

# Build برای Production
npm run build

# اجرای Production
npm start

# بررسی امنیتی
npm run security

# بررسی آسیب‌پذیری‌ها
npm audit

# رفع مشکلات امنیتی
npm audit fix
```

## 🛡️ امنیت

### هدرهای امنیتی پیاده‌سازی شده

- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS) - 2 سال
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection
- Referrer-Policy: no-referrer
- CORS Protection

### Rate Limiting

- 100 درخواست/دقیقه برای صفحات
- 10 درخواست/دقیقه برای API

### محافظت در برابر حملات

- بلاک الگوهای مشکوک (.env, .git, wp-admin)
- Input validation و sanitization
- محافظت در برابر XSS, SQL Injection, Path Traversal
- CSRF Protection

## 📚 مستندات امنیتی

- [راهنمای امنیتی کامل](SECURITY.md) - اقدامات امنیتی پیاده‌سازی شده
- [راهنمای سریع امنیت](SECURITY_QUICK.md) - چک‌لیست روزانه
- [راهنمای استقرار](DEPLOYMENT.md) - نحوه استقرار امن

## 🔍 بررسی امنیتی

### اسکریپت‌های موجود

```bash
# بررسی امنیتی پروژه
npm run security

# مانیتورینگ امنیتی (در production)
./scripts/security-monitor.sh

# پشتیبان‌گیری
./scripts/backup.sh
```

### بررسی هدرهای امنیتی

```bash
curl -I https://yourdomain.com
```

یا استفاده از:

- [Security Headers](https://securityheaders.com)
- [Mozilla Observatory](https://observatory.mozilla.org)

## 🚨 در صورت حمله

1. فعال‌سازی "Under Attack Mode" در Cloudflare
2. اجرای `./scripts/security-monitor.sh`
3. بررسی لاگ‌ها
4. بلاک IP های مشکوک
5. افزایش rate limiting

## 📦 استقرار

### Vercel (توصیه می‌شود)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker-compose up -d
```

### VPS با Nginx

مراجعه به [DEPLOYMENT.md](DEPLOYMENT.md)

## ⚠️ نکات مهم

- **هرگز** فایل `.env` را commit نکنید
- همیشه از **HTTPS** استفاده کنید
- از **Cloudflare** یا WAF برای محافظت اضافی استفاده کنید
- API keys را منظماً **تغییر** دهید
- لاگ‌های امنیتی را **مانیتور** کنید

## 🔧 تکنولوژی‌ها

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- OpenAI API
- Framer Motion

## 📄 لایسنس

Private

---

**توجه:** این پروژه برای مقاومت در برابر حملات سایبری طراحی شده است. برای امنیت کامل، از CDN با DDoS protection (مثل Cloudflare) استفاده کنید.
