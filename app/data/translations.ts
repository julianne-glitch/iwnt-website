export type Language = "en" | "fr";

export interface TranslationSchema {
  nav: {
    home: string;
    platform: string;
    solutions: string;
    coverage: string;
    resources: string;
    about: string;
    contact: string;
    services: string;
    cta: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine2Emphasis: string;
    subheadline: string;
    body: string;
    tagline: string;
    status: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustedHeading: string;
  trustedSubheading: string;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  servicesSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: string;
    items: Array<{
      id: string;
      title: string;
      body: string;
      tag: string;
    }>;
  };
  solutionsPage: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    status: string;
    persona: {
      name: string;
      role: string;
      location: string;
      activeStatus: string;
      syncedTextLine1: string;
      syncedTextLine2: string;
    };
    stages: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
    exploreHeading: string;
    solutionPills: string[];
    workflow: {
      eyebrow: string;
      headline: string;
      body: string;
      steps: Array<{ title: string; body: string }>;
    };
    architecture: {
      eyebrow: string;
      headline: string;
      body: string;
      points: string[];
    };
    ctaPrimary: string;
    ctaSecondary: string;
  };
  globalExpansion: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    transitionLine1: string;
    transitionLine2: string;
    stages: Array<{
      num: string;
      title: string;
      desc: string;
      status: string;
    }>;
    closingHeadline: string;
    closingValues: Array<{
      title: string;
      desc: string;
    }>;
    cta: string;
  };
  platformSection: {
    block1Eyebrow: string;
    block1Headline1: string;
    block1Headline2: string;
    block1Body: string;
    block1Status: string;
    block2Eyebrow: string;
    block2Headline: string;
    block2Subtitle: string;
    block2Body: string;
    block2Scenarios: Array<{
      clientMsg: string;
      iwntMsg: string;
      node2Text: string;
      flag: string;
    }>;
    block2Callout1Title: string;
    block2Callout1Sub: string;
    block2Callout2Title: string;
    block2Callout2Sub: string;
    block2HandoffTitle: string;
    block2HandoffTeam: string;
    block2HandoffStatus: string;
    block2RailStep1: string;
    block2RailStep2: string;
    block2RailStep3: string;
    block2Node1: string;
    block2Node3: string;
    block2Connected: string;
    block2TaglineMain: string;
    block2TaglineSub: string;
    mobileIntakeProcessing: string;
    mobileDashboardEmployees: string;
    mobileDashboardCountries: string;
    mobileDashboardPayroll: string;
    mobileDashboardCompliance: string;
    mockupRegion: string;
    mockupLiveWorkspace: string;
    mockupDashboard: string;
    mockupEmployees: string;
    mockupPayroll: string;
    mockupCompliance: string;
    mockupSettings: string;
    mockupTotalEmployees: string;
    mockupActiveCountries: string;
    mockupPayrollProcessed: string;
    mockupComplianceRate: string;
    mockupWorkforceByCountry: string;
    mockupViewAll: string;
    mockupRecentActivity: string;
    mockupActivity1: string;
    mockupActivity2: string;
    mockupActivity3: string;
    mockupActivity4: string;
    mockupDoc1: string;
    mockupDoc2: string;
    mockupDoc3: string;
    mockupDoc4: string;
    mockupDoc5: string;
    mockupDoc6: string;
  };
  coverageSection: {
    eyebrow: string;
    headlinePart1: string;
    headlinePart2: string;
    headlinePart3: string;
    subtitle: string;
    description: string;
    card1Title: string;
    card1Sub: string;
    card2Title: string;
    card2Sub: string;
    card3Title: string;
    card3Sub: string;
    card4Title: string;
    card4Sub: string;
    closingLine: string;
    bottomGlobalTitle: string;
    bottomGlobalSub: string;
    legendIwnt: string;
    legendAfrican: string;
    cmdTitle: string;
    cmdLiveNetwork: string;
    cmdOperationalPresence: string;
    cmdCapabilitiesTitle: string;
    cmdCapLocalExpertise: string;
    cmdCapWorkforceOps: string;
    cmdCapComplianceSupport: string;
    cmdCapRegionalCoord: string;
    cmdPulseTitle: string;
    cmdPulseThisMonth: string;
    cmdPulseHiring: string;
    cmdPulseOnboarding: string;
    cmdPulsePayroll: string;
    cmdPulseCompliance: string;
    cmdInsightTitle: string;
    cmdPrevious: string;
    cmdNext: string;
    cmdExplore: string;
    mobileToggleCurrent: string;
    mobileToggleAll: string;
    cmdNonOpTitle: string;
    cmdNonOpStatus: string;
    cmdNonOpCta: string;
    mobileTapToExplore: string;
    mobileWhyLocalMatters: string;
    mobileCap1Sub: string;
    mobileCap2Sub: string;
    mobileCap3Sub: string;
    mobileCap4Sub: string;
  };
  resourcesSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    featuredGuide: {
      country: string;
      category: string;
      title: string;
      description: string;
      readAction: string;
    };
    exploreHub: {
      title: string;
      description: string;
      action: string;
    };
  };
  aboutSection: {
    eyebrow: string;
    headline: string;
    body: string;
    pillars: Array<{ title: string; description: string }>;
  };
  contactSection: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    ctaButton: string;
    status: string;
    locations: string;
  };
  footer: {
    description: string;
    explore: string;
    company: string;
    stayConnected: string;
    stayConnectedBody: string;
    privacyPolicy: string;
    termsOfUse: string;
    rights: string;
    tagline: string;
  };
  resourcesHub: {
    heroEyebrow: string;
    heroHeadline: string;
    heroHeadlineHighlight: string;
    heroBody: string;
    searchPlaceholder: string;
    popularSearchesLabel: string;
    featuredGuide: string;
    readGuide: string;
    exploreTopicsHeading: string;
    exploreCountryHeading: string;
    exploreCountryBody: string;
    viewAllMarkets: string;
    workforceGuideLabel: string;
    comingSoon: string;
    disclaimer: string;
    tableOfContents: string;
    continueExploring: string;
    ctaHeadline: string;
    ctaBody: string;
    ctaTalkToTeam: string;
    ctaExplorePrefix: string;
    topics: {
      hiring: string;
      payroll: string;
      socialSecurity: string;
      compliance: string;
      contracts: string;
      onboarding: string;
    };
  };
  resourcesPage: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    searchPlaceholder: string;
    newGuideLabel: string;
    payrollWestAfrica: string;
    featuredGuideLabel: string;
    cameroonLabel: string;
    categorySocialSecurity: string;
    featuredTitle: string;
    featuredDesc: string;
    regTitle: string;
    regDesc: string;
    contributionsTitle: string;
    contributionsDesc: string;
    readFullGuide: string;
    features: {
      practical: { title: string; desc: string };
      market: { title: string; desc: string };
      employers: { title: string; desc: string };
      updated: { title: string; desc: string };
    };
    ctaHeadline: string;
    ctaSubtitle: string;
    ctaButton: string;
    // Provided by user (might be unused in current UI, but must be available):
    filters: {
      all: string;
      marketGuides: string;
      hiring: string;
      payroll: string;
      compliance: string;
      workforce: string;
      technology: string;
      leadership: string;
    };
    resourceTypes: {
      featuredInsight: string;
      marketGuide: string;
      workforceInsight: string;
      compliance: string;
      payroll: string;
      expansion: string;
      comingSoon: string;
    };
    ctaLabels: {
      exploreInsight: string;
      readGuide: string;
      readArticle: string;
      viewAllResources: string;
      exploreByMarket: string;
      viewAllMarkets: string;
      moreResourcesComingSoon: string;
    };
    countryNames: Record<string, string>;
    readTime: string;
    cnpsArticle: {
      intro: string;
      toc: {
        overview: string;
        whatIsCnps: string;
        employerResp: string;
        employeeReg: string;
        contributions: string;
        declarations: string;
      };
      content: {
        overviewTitle: string;
        overviewBody: string;
        whatIsCnpsTitle: string;
        whatIsCnpsBody: string;
        statutoryTitle: string;
        statutoryBody: string;
        employerRespTitle: string;
        employerRespIntro: string;
        employerRespList1: string;
        employerRespList2: string;
        employerRespList3: string;
        employerRespList4: string;
        employeeRegTitle: string;
        employeeRegBody: string;
        contributionsTitle: string;
        contributionsBody1: string;
        contributionsNote: string;
        declarationsTitle: string;
        declarationsBody: string;
      };
    };
  };
  aboutPage: {
    hero: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2: string;
      headlineLine2Emphasis: string;
      body: string;
      status: string;
    };
    identity: {
      legalName: string;
      founded: string;
      hq: string;
      stage: string;
    };
    founder: {
      label: string;
      name: string;
      role: string;
      body: string;
    };
    metrics: {
      val1: string;
      label1: string;
      val2: string;
      label2: string;
      val3: string;
      label3: string;
    };
    traction: {
      eyebrow: string;
      headline: string;
      items: Array<{ title: string; body: string }>;
    };
    architecture: {
      eyebrow: string;
      headline: string;
      body: string;
      points: string[];
    };
    credibility: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2: string;
      body: string;
      card1Title: string;
      card1Body: string;
      card2Title: string;
      card2Body: string;
      closingLine: string;
    };
    vision: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2: string;
      headlineLine2Emphasis: string;
      body: string;
    };
    heritage: {
      eyebrow: string;
      headline: string;
      body: string;
      yearsValue: string;
      yearsLabel: string;
      links: Array<{
        name: string;
        url: string;
        blurb: string;
      }>;
    };
    cta: string;
  };
  legal: {
    privacy: {
      title: string;
      updated: string;
      intro: string;
      sections: Array<{ heading: string; body: string }>;
    };
    terms: {
      title: string;
      updated: string;
      intro: string;
      sections: Array<{ heading: string; body: string }>;
    };
  };
  cookie: {
    message: string;
    accept: string;
    learnMore: string;
  };
  contactPage: {
    hero: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2Emphasis: string;
      body: string;
    };
    form: {
      fullName: string;
      workEmail: string;
      company: string;
      countryRegion: string;
      helpTopic: string;
      message: string;
      cta: string;
      validation: {
        name: string;
        email: string;
        country: string;
        topic: string;
      };
      success: {
        headline: string;
        body: string;
      };
      error: string;
      consent: string;
      topics: {
        pilot: string;
        waitlist: string;
        workforce: string;
        hiring: string;
        payroll: string;
        compliance: string;
        employee: string;
        platform: string;
        market: string;
        general: string;
        other: string;
      };
    };
    official: {
      emailLabel: string;
      hqLabel: string;
      companyName: string;
      address: string;
    };
    trustStrip: {
      realPeopleTitle: string;
      realPeopleDesc: string;
      globalMindsetTitle: string;
      globalMindsetDesc: string;
      secureEnquiryTitle: string;
      secureEnquiryDesc: string;
    };
  };
}
export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: "Home",
      platform: "Platform",
      solutions: "Solutions",
      coverage: "Our Coverage",
      resources: "Resources",
      about: "About Us",
      contact: "Contact Us",
      services: "Services",
      cta: "Request a pilot",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "EMPLOYER OF RECORD & WORKFORCE MANAGEMENT · ACROSS AFRICA",
      headlineLine1: "Hire, pay, and manage teams",
      headlineLine2: "anywhere in ",
      headlineLine2Emphasis: "Africa.",
      subheadline: "Without setting up a local entity.",
      body: "IWNT is your Employer of Record and workforce platform. We hire, onboard, manage and pay your team across African markets, combining connected technology with deep local expertise.",
      tagline: "Connecting ambitions. Building what's next for Africa.",
      status: "PLATFORM IN DEVELOPMENT · EARLY PARTNERS WELCOME",
      primaryCta: "Request a pilot",
      secondaryCta: "Join the waitlist",
    },
    trustedHeading: "TRUSTED BY CLIENTS & STRATEGIC PARTNERS",
    trustedSubheading:
      "Organisations already relying on IWNT's workforce operations and expertise, as we build the next generation of the platform.",
    capabilities: [
      {
        title: "Local expertise",
        description: "On-the-ground talent & legal entities",
      },
      {
        title: "Operational excellence",
        description: "Compliant payroll & HR operations",
      },
      {
        title: "Technology empowered",
        description: "Unified infrastructure platform",
      },
      {
        title: "Global standards",
        description: "Enterprise security & governance",
      },
    ],
    servicesSection: {
      eyebrow: "SERVICES",
      headline: "Operations you can plug into across Africa.",
      subtitle:
        "From project funds to payroll and back office, coordinated through IWNT and delivered with IntelHRC’s local footprint.",
      cta: "Talk to us about a service",
      items: [
        {
          id: "project-funds",
          title: "Project fund management",
          body: "Disburse, track, and control programme funds for NGOs and funded projects with clear audit trails.",
          tag: "NGOs · Programmes",
        },
        {
          id: "ai-recruitment",
          title: "AI recruitment & talent pool",
          body: "Source, rank, and build ready talent pools for roles across African markets: faster shortlists, clearer fit.",
          tag: "Hiring · Talent",
        },
        {
          id: "vendor",
          title: "Vendor management",
          body: "Onboard, monitor, and coordinate local vendors so delivery stays accountable across markets.",
          tag: "Supply · Partners",
        },
        {
          id: "payroll",
          title: "Payroll services",
          body: "Coordinate compliant payroll cycles across covered markets without standing up a local entity yourself.",
          tag: "Pay · Compliance",
        },
        {
          id: "accounting",
          title: "Accounting services",
          body: "Local books, statutory filings, and financial ops support connected to your workforce activity.",
          tag: "Finance · Statutory",
        },
        {
          id: "back-office",
          title: "Operations & back office support",
          body: "Day-to-day admin, HR ops, and back-office coverage so your teams stay focused on delivery.",
          tag: "Ops · Admin",
        },
      ],
    },
    solutionsPage: {
      eyebrow: "CONNECTED WORKFORCE SOLUTIONS",
      headline: "One employee. One journey.",
      subtitle:
        "From hiring to workforce insight, IWNT is bringing every stage of the employee journey together across African markets.",
      status: "CONNECTED PLATFORM IN DEVELOPMENT",
      persona: {
        name: "Aissatou Diallo",
        role: "Product Designer",
        location: "Dakar, Senegal",
        activeStatus: "Active Employee",
        syncedTextLine1: "All in one platform.",
        syncedTextLine2: "All in perfect sync.",
      },
      stages: [
        {
          num: "01",
          title: "Hired",
          desc: "Offer accepted and contract created.",
        },
        {
          num: "02",
          title: "Onboarded",
          desc: "Documents verified and employee activated.",
        },
        {
          num: "03",
          title: "Managed",
          desc: "Records, benefits, leave and employee workflows.",
        },
        {
          num: "04",
          title: "Paid",
          desc: "Payroll calculated, approved and payment sent.",
        },
        {
          num: "05",
          title: "Compliant",
          desc: "Local requirements and compliance maintained.",
        },
        {
          num: "06",
          title: "Insight",
          desc: "Workforce data and reporting for better decisions.",
        },
      ],
      exploreHeading: "Explore how each solution works.",
      solutionPills: ["Hire", "Onboard", "Manage", "Pay", "Comply", "Insight"],
      workflow: {
        eyebrow: "END-TO-END WORKFLOW",
        headline: "How the platform is designed to work.",
        body: "IWNT connects employer onboarding, worker records, compliance workflows, payroll coordination, reporting, and country coverage into one operating layer. Parent-group operations in African markets supply local delivery; IWNT builds the software.",
        steps: [
          {
            title: "Employer onboarding",
            body: "Capture organisation details, markets of interest, and hiring intent so teams start in one workspace.",
          },
          {
            title: "Worker records",
            body: "Store contracts, identity documents, and employment files for each market in a structured employee profile.",
          },
          {
            title: "Compliance workflows",
            body: "Guide local checks, social-security steps, and country requirements with market-specific knowledge.",
          },
          {
            title: "Payroll coordination",
            body: "Support payroll preparation, approvals, and payment-related coordination with local operating partners.",
          },
          {
            title: "Reporting & access",
            body: "Give role-based visibility into headcount, onboarding status, and compliance progress across markets.",
          },
          {
            title: "Country coverage",
            body: "Extend the same journey across markets where the IntelHRC group already operates, starting with Africa.",
          },
        ],
      },
      architecture: {
        eyebrow: "TECHNICAL DIRECTION",
        headline: "Built for secure, multi-country workforce data.",
        body: "AWS and modern cloud services will support the application layer as the product scales. The planned architecture focuses on secure storage, workflow automation, APIs, and reporting. Not claims of finished production workloads.",
        points: [
          "Secure multi-country workforce data management",
          "Scalable APIs and workflow automation",
          "Document storage with controlled access",
          "Analytics and role-based permissions",
        ],
      },
      ctaPrimary: "Request a pilot",
      ctaSecondary: "Join the waitlist",
    },
    globalExpansion: {
      eyebrow: "YOUR EXPANSION STORY",
      headline: "Your expansion. One connected journey.",
      subtitle: "Start anywhere. Build across Africa. Stay connected globally.",
      transitionLine1: "One employee becomes a team.",
      transitionLine2: "One market becomes many.",
      stages: [
        {
          num: "HQ",
          title: "Global HQ",
          desc: "Dubai · London\nParis · New York",
          status: "Your business, your starting point.",
        },
        {
          num: "01",
          title: "Cameroon",
          desc: "First African team established",
          status: "Team in place",
        },
        {
          num: "02",
          title: "Côte d’Ivoire",
          desc: "Operations expanded",
          status: "Payroll activated",
        },
        {
          num: "03",
          title: "Senegal",
          desc: "Workforce onboarded",
          status: "Growing team",
        },
        {
          num: "04",
          title: "DRC",
          desc: "Regional operations connected",
          status: "Compliance managed",
        },
        {
          num: "05",
          title: "Your next market",
          desc: "Africa and beyond",
          status: "What’s next, we’ll get you there.",
        }
      ],
      closingHeadline: "Wherever you start, IWNT helps you build what comes next.",
      closingValues: [
        { title: "ONE PLATFORM", desc: "All your workforce operations in one place." },
        { title: "LOCAL EXPERTISE", desc: "Knowledge on the ground." },
        { title: "CONNECTED OPERATIONS", desc: "Processes connected across markets." },
        { title: "GLOBAL PERSPECTIVE", desc: "International standards. Local delivery." }
      ],
      cta: "Explore Our Coverage"
    },
    platformSection: {
      block1Eyebrow: "TECHNOLOGY THAT SIMPLIFIES",
      block1Headline1: "Less administration.",
      block1Headline2: "More control.",
      block1Body:
        "IWNT provides Employer of Record (EOR), payroll, and workforce management services across eight African markets. Covering hiring, onboarding, ongoing HR management, payroll, and compliance from one connected platform.",
      block1Status: "PLATFORM PREVIEW · IN DEVELOPMENT",
      block2Eyebrow: "POWERFUL TECHNOLOGY. HUMAN SUPPORT.",
      block2Headline: "Technology with people behind it.",
      block2Subtitle: "Human + technology connection",
      block2Body:
        "The platform is being designed to simplify workforce operations, while local experts remain available to support organisations when real-world situations need human judgement.",
      block2Scenarios: [
        {
          clientMsg: "Can we onboard 24 employees in Cameroon next month?",
          iwntMsg: "We've got you. Our team is on it.",
          node2Text: "Cameroon team matched 🇨🇲",
          flag: "🇨🇲"
        },
        {
          clientMsg: "Can you run payroll for our Côte d'Ivoire team?",
          iwntMsg: "Yes, compliant payroll is ready to process.",
          node2Text: "Côte d'Ivoire team matched 🇨🇮",
          flag: "🇨🇮"
        },
        {
          clientMsg: "Can we hire 12 employees in Senegal?",
          iwntMsg: "Absolutely. Contracts are being prepared.",
          node2Text: "Senegal team matched 🇸🇳",
          flag: "🇸🇳"
        },
        {
          clientMsg: "Can you support compliance for our DRC workforce?",
          iwntMsg: "Our experts are reviewing the requirements.",
          node2Text: "DRC team matched 🇨🇩",
          flag: "🇨🇩"
        },
        {
          clientMsg: "We need to expand operations into Ghana.",
          iwntMsg: "Local entities and onboarding flows initialized.",
          node2Text: "Ghana team matched 🇬🇭",
          flag: "🇬🇭"
        },
        {
          clientMsg: "How quickly can we start employee management in Kenya?",
          iwntMsg: "Everything is set up. We can begin today.",
          node2Text: "Kenya team matched 🇰🇪",
          flag: "🇰🇪"
        },
        {
          clientMsg: "Can you handle our new team's onboarding in Rwanda?",
          iwntMsg: "Yes, the onboarding flow is active.",
          node2Text: "Rwanda team matched 🇷🇼",
          flag: "🇷🇼"
        },
        {
          clientMsg: "We need market expansion support in Nigeria.",
          iwntMsg: "Local specialists are assigned to your account.",
          node2Text: "Nigeria team matched 🇳🇬",
          flag: "🇳🇬"
        }
      ],
      block2Callout1Title: "Real people.",
      block2Callout1Sub: "Local experts.",
      block2Callout2Title: "Technology that's powerful.",
      block2Callout2Sub: "People who make it personal.",
      block2HandoffTitle: "Request assigned",
      block2HandoffTeam: "🇨🇲 Cameroon Team",
      block2HandoffStatus: "● Local expert online",
      block2RailStep1: "Connected platform",
      block2RailStep2: "Local expertise",
      block2RailStep3: "Work gets done",
      block2Node1: "Request received",
      block2Node3: "Local expert assigned",
      block2Connected: "● Connected",
      block2TaglineMain: "Technology handles the routing. People handle the work.",
      block2TaglineSub: "Connected platform · Local expertise · Human support",
      mobileIntakeProcessing: "Files → IWNT",
      mobileDashboardEmployees: "Total Employees",
      mobileDashboardCountries: "Active Countries",
      mobileDashboardPayroll: "Payroll Processed",
      mobileDashboardCompliance: "Compliance",
      mockupRegion: "REGION: WEST & CENTRAL AFRICA",
      mockupLiveWorkspace: "Live Workspace",
      mockupDashboard: "Dashboard",
      mockupEmployees: "Employees",
      mockupPayroll: "Payroll",
      mockupCompliance: "Compliance",
      mockupSettings: "Settings",
      mockupTotalEmployees: "Total Employees",
      mockupActiveCountries: "Active Countries",
      mockupPayrollProcessed: "Payroll Processed",
      mockupComplianceRate: "Compliance Rate",
      mockupWorkforceByCountry: "Workforce by Country",
      mockupViewAll: "View all",
      mockupRecentActivity: "Recent Activity",
      mockupActivity1: "Payroll completed: Cameroon",
      mockupActivity2: "New hire onboarded: Senegal",
      mockupActivity3: "Contract signed: Côte d'Ivoire",
      mockupActivity4: "Compliance update: Mali",
      mockupDoc1: "Payroll_Final_V7.xlsx",
      mockupDoc2: "Employee Contract.pdf",
      mockupDoc3: "Compliance Checklist.d...",
      mockupDoc4: "Onboarding List.xlsx",
      mockupDoc5: "Client Request.msg",
      mockupDoc6: "WhatsApp Message",
    },
    coverageSection: {
      eyebrow: "LOCAL EXPERTISE · GLOBAL REACH.",
      headlinePart1: "BUILT IN DUBAI.",
      headlinePart2: "CONNECTED TO AFRICA.",
      headlinePart3: "",
      subtitle: "African expertise. Global foundation.",
      description:
        "IWNT is registered in DIFC and connected to the Ignyte ecosystem. Giving us a global innovation base for workforce solutions built for African and emerging-market teams.",
      card1Title: "DIFC",
      card1Sub: "Registration & innovation base",
      card2Title: "IGNYTE",
      card2Sub: "Global innovation ecosystem",
      card3Title: "Compliance support",
      card3Sub: "Local knowledge aligned with international standards.",
      card4Title: "Connected technology",
      card4Sub: "One platform. Better visibility. Smarter coordination.",
      closingLine: "DUBAI FOUNDATION · AFRICAN EXPERTISE · INTERNATIONAL REACH",
      bottomGlobalTitle: "AFRICA AT THE CORE. CONNECTED BEYOND.",
      bottomGlobalSub: "Supporting organisations across African and international markets.",
      legendIwnt: "IWNT presence",
      legendAfrican: "African market",
      cmdTitle: "IWNT MARKET VIEW",
      cmdLiveNetwork: "Live network",
      cmdOperationalPresence: "Operational presence",
      cmdCapabilitiesTitle: "MARKET CAPABILITIES",
      cmdCapLocalExpertise: "Local expertise",
      cmdCapWorkforceOps: "Workforce operations",
      cmdCapComplianceSupport: "Compliance support",
      cmdCapRegionalCoord: "Regional coordination",
      cmdPulseTitle: "MARKET PULSE",
      cmdPulseThisMonth: "This month",
      cmdPulseHiring: "Hiring",
      cmdPulseOnboarding: "Onboarding",
      cmdPulsePayroll: "Payroll",
      cmdPulseCompliance: "Compliance",
      cmdInsightTitle: "LOCAL INSIGHT",
      cmdPrevious: "Previous",
      cmdNext: "Next",
      cmdExplore: "Explore market",
      mobileToggleCurrent: "IWNT Presence",
      mobileToggleAll: "All Africa",
      cmdNonOpTitle: "AFRICAN MARKET",
      cmdNonOpStatus: "Growing network",
      cmdNonOpCta: "Talk to IWNT about this market →",
      mobileTapToExplore: "Tap a market to explore",
      mobileWhyLocalMatters: "WHY LOCAL PRESENCE MATTERS",
      mobileCap1Sub: "People who understand the market.",
      mobileCap2Sub: "Connected operational support.",
      mobileCap3Sub: "Local knowledge and standards.",
      mobileCap4Sub: "One connected workforce view.",
    },
    resourcesSection: {
      eyebrow: "KNOWLEDGE & INSIGHTS",
      headline: "Workforce insights for African expansion.",
      subtitle:
        "Practical guides and operational frameworks for hiring, managing, and paying compliant teams in Africa.",
      featuredGuide: {
        country: "Cameroon",
        category: "Social Security",
        title: "Navigating CNPS Registration & Compliance in Cameroon",
        description: "A comprehensive guide for employers on social security obligations, registration procedures, and ongoing compliance requirements with the CNPS.",
        readAction: "Read Full Guide",
      },
      exploreHub: {
        title: "Explore The Knowledge Centre",
        description: "Access our full library of verified employer guides, compliance requirements, and workforce operations resources across Africa.",
        action: "View All Resources",
      },
    },
    aboutSection: {
      eyebrow: "ABOUT INTELWNT",
      headline: "Building Africa's workforce infrastructure.",
      body: "IWNT combines technology with deep local expertise to eliminate operational friction, empower talent, and enable organisations to scale seamlessly across African borders.",
      pillars: [
        {
          title: "Tech-Enabled Infrastructure",
          description: "Purpose-built platform connecting complex workforce workflows.",
        },
        {
          title: "Deep Local Ground Presence",
          description: "In-country legal entities and compliance experts in every market.",
        },
        {
          title: "Enterprise Governance",
          description: "Bank-grade data security and transparent operational auditability.",
        },
      ],
    },
    contactSection: {
      eyebrow: "GET STARTED",
      headline: "Ready to scale your workforce across Africa?",
      subtitle:
        "Partner with IWNT to simplify hiring, onboarding, payroll, and compliance in African growth markets.",
      ctaButton: "Request a pilot",
      status: "CONNECTED PLATFORM IN DEVELOPMENT · EARLY PARTNERS WELCOME",
      locations: "Headquartered in Dubai • Operating across Africa",
    },
    footer: {
      description: "IWNT is the technology platform of Intel HRC, built to bring Employer of Record and workforce management infrastructure to organisations across Africa and beyond.",
      explore: "Explore",
      company: "Company",
      stayConnected: "Stay connected",
      stayConnectedBody: "Follow IWNT as we build the next generation of connected workforce infrastructure.",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      rights: "IWNT. All rights reserved.",
      tagline: "Built with local insight. Connected globally.",
    },
    resourcesHub: {
      heroEyebrow: "WORKFORCE KNOWLEDGE",
      heroHeadline: "Workforce knowledge, ",
      heroHeadlineHighlight: "market by market.",
      heroBody: "Practical guidance for organisations hiring, paying and managing teams across African markets, from local employment requirements to payroll, social security and compliance.",
      searchPlaceholder: "Search CNPS, payroll, hiring, compliance...",
      popularSearchesLabel: "Popular:",
      featuredGuide: "FEATURED GUIDE",
      readGuide: "Read guide →",
      exploreTopicsHeading: "Explore workforce topics",
      exploreCountryHeading: "Explore knowledge by country",
      exploreCountryBody: "Understand the workforce requirements, employment systems and operational realities of individual markets.",
      viewAllMarkets: "View all markets →",
      workforceGuideLabel: "WORKFORCE GUIDE",
      comingSoon: "COMING SOON",
      disclaimer: "Employment and social-security requirements can change. Verify current requirements with the relevant authorities or an IWNT specialist before making employment decisions.",
      tableOfContents: "Contents",
      continueExploring: "Continue exploring",
      ctaHeadline: "Planning to build a team in",
      ctaBody: "IWNT combines technology, workforce operations and local expertise to support organisations entering and operating in African markets.",
      ctaTalkToTeam: "Talk to our team →",
      ctaExplorePrefix: "Explore",
      topics: {
        hiring: "Hiring",
        payroll: "Payroll",
        socialSecurity: "Social Security",
        compliance: "Compliance",
        contracts: "Employment Contracts",
        onboarding: "Onboarding",
      }
    },
    resourcesPage: {
      eyebrow: "INSIGHTS & RESOURCES",
      headline: "Workforce intelligence for better decisions.",
      subtitle: "Practical insights, market knowledge and resources to help organisations navigate hiring, workforce operations, payroll and compliance across African and international markets.",
      searchPlaceholder: "Search for a topic, country or keyword...",
      newGuideLabel: "New Guide",
      payrollWestAfrica: "Payroll in West Africa",
      featuredGuideLabel: "Featured Guide",
      cameroonLabel: "Cameroon",
      categorySocialSecurity: "Social Security",
      featuredTitle: "Navigating CNPS Registration & Compliance in Cameroon",
      featuredDesc: "A comprehensive guide for employers on social security obligations, registration procedures, and ongoing compliance requirements in Cameroon.",
      regTitle: "Registration",
      regDesc: "Step-by-step process",
      contributionsTitle: "Contributions",
      contributionsDesc: "Rates and calculations",
      readFullGuide: "Read Full Guide",
      features: {
        practical: { title: "Practical & Reliable", desc: "Actionable, up-to-date information from local experts." },
        market: { title: "Market Specific", desc: "Country-level guidance tailored to local regulations." },
        employers: { title: "Built for Employers", desc: "Created for companies hiring and managing teams in Africa." },
        updated: { title: "Always Updated", desc: "We monitor changes so you stay compliant and confident." }
      },
      ctaHeadline: "Need help with a specific market or workforce challenge?",
      ctaSubtitle: "Our experts are here to help you navigate, grow and succeed across Africa.",
      ctaButton: "Partner With Us",
      filters: {
        all: "All",
        marketGuides: "Market Guides",
        hiring: "Hiring",
        payroll: "Payroll",
        compliance: "Compliance",
        workforce: "Workforce",
        technology: "Technology",
        leadership: "Leadership"
      },
      resourceTypes: {
        featuredInsight: "Featured Insight",
        marketGuide: "Market Guide",
        workforceInsight: "Workforce Insight",
        compliance: "Compliance",
        payroll: "Payroll",
        expansion: "Expansion",
        comingSoon: "Coming Soon"
      },
      ctaLabels: {
        exploreInsight: "Explore insight",
        readGuide: "Read guide",
        readArticle: "Read article",
        viewAllResources: "View all resources",
        exploreByMarket: "Explore by market",
        viewAllMarkets: "View all markets",
        moreResourcesComingSoon: "More resources coming soon"
      },
      countryNames: {
        cameroon: "Cameroon",
        senegal: "Senegal",
        coteDIvoire: "Côte d’Ivoire",
        drc: "DRC",
        ghana: "Ghana",
        kenya: "Kenya"
      },
      readTime: "10 min read",
      cnpsArticle: {
        intro: "A practical introduction for employers building and managing teams in Cameroon.",
        toc: {
          overview: "Overview",
          whatIsCnps: "What is CNPS?",
          employerResp: "Employer responsibilities",
          employeeReg: "Employee registration",
          contributions: "Contributions",
          declarations: "Declarations & documentation"
        },
        content: {
          overviewTitle: "Overview",
          overviewBody: "The Caisse Nationale de Prévoyance Sociale (CNPS) is Cameroon's national social security fund. Registration and continuous compliance with the CNPS is a fundamental requirement for any entity employing staff in Cameroon.",
          whatIsCnpsTitle: "What is CNPS?",
          whatIsCnpsBody: "CNPS manages the social security system in Cameroon, covering family allowances, occupational risk (accidents at work and occupational diseases), and old-age, invalidity, and survivors' pensions.",
          statutoryTitle: "Contribution rates and ceilings",
          statutoryBody: "CNPS contribution rates, salary ceilings, and penalty amounts are set by Cameroonian social security regulations and finance laws. Always confirm the rates and caps in force for the current fiscal year with CNPS or qualified local counsel before filing.",
          employerRespTitle: "Employer responsibilities",
          employerRespIntro: "As an employer in Cameroon, you are legally obligated to:",
          employerRespList1: "Register your company with the CNPS immediately upon hiring your first employee.",
          employerRespList2: "Declare every new employee to the CNPS.",
          employerRespList3: "Calculate, withhold, and pay both employer and employee social security contributions.",
          employerRespList4: "Submit regular payroll declarations (DIPE) within strictly enforced deadlines.",
          employeeRegTitle: "Employee registration",
          employeeRegBody: "Every worker must be registered with the CNPS. If an employee already has a CNPS number from previous employment, the new employer must declare the hiring and link the employee to the company's CNPS account.",
          contributionsTitle: "Contributions",
          contributionsBody1: "Social security contributions in Cameroon are shared between the employer and the employee, though the employer bears the larger portion (especially for family allowances and occupational hazards, which are exclusively employer-paid).",
          contributionsNote: "Note: Exact percentage distributions and caps must be verified against current finance laws for the active fiscal year.",
          declarationsTitle: "Declarations & documentation",
          declarationsBody: "Monthly or quarterly declarations (depending on company size/structure) must be submitted via the CNPS online portal. Failure to submit the DIPE (Déclaration Individuelle des Paiements des Employés) on time results in immediate penalties."
        }
      }
    },
    aboutPage: {
      hero: {
        eyebrow: "ABOUT IWNT",
        headlineLine1: "Built from experience,",
        headlineLine2: "Building",
        headlineLine2Emphasis: "what's next.",
        body: "Intel Workforce Network Technologies Ltd is the technology company behind IWNT. Founded in 2026 in DIFC, Dubai, we build on more than a decade of African workforce operations through IntelHRC and Intel Outsourcing Services. Pre-seed, with partners invited.",
        status: "● PRE-SEED · FOUNDED 2026 · DIFC, DUBAI",
      },
      identity: {
        legalName: "Intel Workforce Network Technologies Ltd",
        founded: "Founded 2026",
        hq: "DIFC Innovation One, Dubai, UAE",
        stage: "Pre-seed · Partners invited",
      },
      founder: {
        label: "FOUNDER & CEO",
        name: "Derick Fonderson",
        role: "Founder & Chief Executive Officer",
        body: "Derick Fonderson leads IWNT’s mission to turn years of African workforce operations experience into connected software for organisations hiring and managing teams across the continent.",
      },
      metrics: {
        val1: "2026",
        label1: "Founded in DIFC",
        val2: "8",
        label2: "Group markets (IntelHRC)",
        val3: "Pre-seed",
        label3: "Stage · partners invited",
      },
      traction: {
        eyebrow: "EVIDENCE OF TRACTION",
        headline: "What is live today.",
        items: [
          {
            title: "Product in development",
            body: "First platform release underway for hire, onboard, manage, and pay workflows.",
          },
          {
            title: "African operating footprint",
            body: "Parent group IntelHRC and sister Intel Outsourcing Services bring 10+ years of operational presence across African markets; IWNT builds the software layer.",
          },
          {
            title: "Market knowledge",
            body: "Published country resources such as Cameroon CNPS guidance for employers.",
          },
          {
            title: "Partner invitations open",
            body: "Dubai and international organisations can request a pilot or join the waitlist.",
          },
        ],
      },
      architecture: {
        eyebrow: "CLOUD & SECURITY DIRECTION",
        headline: "How we plan to scale on cloud infrastructure.",
        body: "As the product matures, cloud infrastructure (including AWS) will support secure application hosting, data storage, workflow automation, APIs, and reporting across markets. We do not overstate live workloads that are not yet in production.",
        points: [
          "Secure multi-country workforce data management",
          "Scalable APIs and workflow automation",
          "Document storage and role-based access",
          "Analytics and operational reporting",
        ],
      },
      credibility: {
        eyebrow: "DIFC REGISTERED · AFRICA-FOCUSED · GLOBAL BY DESIGN",
        headlineLine1: "Built in Dubai.",
        headlineLine2: "Connected to Africa.",
        body: "IWNT is registered in DIFC and connected to the Ignyte ecosystem. Giving us a global innovation base for workforce solutions built for African and emerging-market teams.",
        card1Title: "DIFC Registration",
        card1Body: "Dubai-based innovation and business foundation.",
        card2Title: "Ignyte Ecosystem",
        card2Body: "Connected to a global innovation community.",
        closingLine: "Dubai foundation. African expertise. International reach.",
      },
      vision: {
        eyebrow: "EXPERIENCE MEETS TECHNOLOGY",
        headlineLine1: "Built on the ground.",
        headlineLine2: "Designed to",
        headlineLine2Emphasis: "scale.",
        body: "IWNT brings together the workforce experience behind IntelHRC and Intel Outsourcing Services with a new technology platform designed to help organisations operate more effectively across African markets.",
      },
      heritage: {
        eyebrow: "OPERATIONAL PRESENCE · 10+ YEARS",
        headline: "Grounded in a decade of African workforce operations.",
        body: "IWNT is the technology arm of a group with more than ten years of operational presence across African markets. Delivery heritage sits with our sister companies, IntelHRC and Intel Outsourcing Services, while IWNT builds the software layer.",
        yearsValue: "10+",
        yearsLabel: "Years ops heritage",
        links: [
          {
            name: "IntelHRC",
            url: "https://intelhrc.com",
            blurb: "Parent group for operating entities and workforce delivery across African markets.",
          },
          {
            name: "Intel Outsourcing Services",
            url: "https://inteloutsourcingservices.com",
            blurb: "Sister company for outsourcing and operational support for organisations scaling teams.",
          },
        ],
      },
      cta: "Request a pilot",
    },
    legal: {
      privacy: {
        title: "Privacy Policy",
        updated: "Last updated: 15 September 2026",
        intro: "This Privacy Policy explains how Intel Workforce Network Technologies Ltd (“IWNT”, “we”, “us”) collects and uses information when you visit iwnt.ae or contact us.",
        sections: [
          {
            heading: "Who we are",
            body: "Intel Workforce Network Technologies Ltd is a DIFC-registered company based at Innovation One, DIFC, Dubai, UAE. Contact: info@iwnt.ae.",
          },
          {
            heading: "Information we collect",
            body: "When you submit a contact or waitlist form, we collect the details you provide (such as name, work email, organisation, country of interest, and message). We may also collect basic technical data such as browser type and pages visited for security and site performance.",
          },
          {
            heading: "How we use information",
            body: "We use enquiry data to respond to your request, assess partnership or pilot interest, and improve our website and services. We do not sell personal information.",
          },
          {
            heading: "Legal basis and retention",
            body: "We process enquiry data based on your consent and our legitimate interest in responding to business communications. We retain enquiries only as long as needed for those purposes or as required by law.",
          },
          {
            heading: "Sharing",
            body: "We may share information with service providers who help us operate email, hosting, or CRM tools, under appropriate confidentiality obligations. We may disclose information if required by law.",
          },
          {
            heading: "Cookies",
            body: "We use essential cookies required for the site to function (for example language preference and cookie-consent status). We do not currently run third-party advertising cookies. If we add analytics later, we will update this policy and the cookie notice.",
          },
          {
            heading: "Your rights",
            body: "Depending on applicable law, you may request access, correction, or deletion of your personal information by emailing info@iwnt.ae.",
          },
          {
            heading: "Contact",
            body: "Privacy questions: info@iwnt.ae. Intel Workforce Network Technologies Ltd, DIFC Innovation One, Dubai, UAE.",
          },
        ],
      },
      terms: {
        title: "Terms of Use",
        updated: "Last updated: 15 September 2026",
        intro: "These Terms of Use govern your access to the IWNT website at iwnt.ae operated by Intel Workforce Network Technologies Ltd.",
        sections: [
          {
            heading: "Acceptance",
            body: "By using this website, you agree to these Terms. If you do not agree, please do not use the site.",
          },
          {
            heading: "About the site",
            body: "This website describes IWNT’s products and services under development. Content is informational and does not constitute a binding offer, legal advice, or a guarantee of feature availability.",
          },
          {
            heading: "No professional advice",
            body: "Resources such as country guides are general information only. Employment, payroll, and social-security rules change. Verify requirements with competent advisors or authorities before acting.",
          },
          {
            heading: "Intellectual property",
            body: "Website content, branding, and materials are owned by IWNT or its licensors. You may not copy or redistribute them without prior written permission.",
          },
          {
            heading: "Acceptable use",
            body: "You agree not to misuse the site, attempt unauthorised access, scrape content at scale, or submit false or harmful information through forms.",
          },
          {
            heading: "Disclaimer",
            body: "The site is provided “as is”. To the fullest extent permitted by law, IWNT disclaims warranties regarding uninterrupted availability, accuracy of forward-looking product descriptions, or fitness for a particular purpose.",
          },
          {
            heading: "Limitation of liability",
            body: "To the fullest extent permitted by law, IWNT is not liable for indirect or consequential loss arising from use of the website or reliance on its content.",
          },
          {
            heading: "Governing law",
            body: "These Terms are governed by the laws of the Dubai International Financial Centre (DIFC), without prejudice to mandatory consumer protections that may apply.",
          },
          {
            heading: "Contact",
            body: "Questions about these Terms: info@iwnt.ae.",
          },
        ],
      },
    },
    cookie: {
      message: "We use essential cookies to run iwnt.ae (language and consent preferences). See our Privacy Policy for details.",
      accept: "Accept",
      learnMore: "Privacy Policy",
    },
    contactPage: {
      hero: {
        eyebrow: "CONTACT IWNT",
        headlineLine1: "Let’s build the future,",
        headlineLine2Emphasis: "from Dubai and beyond.",
        body: "We welcome organisations in Dubai and internationally that wish to collaborate with IWNT as we build the next generation of connected workforce infrastructure.",
      },
      form: {
        fullName: "Full Name *",
        workEmail: "Work Email *",
        company: "Company / Organisation *",
        countryRegion: "Country / Region *",
        helpTopic: "What can we help you with? *",
        message: "Message *",
        cta: "Send enquiry →",
        validation: {
          name: "Please enter your name.",
          email: "Enter a valid email address.",
          country: "Select a country or region.",
          topic: "Tell us how we can help.",
        },
        success: {
          headline: "Thanks. Your enquiry has been received.",
          body: "Our team will review it and get back to you.",
        },
        error: "Something went wrong. Please try again or email us directly at info@iwnt.ae.",
        consent: "I agree to the processing of my information in accordance with the",
        topics: {
          pilot: "Request a pilot",
          waitlist: "Join the waitlist",
          workforce: "Workforce & Expansion",
          hiring: "Hiring",
          payroll: "Payroll",
          compliance: "Compliance",
          employee: "Employee Management",
          platform: "Platform & Partnerships",
          market: "Market Entry",
          general: "General Enquiry",
          other: "Other",
        },
      },
      official: {
        emailLabel: "DIRECT EMAIL",
        hqLabel: "HEADQUARTERS LOCATION",
        companyName: "Intel Workforce Network Technologies Ltd.",
        address: "IH-00-01-03-OF-05, Level 3,\nInnovation One, DIFC, Dubai,\nUAE",
      },
      trustStrip: {
        realPeopleTitle: "REAL PEOPLE",
        realPeopleDesc: "Talk to our team.",
        globalMindsetTitle: "GLOBAL MINDSET",
        globalMindsetDesc: "Supporting organisations across Africa and international markets.",
        secureEnquiryTitle: "SECURE ENQUIRY",
        secureEnquiryDesc: "Your information is used only to respond to your request.",
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      platform: "Plateforme",
      solutions: "Solutions",
      coverage: "Notre présence",
      resources: "Ressources",
      about: "À propos",
      contact: "Contactez-nous",
      services: "Services",
      cta: "Demander un pilote",
      languageLabel: "Langue",
    },
    hero: {
      eyebrow: "EMPLOYER OF RECORD (EOR) & GESTION DES EFFECTIFS · À TRAVERS L'AFRIQUE",
      headlineLine1: "Recrutez, rémunérez et gérez vos équipes",
      headlineLine2: "partout ",
      headlineLine2Emphasis: "en Afrique.",
      subheadline: "Sans créer d'entité locale.",
      body: "IWNT est votre partenaire Employer of Record (EOR) et votre plateforme de gestion des effectifs. Nous recrutons, intégrons, gérons et rémunérons vos équipes sur les marchés africains, en combinant une technologie connectée à une expertise locale approfondie.",
      tagline: "Connecter les ambitions. Construire l'avenir de l'Afrique.",
      status: "PLATEFORME EN DÉVELOPPEMENT · PARTENAIRES PIONNIERS BIENVENUS",
      primaryCta: "Demander un pilote",
      secondaryCta: "Rejoindre la liste d'attente",
    },
    trustedHeading: "ILS NOUS FONT CONFIANCE",
    trustedSubheading:
      "Des organisations s'appuient déjà sur l'expertise et les opérations de gestion des effectifs d'IWNT, tandis que nous construisons la prochaine génération de notre plateforme.",
    capabilities: [
      {
        title: "Expertise locale",
        description: "Talents terrain & entités juridiques",
      },
      {
        title: "Excellence opérationnelle",
        description: "Paie & opérations RH conformes",
      },
      {
        title: "Technologie intégrée",
        description: "Plateforme d'infrastructure unifiée",
      },
      {
        title: "Normes internationales",
        description: "Sécurité & gouvernance d'entreprise",
      },
    ],
    servicesSection: {
      eyebrow: "SERVICES",
      headline: "Des opérations prêtes à brancher à travers l'Afrique.",
      subtitle:
        "Des fonds de projet à la paie et au back-office, coordonnés par IWNT et délivrés avec l'empreinte locale d'IntelHRC.",
      cta: "Parler d'un service",
      items: [
        {
          id: "project-funds",
          title: "Gestion des fonds de projet",
          body: "Décaisser, suivre et contrôler les fonds de programmes pour les ONG et projets financés, avec une piste d'audit claire.",
          tag: "ONG · Programmes",
        },
        {
          id: "ai-recruitment",
          title: "Recrutement IA & vivier de talents",
          body: "Sourcer, classer et constituer des viviers prêts pour les postes sur les marchés africains: shortlists plus rapides.",
          tag: "Recrutement · Talents",
        },
        {
          id: "vendor",
          title: "Gestion des fournisseurs",
          body: "Intégrer, suivre et coordonner les fournisseurs locaux pour une exécution responsable sur chaque marché.",
          tag: "Fournisseurs · Partenaires",
        },
        {
          id: "payroll",
          title: "Services de paie",
          body: "Coordonner des cycles de paie conformes sur les marchés couverts, sans créer d'entité locale vous-même.",
          tag: "Paie · Conformité",
        },
        {
          id: "accounting",
          title: "Services comptables",
          body: "Comptabilité locale, déclarations statutaires et support financier reliés à votre activité RH.",
          tag: "Finance · Statutaire",
        },
        {
          id: "back-office",
          title: "Opérations & support back-office",
          body: "Admin au quotidien, opérations RH et couverture back-office pour que vos équipes restent centrées sur la livraison.",
          tag: "Ops · Admin",
        },
      ],
    },
    solutionsPage: {
      eyebrow: "SOLUTIONS RH CONNECTÉES",
      headline: "Un collaborateur. Un parcours.",
      subtitle:
        "Du recrutement au pilotage des effectifs, IWNT rassemble chaque étape du parcours collaborateur à travers les marchés africains.",
      status: "PLATEFORME CONNECTÉE EN DÉVELOPPEMENT",
      persona: {
        name: "Aissatou Diallo",
        role: "Product Designer",
        location: "Dakar, Sénégal",
        activeStatus: "Collaborateur Actif",
        syncedTextLine1: "Tout sur une seule plateforme.",
        syncedTextLine2: "Tout parfaitement synchronisé.",
      },
      stages: [
        {
          num: "01",
          title: "Recruté(e)",
          desc: "Offre acceptée et contrat créé.",
        },
        {
          num: "02",
          title: "Intégré(e)",
          desc: "Documents vérifiés et collaborateur activé.",
        },
        {
          num: "03",
          title: "Géré(e)",
          desc: "Dossiers, avantages, congés et processus RH.",
        },
        {
          num: "04",
          title: "Payé(e)",
          desc: "Paie calculée, validée et paiement envoyé.",
        },
        {
          num: "05",
          title: "Conforme",
          desc: "Exigences locales et conformité suivies.",
        },
        {
          num: "06",
          title: "Pilotage",
          desc: "Données et reporting RH pour de meilleures décisions.",
        },
      ],
      exploreHeading: "Découvrez le fonctionnement de chaque solution.",
      solutionPills: [
        "Recruter",
        "Intégrer",
        "Gérer",
        "Payer",
        "Conformité",
        "Pilotage",
      ],
      workflow: {
        eyebrow: "PARCOURS DE BOUT EN BOUT",
        headline: "Comment la plateforme est conçue.",
        body: "IWNT relie l’onboarding employeur, les dossiers collaborateurs, les workflows de conformité, la coordination de la paie, le reporting et la couverture pays. Les opérations du groupe parent sur les marchés africains assurent la livraison locale ; IWNT construit le logiciel.",
        steps: [
          {
            title: "Onboarding employeur",
            body: "Capturer les détails de l’organisation, les marchés ciblés et l’intention d’embauche dans un seul espace de travail.",
          },
          {
            title: "Dossiers collaborateurs",
            body: "Conserver contrats, pièces d’identité et dossiers d’emploi pour chaque marché dans un profil structuré.",
          },
          {
            title: "Workflows de conformité",
            body: "Guider les contrôles locaux, les étapes de sécurité sociale et les exigences pays avec une connaissance marché.",
          },
          {
            title: "Coordination de la paie",
            body: "Soutenir la préparation de la paie, les validations et la coordination des paiements avec les partenaires opérationnels locaux.",
          },
          {
            title: "Reporting et accès",
            body: "Offrir une visibilité par rôle sur les effectifs, l’intégration et la conformité multi-marchés.",
          },
          {
            title: "Couverture pays",
            body: "Étendre le même parcours aux marchés où le groupe IntelHRC opère déjà, en commençant par l’Afrique.",
          },
        ],
      },
      architecture: {
        eyebrow: "ORIENTATION TECHNIQUE",
        headline: "Conçue pour des données RH multi-pays sécurisées.",
        body: "AWS et des services cloud modernes soutiendront la couche applicative à mesure que le produit grandit. L’architecture prévue met l’accent sur le stockage sécurisé, l’automatisation des workflows, les API et le reporting. Sans prétendre à des charges de production déjà terminées.",
        points: [
          "Gestion sécurisée des données RH multi-pays",
          "API évolutives et automatisation des workflows",
          "Stockage documentaire à accès contrôlé",
          "Analytique et permissions par rôle",
        ],
      },
      ctaPrimary: "Demander un pilote",
      ctaSecondary: "Rejoindre la liste d'attente",
    },
    globalExpansion: {
      eyebrow: "VOTRE PARCOURS D'EXPANSION",
      headline: "Votre expansion. Un voyage connecté.",
      subtitle: "Commencez n'importe où. Construisez à travers l'Afrique. Restez connecté mondialement.",
      transitionLine1: "Un employé devient une équipe.",
      transitionLine2: "Un marché devient plusieurs.",
      stages: [
        {
          num: "HQ",
          title: "Siège Global",
          desc: "Dubaï · Londres\nParis · New York",
          status: "Votre entreprise, votre point de départ.",
        },
        {
          num: "01",
          title: "Cameroun",
          desc: "Première équipe africaine établie",
          status: "Équipe en place",
        },
        {
          num: "02",
          title: "Côte d’Ivoire",
          desc: "Opérations étendues",
          status: "Paie activée",
        },
        {
          num: "03",
          title: "Sénégal",
          desc: "Effectifs intégrés",
          status: "Équipe en croissance",
        },
        {
          num: "04",
          title: "RDC",
          desc: "Opérations régionales connectées",
          status: "Conformité gérée",
        },
        {
          num: "05",
          title: "Votre prochain marché",
          desc: "Afrique et au-delà",
          status: "Quelle est la suite, nous vous y mènerons.",
        }
      ],
      closingHeadline: "Où que vous commenciez, IWNT vous aide à bâtir la suite.",
      closingValues: [
        { title: "UNE PLATEFORME", desc: "Toutes vos opérations RH au même endroit." },
        { title: "EXPERTISE LOCALE", desc: "Connaissances sur le terrain." },
        { title: "OPÉRATIONS CONNECTÉES", desc: "Processus connectés entre les marchés." },
        { title: "PERSPECTIVE GLOBALE", desc: "Normes internationales. Livraison locale." }
      ],
      cta: "Explorer notre couverture"
    },
    platformSection: {
      block1Eyebrow: "UNE TECHNOLOGIE QUI SIMPLIFIE",
      block1Headline1: "Moins d'administration.",
      block1Headline2: "Plus de contrôle.",
      block1Body:
        "IWNT fournit des services d'Employer of Record (EOR), de paie et de gestion des effectifs sur huit marchés africains. Couvrant le recrutement, l'intégration, la gestion RH continue, la paie et la conformité depuis une plateforme connectée unique.",
      block1Status: "APERÇU DE LA PLATEFORME · EN DÉVELOPPEMENT",
      block2Eyebrow: "UNE TECHNOLOGIE PUISSANTE. UN ACCOMPAGNEMENT HUMAIN.",
      block2Headline: "La technologie, avec l'humain derrière.",
      block2Subtitle: "Connexion entre l'humain et la technologie",
      block2Body:
        "La plateforme est conçue pour simplifier les opérations RH, tout en permettant à des experts locaux d'intervenir lorsque les situations réelles nécessitent une expertise humaine.",
      block2Scenarios: [
        {
          clientMsg: "Pouvons-nous intégrer 24 collaborateurs au Cameroun le mois prochain ?",
          iwntMsg: "Nous nous en occupons. Notre équipe est mobilisée.",
          node2Text: "Équipe Cameroun identifiée 🇨🇲",
          flag: "🇨🇲"
        },
        {
          clientMsg: "Pouvez-vous gérer la paie de notre équipe en Côte d'Ivoire ?",
          iwntMsg: "Oui, la paie conforme est prête à être traitée.",
          node2Text: "Équipe Côte d'Ivoire identifiée 🇨🇮",
          flag: "🇨🇮"
        },
        {
          clientMsg: "Pouvons-nous recruter 12 collaborateurs au Sénégal ?",
          iwntMsg: "Absolument. Les contrats sont en cours de préparation.",
          node2Text: "Équipe Sénégal identifiée 🇸🇳",
          flag: "🇸🇳"
        },
        {
          clientMsg: "Pouvez-vous assurer la conformité de nos effectifs en RDC ?",
          iwntMsg: "Nos experts examinent les exigences.",
          node2Text: "Équipe RDC identifiée 🇨🇩",
          flag: "🇨🇩"
        },
        {
          clientMsg: "Nous devons étendre nos opérations au Ghana.",
          iwntMsg: "Entités locales et flux d'intégration initialisés.",
          node2Text: "Équipe Ghana identifiée 🇬🇭",
          flag: "🇬🇭"
        },
        {
          clientMsg: "À quelle vitesse pouvons-nous commencer la gestion des employés au Kenya ?",
          iwntMsg: "Tout est en place. Nous pouvons commencer dès aujourd'hui.",
          node2Text: "Équipe Kenya identifiée 🇰🇪",
          flag: "🇰🇪"
        },
        {
          clientMsg: "Pouvez-vous gérer l'intégration de notre nouvelle équipe au Rwanda ?",
          iwntMsg: "Oui, le flux d'intégration est actif.",
          node2Text: "Équipe Rwanda identifiée 🇷🇼",
          flag: "🇷🇼"
        },
        {
          clientMsg: "Nous avons besoin d'un soutien pour notre expansion au Nigeria.",
          iwntMsg: "Des spécialistes locaux sont affectés à votre compte.",
          node2Text: "Équipe Nigeria identifiée 🇳🇬",
          flag: "🇳🇬"
        }
      ],
      block2Callout1Title: "De vraies personnes.",
      block2Callout1Sub: "Des experts locaux.",
      block2Callout2Title: "Une technologie puissante.",
      block2Callout2Sub: "Un accompagnement humain.",
      block2HandoffTitle: "Demande attribuée",
      block2HandoffTeam: "🇨🇲 Équipe Cameroun",
      block2HandoffStatus: "● Expert local disponible",
      block2RailStep1: "Plateforme connectée",
      block2RailStep2: "Expertise locale",
      block2RailStep3: "Travail accompli",
      block2Node1: "Demande reçue",
      block2Node3: "Expert local attribué",
      block2Connected: "● Connecté",
      block2TaglineMain: "La technologie orchestre. Nos experts agissent.",
      block2TaglineSub: "Plateforme connectée · Expertise locale · Accompagnement humain",
      mobileIntakeProcessing: "Fichiers → IWNT",
      mobileDashboardEmployees: "Employés au total",
      mobileDashboardCountries: "Pays actifs",
      mobileDashboardPayroll: "Paie traitée",
      mobileDashboardCompliance: "Conformité",
      mockupRegion: "RÉGION : AFRIQUE DE L'OUEST ET CENTRALE",
      mockupLiveWorkspace: "Espace Actif",
      mockupDashboard: "Tableau de bord",
      mockupEmployees: "Employés",
      mockupPayroll: "Paie",
      mockupCompliance: "Conformité",
      mockupSettings: "Paramètres",
      mockupTotalEmployees: "Total Employés",
      mockupActiveCountries: "Pays Actifs",
      mockupPayrollProcessed: "Paie Traitée",
      mockupComplianceRate: "Taux Conformité",
      mockupWorkforceByCountry: "Effectif par Pays",
      mockupViewAll: "Voir tout",
      mockupRecentActivity: "Activité Récente",
      mockupActivity1: "Paie terminée : Cameroun",
      mockupActivity2: "Nouvel employé : Sénégal",
      mockupActivity3: "Contrat signé : Côte d'Ivoire",
      mockupActivity4: "Mise à jour conformité : Mali",
      mockupDoc1: "Paie_Finale_V7.xlsx",
      mockupDoc2: "Contrat_Employe.pdf",
      mockupDoc3: "Liste_Conformite.d...",
      mockupDoc4: "Liste_Integration.xlsx",
      mockupDoc5: "Demande_Client.msg",
      mockupDoc6: "Message WhatsApp",
    },
    coverageSection: {
      eyebrow: "EXPERTISE LOCALE · PORTÉE MONDIALE.",
      headlinePart1: "CONSTRUIT À DUBAÏ.",
      headlinePart2: "CONNECTÉ À L'AFRIQUE.",
      headlinePart3: "",
      subtitle: "Expertise africaine. Fondation mondiale.",
      description:
        "IWNT est enregistrée au DIFC et connectée à l'écosystème Ignyte. Nous offrant une base d'innovation mondiale pour des solutions RH conçues pour les équipes africaines et des marchés émergents.",
      card1Title: "DIFC",
      card1Sub: "Enregistrement & base d'innovation",
      card2Title: "IGNYTE",
      card2Sub: "Écosystème mondial d'innovation",
      card3Title: "Support conformité",
      card3Sub: "Expertise locale alignée sur les standards internationaux.",
      card4Title: "Technologie connectée",
      card4Sub: "Une plateforme. Meilleure visibilité. Coordination optimisée.",
      closingLine: "FONDATION À DUBAÏ · EXPERTISE AFRICAINE · PORTÉE INTERNATIONALE",
      bottomGlobalTitle: "L’AFRIQUE AU CŒUR. CONNECTÉE AU-DELÀ.",
      bottomGlobalSub: "Au service des organisations sur les marchés africains et internationaux.",
      legendIwnt: "Présence IWNT",
      legendAfrican: "Marché africain",
      cmdTitle: "VUE DU MARCHÉ IWNT",
      cmdLiveNetwork: "Réseau en direct",
      cmdOperationalPresence: "Présence opérationnelle",
      cmdCapabilitiesTitle: "CAPACITÉS DU MARCHÉ",
      cmdCapLocalExpertise: "Expertise locale",
      cmdCapWorkforceOps: "Opérations RH",
      cmdCapComplianceSupport: "Support conformité",
      cmdCapRegionalCoord: "Coordination régionale",
      cmdPulseTitle: "POULS DU MARCHÉ",
      cmdPulseThisMonth: "Ce mois",
      cmdPulseHiring: "Recrutement",
      cmdPulseOnboarding: "Intégration",
      cmdPulsePayroll: "Paie",
      cmdPulseCompliance: "Conformité",
      cmdInsightTitle: "APERÇU LOCAL",
      cmdPrevious: "Précédent",
      cmdNext: "Suivant",
      cmdExplore: "Explorer le marché",
      mobileToggleCurrent: "Présence IWNT",
      mobileToggleAll: "Toute l'Afrique",
      cmdNonOpTitle: "MARCHÉ AFRICAIN",
      cmdNonOpStatus: "Réseau en expansion",
      cmdNonOpCta: "Parlez à IWNT de ce marché →",
      mobileTapToExplore: "Touchez un marché pour l’explorer",
      mobileWhyLocalMatters: "POURQUOI LA PRÉSENCE LOCALE COMPTE",
      mobileCap1Sub: "Des personnes qui comprennent le marché.",
      mobileCap2Sub: "Support opérationnel connecté.",
      mobileCap3Sub: "Expertise et normes locales.",
      mobileCap4Sub: "Une vue unifiée de vos effectifs.",
    },
    resourcesSection: {
      eyebrow: "CONNAISSANCES & PERSPECTIVES",
      headline: "Des perspectives RH pour votre expansion en Afrique.",
      subtitle:
        "Guides pratiques et cadres opérationnels pour recruter, gérer et rémunérer vos équipes en toute conformité en Afrique.",
      featuredGuide: {
        country: "Cameroun",
        category: "Sécurité Sociale",
        title: "Naviguer dans l'immatriculation et la conformité CNPS au Cameroun",
        description: "Un guide complet pour les employeurs sur les obligations de sécurité sociale, les procédures d'immatriculation et les exigences de conformité continues avec la CNPS.",
        readAction: "Lire le guide complet",
      },
      exploreHub: {
        title: "Explorer le Centre de Connaissances",
        description: "Accédez à notre bibliothèque complète de guides employeurs vérifiés, d'exigences de conformité et de ressources sur les opérations RH à travers l'Afrique.",
        action: "Voir toutes les ressources",
      },
    },
    aboutSection: {
      eyebrow: "À PROPOS D'INTELWNT",
      headline: "Construire l'infrastructure RH de l'Afrique.",
      body: "IWNT associe technologie et expertise locale approfondie pour éliminer la friction opérationnelle, valoriser les talents et permettre aux organisations de se développer sans frontière en Afrique.",
      pillars: [
        {
          title: "Infrastructure Technologique",
          description: "Plateforme sur mesure connectant les processus RH complexes.",
        },
        {
          title: "Présence Terrain Approfondie",
          description: "Entités juridiques locales et experts conformités dans chaque pays.",
        },
        {
          title: "Gouvernance d'Entreprise",
          description: "Sécurité bancaire des données et traçabilité opérationnelle transparente.",
        },
      ],
    },
    contactSection: {
      eyebrow: "PASSER À L'ACTION",
      headline: "Prêt à développer vos équipes en Afrique ?",
      subtitle:
        "Devenez partenaire d'IWNT pour simplifier le recrutement, l'intégration, la paie et la conformité sur les marchés africains.",
      ctaButton: "Demander un pilote",
      status: "PLATEFORME CONNECTÉE EN DÉVELOPPEMENT · PARTENAIRES PIONNIERS BIENVENUS",
      locations: "Siège social à Dubaï • Présent en Afrique",
    },
    footer: {
      description: "IWNT est la plateforme technologique d'Intel HRC, conçue pour fournir aux organisations une infrastructure d'Employer of Record (EOR) et de gestion des effectifs à travers l'Afrique et au-delà.",
      explore: "Explorer",
      company: "Entreprise",
      stayConnected: "Restez connecté",
      stayConnectedBody: "Suivez IWNT alors que nous construisons la prochaine génération d’infrastructure RH connectée.",
      privacyPolicy: "Politique de confidentialité",
      termsOfUse: "Conditions d'utilisation",
      rights: "IWNT. Tous droits réservés.",
      tagline: "Pensé avec une expertise locale. Connecté au monde.",
    },
    resourcesHub: {
      heroEyebrow: "RESSOURCES RH",
      heroHeadline: "Les connaissances RH, ",
      heroHeadlineHighlight: "marché par marché.",
      heroBody: "Des conseils pratiques pour les organisations qui recrutent, paient et gèrent des équipes sur les marchés africains, des exigences locales en matière d'emploi à la paie, la sécurité sociale et la conformité.",
      searchPlaceholder: "Rechercher CNPS, paie, recrutement, conformité...",
      popularSearchesLabel: "Populaire :",
      featuredGuide: "GUIDE EN VEDETTE",
      readGuide: "Lire le guide →",
      exploreTopicsHeading: "Explorer les thématiques RH",
      exploreCountryHeading: "Explorer les ressources par pays",
      exploreCountryBody: "Comprendre les exigences en matière de main-d'œuvre, les systèmes d'emploi et les réalités opérationnelles des marchés individuels.",
      viewAllMarkets: "Voir tous les marchés →",
      workforceGuideLabel: "GUIDE DES RESSOURCES HUMAINES",
      comingSoon: "BIENTÔT DISPONIBLE",
      disclaimer: "Les exigences en matière d'emploi et de sécurité sociale peuvent changer. Vérifiez les exigences actuelles auprès des autorités compétentes ou d'un spécialiste IWNT avant de prendre des décisions liées à l'emploi.",
      tableOfContents: "Sommaire",
      continueExploring: "Continuer à explorer",
      ctaHeadline: "Vous prévoyez de constituer une équipe en",
      ctaBody: "IWNT combine technologie, opérations de main-d'œuvre et expertise locale pour soutenir les organisations qui s'implantent et opèrent sur les marchés africains.",
      ctaTalkToTeam: "Parler à notre équipe →",
      ctaExplorePrefix: "Explorer",
      topics: {
        hiring: "Recrutement",
        payroll: "Paie",
        socialSecurity: "Sécurité Sociale",
        compliance: "Conformité",
        contracts: "Contrats de Travail",
        onboarding: "Intégration",
      }
    },
    resourcesPage: {
      eyebrow: "ACTUALITÉS & RESSOURCES",
      headline: "L'intelligence RH pour de meilleures décisions.",
      subtitle: "Des informations pratiques, des connaissances du marché et des ressources pour aider les organisations à gérer le recrutement, les opérations de personnel, la paie et la conformité sur les marchés africains et internationaux.",
      searchPlaceholder: "Rechercher un sujet, un pays ou un mot-clé...",
      newGuideLabel: "Nouveau Guide",
      payrollWestAfrica: "La paie en Afrique de l'Ouest",
      featuredGuideLabel: "Guide en Vedette",
      cameroonLabel: "Cameroun",
      categorySocialSecurity: "Sécurité Sociale",
      featuredTitle: "Navigation dans l'immatriculation à la CNPS au Cameroun",
      featuredDesc: "Un guide complet pour les employeurs sur les obligations de sécurité sociale, les procédures d'immatriculation et les exigences de conformité continue.",
      regTitle: "Immatriculation",
      regDesc: "Processus étape par étape",
      contributionsTitle: "Cotisations",
      contributionsDesc: "Taux et calculs",
      readFullGuide: "Lire le guide complet",
      features: {
        practical: { title: "Pratique et Fiable", desc: "Informations exploitables et à jour de la part d'experts locaux." },
        market: { title: "Spécifique au Marché", desc: "Conseils par pays adaptés aux réglementations locales." },
        employers: { title: "Conçu pour les Employeurs", desc: "Créé pour les entreprises qui recrutent et gèrent des équipes en Afrique." },
        updated: { title: "Toujours à Jour", desc: "Nous surveillons les changements pour que vous restiez en conformité et confiant." }
      },
      ctaHeadline: "Besoin d'aide pour un marché ou un défi de main-d'œuvre spécifique ?",
      ctaSubtitle: "Nos experts sont là pour vous aider à naviguer, croître et réussir à travers l'Afrique.",
      ctaButton: "Devenez Partenaire",
      filters: {
        all: "Tous",
        marketGuides: "Guides marchés",
        hiring: "Recrutement",
        payroll: "Paie",
        compliance: "Conformité",
        workforce: "Effectifs",
        technology: "Technologie",
        leadership: "Leadership"
      },
      resourceTypes: {
        featuredInsight: "Article à la une",
        marketGuide: "Guide marché",
        workforceInsight: "Article RH",
        compliance: "Conformité",
        payroll: "Paie",
        expansion: "Expansion",
        comingSoon: "À venir"
      },
      ctaLabels: {
        exploreInsight: "Explorer l'article",
        readGuide: "Lire le guide",
        readArticle: "Lire l'article",
        viewAllResources: "Voir toutes les ressources",
        exploreByMarket: "Explorer par marché",
        viewAllMarkets: "Voir tous les marchés",
        moreResourcesComingSoon: "D'autres ressources bientôt disponibles"
      },
      countryNames: {
        cameroon: "Cameroun",
        senegal: "Sénégal",
        coteDIvoire: "Côte d’Ivoire",
        drc: "RDC",
        ghana: "Ghana",
        kenya: "Kenya"
      },
      readTime: "10 min de lecture",
      cnpsArticle: {
        intro: "Une introduction pratique pour les employeurs qui constituent et gèrent des équipes au Cameroun.",
        toc: {
          overview: "Aperçu",
          whatIsCnps: "Qu'est-ce que la CNPS ?",
          employerResp: "Responsabilités de l'employeur",
          employeeReg: "Immatriculation des employés",
          contributions: "Cotisations",
          declarations: "Déclarations et documents"
        },
        content: {
          overviewTitle: "Aperçu",
          overviewBody: "La Caisse Nationale de Prévoyance Sociale (CNPS) est le fonds national de sécurité sociale du Cameroun. L'immatriculation et la conformité continue avec la CNPS sont des exigences fondamentales pour toute entité employant du personnel au Cameroun.",
          whatIsCnpsTitle: "Qu'est-ce que la CNPS ?",
          whatIsCnpsBody: "La CNPS gère le système de sécurité sociale au Cameroun, couvrant les allocations familiales, les risques professionnels (accidents du travail et maladies professionnelles) ainsi que les pensions de vieillesse, d'invalidité et de survivants.",
          statutoryTitle: "Taux de cotisation et plafonds",
          statutoryBody: "Les taux de cotisation CNPS, plafonds salariaux et montants de pénalités sont fixés par la réglementation camerounaise de sécurité sociale et les lois de finances. Confirmez toujours les taux et plafonds en vigueur pour l'exercice en cours auprès de la CNPS ou d'un conseil local qualifié avant toute déclaration.",
          employerRespTitle: "Responsabilités de l'employeur",
          employerRespIntro: "En tant qu'employeur au Cameroun, vous avez l'obligation légale de :",
          employerRespList1: "Immatriculer votre entreprise à la CNPS dès l'embauche de votre premier employé.",
          employerRespList2: "Déclarer chaque nouvel employé à la CNPS.",
          employerRespList3: "Calculer, retenir et payer les cotisations de sécurité sociale de l'employeur et de l'employé.",
          employerRespList4: "Soumettre des déclarations de paie régulières (DIPE) dans des délais strictement appliqués.",
          employeeRegTitle: "Immatriculation des employés",
          employeeRegBody: "Chaque travailleur doit être immatriculé à la CNPS. Si un employé possède déjà un numéro CNPS d'un emploi précédent, le nouvel employeur doit déclarer l'embauche et lier l'employé au compte CNPS de l'entreprise.",
          contributionsTitle: "Cotisations",
          contributionsBody1: "Les cotisations de sécurité sociale au Cameroun sont partagées entre l'employeur et l'employé, bien que l'employeur en supporte la plus grande part (notamment pour les allocations familiales et les risques professionnels, qui sont exclusivement à la charge de l'employeur).",
          contributionsNote: "Remarque : Les répartitions exactes en pourcentage et les plafonds doivent être vérifiés par rapport aux lois de finances en vigueur pour l'exercice actif.",
          declarationsTitle: "Déclarations et documents",
          declarationsBody: "Des déclarations mensuelles ou trimestrielles (selon la taille/structure de l'entreprise) doivent être soumises via le portail en ligne de la CNPS. Le défaut de soumission de la DIPE (Déclaration Individuelle des Paiements des Employés) à temps entraîne des pénalités immédiates."
        }
      }
    },
    aboutPage: {
      hero: {
        eyebrow: "À PROPOS D’IWNT",
        headlineLine1: "Forts de notre expérience,",
        headlineLine2: "Nous construisons",
        headlineLine2Emphasis: "l’avenir.",
        body: "Intel Workforce Network Technologies Ltd est l’entreprise technologique derrière IWNT. Fondée en 2026 au DIFC (Dubaï), nous nous appuyons sur plus de dix ans d’opérations RH en Afrique via IntelHRC et Intel Outsourcing Services. Pré-amorçage, partenaires invités.",
        status: "● PRE-SEED · FONDÉE EN 2026 · DIFC, DUBAÏ",
      },
      identity: {
        legalName: "Intel Workforce Network Technologies Ltd",
        founded: "Fondée en 2026",
        hq: "DIFC Innovation One, Dubaï, EAU",
        stage: "Pre-seed · Partenaires invités",
      },
      founder: {
        label: "FONDATEUR & CEO",
        name: "Derick Fonderson",
        role: "Fondateur & Directeur Général",
        body: "Derick Fonderson porte la mission d’IWNT : transformer des années d’expérience opérationnelle RH en Afrique en un logiciel connecté pour les organisations qui recrutent et gèrent des équipes sur le continent.",
      },
      metrics: {
        val1: "2026",
        label1: "Fondée au DIFC",
        val2: "8",
        label2: "Marchés du groupe (IntelHRC)",
        val3: "Pre-seed",
        label3: "Stade · partenaires invités",
      },
      traction: {
        eyebrow: "PREUVES DE TRACTION",
        headline: "Ce qui est en place aujourd’hui.",
        items: [
          {
            title: "Produit en développement",
            body: "Première version de la plateforme en cours pour les parcours recruter, intégrer, gérer et payer.",
          },
          {
            title: "Empreinte opérationnelle africaine",
            body: "Le groupe parent IntelHRC et la sœur Intel Outsourcing Services apportent plus de 10 ans de présence opérationnelle sur les marchés africains ; IWNT construit la couche logicielle.",
          },
          {
            title: "Connaissance des marchés",
            body: "Ressources pays publiées, notamment un guide CNPS Cameroun pour les employeurs.",
          },
          {
            title: "Partenaires invités",
            body: "Les organisations à Dubaï et à l’international peuvent demander un pilote ou rejoindre la liste d’attente.",
          },
        ],
      },
      architecture: {
        eyebrow: "CLOUD ET SÉCURITÉ",
        headline: "Comment nous prévoyons de monter en charge.",
        body: "À mesure que le produit mûrit, l’infrastructure cloud (dont AWS) soutiendra l’hébergement applicatif sécurisé, le stockage de données, l’automatisation des workflows, les API et le reporting multi-marchés. Nous n’exagérons pas des charges de production qui ne sont pas encore en service.",
        points: [
          "Gestion sécurisée des données RH multi-pays",
          "API évolutives et automatisation des workflows",
          "Stockage documentaire et accès par rôle",
          "Analytique et reporting opérationnel",
        ],
      },
      credibility: {
        eyebrow: "ENREGISTRÉ AU DIFC · TOURNÉ VERS L'AFRIQUE · PORTÉE MONDIALE",
        headlineLine1: "Construit à Dubaï.",
        headlineLine2: "Connecté à l'Afrique.",
        body: "IWNT est enregistré au DIFC et connecté à l'écosystème Ignyte, nous offrant une base d'innovation mondiale pour des solutions RH conçues pour l'Afrique et les marchés émergents.",
        card1Title: "Enregistrement DIFC",
        card1Body: "Une base solide pour l'innovation et les affaires à Dubaï.",
        card2Title: "Écosystème Ignyte",
        card2Body: "Connecté à une communauté mondiale d'innovation.",
        closingLine: "Fondation à Dubaï. Expertise africaine. Portée internationale.",
      },
      vision: {
        eyebrow: "L’EXPÉRIENCE RENCONTRE LA TECHNOLOGIE",
        headlineLine1: "Ancré sur le terrain.",
        headlineLine2: "Conçu pour",
        headlineLine2Emphasis: "évoluer.",
        body: "IWNT réunit l’expérience RH d’IntelHRC et d’Intel Outsourcing Services avec une nouvelle plateforme technologique conçue pour aider les organisations à opérer plus efficacement sur les marchés africains.",
      },
      heritage: {
        eyebrow: "PRÉSENCE OPÉRATIONNELLE · 10+ ANS",
        headline: "Ancré dans plus de dix ans d’opérations RH en Afrique.",
        body: "IWNT est le bras technologique d’un groupe présent opérationnellement depuis plus de dix ans sur les marchés africains. L’héritage de livraison appartient à nos sociétés sœurs, IntelHRC et Intel Outsourcing Services, tandis qu’IWNT construit la couche logicielle.",
        yearsValue: "10+",
        yearsLabel: "Ans d’opérations",
        links: [
          {
            name: "IntelHRC",
            url: "https://intelhrc.com",
            blurb: "Groupe parent pour les entités opérationnelles et la livraison RH à travers les marchés africains.",
          },
          {
            name: "Intel Outsourcing Services",
            url: "https://inteloutsourcingservices.com",
            blurb: "Société sœur pour l’externalisation et le support opérationnel des organisations qui développent leurs équipes.",
          },
        ],
      },
      cta: "Demander un pilote",
    },
    legal: {
      privacy: {
        title: "Politique de confidentialité",
        updated: "Dernière mise à jour : 15 septembre 2026",
        intro: "Cette Politique de confidentialité explique comment Intel Workforce Network Technologies Ltd (« IWNT », « nous ») collecte et utilise les informations lorsque vous visitez iwnt.ae ou nous contactez.",
        sections: [
          {
            heading: "Qui nous sommes",
            body: "Intel Workforce Network Technologies Ltd est une société enregistrée au DIFC, basée à Innovation One, DIFC, Dubaï, EAU. Contact : info@iwnt.ae.",
          },
          {
            heading: "Informations collectées",
            body: "Lorsque vous soumettez un formulaire de contact ou de liste d’attente, nous collectons les informations fournies (nom, e-mail professionnel, organisation, pays d’intérêt, message). Nous pouvons aussi collecter des données techniques de base (navigateur, pages consultées) pour la sécurité et la performance du site.",
          },
          {
            heading: "Utilisation des informations",
            body: "Nous utilisons les demandes pour y répondre, évaluer l’intérêt pour un partenariat ou un pilote, et améliorer le site et nos services. Nous ne vendons pas les données personnelles.",
          },
          {
            heading: "Base légale et conservation",
            body: "Nous traitons les demandes sur la base de votre consentement et de notre intérêt légitime à répondre aux communications professionnelles. Nous les conservons uniquement aussi longtemps que nécessaire ou comme l’exige la loi.",
          },
          {
            heading: "Partage",
            body: "Nous pouvons partager des informations avec des prestataires qui nous aident pour l’e-mail, l’hébergement ou le CRM, sous obligations de confidentialité appropriées. Nous pouvons divulguer des informations si la loi l’exige.",
          },
          {
            heading: "Cookies",
            body: "Nous utilisons des cookies essentiels au fonctionnement du site (préférence de langue et consentement cookies). Nous n’utilisons pas actuellement de cookies publicitaires tiers. Si nous ajoutons de l’analytique, nous mettrons à jour cette politique et l’avis cookies.",
          },
          {
            heading: "Vos droits",
            body: "Selon le droit applicable, vous pouvez demander l’accès, la correction ou la suppression de vos données personnelles en écrivant à info@iwnt.ae.",
          },
          {
            heading: "Contact",
            body: "Questions confidentialité : info@iwnt.ae. Intel Workforce Network Technologies Ltd, DIFC Innovation One, Dubaï, EAU.",
          },
        ],
      },
      terms: {
        title: "Conditions d'utilisation",
        updated: "Dernière mise à jour : 15 septembre 2026",
        intro: "Ces Conditions d’utilisation régissent l’accès au site IWNT sur iwnt.ae, exploité par Intel Workforce Network Technologies Ltd.",
        sections: [
          {
            heading: "Acceptation",
            body: "En utilisant ce site, vous acceptez ces Conditions. Sinon, veuillez ne pas l’utiliser.",
          },
          {
            heading: "À propos du site",
            body: "Ce site décrit les produits et services IWNT en cours de développement. Le contenu est informatif et ne constitue pas une offre contraignante, un conseil juridique, ni une garantie de disponibilité des fonctionnalités.",
          },
          {
            heading: "Pas de conseil professionnel",
            body: "Les ressources telles que les guides pays sont des informations générales. Les règles d’emploi, de paie et de sécurité sociale évoluent. Vérifiez auprès de conseillers ou autorités compétents avant d’agir.",
          },
          {
            heading: "Propriété intellectuelle",
            body: "Le contenu, la marque et les éléments du site appartiennent à IWNT ou à ses concédants. Toute copie ou redistribution sans autorisation écrite préalable est interdite.",
          },
          {
            heading: "Usage acceptable",
            body: "Vous vous engagez à ne pas détourner le site, tenter d’y accéder sans autorisation, aspirer le contenu à grande échelle, ni soumettre des informations fausses ou nuisibles via les formulaires.",
          },
          {
            heading: "Avertissement",
            body: "Le site est fourni « en l’état ». Dans toute la mesure permise par la loi, IWNT décline les garanties relatives à la disponibilité ininterrompue, à l’exactitude des descriptions prospectives, ou à l’adéquation à un usage particulier.",
          },
          {
            heading: "Limitation de responsabilité",
            body: "Dans toute la mesure permise par la loi, IWNT n’est pas responsable des pertes indirectes ou consécutives résultant de l’usage du site ou de la confiance accordée à son contenu.",
          },
          {
            heading: "Droit applicable",
            body: "Ces Conditions sont régies par le droit du Dubai International Financial Centre (DIFC), sans préjudice des protections consommateurs obligatoires éventuellement applicables.",
          },
          {
            heading: "Contact",
            body: "Questions sur ces Conditions : info@iwnt.ae.",
          },
        ],
      },
    },
    cookie: {
      message: "Nous utilisons des cookies essentiels pour faire fonctionner iwnt.ae (langue et préférences de consentement). Voir notre Politique de confidentialité.",
      accept: "Accepter",
      learnMore: "Politique de confidentialité",
    },
    contactPage: {
      hero: {
        eyebrow: "CONTACTER IWNT",
        headlineLine1: "Construisons l’avenir,",
        headlineLine2Emphasis: "depuis Dubaï et au-delà.",
        body: "Nous accueillons les organisations à Dubaï et à l’international qui souhaitent collaborer avec IWNT alors que nous construisons la prochaine génération d’infrastructure RH connectée.",
      },
      form: {
        fullName: "Nom Complet *",
        workEmail: "E-mail Professionnel *",
        company: "Entreprise / Organisation *",
        countryRegion: "Pays / Région *",
        helpTopic: "Comment pouvons-nous vous aider ? *",
        message: "Message *",
        cta: "Envoyer la demande →",
        validation: {
          name: "Veuillez saisir votre nom.",
          email: "Saisissez une adresse e-mail valide.",
          country: "Sélectionnez un pays ou une région.",
          topic: "Dites-nous comment nous pouvons vous aider.",
        },
        success: {
          headline: "Merci. Votre demande a bien été reçue.",
          body: "Notre équipe l’examinera et vous répondra.",
        },
        error: "Une erreur s’est produite. Veuillez réessayer ou nous écrire directement à info@iwnt.ae.",
        consent: "J’accepte le traitement de mes informations conformément à la",
        topics: {
          pilot: "Demander un pilote",
          waitlist: "Rejoindre la liste d'attente",
          workforce: "Effectifs et Expansion",
          hiring: "Recrutement",
          payroll: "Paie",
          compliance: "Conformité",
          employee: "Gestion des Employés",
          platform: "Plateforme et Partenariats",
          market: "Entrée sur le Marché",
          general: "Demande Générale",
          other: "Autre",
        },
      },
      official: {
        emailLabel: "E-MAIL DIRECT",
        hqLabel: "SIÈGE SOCIAL",
        companyName: "Intel Workforce Network Technologies Ltd.",
        address: "IH-00-01-03-OF-05, Level 3,\nInnovation One, DIFC, Dubai,\nEAU",
      },
      trustStrip: {
        realPeopleTitle: "VRAIES PERSONNES",
        realPeopleDesc: "Parlez à notre équipe.",
        globalMindsetTitle: "ESPRIT MONDIAL",
        globalMindsetDesc: "Soutenir les organisations en Afrique et sur les marchés internationaux.",
        secureEnquiryTitle: "DEMANDE SÉCURISÉE",
        secureEnquiryDesc: "Vos informations ne sont utilisées que pour répondre à votre demande.",
      },
    },
  },
};
