#!/usr/bin/env node

/**
 * Security Audit Script
 * بررسی امنیتی خودکار پروژه
 */

const fs = require("fs");
const path = require("path");

console.log("🔒 شروع بررسی امنیتی...\n");

const issues = [];
const warnings = [];

// 1. Check for .env file in git
if (fs.existsSync(".git")) {
  const gitignoreContent = fs.readFileSync(".gitignore", "utf-8");
  if (!gitignoreContent.includes(".env")) {
    issues.push("❌ .env در .gitignore وجود ندارد");
  } else {
    console.log("✅ .env در .gitignore قرار دارد");
  }
}

// 2. Check if .env exists and has proper permissions
if (fs.existsSync(".env")) {
  const stats = fs.statSync(".env");
  const mode = (stats.mode & parseInt("777", 8)).toString(8);

  if (mode !== "600" && mode !== "400") {
    warnings.push(`⚠️  دسترسی فایل .env باید 600 باشد (فعلی: ${mode})`);
  } else {
    console.log("✅ دسترسی فایل .env صحیح است");
  }

  // Check if API key is present
  const envContent = fs.readFileSync(".env", "utf-8");
  if (
    envContent.includes("your_openai_api_key_here") ||
    envContent.includes("sk-")
  ) {
    console.log("✅ API Key در .env موجود است");
  } else {
    warnings.push("⚠️  API Key در .env یافت نشد");
  }
} else {
  warnings.push("⚠️  فایل .env وجود ندارد - از .env.example استفاده کنید");
}

// 3. Check middleware.ts exists and has rate limiting
if (fs.existsSync("middleware.ts")) {
  const middlewareContent = fs.readFileSync("middleware.ts", "utf-8");

  if (middlewareContent.includes("rateLimitMap")) {
    console.log("✅ Rate limiting در middleware فعال است");
  } else {
    issues.push("❌ Rate limiting در middleware یافت نشد");
  }

  if (middlewareContent.includes("Content-Security-Policy")) {
    console.log("✅ CSP در middleware تنظیم شده");
  } else {
    issues.push("❌ CSP در middleware یافت نشد");
  }

  if (middlewareContent.includes("Strict-Transport-Security")) {
    console.log("✅ HSTS در middleware فعال است");
  } else {
    issues.push("❌ HSTS در middleware یافت نشد");
  }
} else {
  issues.push("❌ فایل middleware.ts یافت نشد");
}

// 4. Check next.config.ts security settings
if (fs.existsSync("next.config.ts")) {
  const nextConfigContent = fs.readFileSync("next.config.ts", "utf-8");

  if (nextConfigContent.includes("poweredByHeader: false")) {
    console.log("✅ X-Powered-By header غیرفعال است");
  } else {
    warnings.push("⚠️  X-Powered-By header باید غیرفعال شود");
  }

  if (nextConfigContent.includes("reactStrictMode: true")) {
    console.log("✅ React Strict Mode فعال است");
  } else {
    warnings.push("⚠️  React Strict Mode باید فعال شود");
  }
} else {
  issues.push("❌ فایل next.config.ts یافت نشد");
}

// 5. Check for sensitive files
const sensitiveFiles = [
  ".env.local",
  ".env.production",
  "secrets",
  ".npmrc",
  "*.pem",
  "*.key",
  "*.crt",
];

sensitiveFiles.forEach((pattern) => {
  if (fs.existsSync(pattern)) {
    warnings.push(`⚠️  فایل حساس یافت شد: ${pattern}`);
  }
});

// 6. Check package.json for security issues
if (fs.existsSync("package.json")) {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf-8"));

  if (packageJson.scripts && packageJson.scripts.audit) {
    console.log("✅ اسکریپت audit در package.json موجود است");
  } else {
    warnings.push("⚠️  اسکریپت audit در package.json وجود ندارد");
  }
}

// 7. Check API routes for input validation
const apiDir = path.join("app", "api");
if (fs.existsSync(apiDir)) {
  const checkApiSecurity = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        checkApiSecurity(filePath);
      } else if (file.endsWith(".ts") || file.endsWith(".js")) {
        const content = fs.readFileSync(filePath, "utf-8");
        if (
          content.includes("export async function POST") ||
          content.includes("export async function PUT")
        ) {
          if (
            !content.includes("validateInput") &&
            !content.includes("validation")
          ) {
            warnings.push(
              `⚠️  ${filePath} ممکن است input validation نداشته باشد`,
            );
          }
        }
      }
    });
  };
  checkApiSecurity(apiDir);
}

// Print summary
console.log("\n" + "=".repeat(60));
console.log("📊 خلاصه بررسی امنیتی:\n");

if (issues.length === 0 && warnings.length === 0) {
  console.log("✅ مشکل امنیتی جدی یافت نشد!");
  console.log("✅ تمام بررسی‌های امنیتی پایه موفق بودند");
} else {
  if (issues.length > 0) {
    console.log("🚨 مشکلات جدی:");
    issues.forEach((issue) => console.log(issue));
    console.log("");
  }

  if (warnings.length > 0) {
    console.log("⚠️  هشدارها:");
    warnings.forEach((warning) => console.log(warning));
  }
}

console.log("\n" + "=".repeat(60));
console.log("\n💡 توصیه‌ها:");
console.log("1. npm audit را اجرا کنید");
console.log("2. همیشه dependencies را به‌روز نگه دارید");
console.log("3. از HTTPS در production استفاده کنید");
console.log("4. لاگ‌های امنیتی را بررسی کنید");
console.log("5. از WAF/CDN (مثل Cloudflare) استفاده کنید\n");

// Exit with error if there are critical issues
if (issues.length > 0) {
  process.exit(1);
}
