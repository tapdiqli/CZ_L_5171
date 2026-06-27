import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { mainNav, legalNav } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...mainNav, ...legalNav].map((item) => item.href);
  const unique = Array.from(new Set(routes));

  return unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "daily" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
