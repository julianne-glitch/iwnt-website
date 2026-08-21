"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import { AFRICA_COUNTRY_PATHS } from "@/app/data/africaGeoData";
import { Building2, Globe } from "lucide-react";

export default function CredibilitySection() {
  const { t } = useLanguage();
  const c = t.aboutPage?.credibility;

  if (!c) return null;

  return (
    <div className="relative w-full flex flex-col lg:flex-row z-10">
      {/* LEFT COLUMN: Content & Trust Cards */}
      <div className="relative z-10 w-full lg:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400/90">
            {c.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 0.1 }}
          className="text-[32px] sm:text-[40px] lg:text-[44px] font-black tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white block">{c.headlineLine1}</span>
          <span className="text-emerald-500 block">{c.headlineLine2}</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[14px] text-slate-400 leading-[1.8] max-w-[420px] font-medium mb-10"
        >
          {c.body}
        </motion.p>

        {/* Horizontal Trust Cards */}
        <div className="flex flex-col gap-3 mb-10">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-[#0B1526] border border-white/[0.04] rounded-[16px] p-4 flex flex-row items-center gap-5 hover:bg-[#0D1A2F] hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-[12px] bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors shrink-0">
              <Building2 className="w-[18px] h-[18px] text-emerald-500" />
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-slate-100 mb-0.5 tracking-wide">{c.card1Title}</div>
              <div className="text-[12px] text-slate-400 font-medium">
                {c.card1Body}
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
              <span className="text-emerald-500 text-lg">→</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group relative bg-[#0B1526] border border-white/[0.04] rounded-[16px] p-4 flex flex-row items-center gap-5 hover:bg-[#0D1A2F] hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
          >
            <div className="w-10 h-10 rounded-[12px] bg-slate-900 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-colors shrink-0">
              <Globe className="w-[18px] h-[18px] text-emerald-500" />
            </div>
            <div className="flex-1">
              <div className="text-[13px] font-bold text-slate-100 mb-0.5 tracking-wide">{c.card2Title}</div>
              <div className="text-[12px] text-slate-400 font-medium">
                {c.card2Body}
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
              <span className="text-emerald-500 text-lg">→</span>
            </div>
          </motion.div>

        </div>

        {/* Closing Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-5 border-t border-white/[0.04]"
        >
          <div className="flex flex-row items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.15em]">
            <span>Dubai Foundation</span>
            <span className="text-emerald-500/40 text-[6px]">●</span>
            <span>African Expertise</span>
            <span className="text-emerald-500/40 text-[6px]">●</span>
            <span>International Reach</span>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Motion Graphic */}
      <div className="relative z-10 w-full lg:w-[55%] min-h-[350px] sm:min-h-[400px] lg:min-h-full flex items-center justify-center p-6 lg:p-12 overflow-hidden lg:border-l border-white/[0.02]">
        
        <svg
          viewBox="0 0 800 600"
          className="w-full h-auto max-w-[700px] drop-shadow-2xl relative z-10"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="20%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
            </linearGradient>
            
            <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Very subtle radial glow behind Africa */}
          <motion.circle
            cx="350"
            cy="350"
            r="180"
            fill="#10b981"
            filter="url(#mapGlow)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.05 }}
            viewport={{ once: false }}
            transition={{ duration: 2, delay: 1 }}
          />

          {/* Premium Africa Silhouette */}
          <g transform="translate(100, 100) scale(0.55)" opacity="0.6">
            {AFRICA_COUNTRY_PATHS.map((country) => (
              <path
                key={country.id}
                d={country.d}
                fill="#071120"
                stroke="#1e293b"
                strokeWidth="1.5"
                className="transition-colors duration-1000"
              />
            ))}

            {/* African Market Nodes (Animated in sequentially) */}
            {/* Senegal/Dakar roughly */}
            <motion.circle cx="100" cy="350" r="8" fill="#10b981" filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 2.5 }}
            />
            <motion.circle cx="100" cy="350" r="3" fill="#fff"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 2.6 }}
            />
            
            {/* Cote d'Ivoire/Abidjan roughly */}
            <motion.circle cx="180" cy="420" r="8" fill="#10b981" filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 2.7 }}
            />
            <motion.circle cx="180" cy="420" r="3" fill="#fff"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 2.8 }}
            />
            
            {/* Nigeria/Lagos roughly */}
            <motion.circle cx="320" cy="400" r="8" fill="#10b981" filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 2.9 }}
            />
            <motion.circle cx="320" cy="400" r="3" fill="#fff"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 3.0 }}
            />

            {/* Kenya/Nairobi roughly */}
            <motion.circle cx="630" cy="480" r="8" fill="#10b981" filter="url(#nodeGlow)"
              initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: 3.1 }}
            />
            <motion.circle cx="630" cy="480" r="3" fill="#fff"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: false }} transition={{ duration: 0.3, delay: 3.2 }}
            />
          </g>

          {/* Connection Arc Track (Subtle background path) */}
          <path
            d="M 620 120 Q 500 80 380 250"
            fill="none"
            stroke="#1e293b"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="opacity-50"
          />

          {/* Connection Arc Data Flow (Dubai -> Africa) */}
          <motion.path
            d="M 620 120 Q 500 80 380 250"
            fill="none"
            stroke="url(#arcGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 3.5, // Rests before repeating
            }}
          />

          {/* Dubai Node */}
          <g transform="translate(620, 120)">
            {/* Soft pulse */}
            <motion.circle 
              r="24" 
              fill="#10b981" 
              opacity="0.1"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.3 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            />
            <circle r="6" fill="#0f172a" stroke="#10b981" strokeWidth="2" filter="url(#nodeGlow)" />
            <circle r="3" fill="#10b981" />
            <text x="18" y="4" className="fill-white text-[12px] font-bold tracking-wide">Dubai, DIFC</text>
          </g>

          {/* Animated Caption */}
          <motion.g
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            <rect x="20" y="460" width="220" height="60" rx="8" fill="#071120" stroke="#1e293b" strokeWidth="1" opacity="0.8" />
            <text x="130" y="485" textAnchor="middle" className="fill-slate-400 text-[9px] font-bold tracking-widest uppercase">Global Innovation Base</text>
            <text x="130" y="495" textAnchor="middle" className="fill-emerald-500 text-[10px]">↓</text>
            <text x="130" y="508" textAnchor="middle" className="fill-slate-100 text-[10px] font-bold tracking-widest uppercase">African Operating Expertise</text>
          </motion.g>

        </svg>
      </div>

    </div>
  );
}
