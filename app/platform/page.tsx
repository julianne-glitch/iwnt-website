"use client";

import PlatformSection from "@/app/components/home/PlatformSection";
import Breadcrumbs from "@/app/components/seo/Breadcrumbs";

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#0D1B2E] antialiased">
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-28">
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-10 mb-6">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Platform", href: "/platform" },
            ]}
          />
        </div>
        <h1 className="sr-only">
          IWNT Platform: less administration, more control across African workforce markets
        </h1>
        <PlatformSection />
      </main>
    </div>
  );
}
