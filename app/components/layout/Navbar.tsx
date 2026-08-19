"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import LanguageSelector from "../ui/LanguageSelector";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll depth & active visible section via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);

    const sectionIds = ["home", "solutions", "platform", "coverage", "resources", "about", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: t.nav.home, id: "home", href: "/" },
    { name: t.nav.solutions, id: "solutions", href: "/solutions" },
    { name: t.nav.platform, id: "platform", href: "/platform" },
    { name: t.nav.coverage, id: "coverage", href: "/coverage" },
    { name: t.nav.resources, id: "resources", href: "/resources" },
    { name: t.nav.about, id: "about", href: "/about" },
    { name: t.nav.contact, id: "contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, targetHref: string) => {
    setMobileMenuOpen(false);

    // Only scroll to top if we're on the home page and they click home
    if (targetId === "home" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // For all other links, or if we're not on home page,
    // let the default Link behavior happen (which pushes the new route)
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs h-16 sm:h-18 lg:h-20 flex items-center"
          : "bg-white/90 backdrop-blur-xs border-b border-slate-100/60 h-16 sm:h-18 lg:h-20 flex items-center"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          
          {/* LEFT: IntelWNT Brand Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "home", "/")}
            className="flex items-center group shrink-0"
          >
            <Image
              src="/images/logo-new.png"
              alt="IntelWNT - Workforce Network Technologies"
              width={220}
              height={48}
              className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              priority
            />
          </Link>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => {
              const isActive = 
                (pathname === "/" && activeSection === link.id) || 
                (link.id !== "home" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id, link.href)}
                  className={`text-sm font-medium transition-colors py-1.5 relative group ${
                    isActive ? "text-[#0D1B2E] font-semibold" : "text-[#0E1B2E]/80 hover:text-[#0D1B2E]"
                  }`}
                >
                  <span>{link.name}</span>
                  
                  {/* REFINED 22px GREEN ACTIVE INDICATOR BAR (Layout Animated) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[22px] h-[2px] bg-[#16A34A] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Language Selector + Primary Green CTA (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
            <LanguageSelector />

            <Link
              href="/contact?intent=partnership"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:bg-[#166534] shadow-xs hover:shadow-md transition-all group"
            >
              <span>{t.nav.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* MOBILE RIGHT CONTROLS: Language Selector + Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSelector />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0E1B2E] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="max-w-[1680px] mx-auto px-5 pt-3 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = 
                    (pathname === "/" && activeSection === link.id) || 
                    (link.id !== "home" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id, link.href)}
                      className={`flex items-center justify-between text-base font-medium py-2 border-b border-slate-100 transition-colors ${
                        isActive ? "text-[#16A34A] font-semibold" : "text-[#0E1B2E]"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-col space-y-3">
                <div className="flex items-center justify-between py-2 text-sm text-[#475569]">
                  <span className="font-medium text-[#0E1B2E]">{t.nav.languageLabel}</span>
                  <LanguageSelector />
                </div>

                <Link
                  href="/contact?intent=partnership"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 min-h-[50px] px-5 rounded-xl text-base font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm transition-all text-center"
                >
                  <span>{t.nav.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
