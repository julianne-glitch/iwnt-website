"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070D19] text-white pt-10 lg:pt-16 pb-6 font-sans border-t border-slate-800/80 overflow-hidden">
      
      {/* SUBTLE TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#16A34A]/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#16A34A]/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-10 lg:mb-14">
          
          {/* BRAND */}
          <div className="flex flex-col space-y-5 lg:w-4/12">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/images/logo-new.png"
                alt="IntelWNT Logo"
                width={150}
                height={35}
                className="h-8 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>
            
            {/* Hidden on mobile, visible on desktop */}
            <p className="hidden lg:block text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-[320px]">
              {t.footer.description}
            </p>
            
            <div className="flex flex-col space-y-1.5 lg:pt-2">
              <a href="mailto:info@iwnt.ae" className="text-[13px] font-bold text-white hover:text-[#4ADE80] transition-colors w-fit">
                info@iwnt.ae
              </a>
              
              {/* Hidden on mobile, visible on desktop */}
              <address className="hidden lg:block not-italic text-[11px] sm:text-xs leading-relaxed text-slate-500 mt-1.5">
                Intel Workforce Network Technologies Ltd.<br />
                IH-00-01-03-OF-05, Level 3, Innovation One,<br />
                DIFC, Dubai, UAE
              </address>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:w-8/12 mt-4 lg:mt-0">
            
            {/* EXPLORE */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] font-extrabold text-slate-300 mb-4 lg:mb-5">{t.footer.explore}</h3>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/platform" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.platform}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.solutions}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/coverage" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.coverage}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.resources}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] font-extrabold text-slate-300 mb-4 lg:mb-5">{t.footer.company}</h3>
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link href="/about" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.about}</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group flex items-center text-xs text-slate-400 hover:text-[#4ADE80] transition-colors">
                    <span className="transform transition-transform group-hover:translate-x-1">{t.nav.contact}</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* STAY CONNECTED (Hidden on mobile) */}
            <div className="hidden lg:block">
              <h3 className="text-xs uppercase tracking-[0.15em] font-extrabold text-slate-300 mb-4 lg:mb-5">{t.footer.stayConnected}</h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[240px]">
                {t.footer.stayConnectedBody}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-5 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[10px] lg:text-[11px] font-medium text-slate-500 text-center sm:text-left">
            &copy; {currentYear} {t.footer.rights}
          </div>
          
          <div className="text-[10px] lg:text-[11px] font-medium text-slate-500 text-center sm:text-right">
            {t.footer.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
}
