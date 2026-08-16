"use client";

import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contactSection;

  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-8 sm:p-14 shadow-sm text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
              {c.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4 max-w-3xl mx-auto"
          >
            {c.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {c.subtitle}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative z-10">
            <Link
              href="/contact?intent=partnership"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group w-full sm:w-auto"
            >
              <span>{c.ctaButton}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-4 py-2 text-xs font-semibold text-slate-700 relative z-10 border border-slate-200/60 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>{c.status}</span>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>{c.locations}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
