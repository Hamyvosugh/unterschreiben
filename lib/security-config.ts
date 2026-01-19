/**
 * Security Configuration
 * تنظیمات امنیتی مرکزی
 */

export const SECURITY_CONFIG = {
  // Rate Limiting
  rateLimiting: {
    windowMs: 60000, // 1 minute
    maxRequestsGeneral: 100,
    maxRequestsApi: 10,
    cleanupIntervalMs: 300000, // 5 minutes
  },

  // Content Security Policy
  csp: {
    directives: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requirement
      "style-src 'self' 'unsafe-inline'", // Tailwind requirement
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://api.openai.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
    ],
  },

  // HSTS Configuration
  hsts: {
    maxAge: 63072000, // 2 years
    includeSubDomains: true,
    preload: true,
  },

  // Suspicious Patterns for Blocking
  suspiciousPatterns: [
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
    /onload=/i,
    /eval\(/i,
    /base64_decode/i,
    /union.*select/i,
    /'; DROP/i,
    /\.\.\//i, // Path traversal
    /%2e%2e/i, // Encoded path traversal
  ],

  // Input Validation
  validation: {
    maxTextLength: 10000,
    maxRequestBodySize: 50000, // bytes
    allowedLanguages: ["en", "de", "fa"],

    // XSS Prevention Patterns
    xssPatterns: [
      /<script/i,
      /<iframe/i,
      /javascript:/i,
      /onerror=/i,
      /onclick=/i,
      /onload=/i,
      /onmouseover=/i,
      /<object/i,
      /<embed/i,
    ],
  },

  // Allowed Origins (CORS)
  allowedOrigins: [
    // در production، origins مجاز را اضافه کنید
    // 'https://yourdomain.com',
  ],

  // Security Headers
  headers: {
    "X-DNS-Prefetch-Control": "off",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy":
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
    "Cross-Origin-Embedder-Policy": "require-corp",
    "Cross-Origin-Opener-Policy": "same-origin",
    "Cross-Origin-Resource-Policy": "same-origin",
  },

  // API Configuration
  api: {
    timeout: 30000, // 30 seconds
    maxRetries: 3,
  },
} as const;

// Helper function to sanitize input
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

// Helper function to validate input
export function validateInput(text: string): {
  valid: boolean;
  error?: string;
} {
  if (!text || typeof text !== "string") {
    return { valid: false, error: "Invalid input type" };
  }

  if (text.length > SECURITY_CONFIG.validation.maxTextLength) {
    return { valid: false, error: "Input too long" };
  }

  // Check for XSS patterns
  for (const pattern of SECURITY_CONFIG.validation.xssPatterns) {
    if (pattern.test(text)) {
      return { valid: false, error: "Invalid content detected" };
    }
  }

  return { valid: true };
}

// Helper to check if a request is suspicious
export function isSuspiciousRequest(pathname: string, search: string): boolean {
  const fullPath = pathname + search;

  for (const pattern of SECURITY_CONFIG.suspiciousPatterns) {
    if (pattern.test(fullPath)) {
      return true;
    }
  }

  return false;
}

// Helper to generate CSP string
export function generateCSP(): string {
  return SECURITY_CONFIG.csp.directives.join("; ");
}

// Helper to generate HSTS string
export function generateHSTS(): string {
  const { maxAge, includeSubDomains, preload } = SECURITY_CONFIG.hsts;
  let hsts = `max-age=${maxAge}`;

  if (includeSubDomains) {
    hsts += "; includeSubDomains";
  }

  if (preload) {
    hsts += "; preload";
  }

  return hsts;
}
