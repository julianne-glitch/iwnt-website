"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { 
  Search, Globe, Users, BarChart3, ShieldCheck, 
  Banknote, FileText, MoreHorizontal, ArrowRight, 
  LayoutGrid, Clock, BookOpen, CheckCircle, Target, RefreshCw
} from "lucide-react";
import { Article } from "@prisma/client";

export default function ResourcesClient({ articles }: { articles: Article[] }) {
  const { language, t } = useLanguage();
  const res = t.resourcesPage;

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white selection:bg-[#16A34A] selection:text-white font-sans">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20 border-b border-slate-100 mb-12">
          <div className="lg:w-1/2 max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#16A34A] uppercase">
                {res.eyebrow}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D1B2E] leading-[1.1] mb-6 tracking-tight">
              {res.headline}
            </h1>
            
            <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
              {res.subtitle}
            </p>

            <div className="relative max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder={res.searchPlaceholder} 
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A]/20 focus:border-[#16A34A] transition-all shadow-sm placeholder:text-slate-400"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] w-full max-w-xl hidden lg:block">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <Image 
                src="/images/african-workforce-operations-expert.webp"
                alt="Workforce Knowledge"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B2E]/40 to-transparent"></div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{res.newGuideLabel}</p>
                <p className="text-sm font-bold text-[#0D1B2E]">{res.payrollWestAfrica}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED RESOURCE (CAMEROON CNPS) */}
        <section className="mb-20">
          <div className="w-full bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300 group">
            <div className="lg:w-[45%] relative h-72 lg:h-auto min-h-[350px]">
              <Image 
                src="/images/african-workforce-operations-candid.webp" 
                alt="Cameroon CNPS Guide" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E]/60 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="bg-[#16A34A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                  {res.featuredGuideLabel}
                </span>
                <span className="bg-white/90 backdrop-blur-sm text-[#0D1B2E] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                  🇨🇲 {res.cameroonLabel}
                </span>
              </div>
            </div>
            <div className="lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-slate-50 group-hover:bg-white transition-colors duration-300">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
                <span className="text-[12px] font-bold tracking-[0.15em] text-[#16A34A] uppercase">{res.categorySocialSecurity}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2E] mb-6 tracking-tight leading-[1.1]">
                {res.featuredTitle}
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                {res.featuredDesc}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors text-[#16A34A]">
                    <FileText className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B2E] mb-1">{res.regTitle}</h4>
                    <span className="text-sm text-slate-500">{res.regDesc}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 transition-colors text-[#16A34A]">
                    <Banknote className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B2E] mb-1">{res.contributionsTitle}</h4>
                    <span className="text-sm text-slate-500">{res.contributionsDesc}</span>
                  </div>
                </div>
              </div>

              <Link href="/resources/cameroon/cnps" className="inline-flex items-center justify-center gap-3 bg-[#0D1B2E] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#16A34A] transition-colors w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200">
                {res.readFullGuide} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* LATEST ARTICLES FROM CMS */}
        {articles.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-[#0D1B2E] mb-8 border-b border-slate-100 pb-4">
              Latest Articles & News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                  {article.imageUrl ? (
                    <div className="relative h-48 w-full bg-slate-100">
                      <Image 
                        src={article.imageUrl} 
                        alt={language === 'fr' ? article.titleFr : article.titleEn}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="relative h-48 w-full bg-slate-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-slate-300" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#16A34A] bg-emerald-50 px-3 py-1 rounded-full">
                        Article
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {format(new Date(article.createdAt), "MMM d, yyyy")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0D1B2E] mb-3 line-clamp-2">
                      {language === 'fr' ? article.titleFr : article.titleEn}
                    </h3>
                    <p className="text-sm text-slate-500 mb-6 line-clamp-3">
                      {language === 'fr' ? article.contentFr : article.contentEn}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        href={`/news/${article.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0D1B2E] hover:text-[#16A34A] transition-colors"
                      >
                        Read more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FEATURES GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-[#16A34A]" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2E] text-[13px] mb-1">{res.features.practical.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{res.features.practical.desc}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#16A34A]" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2E] text-[13px] mb-1">{res.features.market.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{res.features.market.desc}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-[#16A34A]" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2E] text-[13px] mb-1">{res.features.employers.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{res.features.employers.desc}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col md:flex-row gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-[#16A34A]" />
            </div>
            <div>
              <h4 className="font-bold text-[#0D1B2E] text-[13px] mb-1">{res.features.updated.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{res.features.updated.desc}</p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bg-slate-100 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D1B2E] mb-3 tracking-tight">
              {res.ctaHeadline}
            </h2>
            <p className="text-slate-500 text-lg">
              {res.ctaSubtitle}
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end w-full">
            <Link 
              href="/partner" 
              className="w-full sm:w-auto bg-[#16A34A] hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 text-sm whitespace-nowrap shadow-md hover:shadow-lg group"
            >
              {res.ctaButton} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
