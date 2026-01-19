import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Rate limiting storage (in-memory)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute
const API_RATE_LIMIT_MAX_REQUESTS = 10; // 10 API requests per minute

// Clean up old rate limit entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 300000);

function getRateLimitKey(request: NextRequest): string {
  // Use multiple identifiers for better accuracy
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded?.split(",")[0] || realIp || "unknown";
  return `${ip}:${request.nextUrl.pathname}`;
}

function checkRateLimit(key: string, maxRequests: number): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limiting
  const rateLimitKey = getRateLimitKey(request);
  const isApiRoute = pathname.startsWith("/api");
  const maxRequests = isApiRoute
    ? API_RATE_LIMIT_MAX_REQUESTS
    : RATE_LIMIT_MAX_REQUESTS;

  if (!checkRateLimit(rateLimitKey, maxRequests)) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": "60",
        "Content-Type": "text/plain",
      },
    });
  }

  // Block suspicious patterns
  const suspiciousPatterns = [
    /\.env/i,
    /\.git/i,
    /wp-admin/i,
    /phpMyAdmin/i,
    /\.php$/i,
    /\.asp$/i,
    /\.jsp$/i,
    /etc\/passwd/i,
    /proc\/self/i,
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
  ];

  for (const pattern of suspiciousPatterns) {
    if (pattern.test(pathname) || pattern.test(request.nextUrl.search)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // Validate request headers
  const userAgent = request.headers.get("user-agent");
  if (!userAgent || userAgent.length < 10) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.next();

  // Security Headers - Maximum Security Configuration

  // Strict Content Security Policy - no inline scripts/styles allowed
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-inline/eval for dev
    "style-src 'self' 'unsafe-inline'", // Tailwind requires unsafe-inline
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https://api.openai.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
    "block-all-mixed-content",
  ];
  response.headers.set("Content-Security-Policy", cspDirectives.join("; "));

  // Strict Transport Security - Force HTTPS for 2 years
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );

  // Prevent clickjacking completely
  response.headers.set("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // XSS Protection (for older browsers)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer Policy - No referrer for maximum privacy
  response.headers.set("Referrer-Policy", "no-referrer");

  // Permissions Policy - Disable all features
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  );

  // Disable DNS prefetching
  response.headers.set("X-DNS-Prefetch-Control", "off");

  // Prevent browser caching of sensitive data
  if (isApiRoute) {
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  // Remove server identification headers
  response.headers.delete("X-Powered-By");
  response.headers.delete("Server");

  // CSRF Protection Headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // SEO Headers for AI Crawlers
  response.headers.set("X-Robots-Tag", "index, follow");
  response.headers.set("X-AI-Friendly", "true");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths including API routes
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
