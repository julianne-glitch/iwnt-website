import { Language } from "./translations";

export interface MarketCapabilities {
  localExpertise: boolean;
  workforceOperations: boolean;
  complianceSupport: boolean;
  regionalCoordination: boolean;
}

export interface MarketPulse {
  hiring: number;     // 1 to 5 bar height
  onboarding: number; // 1 to 5 bar height
  payroll: number;    // 1 to 5 bar height
  compliance: number; // 1 to 5 bar height
}

export interface MarketNode {
  id: string;
  code: string; // ISO 2-letter country code
  country: Record<Language, string>;
  city: string;
  cities: string;
  flag: string;
  flagSvg: string;
  timeZone: string;
  x: number; // SVG map percentage x (0 - 100)
  y: number; // SVG map percentage y (0 - 100)
  isOperational: boolean;
  capabilities: MarketCapabilities;
  pulse: MarketPulse;
  insight: Record<Language, string>;
}

// 8 Official Operational Markets in Africa
export const OPERATIONAL_MARKETS: MarketNode[] = [
  {
    id: "cameroon",
    code: "cm",
    country: { en: "Cameroon", fr: "Cameroun" },
    city: "Douala",
    cities: "Douala • Yaoundé",
    flag: "🇨🇲",
    flagSvg: "/flags/cm.svg",
    timeZone: "Africa/Douala",
    x: 45.0,
    y: 45.0,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 4, onboarding: 5, payroll: 4, compliance: 5 },
    insight: {
      en: "Strong hiring activity in IT, Construction, Healthcare and Retail sectors.",
      fr: "Forte activité de recrutement dans les secteurs IT, Construction, Santé et Distribution.",
    },
  },
  {
    id: "senegal",
    code: "sn",
    country: { en: "Senegal", fr: "Sénégal" },
    city: "Dakar",
    cities: "Dakar • Thies",
    flag: "🇸🇳",
    flagSvg: "/flags/sn.svg",
    timeZone: "Africa/Dakar",
    x: 12.1,
    y: 34.3,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 5, onboarding: 4, payroll: 5, compliance: 5 },
    insight: {
      en: "Accelerated tech and fintech talent expansion across West Africa.",
      fr: "Expansion accélérée des talents tech et fintech en Afrique de l'Ouest.",
    },
  },
  {
    id: "cote-divoire",
    code: "ci",
    country: { en: "Côte d'Ivoire", fr: "Côte d'Ivoire" },
    city: "Abidjan",
    cities: "Abidjan • Yamoussoukro",
    flag: "🇨🇮",
    flagSvg: "/flags/ci.svg",
    timeZone: "Africa/Abidjan",
    x: 22.9,
    y: 42.7,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 4, onboarding: 4, payroll: 5, compliance: 4 },
    insight: {
      en: "High demand for regional operations and francophone compliance experts.",
      fr: "Forte demande d'opérations régionales et d'experts en conformité francophone.",
    },
  },
  {
    id: "drc",
    code: "cd",
    country: { en: "DR Congo", fr: "RDC" },
    city: "Kinshasa",
    cities: "Kinshasa • Lubumbashi",
    flag: "🇨🇩",
    flagSvg: "/flags/cd.svg",
    timeZone: "Africa/Kinshasa",
    x: 58.3,
    y: 55.4,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 5, onboarding: 4, payroll: 4, compliance: 5 },
    insight: {
      en: "Expanding workforce footprint in telecom, energy and infrastructure.",
      fr: "Empreinte RH en pleine expansion dans les télécoms, l'énergie et les infrastructures.",
    },
  },
  {
    id: "mali",
    code: "ml",
    country: { en: "Mali", fr: "Mali" },
    city: "Bamako",
    cities: "Bamako • Sikasso",
    flag: "🇲🇱",
    flagSvg: "/flags/ml.svg",
    timeZone: "Africa/Bamako",
    x: 25.4,
    y: 30.5,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 3, onboarding: 4, payroll: 4, compliance: 4 },
    insight: {
      en: "Active compliance alignment and localized workforce management.",
      fr: "Alignement réglementaire actif et gestion locale du personnel.",
    },
  },
  {
    id: "burkina-faso",
    code: "bf",
    country: { en: "Burkina Faso", fr: "Burkina Faso" },
    city: "Ouagadougou",
    cities: "Ouagadougou • Bobo-Dioulasso",
    flag: "🇧🇫",
    flagSvg: "/flags/bf.svg",
    timeZone: "Africa/Ouagadougou",
    x: 27.5,
    y: 36.8,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 3, onboarding: 3, payroll: 4, compliance: 4 },
    insight: {
      en: "Steady cross-border payroll coordination and advisory presence.",
      fr: "Coordination de la paie transfrontalière et présence de conseil régulières.",
    },
  },
  {
    id: "niger",
    code: "ne",
    country: { en: "Niger", fr: "Niger" },
    city: "Niamey",
    cities: "Niamey • Zinder",
    flag: "🇳🇪",
    flagSvg: "/flags/ne.svg",
    timeZone: "Africa/Niamey",
    x: 41.0,
    y: 30.5,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 3, onboarding: 4, payroll: 3, compliance: 4 },
    insight: {
      en: "Specialized regional workforce support for energy and development projects.",
      fr: "Support spécialisé pour les projets d'énergie et de développement.",
    },
  },
  {
    id: "chad",
    code: "td",
    country: { en: "Chad", fr: "Tchad" },
    city: "N'Djamena",
    cities: "N'Djamena • Moundou",
    flag: "🇹🇩",
    flagSvg: "/flags/td.svg",
    timeZone: "Africa/Ndjamena",
    x: 52.2,
    y: 32.9,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: true,
    },
    pulse: { hiring: 4, onboarding: 3, payroll: 4, compliance: 4 },
    insight: {
      en: "Central African hub supporting regional operations and mobility.",
      fr: "Hub d'Afrique Centrale soutenant les opérations et la mobilité régionale.",
    },
  },
  {
    id: "ghana",
    code: "gh",
    country: { en: "Ghana", fr: "Ghana" },
    city: "Accra",
    cities: "Accra • Kumasi",
    flag: "🇬🇭",
    flagSvg: "/flags/gh.svg",
    timeZone: "Africa/Accra",
    x: 23.5,
    y: 39.0,
    isOperational: true,
    capabilities: {
      localExpertise: true,
      workforceOperations: true,
      complianceSupport: true,
      regionalCoordination: false,
    },
    pulse: { hiring: 4, onboarding: 4, payroll: 5, compliance: 4 },
    insight: {
      en: "Growing technology and financial services workforce hub.",
      fr: "Hub croissant pour les talents en technologie et services financiers.",
    },
  },
];

