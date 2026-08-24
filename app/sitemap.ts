import type { MetadataRoute } from "next";
import { routeIndex } from "../content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const base = origin.endsWith("/") ? origin : `${origin}/`;
  return routeIndex.map(({ path, key }) => ({
    url: new URL(path.replace(/^\//, ""), base).toString(),
    lastModified: new Date("2026-08-24"),
    changeFrequency: key === "blog" || key === "agenda" ? "weekly" : "monthly",
    priority: key === "home" ? 1 : key === "contact" ? 0.7 : 0.8,
  }));
}
