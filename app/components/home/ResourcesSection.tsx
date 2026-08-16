"use client";

import { motion } from "motion/react";
import { BookOpen, ArrowRight, ArrowUpRight, ShieldPlus } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function ResourcesSection() {
  const { t } = useLanguage();
  const r = t.resourcesSection;

  return (
    <section id="resources" className="scroll-mt-24 py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
              {r.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4"
          >
            {r.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            {r.subtitle}
          </motion.p>
        </div>

        {/* FEATURED REAL RESOURCES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Featured Knowledge Article (Cameroon) */}
          <Link href="/resources/cameroon/cnps">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#16A34A] hover:shadow-xl transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldPlus className="w-32 h-32 text-[#16A34A] -mr-8 -mt-8" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16A34A]/10 px-3 py-1 text-xs font-bold text-[#16A34A]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
                    {r.featuredGuide.country}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                    {r.featuredGuide.category}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0D1B2E] leading-tight group-hover:text-[#16A34A] transition-colors mb-4">
                  {r.featuredGuide.title}
                </h3>
                
                <p className="text-slate-500 line-clamp-2">
                  {r.featuredGuide.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-[#16A34A] relative z-10">
                <span>{r.featuredGuide.readAction}</span>
                <div className="w-10 h-10 rounded-full bg-[#16A34A]/5 flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* CTA Card leading to the full Knowledge Hub */}
          <Link href="/resources">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col justify-center h-full rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 hover:border-[#16A34A]/30 hover:bg-[#16A34A]/5 transition-all cursor-pointer text-center items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-[#16A34A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0D1B2E] mb-3">
                {r.exploreHub.title}
              </h3>
              <p className="text-slate-500 mb-8 max-w-sm">
                {r.exploreHub.description}
              </p>
              <div className="inline-flex items-center gap-2 font-bold text-[#16A34A]">
                {r.exploreHub.action}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </Link>

        </div>

      </div>
    </section>
  );
}
