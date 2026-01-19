/**
 * SEO Utilities for generating metadata across the application
 * Use these helpers to maintain consistent SEO across all pages
 */

import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  canonical?: string;
}

/**
 * Generate page metadata with SEO best practices
 */
export function generateSEO({
  title,
  description,
  keywords = [],
  ogImage = "/images/og-image.jpg",
  noindex = false,
  canonical,
}: SEOProps): Metadata {
  const baseUrl = "https://iranwing.com";
  const fullTitle = `${title} | امضا کردن`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords, "امضا کردن", "unterschreiben", "حقوق بشر"],

    alternates: {
      canonical: canonical || baseUrl,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: "امضا کردن - Unterschreiben",
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fa_IR",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${ogImage}`],
    },

    robots: {
      index: !noindex,
      follow: !noindex,
    },

    // AI-specific metadata
    other: {
      "openai:title": fullTitle,
      "openai:description": description,
      "anthropic:title": fullTitle,
      "anthropic:description": description,
      "ai:page-context": description,
    },
  };
}

/**
 * Generate structured data for articles/blog posts
 */
export function generateArticleStructuredData({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors,
  url,
}: {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors?.map((name) => ({
      "@type": "Person",
      name,
    })),
    publisher: {
      "@type": "Organization",
      name: "Unterschreiben",
      logo: {
        "@type": "ImageObject",
        url: "https://iranwing.com/images/logo.png",
      },
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Common page keywords by section
 */
export const pageKeywords = {
  bundestag: [
    "بوندستاگ",
    "مجلس آلمان",
    "نمایندگان مجلس",
    "پارلمان آلمان",
    "German Parliament",
    "Bundestag representatives",
  ],
  iranvoice: [
    "صدای ایران",
    "ایرانیان خارج از کشور",
    "جنبش ایران",
    "حقوق بشر ایران",
    "Iran Voice",
    "Iranian diaspora",
  ],
  contact: [
    "تماس با نمایندگان",
    "ارسال نامه",
    "ارتباط با مسئولان",
    "contact representatives",
    "send letter",
  ],
  campaigns: [
    "کمپین اجتماعی",
    "امضای پتیشن",
    "فعالیت مدنی",
    "social campaign",
    "petition signing",
    "civic engagement",
  ],
};
