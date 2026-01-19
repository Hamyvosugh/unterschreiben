import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iranwing.com";

  // Static routes
  const routes = [
    "",
    "/bundestag",
    "/germany",
    "/germany/personen",
    "/germany/wirtschaft",
    "/iranvoice",
    "/contact",
    "/mail",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
