# نحوه استفاده از SEO در صفحات مختلف

## استفاده ساده در صفحات

### مثال 1: صفحه با متادیتای ساده

```typescript
import { generateSEO, pageKeywords } from '@/lib/seo-utils'

export const metadata = generateSEO({
  title: 'عنوان صفحه',
  description: 'توضیحات کامل صفحه برای موتورهای جستجو',
  keywords: pageKeywords.bundestag, // یا لیست کلمات کلیدی خودتان
  canonical: 'https://unterschreiben.com/your-page',
})

export default function YourPage() {
  return <div>محتوای صفحه</div>
}
```

### مثال 2: صفحه با تصویر سفارشی Open Graph

```typescript
export const metadata = generateSEO({
  title: "کمپین حقوق بشر",
  description: "شرکت در کمپین حقوق بشر و حمایت از آزادی",
  keywords: [...pageKeywords.campaigns, "آزادی", "عدالت"],
  ogImage: "/images/campaigns/human-rights.jpg",
  canonical: "https://unterschreiben.com/campaigns/human-rights",
});
```

### مثال 3: صفحه بدون ایندکس (برای صفحات خصوصی)

```typescript
export const metadata = generateSEO({
  title: "صفحه خصوصی",
  description: "این صفحه در موتورهای جستجو نمایش داده نمی‌شود",
  noindex: true, // این صفحه را از نتایج جستجو حذف می‌کند
});
```

## اضافه کردن Structured Data

### مثال 1: صفحه مقاله یا بلاگ

```typescript
import { generateSEO, generateArticleStructuredData } from '@/lib/seo-utils'

export const metadata = generateSEO({
  title: 'چگونه با نمایندگان ارتباط برقرار کنیم',
  description: 'راهنمای کامل برای ارتباط موثر با نمایندگان مجلس',
})

export default function ArticlePage() {
  const structuredData = generateArticleStructuredData({
    title: 'چگونه با نمایندگان ارتباط برقرار کنیم',
    description: 'راهنمای کامل برای ارتباط موثر با نمایندگان مجلس',
    publishedTime: '2024-01-15T09:00:00Z',
    modifiedTime: '2024-01-20T10:30:00Z',
    authors: ['تیم امضا کردن'],
    url: 'https://unterschreiben.com/blog/contact-representatives',
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article>
        {/* محتوای مقاله */}
      </article>
    </>
  )
}
```

### مثال 2: صفحه سوالات متداول (FAQ)

```typescript
import { generateSEO, generateFAQStructuredData } from '@/lib/seo-utils'

export const metadata = generateSEO({
  title: 'سوالات متداول',
  description: 'پاسخ به سوالات رایج درباره پلتفرم امضا کردن',
})

export default function FAQPage() {
  const faqs = [
    {
      question: 'چگونه نامه ارسال کنم؟',
      answer: 'برای ارسال نامه، ابتدا وارد بخش بوندستاگ شوید، سپس نماینده مورد نظر را انتخاب کنید و...',
    },
    {
      question: 'آیا اطلاعات من محفوظ است؟',
      answer: 'بله، ما از بالاترین استانداردهای امنیتی برای حفظ اطلاعات شما استفاده می‌کنیم...',
    },
  ]

  const structuredData = generateFAQStructuredData(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  )
}
```

## کلمات کلیدی از پیش تعریف شده

در فایل `seo-utils.ts` کلمات کلیدی مختلفی تعریف شده:

```typescript
import { pageKeywords } from "@/lib/seo-utils";

// استفاده از کلمات کلیدی بوندستاگ
keywords: pageKeywords.bundestag;

// استفاده از کلمات کلیدی صدای ایران
keywords: pageKeywords.iranvoice;

// استفاده از کلمات کلیدی تماس
keywords: pageKeywords.contact;

// استفاده از کلمات کلیدی کمپین‌ها
keywords: pageKeywords.campaigns;

// ترکیب چند دسته
keywords: [...pageKeywords.bundestag, ...pageKeywords.campaigns, "کلمات اضافی"];
```

