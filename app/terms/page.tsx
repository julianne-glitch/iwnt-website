"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";

export default function TermsPage() {
  const { t } = useLanguage();
  const page = t.legal.terms;

  return (
    <main className="bg-white min-h-screen pt-32 lg:pt-40 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          className="mb-8"
          items={[
            { name: "Home", href: "/" },
            { name: page.title, href: "/terms" },
          ]}
        />
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#16A34A] mb-4">
          {page.updated}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2E] tracking-tight mb-4">
          {page.title}
        </h1>
        <p className="text-[15px] text-slate-600 leading-relaxed mb-10">{page.intro}</p>
        <div className="space-y-8">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-[#0D1B2E] mb-2">{section.heading}</h2>
              <p className="text-[14.5px] text-slate-600 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
