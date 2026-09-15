import type { Metadata } from "next";
import { COUNTRY_HUBS } from "@/app/data/resourcesData";
import { OPERATIONAL_MARKETS } from "@/app/data/markets";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const hub = COUNTRY_HUBS.find((h) => h.marketId === country);
  const market = OPERATIONAL_MARKETS.find((m) => m.id === country);

  if (!hub || !market) {
    return buildMetadata({
      title: "Country hub not found",
      description: "This IWNT country resources hub could not be found.",
      path: `/resources/${country}`,
      noIndex: true,
    });
  }

  const name = market.country.en;
  return buildMetadata({
    title: `${name} workforce resources`,
    description: `Hiring, payroll, and compliance resources for employers expanding into ${name}.`,
    path: `/resources/${country}`,
  });
}

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
