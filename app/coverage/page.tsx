"use client";

import CoverageSection from "@/app/components/home/CoverageSection";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";

export default function CoveragePage() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans text-white antialiased">
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 mb-6">
          <Breadcrumbs
            className="[&_span]:text-slate-300 [&_a]:text-slate-300 [&_a:hover]:text-[#4ADE80] [&_[aria-current=page]]:text-white"
            items={[
              { name: "Home", href: "/" },
              { name: "Coverage", href: "/coverage" },
            ]}
          />
        </div>
        <h1 className="sr-only">
          IWNT Coverage: built in Dubai, connected to Africa
        </h1>
        <CoverageSection />
      </main>
    </div>
  );
}
