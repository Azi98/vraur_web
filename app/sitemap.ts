import type { MetadataRoute } from "next";
import { canonicalUrl } from "./seo";

const lastModified = new Date("2026-03-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: canonicalUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: canonicalUrl("/terms"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: canonicalUrl("/privacy"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
