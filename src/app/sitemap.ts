import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prashant-pokhrel.web.app",
      lastModified: "2026-02-17",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