## بهترین روش‌ها

### 1. عنوان (Title)

- **طول**: 50-60 کاراکتر
- **شامل**: کلمه کلیدی اصلی
- **منحصر به فرد**: هر صفحه عنوان متفاوت

### 2. توضیحات (Description)

- **طول**: 150-160 کاراکتر
- **جذاب**: دعوت به عمل (Call to Action)
- **واضح**: توضیح دقیق محتوا

### 3. کلمات کلیدی (Keywords)

- **تعداد**: 5-10 کلمه کلیدی مرتبط
- **متنوع**: فارسی و انگلیسی
- **طبیعی**: از Keyword Stuffing اجتناب کنید

### 4. تصاویر Open Graph

- **اندازه**: 1200x630 پیکسل
- **فرمت**: JPG یا PNG
- **کیفیت**: حداقل 100KB

## چک لیست SEO برای هر صفحه

- [ ] عنوان منحصر به فرد و توصیفی
- [ ] توضیحات جذاب و کامل
- [ ] کلمات کلیدی مرتبط
- [ ] URL کانونیکال صحیح
- [ ] تصویر Open Graph مناسب
- [ ] Structured Data (در صورت نیاز)
- [ ] متا تگ‌های AI (به صورت خودکار اضافه می‌شود)

## تست و بررسی

بعد از اضافه کردن SEO:

1. **Google Rich Results Test**

   ```
   https://search.google.com/test/rich-results
   ```

2. **Open Graph Debugger**

   ```
   https://www.opengraph.xyz/
   ```

3. **Twitter Card Validator**
   ```
   https://cards-dev.twitter.com/validator
   ```

## مثال کامل یک صفحه

```typescript
import { generateSEO, pageKeywords, generateFAQStructuredData } from '@/lib/seo-utils'
import Image from 'next/image'

// Metadata
export const metadata = generateSEO({
  title: 'راهنمای کامل ارسال نامه به بوندستاگ',
  description: 'با این راهنما بیاموزید چگونه به شکل موثر با نمایندگان مجلس آلمان ارتباط برقرار کنید و صدای خود را به گوش آنها برسانید.',
  keywords: [
    ...pageKeywords.bundestag,
    ...pageKeywords.contact,
    'راهنمای ارسال نامه',
    'نحوه ارتباط با نمایندگان',
    'guide to contact representatives'
  ],
  ogImage: '/images/guides/bundestag-guide.jpg',
  canonical: 'https://unterschreiben.com/guides/bundestag-contact',
})

export default function GuidePage() {
  // FAQ structured data
  const faqs = [
    {
      question: 'چه زمانی بهترین زمان برای ارسال نامه است؟',
      answer: 'بهترین زمان برای ارسال نامه، زمانی است که موضوع مورد نظر در دستور کار مجلس قرار دارد.'
    }
  ]

  const faqStructuredData = generateFAQStructuredData(faqs)

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Page Content */}
      <article className="max-w-4xl mx-auto">
        <h1>راهنمای کامل ارسال نامه به بوندستاگ</h1>

        <Image
          src="/images/guides/bundestag-guide.jpg"
          alt="راهنمای ارسال نامه به بوندستاگ"
          width={1200}
          height={630}
          priority
        />

        <section>
          {/* محتوای راهنما */}
        </section>

        <section>
          <h2>سوالات متداول</h2>
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}
```

## نکات مهم

1. **Client Components**: اگر صفحه شما `'use client'` دارد، نمی‌توانید `metadata` را export کنید. در این صورت از `<Head>` component استفاده کنید.

2. **Dynamic Routes**: برای صفحات داینامیک، از `generateMetadata` استفاده کنید:

   ```typescript
   export async function generateMetadata({ params }) {
     return generateSEO({
       title: `صفحه ${params.id}`,
       description: "...",
     });
   }
   ```

3. **Loading States**: همیشه از `loading.tsx` برای بهبود UX استفاده کنید.

4. **Error Handling**: از `error.tsx` برای مدیریت خطاها استفاده کنید.
