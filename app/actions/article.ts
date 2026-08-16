"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { articleSchema, ArticleFormData } from "@/lib/schemas";

export async function createArticle(data: ArticleFormData) {
  try {
    const validatedData = articleSchema.parse(data);

    // Create a URL-friendly slug based on the English title
    const slug = validatedData.titleEn
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const article = await prisma.article.create({
      data: {
        slug,
        titleEn: validatedData.titleEn,
        titleFr: validatedData.titleFr,
        contentEn: validatedData.contentEn,
        contentFr: validatedData.contentFr,
        published: validatedData.published,
        imageUrl: validatedData.imageUrl || null,
      },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/news"); // Revalidate public news page if it exists
    return { success: true, article };
  } catch (error) {
    console.error("Error creating article:", error);
    return { success: false, error: "Failed to create article" };
  }
}

export async function updateArticle(id: string, data: ArticleFormData) {
  try {
    const validatedData = articleSchema.parse(data);

    const article = await prisma.article.update({
      where: { id },
      data: {
        titleEn: validatedData.titleEn,
        titleFr: validatedData.titleFr,
        contentEn: validatedData.contentEn,
        contentFr: validatedData.contentFr,
        published: validatedData.published,
        imageUrl: validatedData.imageUrl || null,
      },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/news");
    return { success: true, article };
  } catch (error) {
    console.error("Error updating article:", error);
    return { success: false, error: "Failed to update article" };
  }
}

export async function deleteArticle(id: string) {
  try {
    await prisma.article.delete({
      where: { id },
    });

    revalidatePath("/admin/articles");
    revalidatePath("/news");
    return { success: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    return { success: false, error: "Failed to delete article" };
  }
}
