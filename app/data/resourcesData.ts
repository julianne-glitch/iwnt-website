import { TranslationSchema } from "./translations";

export type TopicId = 'hiring' | 'payroll' | 'socialSecurity' | 'compliance' | 'contracts' | 'onboarding';

export interface TopicDef {
  id: TopicId;
  translationKey: keyof TranslationSchema['resourcesHub']['topics'];
  iconName: string;
}

export const RESOURCE_TOPICS: TopicDef[] = [
  { id: 'hiring', translationKey: 'hiring', iconName: 'Users' },
  { id: 'payroll', translationKey: 'payroll', iconName: 'Banknote' },
  { id: 'socialSecurity', translationKey: 'socialSecurity', iconName: 'ShieldPlus' },
  { id: 'compliance', translationKey: 'compliance', iconName: 'Scale' },
  { id: 'contracts', translationKey: 'contracts', iconName: 'FileText' },
  { id: 'onboarding', translationKey: 'onboarding', iconName: 'UserCheck' },
];

export interface ArticleDef {
  id: string; // The URL slug (e.g., 'cnps')
  topicId: TopicId;
  isComingSoon: boolean;
}

export interface CountryHubDef {
  marketId: string; // matches id in markets.ts (e.g., 'cameroon', 'cote-divoire')
  description: {
    en: string;
    fr: string;
  };
  articles: ArticleDef[];
}

export const COUNTRY_HUBS: CountryHubDef[] = [
  {
    marketId: 'cameroon',
    description: {
      en: "Practical resources for organisations navigating hiring, payroll, social security and employment requirements in Cameroon.",
      fr: "Ressources pratiques pour les organisations naviguant dans le recrutement, la paie, la sécurité sociale et les exigences en matière d'emploi au Cameroun."
    },
    articles: [
      { id: 'cnps', topicId: 'socialSecurity', isComingSoon: false }, // The featured guide!
    ]
  }
];
