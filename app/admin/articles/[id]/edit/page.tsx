import ArticleForm from "@/app/components/admin/ArticleForm";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await prisma.article.findUnique({
    where: { id: params.id },
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Edit Article</h1>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <ArticleForm article={article} />
      </div>
    </div>
  );
}
