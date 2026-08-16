"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { COUNTRY_HUBS, RESOURCE_TOPICS } from "@/app/data/resourcesData";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { ChevronRight, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { motion } from "motion/react";
import CommercialCta from "@/app/components/resources/CommercialCta";

export default function ResourceArticlePage({ params }: { params: Promise<{ country: string, topic: string }> }) {
  const resolvedParams = use(params);
  const countrySlug = resolvedParams.country;
  const topicSlug = resolvedParams.topic;

  const { t, language } = useLanguage();
  const res = t.resourcesHub;
  const pageRes = t.resourcesPage;

  const hub = COUNTRY_HUBS.find(h => h.marketId === countrySlug);
  const market = OPERATIONAL_MARKETS.find(m => m.id === countrySlug);

  if (!hub || !market) return <div className="min-h-screen flex items-center justify-center">Not Found</div>;

  const article = hub.articles.find(a => a.id === topicSlug);
  if (!article) return <div className="min-h-screen flex items-center justify-center">Article Not Found</div>;

  const topicDef = RESOURCE_TOPICS.find(t => t.id === article.topicId);
  const countryName = market.country[language];
  const topicName = topicDef ? res.topics[topicDef.translationKey] : "";

  // Title generation logic
  const getTitle = () => {
    if (article.id === 'cnps' && language === 'en') return "Understanding CNPS in Cameroon";
    if (article.id === 'cnps' && language === 'fr') return "Comprendre la CNPS au Cameroun";
    if (article.id === 'payroll' && language === 'en') return `Payroll in ${countryName}`;
    if (article.id === 'payroll' && language === 'fr') return `Paie au ${countryName}`;
    if (article.id === 'hiring' && language === 'en') return `Hiring Employees in ${countryName}`;
    if (article.id === 'hiring' && language === 'fr') return `Recrutement au ${countryName}`;
    if (article.id === 'employment-contracts' && language === 'en') return "Employment Contracts";
    if (article.id === 'employment-contracts' && language === 'fr') return "Contrats de Travail";
    if (article.id === 'compliance' && language === 'en') return "Employer Compliance";
    if (article.id === 'compliance' && language === 'fr') return "Conformité de l'Employeur";
    if (article.id === 'onboarding' && language === 'en') return "Employee Onboarding";
    if (article.id === 'onboarding' && language === 'fr') return "Intégration des Employés";
    return language === 'fr' ? `${topicName} au ${countryName}` : `${topicName} in ${countryName}`;
  };

  const title = getTitle();

  // Real Article Layout (Cameroon CNPS)
  return (
    <main className="min-h-screen pt-24 pb-16 bg-white selection:bg-[#16A34A] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* BREADCRUMBS */}
        <nav className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-500 mb-10">
          <Link href="/" className="hover:text-[#16A34A] transition-colors"><Home className="w-3 h-3" /></Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources" className="hover:text-[#16A34A] transition-colors">{t.nav.resources}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/resources/${countrySlug}`} className="hover:text-[#16A34A] transition-colors">{countryName}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0D1B2E] truncate max-w-[200px] sm:max-w-none">{title}</span>
        </nav>

        {/* HERO */}
        <div className="mb-12 sm:mb-16 pb-12 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">{market.flag}</span>
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#16A34A] uppercase">
              {countryName} • {topicName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D1B2E] mb-6 max-w-4xl leading-[1.1]">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 max-w-2xl leading-relaxed mb-8">
            {pageRes.cnpsArticle.intro}
          </p>
          
          <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 sm:p-5 flex items-start gap-4 max-w-4xl">
            <div className="text-amber-500 shrink-0 mt-0.5">⚠️</div>
            <p className="text-amber-800 text-sm leading-relaxed font-medium">
              {res.disclaimer}
            </p>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* TOC (Sticky Left) */}
          <aside className="lg:w-64 shrink-0 order-2 lg:order-1">
            <div className="sticky top-28 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-bold text-[#0D1B2E] mb-4 uppercase text-xs tracking-wider">{res.tableOfContents}</h4>
              <ul className="space-y-3 text-[13px] font-medium text-slate-500">
                <li><a href="#overview" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.overview}</a></li>
                <li><a href="#what-is-cnps" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.whatIsCnps}</a></li>
                <li><a href="#employer-responsibilities" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.employerResp}</a></li>
                <li><a href="#employee-registration" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.employeeReg}</a></li>
                <li><a href="#contributions" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.contributions}</a></li>
                <li><a href="#declarations" className="hover:text-[#16A34A] transition-colors cursor-pointer block">{pageRes.cnpsArticle.toc.declarations}</a></li>
              </ul>
            </div>
          </aside>

          {/* ARTICLE CONTENT (Right) */}
          <article className="flex-1 order-1 lg:order-2 prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0D1B2E] prose-a:text-[#16A34A]">
            <h2 id="overview" className="mt-0">{pageRes.cnpsArticle.content.overviewTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.overviewBody}
            </p>
            
            <h2 id="what-is-cnps">{pageRes.cnpsArticle.content.whatIsCnpsTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.whatIsCnpsBody}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 my-8">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2 mt-0">{pageRes.cnpsArticle.content.statutoryTitle}</h4>
              <p className="text-sm text-slate-500 mb-0">
                {pageRes.cnpsArticle.content.statutoryBody}
              </p>
            </div>

            <h2 id="employer-responsibilities">{pageRes.cnpsArticle.content.employerRespTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.employerRespIntro}
            </p>
            <ul>
              <li>{pageRes.cnpsArticle.content.employerRespList1}</li>
              <li>{pageRes.cnpsArticle.content.employerRespList2}</li>
              <li>{pageRes.cnpsArticle.content.employerRespList3}</li>
              <li>{pageRes.cnpsArticle.content.employerRespList4}</li>
            </ul>

            <h2 id="employee-registration">{pageRes.cnpsArticle.content.employeeRegTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.employeeRegBody}
            </p>

            <h2 id="contributions">{pageRes.cnpsArticle.content.contributionsTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.contributionsBody1}
            </p>
            <p>
              <em>{pageRes.cnpsArticle.content.contributionsNote}</em>
            </p>

            <h2 id="declarations">{pageRes.cnpsArticle.content.declarationsTitle}</h2>
            <p>
              {pageRes.cnpsArticle.content.declarationsBody}
            </p>
          </article>
        </div>

        {/* RELATED RESOURCES */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0D1B2E] mb-8">{res.continueExploring} {countryName}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hub.articles.filter(a => a.id !== article.id).slice(0, 4).map(related => {
              const relTopic = RESOURCE_TOPICS.find(t => t.id === related.topicId);
              if (!relTopic) return null;
              
              const relTranslated = res.topics[relTopic.translationKey];
              
              return (
                <Link
                  key={related.id}
                  href={`/resources/${countrySlug}/${related.id}`}
                  className="group flex flex-col p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#16A34A] hover:bg-white transition-all h-full"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#16A34A] transition-colors mb-2">
                    {relTranslated}
                  </span>
                  <span className="font-bold text-[#0D1B2E] text-sm leading-tight flex items-center justify-between mt-auto">
                    {language === 'fr' ? `${relTranslated} au ${countryName}` : `${relTranslated} in ${countryName}`}
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#16A34A]" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* COMMERCIAL CTA */}
        <CommercialCta countryName={countryName} marketId={countrySlug} />
      </div>
    </main>
  );
}
