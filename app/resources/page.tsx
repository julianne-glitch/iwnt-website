import prisma from "@/lib/prisma";
import ResourcesClient from "./components/ResourcesClient";

export const dynamic = "force-dynamic";

export default async function ResourcesPage() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return <ResourcesClient articles={articles} />;
}
