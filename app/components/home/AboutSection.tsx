"use client";

import { motion } from "motion/react";
import { Globe2, ShieldCheck, Cpu } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.aboutSection;

  const getPillarIcon = (idx: number) => {
    if (idx === 0) return <Cpu className="w-6 h-6 text-[#16A34A]" />;
    if (idx === 1) return <Globe2 className="w-6 h-6 text-[#16A34A]" />;
    return <ShieldCheck className="w-6 h-6 text-[#16A34A]" />;
  };

  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
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
              {a.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1B2E] mb-4"
          >
            {a.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            {a.body}
          </motion.p>
        </div>

        {/* 3 PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {a.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xs"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/20">
                {getPillarIcon(idx)}
              </div>
              <h3 className="text-lg font-bold text-[#0D1B2E] mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
