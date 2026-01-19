# SEO Configuration Documentation

## Overview

این پروژه شامل یک سیستم SEO کامل و پیشرفته است که برای موتورهای جستجوی سنتی و مدل‌های هوش مصنوعی جدید (مثل ChatGPT، Claude، Perplexity) بهینه شده است.

## Features Implemented

### 1. Meta Tags (در layout.tsx)

- ✅ Title و Description بهینه شده
- ✅ Keywords برای موتورهای جستجو
- ✅ Author و Publisher metadata
- ✅ Canonical URLs و alternate languages
- ✅ Open Graph tags برای شبکه‌های اجتماعی
- ✅ Twitter Card metadata
- ✅ Robots configuration

### 2. AI Crawler Support

#### ChatGPT / OpenAI

- `openai:title` - عنوان سفارشی برای ChatGPT
- `openai:description` - توضیحات تفصیلی فارسی
- `openai:category` - دسته‌بندی محتوا

#### Claude / Anthropic

- `anthropic:title` - عنوان برای Claude
- `anthropic:description` - توضیحات انگلیسی

#### Perplexity AI

- `perplexity:title` - عنوان برای Perplexity
- `perplexity:description` - توضیحات کوتاه

#### General AI Metadata

- `ai:context` - زمینه کلی برای مدل‌های AI
- `ai:purpose` - هدف و کاربرد سایت
- `ai:audience` - مخاطبان هدف
- `ai:features` - قابلیت‌های کلیدی

### 3. Structured Data (JSON-LD)

فایل `layout.tsx` شامل structured data کامل است:

- WebSite schema
- Organization schema
- WebApplication schema
- BreadcrumbList schema

این داده‌ها به موتورهای جستجو و AI models کمک می‌کند تا:

- Rich snippets نمایش دهند
- Knowledge graph بسازند
- بهتر محتوا را درک کنند

### 4. Files Created

#### `/app/sitemap.ts`

- Sitemap داینامیک برای تمام صفحات
- Priority و changeFrequency بهینه شده
- به صورت خودکار در `/sitemap.xml` در دسترس است

#### `/app/robots.ts`

- تنظیمات robots برای Next.js
- پشتیبانی از AI crawlers
- قوانین برای GPTBot, Claude-Web, PerplexityBot

#### `/public/robots.txt`

- فایل robots.txt استاتیک
- Crawl-delay برای botهای مختلف
- مسدودسازی مسیرهای خاص

#### `/public/manifest.json`

- PWA manifest
- پشتیبانی RTL
- Icons و theme configuration

#### `/app/opengraph-image.tsx`

- تصویر داینامیک Open Graph
- به صورت خودکار در `/opengraph-image` تولید می‌شود
- برای اشتراک‌گذاری در شبکه‌های اجتماعی

## Configuration Steps

### 1. Update URLs

در فایل `layout.tsx` URLهای زیر را با دامنه واقعی خود جایگزین کنید:

```typescript
canonical: "https://YOUR-DOMAIN.com";
url: "https://YOUR-DOMAIN.com";
```

### 2. Add Verification Codes

کدهای زیر را دریافت و جایگزین کنید:

- Google Search Console: `google-site-verification`
- OpenAI verification: `openai-domain-verification`

### 3. Add Social Media Links

در structured data بخش `sameAs`:

```typescript
"sameAs": [
  "https://twitter.com/YOUR-HANDLE",
  "https://www.facebook.com/YOUR-PAGE",
  "https://www.instagram.com/YOUR-PROFILE"
]
```

### 4. Create Images

تصاویر زیر را در پوشه `/public/images/` ایجاد کنید:

- `og-image.jpg` (1200x630px) - برای Open Graph
- `twitter-image.jpg` (1200x675px) - برای Twitter
- `logo.png` (512x512px) - لوگو سازمان
- `icon-192.png` (192x192px) - PWA icon
- `icon-512.png` (512x512px) - PWA icon
- `favicon.ico` - favicon استاندارد
- `apple-touch-icon.png` (180x180px) - iOS icon

## Testing SEO

### 1. Google Rich Results Test

https://search.google.com/test/rich-results

### 2. Facebook Sharing Debugger

https://developers.facebook.com/tools/debug/

### 3. Twitter Card Validator

https://cards-dev.twitter.com/validator

### 4. Schema.org Validator

https://validator.schema.org/

### 5. OpenAI Bot Test

بررسی کنید که `robots.txt` اجازه دسترسی به GPTBot را می‌دهد:

```
User-agent: GPTBot
Allow: /
```

## Performance Tips

1. **Preconnect**: از preconnect برای fontها و منابع خارجی استفاده شده
2. **Image Optimization**: از Next.js Image component استفاده کنید
3. **Dynamic OG Images**: از `/app/opengraph-image.tsx` برای تولید پویا استفاده می‌شود

## AI Crawler Best Practices

### For ChatGPT

- توضیحات تفصیلی و واضح در `openai:description`
- Context کامل در `ai:context`
- Keywords مرتبط

### For Claude

- توضیحات انگلیسی واضح
- Feature list دقیق
- Purpose statement روشن

### For Perplexity

- عنوان کوتاه و جذاب
- توضیحات مختصر و مفید

## Monitoring

### Google Search Console

- Coverage reports
- Performance metrics
- Mobile usability

### Bing Webmaster Tools

- Crawl stats
- SEO recommendations

### AI Crawler Logs

در آینده می‌توانید logs server را برای بررسی:

- GPTBot visits
- Claude-Web requests
- PerplexityBot crawls

## Updates

برای به‌روزرسانی SEO در صفحات دیگر، در هر page.tsx:

```typescript
export const metadata: Metadata = {
  title: "عنوان صفحه",
  description: "توضیحات صفحه",
  // ... سایر تنظیمات
};
```

## Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [OpenAI GPTBot](https://platform.openai.com/docs/gptbot)

---

**Note**: این تنظیمات پایه هستند. بسته به نیاز می‌توانید:

- Structured data بیشتری اضافه کنید
- Meta tags سفارشی برای هر صفحه تعریف کنید
- Analytics و tracking codes اضافه کنید
