import prisma from "@/lib/prisma";
import ResourcesClient from "./components/ResourcesClient";

export const revalidate = 60; // Use ISR to cache the page for 60 seconds

export default async function ResourcesPage() {
  let articles: any[] = [];
  
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
    console.error("Database connection error on resources page:", error);
    // Fallback to empty array so the page still loads gracefully
  }

  return <ResourcesClient articles={articles} />;
}
