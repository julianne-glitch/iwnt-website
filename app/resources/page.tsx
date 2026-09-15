import prisma, { isDatabaseConfigured } from "@/lib/prisma";
import ResourcesClient from "./components/ResourcesClient";
import type { Article } from "@prisma/client";

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  let articles: Article[] = [];

  if (isDatabaseConfigured()) {
    try {
      articles = await prisma.article.findMany({
        where: {
          published: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.error("Resources page: failed to load articles from database.", error);
      articles = [];
    }
  }

  return <ResourcesClient articles={articles} />;
}