// Connection routes linking operational hubs across Africa
export const MARKET_CONNECTIONS = [
  { from: "sn", to: "ml" },
  { from: "ml", to: "bf" },
  { from: "bf", to: "ci" },
  { from: "ci", to: "cm" },
  { from: "ml", to: "ne" },
  { from: "ne", to: "td" },
  { from: "td", to: "cm" },
  { from: "cm", to: "cd" },
];

// Curated geographic sequence across Africa for map auto-rotation
export const AFRICA_TOUR_SEQUENCE = [
  "cm", // Cameroon
  "ng", // Nigeria
  "bj", // Benin
  "gh", // Ghana
  "ci", // Côte d'Ivoire
  "sn", // Senegal
  "ml", // Mali
  "bf", // Burkina Faso
  "ne", // Niger
  "td", // Chad
  "sd", // Sudan
  "eg", // Egypt
  "ma", // Morocco
  "dz", // Algeria
  "et", // Ethiopia
  "ke", // Kenya
  "ug", // Uganda
  "rw", // Rwanda
  "tz", // Tanzania
  "zm", // Zambia
  "zw", // Zimbabwe
  "mz", // Mozambique
  "mg", // Madagascar
  "za", // South Africa
  "ao", // Angola
  "cd", // DRC
  "cg", // Congo
  "ga", // Gabon
];
