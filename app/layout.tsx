import Footer from "@/components/general/footer";
import Header from "@/components/general/header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

// SEO Configuration - Optimized for both traditional search engines and AI models
export const metadata: Metadata = {
  // Metadata Base - CRITICAL for Open Graph images
  metadataBase: new URL("https://iranwing.com"),

  // Basic Meta Tags
  title: {
    default: "امضا کردن - پلتفرم دیجیتال کمپین‌های اجتماعی و حمایت از حقوق بشر",
    template: "%s | امضا کردن",
  },
  description:
    "پلتفرم امضا کردن - ابزاری برای ارتباط با نمایندگان، حمایت از حقوق بشر و شرکت در کمپین‌های اجتماعی. صدای خود را به گوش مسئولان برسانید.",

  // Keywords for AI and search engines
  keywords: [
    "امضا کردن",
    "امضای پتیشن",
    "کمپین اجتماعی",
    "حقوق بشر",
    "نامه به نمایندگان",
    "بوندستاگ",
    "صدای ایران",
    "حمایت اجتماعی",
    "دموکراسی مشارکتی",
    "ارتباط با نمایندگان مجلس",
    "آلمان",
    "petition",
    "social campaign",
    "human rights",
    "bundestag",
  ],

  // Author & Publisher info
  authors: [{ name: "iranwing Team" }],
  creator: "iranwing",
  publisher: "iranwing",

  // Language and region
  alternates: {
    canonical: "https://iranwing.com",
    languages: {
      fa: "https://iranwing.com",
      de: "https://iranwing.com/de",
      en: "https://iranwing.com/en",
    },
  },

  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://iranwing.com",
    siteName: "امضا کردن - iranwing",
    title: "امضا کردن - پلتفرم دیجیتال کمپین‌های اجتماعی",
    description:
      "ابزاری برای ارتباط با نمایندگان، حمایت از حقوق بشر و شرکت در کمپین‌های اجتماعی. صدای خود را به گوش مسئولان برسانید.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "امضا کردن - iranwing Platform",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "امضا کردن - پلتفرم دیجیتال کمپین‌های اجتماعی",
    description:
      "ابزاری برای ارتباط با نمایندگان، حمایت از حقوق بشر و شرکت در کمپین‌های اجتماعی",
    images: ["/images/og-image.jpg"],
    creator: "@iranwing",
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // AI Crawlers - ChatGPT, Claude, Perplexity, etc.
  other: {
    // For ChatGPT and OpenAI crawler
    "openai:title": "امضا کردن - پلتفرم دیجیتال کمپین‌های اجتماعی و حقوق بشر",
    "openai:description":
      "وبسایت امضا کردن پلتفرمی است برای ارتباط شهروندان با نمایندگان مجلس آلمان (بوندستاگ)، شرکت در کمپین‌های حقوق بشری، و حمایت از جنبش‌های اجتماعی. کاربران می‌توانند نامه‌های از پیش آماده شده به نمایندگان ارسال کنند، در کمپین‌های مختلف شرکت کنند و صدای خود را برای مسائل اجتماعی و سیاسی به گوش مسئولان برسانند.",
    "openai:category": "social activism, human rights, political engagement",

    // For Claude and Anthropic crawler
    "anthropic:title": "iranwing - Digital Platform for Social Campaigns",
    "anthropic:description":
      "A comprehensive platform enabling citizens to communicate with German parliament representatives, participate in human rights campaigns, and support social movements.",

    // For Perplexity AI
    "perplexity:title": "امضا کردن - پلتفرم کمپین‌های اجتماعی",
    "perplexity:description":
      "پلتفرم دیجیتال برای ارتباط با نمایندگان، حمایت از حقوق بشر و شرکت در کمپین‌های اجتماعی",

    // General AI model metadata
    "ai:context":
      "This is a Persian/Farsi language social activism platform focused on human rights, political engagement, and connecting citizens with German parliament representatives (Bundestag). Users can send letters, participate in campaigns, and advocate for social causes.",
    "ai:purpose":
      "social activism, petition platform, political engagement, human rights advocacy",
    "ai:audience":
      "Persian-speaking community in Germany, human rights activists, engaged citizens",
    "ai:features":
      "send letters to representatives, pre-written templates, campaign participation, contact Bundestag members, human rights advocacy",

    // Verification and ownership
    "google-site-verification": "your-google-verification-code",
  },

  // Verification tags
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // App-specific
  applicationName: "iranwing",
  referrer: "origin-when-cross-origin",

  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Additional metadata
  category: "social activism",
  classification: "Political & Social Engagement Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for rich snippets and AI understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://iranwing.com/#website",
        url: "https://iranwing.com",
        name: "امضا کردن - iranwing",
        description: "پلتفرم دیجیتال کمپین‌های اجتماعی و حمایت از حقوق بشر",
        inLanguage: "fa",
        publisher: {
          "@id": "https://iranwing.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://iranwing.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://iranwing.com/#organization",
        name: "iranwing",
        alternateName: "امضا کردن",
        url: "https://iranwing.com",
        logo: {
          "@type": "ImageObject",
          url: "https://iranwing.com/images/logo.webp",
          width: 512,
          height: 512,
        },
        description: "سازمان حمایت از حقوق بشر و فعالیت‌های اجتماعی",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "contact@iranwing.com",
          availableLanguage: ["Persian", "German", "English"],
        },
        sameAs: [
          "https://twitter.com/iranwing",
          "https://www.facebook.com/iranwing",
          "https://www.instagram.com/iranwing",
        ],
      },
      {
        "@type": "WebApplication",
        name: "iranwing Platform",
        description:
          "پلتفرم دیجیتال برای ارتباط با نمایندگان مجلس، شرکت در کمپین‌های اجتماعی و حمایت از حقوق بشر",
        url: "https://iranwing.com",
        applicationCategory: "SocialNetworkingApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        featureList: [
          "ارسال نامه به نمایندگان بوندستاگ",
          "شرکت در کمپین‌های اجتماعی",
          "حمایت از حقوق بشر",
          "قالب‌های آماده نامه",
          "اطلاعات نمایندگان مجلس",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "خانه",
            item: "https://iranwing.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "بوندستاگ",
            item: "https://iranwing.com/bundestag",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "آلمان",
            item: "https://iranwing.com/germany",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "صدای ایران",
            item: "https://iranwing.com/iranvoice",
          },
        ],
      },
    ],
  };

  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Structured Data for Search Engines and AI Models */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional meta tags for AI crawlers */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* ChatGPT and OpenAI crawler */}
        <meta
          name="openai-domain-verification"
          content="your-openai-verification-code"
        />

        {/* Geo tags for location-based search */}
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />

        {/* Mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="امضا کردن" />

        {/* Theme color */}
        <meta name="theme-color" content="#1a202c" />
        <meta name="msapplication-TileColor" content="#1a202c" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-vazir antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
