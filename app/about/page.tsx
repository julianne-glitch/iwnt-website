"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Calendar, Globe2, Network } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;
  const reduceMotion = useReducedMotion();

  if (!a) return null;

  return (
    <main className="min-h-screen w-full bg-white pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto max-w-[1440px] space-y-14 px-5 sm:space-y-16 sm:px-8 lg:space-y-20 lg:px-10 xl:px-12">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
          ]}
        />

        {/* ===== HERO — same language as homepage banner ===== */}
        <section className="relative overflow-hidden rounded-[18px] border-[3px] border-[#1F3A67] bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 top-4 z-[1] h-[160px] w-[180px] rounded-full bg-[radial-gradient(ellipse_at_35%_40%,rgba(99,140,200,0.28)_0%,rgba(147,197,253,0.14)_45%,transparent_72%)] blur-[26px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-4 left-1/3 z-[1] h-[140px] w-[200px] rounded-full bg-[radial-gradient(ellipse_at_50%_60%,rgba(167,139,250,0.2)_0%,transparent_70%)] blur-[28px]"
          />

          <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="relative z-10 flex flex-col justify-center gap-5 px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#18A94B] sm:text-[11px]">
                  {a.hero.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="max-w-[20ch] text-[clamp(2rem,3.2vw,3.15rem)] font-black leading-[1.06] tracking-[-0.035em] text-[#0D1B2E]"
              >
                {a.hero.headlineLine1}{" "}
                <span className="font-extrabold text-[#334155]">
                  {a.hero.headlineLine2}
                </span>{" "}
                <span className="text-[#18A94B]">
                  {a.hero.headlineLine2Emphasis}
                </span>
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.14 }}
                className="max-w-[36rem] text-[15px] font-medium leading-[1.7] text-[#4B5B6F] sm:text-[16.5px]"
              >
                {a.hero.body}
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap items-center gap-3 pt-1"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#475569]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#18A94B]" />
                  {a.hero.status.replace(/^●\s*/, "")}
                </span>
                <Link
                  href="/contact?intent=pilot"
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-[12px] bg-[#18A94B] px-5 text-[14px] font-bold text-white transition hover:bg-[#148D40]"
                >
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              {/* Quiet proof strip — no floating overlays */}
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 pt-5 sm:max-w-md">
                {[
                  { v: a.heritage.yearsValue, l: a.heritage.yearsLabel },
                  { v: a.metrics.val2, l: a.metrics.label2 },
                  { v: a.metrics.val1, l: a.metrics.label1 },
                ].map((m) => (
                  <div key={m.l}>
                    <div className="text-xl font-black tracking-tight text-[#0D1B2E] sm:text-2xl">
                      {m.v}
                    </div>
                    <div className="mt-0.5 text-[10px] font-semibold leading-snug text-slate-500">
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
              <Image
                src="/images/iwnt-people-hero.webp"
                alt="IWNT connected professionals"
                fill
                priority
                quality={80}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[62%_center]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.55)_40%,transparent_100%)]"
              />
            </div>
          </div>
        </section>

        {/* ===== HERITAGE + SISTER LINKS ===== */}
        <section className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-slate-50/70 px-6 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 top-0 h-[180px] w-[220px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.16)_0%,transparent_70%)] blur-[32px]"
          />
          <div className="relative z-10 mb-7 max-w-2xl">
            <div className="mb-2.5 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#18A94B]">
                {a.heritage.eyebrow}
              </span>
            </div>
            <h2 className="mb-2.5 text-2xl font-extrabold tracking-tight text-[#0D1B2E] sm:text-3xl">
              {a.heritage.headline}
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-600 sm:text-[16px]">
              {a.heritage.body}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {a.heritage.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[16px] border border-slate-200 bg-white p-5 transition hover:border-[#1F3A67]/40"
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-[16px] font-extrabold tracking-tight text-[#0D1B2E]">
                    {link.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#16A34A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-[13.5px] leading-relaxed text-slate-600">
                  {link.blurb}
                </p>
                <span className="mt-3 block text-[12px] font-semibold text-[#1F3A67]">
                  {link.url.replace(/^https?:\/\//, "")}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ===== FOUNDER ===== */}
        <section className="overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[340px] bg-slate-100 sm:min-h-[400px]">
              <Image
                src="/images/derick-nzo-fonderson-v2.jpg"
                alt={a.founder.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center px-7 py-9 sm:px-10 sm:py-11 lg:px-12">
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#18A94B]">
                {a.founder.label}
              </p>
              <h2 className="mb-2 text-3xl font-extrabold tracking-tight text-[#0D1B2E] sm:text-[2.35rem]">
                {a.founder.name}
              </h2>
              <p className="mb-5 text-[13px] font-semibold text-slate-500">
                {a.founder.role}
              </p>
              <p className="max-w-lg text-[15px] leading-[1.7] text-slate-600">
                {a.founder.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-slate-100 pt-6">
                {[
                  { Icon: Calendar, v: a.metrics.val1, l: a.metrics.label1 },
                  { Icon: Globe2, v: a.metrics.val2, l: a.metrics.label2 },
                  { Icon: Network, v: a.metrics.val3, l: a.metrics.label3 },
                ].map(({ Icon, v, l }) => (
                  <div key={l} className="flex min-w-[7rem] items-start gap-2.5">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#18A94B]/10 text-[#18A94B]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-lg font-black text-[#0D1B2E]">{v}</div>
                      <div className="text-[11px] font-semibold leading-snug text-slate-500">
                        {l}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TRACTION ===== */}
        <section>
          <div className="mb-7 max-w-2xl">
            <div className="mb-2.5 inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#18A94B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#18A94B]">
                {a.traction.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0D1B2E] sm:text-3xl">
              {a.traction.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {a.traction.items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.05 }}
                className="rounded-[16px] border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="mb-2 text-[11px] font-bold text-[#18A94B]">
                  0{i + 1}
                </div>
                <h3 className="mb-1.5 text-[16px] font-extrabold tracking-tight text-[#0D1B2E]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ===== CLOSE — DIFC + vision + CTA (one band) ===== */}
        <section className="relative overflow-hidden rounded-[18px] border border-slate-800 bg-[#0D1B2E] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 top-0 h-[240px] w-[260px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(24,169,75,0.18)_0%,transparent_70%)] blur-[40px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 left-10 h-[200px] w-[240px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12)_0%,transparent_70%)] blur-[40px]"
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#4ADE80]">
                {a.credibility.eyebrow}
              </p>
              <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {a.credibility.headlineLine1}{" "}
                <span className="text-[#4ADE80]">
                  {a.credibility.headlineLine2}
                </span>
              </h2>
              <p className="mb-6 max-w-xl text-[15px] leading-relaxed text-slate-300">
                {a.credibility.body}
              </p>
              <div className="mb-8 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="text-[13px] font-bold text-white">
                    {a.credibility.card1Title}
                  </div>
                  <div className="text-[12px] text-slate-400">
                    {a.credibility.card1Body}
                  </div>
                </div>
                <div className="rounded-[14px] border border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="text-[13px] font-bold text-white">
                    {a.credibility.card2Title}
                  </div>
                  <div className="text-[12px] text-slate-400">
                    {a.credibility.card2Body}
                  </div>
                </div>
              </div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                {a.credibility.closingLine}
              </p>
            </div>

            <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-[2px]">
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#4ADE80]">
                {a.vision.eyebrow}
              </p>
              <h3 className="mb-3 text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
                {a.vision.headlineLine1} {a.vision.headlineLine2}{" "}
                <span className="text-[#4ADE80]">
                  {a.vision.headlineLine2Emphasis}
                </span>
              </h3>
              <p className="mb-6 text-[13.5px] leading-relaxed text-slate-300">
                {a.vision.body}
              </p>
              <Link
                href="/contact?intent=pilot"
                className="group inline-flex min-h-[46px] items-center gap-2 rounded-[12px] bg-[#18A94B] px-5 text-[14px] font-bold text-white transition hover:bg-[#148D40]"
              >
                {a.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
