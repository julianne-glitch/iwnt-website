import type { Metadata } from "next";
import { buildMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.platform);

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
