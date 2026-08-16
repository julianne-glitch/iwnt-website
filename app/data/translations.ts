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
    cta: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    headlineLine2Emphasis: string;
    body: string;
    status: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trustedHeading: string;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
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
    block2ClientMsg: string;
    block2IwntMsg: string;
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
    block2Node2: string;
    block2Node3: string;
    block2Connected: string;
    block2TaglineMain: string;
    block2TaglineSub: string;
    mobileIntakeProcessing: string;
    mobileDashboardEmployees: string;
    mobileDashboardCountries: string;
    mobileDashboardPayroll: string;
    mobileDashboardCompliance: string;
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
    vision: {
      eyebrow: string;
      headlineLine1: string;
      headlineLine2: string;
      headlineLine2Emphasis: string;
      body: string;
    };
    cta: string;
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
      cta: "Partner With Us",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "BUILDING AFRICA'S WORKFORCE INFRASTRUCTURE",
      headlineLine1: "Connecting ambitions.",
      headlineLine2: "Building",
      headlineLine2Emphasis: "what's next for Africa.",
      body: "IWNT is building a connected workforce platform designed to help organisations hire, onboard, manage and pay teams across African markets — combining technology with deep local expertise.",
      status: "PLATFORM IN DEVELOPMENT · EARLY PARTNERS WELCOME",
      primaryCta: "Partner With Us",
      secondaryCta: "Explore Our Vision",
    },
    trustedHeading: "TRUSTED BY CLIENTS & STRATEGIC PARTNERS",
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
        "We're building the IWNT platform to bring workforce processes, documents and operational data into one connected environment — giving organisations greater visibility across their African operations.",
      block1Status: "PLATFORM PREVIEW · IN DEVELOPMENT",
      block2Eyebrow: "POWERFUL TECHNOLOGY. HUMAN SUPPORT.",
      block2Headline: "Technology with people behind it.",
      block2Subtitle: "Human + technology connection",
      block2Body:
        "The platform is being designed to simplify workforce operations, while local experts remain available to support organisations when real-world situations need human judgement.",
      block2ClientMsg: "Can we onboard 24 employees in Cameroon next month?",
      block2IwntMsg: "We've got you. Our team is on it.",
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
      block2Node2: "Cameroon team matched 🇨🇲",
      block2Node3: "Local expert assigned",
      block2Connected: "● Connected",
      block2TaglineMain: "Technology handles the routing. People handle the work.",
      block2TaglineSub: "Connected platform · Local expertise · Human support",
      mobileIntakeProcessing: "Files → IWNT",
      mobileDashboardEmployees: "Total Employees",
      mobileDashboardCountries: "Active Countries",
      mobileDashboardPayroll: "Payroll Processed",
      mobileDashboardCompliance: "Compliance",
    },
    coverageSection: {
      eyebrow: "LOCAL EXPERTISE. GLOBAL REACH.",
      headlinePart1: "AFRICA,",
      headlinePart2: "CONNECTED.",
      headlinePart3: "Globally enabled.",
      subtitle: "Local expertise. Global reach.",
      description:
        "IWNT brings together technology, local expertise and international coordination to help organisations hire, manage and support their people across Africa and beyond.",
      card1Title: "Local expertise",
      card1Sub: "People on the ground who understand local realities.",
      card2Title: "Workforce operations",
      card2Sub: "Connected support across the employee lifecycle.",
      card3Title: "Compliance support",
      card3Sub: "Local knowledge aligned with international standards.",
      card4Title: "Connected technology",
      card4Sub: "One platform. Better visibility. Smarter coordination.",
      bottomGlobalTitle: "AFRICA AT THE CORE. CONNECTED BEYOND.",
      bottomGlobalSub: "Supporting organisations across African and international markets.",
      legendIwnt: "IWNT presence",
      legendAfrican: "African market",
      cmdTitle: "AFRICA COMMAND VIEW",
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
      ctaButton: "Partner With Us",
      status: "CONNECTED PLATFORM IN DEVELOPMENT · EARLY PARTNERS WELCOME",
      locations: "Headquartered in Dubai • Operating across Africa",
    },
    footer: {
      description: "IWNT is building connected workforce infrastructure to help organisations hire, manage and support teams across African markets and beyond.",
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
      heroBody: "Practical guidance for organisations hiring, paying and managing teams across African markets — from local employment requirements to payroll, social security and compliance.",
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
          statutoryTitle: "Placeholder: Statutory Data",
          statutoryBody: "[Current statutory information such as contribution rates, exact salary ceilings, and penalty structures to be verified before publication.]",
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
        body: "IWNT is building connected workforce infrastructure for organisations managing teams across African markets — combining technology with real operational experience.",
        status: "● PLATFORM IN DEVELOPMENT",
      },
      founder: {
        label: "FOUNDER & CEO",
        name: "Derick Nzo Fonderson",
        role: "Founder & Chief Executive Officer",
        body: "Leading IWNT's vision to turn years of workforce experience into connected technology for the future of work.",
      },
      metrics: {
        val1: "10+",
        label1: "Years of group experience",
        val2: "8",
        label2: "African markets",
        val3: "1",
        label3: "Connected vision",
      },
      vision: {
        eyebrow: "EXPERIENCE MEETS TECHNOLOGY",
        headlineLine1: "Built on the ground.",
        headlineLine2: "Designed to",
        headlineLine2Emphasis: "scale.",
        body: "IWNT brings together the workforce experience behind IntelHRC and Intel Outsourcing Services with a new technology platform designed to help organisations operate more effectively across African markets.",
      },
      cta: "Talk To Us Today",
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
          headline: "Thanks — your enquiry has been received.",
          body: "Our team will review it and get back to you.",
        },
        error: "Something went wrong. Please try again or email us directly at info@iwnt.ae.",
        consent: "I agree to the processing of my information in accordance with the Privacy Policy.",
        topics: {
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
      cta: "Devenir partenaire",
      languageLabel: "Langue",
    },
    hero: {
      eyebrow: "NOUS CONSTRUISONS L'INFRASTRUCTURE RH DE L'AFRIQUE",
      headlineLine1: "Connecter les ambitions.",
      headlineLine2: "Construire",
      headlineLine2Emphasis: "l'avenir de l'Afrique.",
      body: "IWNT développe une plateforme RH connectée conçue pour aider les organisations à recruter, intégrer, gérer et rémunérer leurs équipes sur les marchés africains — en associant technologie et expertise locale approfondie.",
      status: "PLATEFORME EN DÉVELOPPEMENT · PARTENAIRES PIONNIERS BIENVENUS",
      primaryCta: "Devenir partenaire",
      secondaryCta: "Découvrir notre vision",
    },
    trustedHeading: "ILS NOUS FONT CONFIANCE",
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
        "Nous développons la plateforme IWNT pour réunir les processus RH, les documents et les données opérationnelles dans un environnement connecté — afin d'offrir aux organisations une meilleure visibilité sur leurs opérations en Afrique.",
      block1Status: "APERÇU DE LA PLATEFORME · EN DÉVELOPPEMENT",
      block2Eyebrow: "UNE TECHNOLOGIE PUISSANTE. UN ACCOMPAGNEMENT HUMAIN.",
      block2Headline: "La technologie, avec l'humain derrière.",
      block2Subtitle: "Connexion entre l'humain et la technologie",
      block2Body:
        "La plateforme est conçue pour simplifier les opérations RH, tout en permettant à des experts locaux d'intervenir lorsque les situations réelles nécessitent une expertise humaine.",
      block2ClientMsg:
        "Pouvons-nous intégrer 24 collaborateurs au Cameroun le mois prochain ?",
      block2IwntMsg: "Nous nous en occupons. Notre équipe est mobilisée.",
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
      block2Node2: "Équipe Cameroun identifiée 🇨🇲",
      block2Node3: "Expert local attribué",
      block2Connected: "● Connecté",
      block2TaglineMain: "La technologie orchestre. Nos experts agissent.",
      block2TaglineSub: "Plateforme connectée · Expertise locale · Accompagnement humain",
      mobileIntakeProcessing: "Fichiers → IWNT",
      mobileDashboardEmployees: "Employés au total",
      mobileDashboardCountries: "Pays actifs",
      mobileDashboardPayroll: "Paie traitée",
      mobileDashboardCompliance: "Conformité",
    },
    coverageSection: {
      eyebrow: "EXPERTISE LOCALE. PORTÉE INTERNATIONALE.",
      headlinePart1: "L'AFRIQUE,",
      headlinePart2: "CONNECTÉE.",
      headlinePart3: "Connectée au monde.",
      subtitle: "Expertise locale. Portée internationale.",
      description:
        "IWNT réunit technologie, expertise locale et coordination internationale pour aider les organisations à recruter, gérer et accompagner leurs équipes en Afrique et au-delà.",
      card1Title: "Expertise locale",
      card1Sub: "Des équipes sur le terrain qui comprennent les réalités locales.",
      card2Title: "Opérations RH",
      card2Sub: "Accompagnement connecté tout au long du cycle de vie de l'employé.",
      card3Title: "Support conformité",
      card3Sub: "Expertise locale alignée sur les standards internationaux.",
      card4Title: "Technologie connectée",
      card4Sub: "Une plateforme. Meilleure visibilité. Coordination optimisée.",
      bottomGlobalTitle: "L’AFRIQUE AU CŒUR. CONNECTÉE AU-DELÀ.",
      bottomGlobalSub: "Au service des organisations sur les marchés africains et internationaux.",
      legendIwnt: "Présence IWNT",
      legendAfrican: "Marché africain",
      cmdTitle: "VUE DE COMMANDEMENT AFRIQUE",
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
      ctaButton: "Devenir partenaire",
      status: "PLATEFORME CONNECTÉE EN DÉVELOPPEMENT · PARTENAIRES PIONNIERS BIENVENUS",
      locations: "Siège social à Dubaï • Présent en Afrique",
    },
    footer: {
      description: "IWNT développe une infrastructure RH connectée pour aider les organisations à recruter, gérer et accompagner leurs équipes sur les marchés africains et au-delà.",
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
      heroBody: "Des conseils pratiques pour les organisations qui recrutent, paient et gèrent des équipes sur les marchés africains — des exigences locales en matière d'emploi à la paie, la sécurité sociale et la conformité.",
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
          statutoryTitle: "Espace réservé : Données statutaires",
          statutoryBody: "[Les informations statutaires actuelles telles que les taux de cotisation, les plafonds salariaux exacts et les structures de pénalités doivent être vérifiées avant publication.]",
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
        body: "IWNT développe une infrastructure RH connectée pour les organisations qui gèrent des équipes sur les marchés africains — en associant technologie et véritable expérience opérationnelle.",
        status: "● PLATEFORME EN DÉVELOPPEMENT",
      },
      founder: {
        label: "FONDATEUR & CEO",
        name: "Derick Nzo Fonderson",
        role: "Fondateur & Directeur Général",
        body: "Il porte la vision d’IWNT : transformer des années d’expérience dans la gestion des effectifs en une technologie connectée pour l’avenir du travail.",
      },
      metrics: {
        val1: "10+",
        label1: "Années d’expérience du groupe",
        val2: "8",
        label2: "Marchés africains",
        val3: "1",
        label3: "Vision connectée",
      },
      vision: {
        eyebrow: "L’EXPÉRIENCE RENCONTRE LA TECHNOLOGIE",
        headlineLine1: "Ancré sur le terrain.",
        headlineLine2: "Conçu pour",
        headlineLine2Emphasis: "évoluer.",
        body: "IWNT réunit l’expérience RH d’IntelHRC et d’Intel Outsourcing Services avec une nouvelle plateforme technologique conçue pour aider les organisations à opérer plus efficacement sur les marchés africains.",
      },
      cta: "Explorer notre présence →",
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
          headline: "Merci — votre demande a bien été reçue.",
          body: "Notre équipe l’examinera et vous répondra.",
        },
        error: "Une erreur s’est produite. Veuillez réessayer ou nous écrire directement à info@iwnt.ae.",
        consent: "J’accepte le traitement de mes informations conformément à la Politique de confidentialité.",
        topics: {
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
