"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Landmark,
  BrainCircuit,
  Network,
  Wallet,
  Calculator,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

const SERVICE_META: Record<
  string,
  { Icon: LucideIcon; accent: string; glow: string; span?: string }
> = {
  "project-funds": {
    Icon: Landmark,
    accent: "from-[#1F3A67]/12 to-[#7DD3FC]/20",
    glow: "bg-[radial-gradient(ellipse_at_30%_20%,rgba(125,211,252,0.45)_0%,transparent_65%)]",
    span: "lg:col-span-2 lg:row-span-1",
  },
  "ai-recruitment": {
    Icon: BrainCircuit,
    accent: "from-[#A78BFA]/15 to-[#38BDF8]/18",
    glow: "bg-[radial-gradient(ellipse_at_70%_30%,rgba(167,139,250,0.4)_0%,transparent_65%)]",
    span: "lg:col-span-2",
  },
  vendor: {
    Icon: Network,
    accent: "from-[#38BDF8]/12 to-[#1F3A67]/10",
    glow: "bg-[radial-gradient(ellipse_at_50%_80%,rgba(56,189,248,0.35)_0%,transparent_65%)]",
  },
  payroll: {
    Icon: Wallet,
    accent: "from-[#16A34A]/12 to-[#7DD3FC]/15",
    glow: "bg-[radial-gradient(ellipse_at_20%_50%,rgba(22,163,74,0.28)_0%,transparent_65%)]",
  },
  accounting: {
    Icon: Calculator,
    accent: "from-[#818CF8]/14 to-[#93C5FD]/18",
    glow: "bg-[radial-gradient(ellipse_at_80%_20%,rgba(129,140,248,0.38)_0%,transparent_65%)]",
  },
  "back-office": {
    Icon: Building2,
    accent: "from-[#0D1B2E]/10 to-[#A78BFA]/14",
    glow: "bg-[radial-gradient(ellipse_at_40%_70%,rgba(99,140,200,0.35)_0%,transparent_65%)]",
  },
};

export default function ServicesSection() {
  const { t } = useLanguage();
  const s = t.servicesSection;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden border-t border-slate-200/70 bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Atmosphere brushes */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-10 h-[220px] w-[240px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.18)_0%,transparent_70%)] blur-[40px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-[6%] h-[200px] w-[260px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.16)_0%,transparent_70%)] blur-[40px]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="mb-3 inline-flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#16A34A]">
              {s.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-3.5 text-3xl font-extrabold tracking-tight text-[#0D1B2E] sm:text-4xl lg:text-5xl"
          >
            {s.headline}
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {s.subtitle}
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {s.items.map((item, index) => {
            const meta = SERVICE_META[item.id] ?? SERVICE_META.vendor;
            const Icon = meta.Icon;
            const featured = index < 2;

            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : 0.06 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
                className={`group relative overflow-hidden rounded-[20px] border border-slate-200/90 bg-gradient-to-br ${meta.accent} p-6 sm:p-7 ${
                  featured ? "lg:col-span-2 min-h-[200px]" : "min-h-[188px]"
                } ${meta.span ?? ""}`}
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100 ${meta.glow}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-[#1F3A67] shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" strokeWidth={2.1} />
                    </div>
                    <span className="rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#475569]">
                      {item.tag}
                    </span>
                  </div>

                  <h3
                    className={`font-extrabold tracking-tight text-[#0D1B2E] ${
                      featured
                        ? "text-xl sm:text-2xl"
                        : "text-lg sm:text-[1.15rem]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-slate-600 ${
                      featured ? "text-[15px] sm:text-base" : "text-[13.5px] sm:text-[14px]"
                    }`}
                  >
                    {item.body}
                  </p>

                  <div className="mt-auto pt-5">
                    <Link
                      href={`/contact?intent=pilot&service=${item.id}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1F3A67] transition-colors hover:text-[#16A34A]"
                    >
                      <span>{s.cta}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
