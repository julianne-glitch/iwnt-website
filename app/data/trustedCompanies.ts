export interface TrustedCompany {
  id: string;
  name: string;
  logo: string;
  category: "client" | "partner";
}

// Exactly 14 Direct Clients and 6 Strategic Partners from section 22
export const TRUSTED_COMPANIES: TrustedCompany[] = [
  // Direct Clients (14)
  { id: "dhl", name: "DHL", logo: "/logos/trusted/dhl.svg", category: "client" },
  { id: "canal-plus", name: "CANAL+", logo: "/logos/trusted/canal-plus.svg", category: "client" },
  { id: "uba", name: "United Bank for Africa", logo: "/logos/trusted/uba.svg", category: "client" },
  { id: "access-bank", name: "Access Bank", logo: "/logos/trusted/access-bank.svg", category: "client" },
  { id: "dangote", name: "Dangote", logo: "/logos/trusted/dangote.svg", category: "client" },
  { id: "bic", name: "BIC", logo: "/logos/trusted/bic.svg", category: "client" },
  { id: "wwf", name: "WWF", logo: "/logos/trusted/wwf.svg", category: "client" },
  { id: "tuv-rheinland", name: "TÜV Rheinland", logo: "/logos/trusted/tuv-rheinland.svg", category: "client" },
  { id: "wartsila", name: "Wärtsilä", logo: "/logos/trusted/wartsila.svg", category: "client" },
  { id: "bia-group", name: "BIA Group", logo: "/logos/trusted/bia-group.svg", category: "client" },
  { id: "wri", name: "World Resources Institute", logo: "/logos/trusted/wri.svg", category: "client" },
  { id: "palladium", name: "Palladium", logo: "/logos/trusted/palladium.svg", category: "client" },
  { id: "icf", name: "ICF", logo: "/logos/trusted/icf.svg", category: "client" },
  { id: "amentum", name: "Amentum", logo: "/logos/trusted/amentum.svg", category: "client" },

  // Strategic Partners (6)
  { id: "goglobal", name: "GoGlobal", logo: "/logos/trusted/goglobal.svg", category: "partner" },
  { id: "aldelia", name: "Aldelia", logo: "/logos/trusted/aldelia.svg", category: "partner" },
  { id: "procloz", name: "Procloz", logo: "/logos/trusted/procloz.svg", category: "partner" },
  { id: "infotree", name: "Infotree", logo: "/logos/trusted/infotree.svg", category: "partner" },
  { id: "zapeo", name: "ZAPEO", logo: "/logos/trusted/zapeo.svg", category: "partner" },
  { id: "velocity", name: "Velocity", logo: "/logos/trusted/velocity.svg", category: "partner" },
];
