"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createArticle, updateArticle } from "@/app/actions/article";
import { articleSchema, type ArticleFormData } from "@/lib/schemas";
import { useRouter } from "next/navigation";
import { Article } from "@prisma/client";

export default function ArticleForm({ article }: { article?: Article }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      titleEn: article?.titleEn || "",
      titleFr: article?.titleFr || "",
      contentEn: article?.contentEn || "",
      contentFr: article?.contentFr || "",
      published: article?.published || false,
      imageUrl: article?.imageUrl || "",
    },
  });

  const onSubmit = async (data: ArticleFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    const result = article
      ? await updateArticle(article.id, data)
      : await createArticle(data);

    if (result.success) {
      router.push("/admin/articles");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-4xl">
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* English Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">English Title *</label>
          <input
            {...register("titleEn")}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.titleEn && <p className="text-red-500 text-sm">{errors.titleEn.message}</p>}
        </div>

        {/* French Title */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">French Title *</label>
          <input
            {...register("titleFr")}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          />
          {errors.titleFr && <p className="text-red-500 text-sm">{errors.titleFr.message}</p>}
        </div>

        {/* English Content */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">English Content *</label>
          <textarea
            {...register("contentEn")}
            rows={10}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-y"
          />
          {errors.contentEn && <p className="text-red-500 text-sm">{errors.contentEn.message}</p>}
        </div>

        {/* French Content */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">French Content *</label>
          <textarea
            {...register("contentFr")}
            rows={10}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-y"
          />
          {errors.contentFr && <p className="text-red-500 text-sm">{errors.contentFr.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-700">Image URL</label>
        <input
          {...register("imageUrl")}
          placeholder="https://..."
          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
        />
        {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
      </div>

      <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
        <input
          type="checkbox"
          id="published"
          {...register("published")}
          className="w-5 h-5 text-green-600 rounded border-slate-300 focus:ring-green-500"
        />
        <label htmlFor="published" className="text-sm font-medium text-slate-700">
          Published (visible to public)
        </label>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 font-medium transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 transition-colors"
        >
          {status === "submitting" ? "Saving..." : "Save Article"}
        </button>
      </div>
    </form>
  );
}
