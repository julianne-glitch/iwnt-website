"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1220] text-white pt-6 lg:pt-10 pb-4 font-sans border-t border-slate-800">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mb-5 lg:mb-6">
          
          {/* BRAND */}
          <div className="flex flex-col space-y-3 lg:w-4/12">
            <Link href="/" className="inline-block shrink-0">
              <Image
                src="/images/logo-new.png"
                alt="IntelWNT Logo"
                width={160}
                height={38}
                className="h-8 w-auto object-contain transition-opacity hover:opacity-90"
              />
            </Link>
            
            {/* Hidden on mobile, visible on desktop */}
            <p className="hidden lg:block text-[#94A3B8] text-[11px] sm:text-xs leading-relaxed max-w-[280px]">
              {t.footer.description}
            </p>
            
            <div className="flex flex-col space-y-1 lg:pt-1">
              <a href="mailto:info@iwnt.ae" className="text-[11px] font-medium text-white hover:text-[#16A34A] transition-colors w-fit">
                info@iwnt.ae
              </a>
              
              {/* Hidden on mobile, visible on desktop */}
              <address className="hidden lg:block not-italic text-[11px] leading-relaxed text-[#64748B] mt-1">
                Intel Workforce Network Technologies Ltd.<br />
                IH-00-01-03-OF-05, Level 3, Innovation One,<br />
                DIFC, Dubai, UAE
              </address>
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:w-8/12 mt-2 lg:mt-0">
            
            {/* EXPLORE */}
            <div>
              <h3 className="text-[10px] lg:text-[11px] uppercase tracking-wider font-semibold text-white mb-2 lg:mb-3">{t.footer.explore}</h3>
              <ul className="flex flex-col space-y-1.5 lg:space-y-2">
                <li><Link href="/platform" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.platform}</Link></li>
                <li><Link href="/solutions" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.solutions}</Link></li>
                <li><Link href="/coverage" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.coverage}</Link></li>
                <li><Link href="/resources" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.resources}</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[10px] lg:text-[11px] uppercase tracking-wider font-semibold text-white mb-2 lg:mb-3">{t.footer.company}</h3>
              <ul className="flex flex-col space-y-1.5 lg:space-y-2">
                <li><Link href="/about" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.about}</Link></li>
                <li><Link href="/contact" className="text-[11px] text-[#94A3B8] hover:text-[#16A34A] transition-colors">{t.nav.contact}</Link></li>
              </ul>
            </div>

            {/* STAY CONNECTED (Hidden on mobile) */}
            <div className="hidden lg:block">
              <h3 className="text-[11px] uppercase tracking-wider font-semibold text-white mb-3">{t.footer.stayConnected}</h3>
              <p className="text-[11px] text-[#94A3B8] leading-relaxed max-w-[240px]">
                {t.footer.stayConnectedBody}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <div className="text-[9px] lg:text-[10px] text-[#64748B] text-center sm:text-left">
            &copy; {currentYear} {t.footer.rights}
          </div>
          
          <div className="text-[9px] lg:text-[10px] text-[#64748B] text-center sm:text-right">
            {t.footer.tagline}
          </div>
        </div>

      </div>
    </footer>
  );
}
