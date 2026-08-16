import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

export const dynamic = "force-dynamic";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LanguageWrapper from "./components/LanguageWrapper";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article || !article.published) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6">
        <Link 
          href="/resources"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#16A34A] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Resources
        </Link>
        
        <div className="mb-8">
          <span className="text-sm font-bold text-[#16A34A] bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
            Article
          </span>
          <LanguageWrapper 
            en={
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D1B2E] leading-tight mb-4">
                {article.titleEn}
              </h1>
            }
            fr={
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0D1B2E] leading-tight mb-4">
                {article.titleFr}
              </h1>
            }
          />
          <p className="text-slate-500 font-medium">
            Published on {format(new Date(article.createdAt), "MMMM d, yyyy")}
          </p>
        </div>

        {article.imageUrl && (
          <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden mb-12">
            <Image 
              src={article.imageUrl}
              alt={article.titleEn}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none">
          <LanguageWrapper 
            en={
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                {article.contentEn}
              </div>
            }
            fr={
              <div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                {article.contentFr}
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
}
