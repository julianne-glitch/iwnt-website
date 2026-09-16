import type { Metadata } from "next";

export const SITE_URL = "https://iwnt.ae";
export const SITE_NAME = "IWNT";
export const LEGAL_NAME = "Intel Workforce Network Technologies Ltd";
export const SITE_TAGLINE = "Workforce Network Technologies";

export const SITE_DESCRIPTION =
  "IWNT (Intel Workforce Network Technologies Ltd) is building a connected workforce-operations platform for organisations hiring and managing teams across African markets. Pre-seed. Partners invited. DIFC, Dubai.";

export const OG_IMAGE_PATH = "/images/og-default.jpg";

export const BUSINESS = {
  email: "info@iwnt.ae",
  streetAddress: "IH-00-01-03-OF-05, Level 3, Innovation One",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
  areaServed: "Africa",
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = OG_IMAGE_PATH,
  noIndex = false,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME}: ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const PAGE_SEO = {
  home: {
    title: "Hire, pay, and manage teams across Africa",
    description: SITE_DESCRIPTION,
    path: "/",
  },
  about: {
    title: "About IWNT",
    description:
      "IWNT is the technology arm of IntelHRC, building a connected workforce platform from DIFC Dubai for African markets.",
    path: "/about",
  },
  solutions: {
    title: "Workforce Solutions",
    description:
      "Employer of record, payroll, and expansion support for teams operating across African markets without setting up a local entity.",
    path: "/solutions",
  },
  platform: {
    title: "Platform",
    description:
      "See how the IWNT platform connects hiring, compliance, payroll, and local expertise across African workforce markets.",
    path: "/platform",
  },
  coverage: {
    title: "African Market Coverage",
    description:
      "Explore IWNT coverage across African markets, built from DIFC Dubai and connected to on-the-ground operating hubs.",
    path: "/coverage",
  },
  resources: {
    title: "Resources & Insights",
    description:
      "Practical workforce intelligence on CNPS, payroll, hiring, and compliance for African expansion.",
    path: "/resources",
  },
  contact: {
    title: "Contact",
    description:
      "Contact IWNT in DIFC, Dubai to partner on workforce hiring, management, and payroll across Africa.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How Intel Workforce Network Technologies Ltd collects, uses, and protects personal information.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms governing use of the IWNT website and related digital services.",
    path: "/terms",
  },
  notFound: {
    title: "Page not found",
    description: "The page you requested could not be found on iwnt.ae.",
    path: "/404",
    noIndex: true,
  },
} as const satisfies Record<string, PageSeo>;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: LEGAL_NAME,
    alternateName: ["IWNT", "IntelWNT", SITE_TAGLINE],
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    email: BUSINESS.email,
    description: SITE_DESCRIPTION,
    parentOrganization: {
      "@type": "Organization",
      name: "IntelHRC",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: BUSINESS.areaServed,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: BUSINESS.email,
      availableLanguage: ["English", "French"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: LEGAL_NAME,
    alternateName: "IWNT",
    url: SITE_URL,
    image: absoluteUrl(OG_IMAGE_PATH),
    email: BUSINESS.email,
    description: SITE_DESCRIPTION,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: "",
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2142,
      longitude: 55.2803,
    },
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: LEGAL_NAME,
    },
    inLanguage: ["en", "fr"],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
