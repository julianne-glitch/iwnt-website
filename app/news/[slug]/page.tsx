import type { Metadata } from "next";
import prisma, { isDatabaseConfigured } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LanguageWrapper from "./components/LanguageWrapper";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";
import JsonLd from "@/app/components/seo/JsonLd";
import { absoluteUrl, buildMetadata, SITE_NAME } from "@/lib/seo";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getArticle(slug: string) {
  if (!isDatabaseConfigured()) return null;
  try {
    return await prisma.article.findUnique({ where: { slug } });
  } catch (error) {
    console.error("Article page: database query failed.", error);
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article || !article.published) {
    return buildMetadata({
      title: "Article not found",
      description: "This IWNT resource article could not be found.",
      path: `/news/${slug}`,
      noIndex: true,
    });
  }

  const description =
    article.contentEn?.slice(0, 155).replace(/\s+/g, " ").trim() ||
    `Workforce insight from ${SITE_NAME}.`;

  return buildMetadata({
    title: article.titleEn,
    description,
    path: `/news/${article.slug}`,
    image: article.imageUrl || undefined,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article || !article.published) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titleEn,
    datePublished: article.createdAt.toISOString(),
    dateModified: article.updatedAt.toISOString(),
    image: article.imageUrl ? absoluteUrl(article.imageUrl) : undefined,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: "Intel Workforce Network Technologies Ltd",
      logo: absoluteUrl("/images/logo.png"),
    },
    mainEntityOfPage: absoluteUrl(`/news/${article.slug}`),
  };

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <JsonLd data={articleJsonLd} />
      <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6">
        <Breadcrumbs
          className="mb-6"
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
            { name: article.titleEn, href: `/news/${article.slug}` },
          ]}
        />
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
