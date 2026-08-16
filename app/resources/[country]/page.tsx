"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import { COUNTRY_HUBS, RESOURCE_TOPICS } from "@/app/data/resourcesData";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { ArrowRight, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import CommercialCta from "@/app/components/resources/CommercialCta";
import { use } from "react";

export default function CountryHubPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = use(params);
  const countrySlug = resolvedParams.country;
  
  const { t, language } = useLanguage();
  const res = t.resourcesHub;

  const hub = COUNTRY_HUBS.find(h => h.marketId === countrySlug);
  const market = OPERATIONAL_MARKETS.find(m => m.id === countrySlug);

  if (!hub || !market) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-800">Country Hub Not Found</h1>
      </div>
    );
  }

  const countryName = market.country[language];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-slate-50 selection:bg-[#16A34A] selection:text-white">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* BREADCRUMBS */}
        <nav className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-medium text-slate-500 mb-8 sm:mb-12">
          <Link href="/" className="hover:text-[#16A34A] transition-colors"><Home className="w-3 h-3" /></Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/resources" className="hover:text-[#16A34A] transition-colors">{t.nav.resources}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0D1B2E]">{countryName}</span>
        </nav>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl sm:text-5xl leading-none">{market.flag}</span>
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#16A34A] uppercase">
                {countryName} {res.workforceGuideLabel}
              </span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-6 leading-tight">
            {language === 'en' ? `Employing and managing teams in ${countryName}.` : `Employer et gérer des équipes au ${countryName}.`}
          </h1>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl">
            {hub.description[language]}
          </p>
        </motion.div>

        {/* ARTICLE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {hub.articles.map((article, idx) => {
            const topicDef = RESOURCE_TOPICS.find(t => t.id === article.topicId);
            if (!topicDef) return null;
            
            const translatedTopic = res.topics[topicDef.translationKey];
            
            // Generate clean contextual titles
            const getTitle = () => {
              if (article.id === 'cnps' && language === 'en') return "Understanding CNPS";
              if (article.id === 'cnps' && language === 'fr') return "Comprendre la CNPS";
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
              return `${translatedTopic} in ${countryName}`;
            };

            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="h-full"
              >
                <Link
                  href={`/resources/${countrySlug}/${article.id}`}
                  className="group block p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 hover:border-[#16A34A] hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#16A34A] bg-emerald-50 px-3 py-1.5 rounded-full">
                      {translatedTopic}
                    </span>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#16A34A] transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D1B2E] group-hover:text-[#16A34A] transition-colors mb-4 leading-tight">
                    {getTitle()}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <CommercialCta countryName={countryName} marketId={countrySlug} />
      </div>
    </main>
  );
}
