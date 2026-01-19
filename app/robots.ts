import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    sitemap: "https://unterschreiben.com/sitemap.xml",
  };
}
