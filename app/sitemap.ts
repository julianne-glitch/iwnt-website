import type { MetadataRoute } from "next";
import prisma, { isDatabaseConfigured } from "@/lib/prisma";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/coverage", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let articleEntries: MetadataRoute.Sitemap = [];
  if (isDatabaseConfigured()) {
    try {
      const articles = await prisma.article.findMany({
        where: { published: true },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: "desc" },
      });
      articleEntries = articles.map((article) => ({
        url: `${SITE_URL}/news/${article.slug}`,
        lastModified: article.updatedAt,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    } catch {
      // DB may be unavailable at build time — ship static routes only
    }
  }

  return [...staticEntries, ...articleEntries];
}
