"use client";

import Image from "next/image";
import { Mail, MapPin, Building, ShieldCheck, Globe, Users } from "lucide-react";
import ContactForm from "@/app/components/contact/ContactForm";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const pageT = t.contactPage;

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* 
        ==================================================
        HERO SECTION
        ==================================================
      */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-[#0D1B2E]">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero.png"
            alt="Dubai Skyline"
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-center opacity-60"
            priority
          />
          {/* Enhanced Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2E] via-[#0D1B2E]/90 to-[#0D1B2E]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2E] via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
              <span className="text-xs font-semibold text-white tracking-wider uppercase">
                {pageT.hero.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              {pageT.hero.headlineLine1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#16A34A]">
                {pageT.hero.headlineLine2Emphasis}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {pageT.hero.body}
            </p>
          </div>
        </div>
      </section>

      {/* 
        ==================================================
        CONTACT FORM & INFO SECTION
        ==================================================
      */}
      <section className="py-20 lg:py-28 relative z-20 -mt-10 lg:-mt-20">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-12 border border-slate-100">
                <ContactForm />
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-8 lg:mt-12">
              
              {/* Direct Contact Card */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                      {pageT.official.emailLabel}
                    </h3>
                    <a href="mailto:info@iwnt.ae" className="text-lg font-semibold text-[#0E1B2E] hover:text-[#16A34A] transition-colors">
                      info@iwnt.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E1B2E]/5 text-[#0E1B2E] flex items-center justify-center shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-1">
                      {pageT.official.hqLabel}
                    </h3>
                    <p className="text-base font-semibold text-[#0E1B2E] mb-1">
                      {pageT.official.companyName}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                      {pageT.official.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-100/50">
                  <Users className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E1B2E] mb-1">{pageT.trustStrip.realPeopleTitle}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pageT.trustStrip.realPeopleDesc}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-100/50">
                  <Globe className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E1B2E] mb-1">{pageT.trustStrip.globalMindsetTitle}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pageT.trustStrip.globalMindsetDesc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-100/50">
                  <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[#0E1B2E] mb-1">{pageT.trustStrip.secureEnquiryTitle}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{pageT.trustStrip.secureEnquiryDesc}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
