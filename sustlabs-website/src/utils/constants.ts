export const NAV_LINKS = [
  'Ohm OS',
  'Monitoring',
  'Smart DB',
  'Add-ons',
  'Solutions',
  'Support',
] as const

export const MONITORING_PRODUCTS = [
  {
    accent: '#1F9E8C',
    ctaSection: {
      accent: '#4caf53',
      eyebrow: 'PROOF & CTA',
      titleLead: 'Your electricity,',
      titleAccent: 'finally visible.',
      description: 'Live load, bill estimate, and appliance patterns in one simple view.',
      items: [
        'Live Load',
        'Bill Forecast',
        'Appliance View',
        'Daily Timeline',
        'Insight Summary',
        'OTA Updates',
      ],
    },
    description:
      'o3 is the entry point into SustLabs electricity intelligence. It gives homeowners real-time visibility into power usage, appliance behaviour, and energy patterns without installing sensors on every appliance.',
    detailSection: {
      visualColor: '#c96d00',
      items: [
        {
          title: 'Live Power Tracking',
          description: "See your home's current power demand in real time.",
        },
        {
          title: 'Monthly Cost Forecast',
          description: 'Estimate where your bill is heading before it arrives.',
        },
        {
          title: 'Appliance-Level Analytics',
          description: 'Understand appliance usage patterns without appliance-level sensors.',
        },
        {
          title: 'Energy Timeline',
          description: 'See daily, monthly, and yearly views where enabled.',
        },
        {
          title: 'OTA Intelligence',
          description:
            'Receive improved appliance models, new fault libraries, and regional intelligence updates over time.',
        },
      ],
      body: 'The subscription PRD specifically identifies continuous rollout of new appliance signatures, improved fault detection models, and regional wiring pattern intelligence.',
    },
    eyebrow: 'O3 MONITORING',
    featureSection: {
      accent: '#f5a51d',
      eyebrow: 'WHAT IT DOES',
      titleLead: 'Real-time energy',
      titleAccent: 'visibility for everyday homes',
      cards: [
        {
          eyebrow: 'Live Usage',
          title: 'Know your load in real time',
          description: 'See how much electricity your home is using at any moment.',
        },
        {
          eyebrow: 'Appliance Insights',
          title: 'Understand major usage patterns',
          description: 'Identify which appliances contribute most to your energy consumption.',
        },
        {
          eyebrow: 'Bill Clarity',
          title: 'Track cost before the bill arrives',
          description: 'Follow your usage through the month instead of waiting for a surprise.',
        },
      ],
    },
    heroAccent: 'As it happens.',
    heroDescription:
      "o3 turns your home's electrical activity into live insights, helping you understand usage, track costs, and identify the appliances that matter most.",
    heroKicker: 'o3 monitoring',
    heroLead: 'See what your home is using.',
    heroActions: [
      {
        label: 'Get started',
        href: '#contact',
        variant: 'primary',
      },
      {
        label: 'See features',
        href: '#features',
        variant: 'secondary',
      },
    ],
    navLabel: 'o3 - Energy Visibility',
    path: '/monitoring/o3-energy-visibility',
    title: 'o3 makes electricity visible',
    useCaseSection: {
      accent: '#ad5849',
      eyebrow: 'IDEAL USE',
      titleLead: 'Built for homes',
      titleAccent: 'that want clarity',
      cards: [
        {
          number: '01.',
          title: 'Bill Awareness',
          description: 'For users who want to know whether they are on track for a higher bill.',
        },
        {
          number: '02.',
          title: 'Appliance Discovery',
          description: 'For homes that want to understand which appliances drive consumption.',
        },
        {
          number: '03.',
          title: 'Energy Habits',
          description: 'For residents who want simple nudges to reduce waste.',
        },
        {
          number: '04.',
          title: 'Smart Home Entry Point',
          description:
            'For developers who want to offer a clean, understandable smart-energy experience.',
        },
      ],
    },
  },
  {
    accent: '#4caf53',
    badge: 'SAFETY AI',
    ctaSection: {
      accent: '#4caf53',
      eyebrow: 'PROOF & CTA',
      titleLead: 'Your safety,',
      titleAccent: 'finally visible.',
      description: 'Fault signals, risk context, and guidance in one simple view.',
      items: [
        'Risk Signals',
        'Fault Forecast',
        'Load Stress',
        'Safety Timeline',
        'Alert Summary',
        'OTA Updates',
      ],
    },
    description:
      'o4 watches electrical signatures for unstable behaviour, abnormal load patterns, and early warning signs that need attention before they become expensive or unsafe.',
    detailSection: {
      visualColor: '#4caf53',
      items: [
        {
          title: 'Electrical Risk Tracking',
          description: 'See abnormal electrical behaviour as patterns become clear.',
        },
        {
          title: 'Fault Pattern Forecast',
          description: 'Estimate which recurring signals need attention before they escalate.',
        },
        {
          title: 'Load Stress Analytics',
          description: 'Understand overload and unstable usage patterns across the home.',
        },
        {
          title: 'Safety Timeline',
          description: 'Review daily, monthly, and yearly safety events where enabled.',
        },
        {
          title: 'OTA Safety Intelligence',
          description:
            'Receive improved fault models, new anomaly libraries, and regional safety updates over time.',
        },
      ],
      body: 'The safety layer can improve over time through new fault signatures, better detection confidence, and regional wiring pattern intelligence.',
    },
    eyebrow: 'O4 MONITORING',
    featureSection: {
      accent: '#4caf53',
      eyebrow: 'WHAT IT DOES',
      titleLead: 'Electrical safety',
      titleAccent: 'intelligence for active homes',
      cards: [
        {
          eyebrow: 'Anomaly Alerts',
          title: 'Find abnormal electrical behaviour',
          description: 'Translate unstable signatures into clear safety signals.',
        },
        {
          eyebrow: 'Risk Patterns',
          title: 'Watch repeated stress events',
          description: 'Spot overload, voltage, and appliance patterns that deserve attention.',
        },
        {
          eyebrow: 'Guidance',
          title: 'Know what needs action',
          description: 'Give residents practical next steps before a fault becomes costly.',
        },
      ],
    },
    heroAccent: 'Before it escalates.',
    heroDescription:
      'o4 adds electrical safety intelligence to the monitoring layer, translating hidden anomalies into clear alerts and practical next steps.',
    heroKicker: 'o4 monitoring',
    heroLead: 'Spot electrical risk.',
    heroActions: [
      {
        label: 'Get started',
        href: '#contact',
        variant: 'primary',
      },
      {
        label: 'See features',
        href: '#features',
        variant: 'secondary',
      },
    ],
    navLabel: 'o4 - Electrical Safety Intelligence',
    path: '/monitoring/o4-electrical-safety',
    title: 'o4 makes safety intelligent',
    useCaseSection: {
      accent: '#ad5849',
      eyebrow: 'IDEAL USE',
      titleLead: 'Built for homes',
      titleAccent: 'that want safer power',
      cards: [
        {
          number: '01.',
          title: 'Risk Awareness',
          description: 'For residents who want early warnings from hidden electrical patterns.',
        },
        {
          number: '02.',
          title: 'Preventive Care',
          description: 'For homeowners who prefer planned action over emergency repairs.',
        },
        {
          number: '03.',
          title: 'Load Safety',
          description: 'For homes with high-demand appliances and changing daily loads.',
        },
        {
          number: '04.',
          title: 'Service Support',
          description: 'For teams that need clearer context before sending technicians.',
        },
      ],
    },
  },
  {
    accent: '#24a595',
    badge: 'SMART DB',
    ctaSection: {
      accent: '#4caf53',
      eyebrow: 'PROOF & CTA',
      titleLead: 'Your circuits,',
      titleAccent: 'finally visible.',
      description: 'Circuit status, load priority, and automation readiness in one simple view.',
      items: [
        'Circuit Load',
        'Backup Priority',
        'Appliance Zones',
        'Control Timeline',
        'Action Summary',
        'OTA Updates',
      ],
    },
    description:
      'o5 extends monitoring into the distribution board, bringing circuit-level visibility, autonomous control, backup orchestration, and edge decisions into one connected system.',
    detailSection: {
      visualColor: '#24a595',
      items: [
        {
          title: 'Circuit Power Tracking',
          description: "See your home's circuit-level demand in real time.",
        },
        {
          title: 'Backup Cost Awareness',
          description: 'Estimate how load priority affects runtime and comfort.',
        },
        {
          title: 'Circuit-Level Analytics',
          description: 'Understand zone usage patterns directly from the distribution board.',
        },
        {
          title: 'Control Timeline',
          description: 'See daily, monthly, and yearly control events where enabled.',
        },
        {
          title: 'OTA Control Intelligence',
          description:
            'Receive improved control models, new circuit logic, and regional infrastructure updates over time.',
        },
      ],
      body: 'The Smart DB layer can improve through new circuit signatures, better control policies, and regional infrastructure pattern intelligence.',
    },
    eyebrow: 'O5 MONITORING',
    featureSection: {
      accent: '#24a595',
      eyebrow: 'WHAT IT DOES',
      titleLead: 'Circuit-level visibility',
      titleAccent: 'for autonomous control',
      cards: [
        {
          eyebrow: 'Circuit Status',
          title: 'See each electrical zone clearly',
          description: 'Track load, status, and circuit health from the distribution board.',
        },
        {
          eyebrow: 'Automation',
          title: 'Prioritize important loads',
          description: 'Coordinate backup, isolation, and control decisions close to the panel.',
        },
        {
          eyebrow: 'Edge Decisions',
          title: 'Act without waiting on the cloud',
          description: 'Keep critical control logic local for faster electrical response.',
        },
      ],
    },
    heroAccent: 'Automatically.',
    heroDescription:
      'o5 and Smart DB move from observation to control, letting homes prioritize loads, isolate risks, and coordinate energy decisions close to the panel.',
    heroKicker: 'o5 monitoring',
    heroLead: 'Control the electrical backbone.',
    heroActions: [
      {
        label: 'Get started',
        href: '#contact',
        variant: 'primary',
      },
      {
        label: 'See features',
        href: '#features',
        variant: 'secondary',
      },
    ],
    navLabel: 'o5 - Smart DB / Autonomous Control',
    path: '/monitoring/o5-smart-db',
    title: 'o5 makes the DB autonomous',
    useCaseSection: {
      accent: '#ad5849',
      eyebrow: 'IDEAL USE',
      titleLead: 'Built for homes',
      titleAccent: 'that want intelligent control',
      cards: [
        {
          number: '01.',
          title: 'Smart DB Upgrades',
          description: 'For homes adding intelligence to the electrical backbone.',
        },
        {
          number: '02.',
          title: 'Backup Planning',
          description: 'For residents who want smarter prioritization during outages.',
        },
        {
          number: '03.',
          title: 'Circuit Control',
          description: 'For projects that need visibility and action at circuit level.',
        },
        {
          number: '04.',
          title: 'Future DER',
          description: 'For solar, battery, EV, and inverter-ready home infrastructure.',
        },
      ],
    },
  },
] as const

export const HERO_CONTENT = {
  eyebrow: 'OHM OS BY SUSTLABS',
  titleLead: 'Understand your electricity',
  titleAccent: 'in real time',
  description:
    "See what's using power, predict your bill, and detect electrical risks without changing your wiring.",
  actions: [
    {
      label: 'Get Ohm Assistant',
      href: '#assistant',
      variant: 'primary',
    },
    {
      label: 'Explore Ohm OS',
      href: '#ohm-os',
      variant: 'secondary',
    },
  ],
} as const

export const INTELLIGENCE_CONTENT = {
  eyebrow: 'THE CORE PROMISE',
  titleLead: 'No blind spots.',
  titleAccent: 'No surprises.',
  description: 'Ohm turns invisible electrical activity into clear, useful intelligence.',
} as const

export const LIVE_INSIGHTS = [
  {
    title: 'Live Load',
    metric: '2.8 kW',
    description: 'AC, geyser, and kitchen load detected.',
  },
  {
    title: 'Bill Forecast',
    metric: '₹3,856',
    description: 'Projected month-end energy cost.',
  },
  {
    title: 'Safety Status',
    metric: 'Stable',
    description: 'No critical anomaly detected.',
  },
  {
    title: 'Appliance Insights',
    metric: 'AC efficiency',
    description: 'Service may reduce daily use.',
  },
] as const

export const CORE_FEATURES = [
  {
    title: 'Live Tracking',
    description: 'See electricity usage as it happens.',
  },
  {
    title: 'Bill Clarity',
    description: 'Know your cost before the bill arrives.',
  },
  {
    title: 'Waste Detection',
    description: 'Find hidden standby loads and inefficient appliances.',
  },
  {
    title: 'Risk Alerts',
    description: 'Spot unusual patterns before they become issues.',
  },
] as const

export const SIGNAL_LAYER_CONTENT = {
  eyebrow: 'INTELLIGENCE LAYER',
  titleLead: "Your home's electrical heartbeat,",
  titleAccent: 'decoded.',
  description:
    'Ohm OS reads high-frequency electrical signals and translates them into appliance insights, safety alerts, predictions, and decisions.',
} as const

export const SIGNAL_STEPS = [
  {
    number: '01.',
    title: 'Signal',
    description: 'Electrical waveform data from the main panel.',
  },
  {
    number: '02.',
    title: 'Sense',
    description: 'Voltage, current, power factor, harmonics, frequency, and fault signatures.',
  },
  {
    number: '03.',
    title: 'Understand',
    description: 'Appliance disaggregation, anomaly detection, and behavioural pattern recognition.',
  },
] as const

export const SETUP_CONTENT = {
  eyebrow: 'BUILT FOR REAL HOMES',
  titleLead: 'Sophisticated technology.',
  titleAccent: 'Simple setup.',
  description: 'Works with existing wiring. Connects over Wi-Fi. Managed through the Ohm App.',
} as const

export const SETUP_POINTS = [
  {
    number: '01.',
    title: 'No appliance sensors',
    description: 'Appliance intelligence without installing sensors on every device.',
  },
  {
    number: '02.',
    title: 'Existing wiring',
    description: 'Designed around real homes, not ideal lab environments.',
  },
  {
    number: '03.',
    title: 'App + Web',
    description: 'For residents, installers, support, and enterprise users.',
  },
  {
    number: '03.',
    title: 'OTA Intelligence',
    description: 'New signatures, models, and safety logic improve over time.',
  },
] as const

export const LAYERS_CONTENT = {
  eyebrow: 'ONE SYSTEM, MULTIPLE LAYERS',
  titleLead: 'One system.',
  titleAccent: 'Multiple layers.',
  description:
    'SustLabs begins inside homes, but Ohm OS is built to scale across buildings, utilities, OEMs, and infrastructure.',
} as const

export const SYSTEM_LAYERS = [
  {
    title: 'Ohm Assistant',
    description:
      'The consumer-facing app for energy visibility, safety alerts, appliance intelligence, and bill clarity.',
    tone: 'teal',
  },
  {
    title: 'Ohm Native',
    description:
      'The core intelligence and data exchange layer for dashboards, APIs, utilities, and enterprise workflows.',
    tone: 'violet',
  },
  {
    title: 'Ohm Inside',
    description:
      'Embedded intelligence for meters, panels, OEM products, and connected-home ecosystems.',
    tone: 'amber',
  },
  {
    title: 'Smart DB',
    description:
      'The physical infrastructure layer for circuit-level visibility, control, and future automation.',
    tone: 'coral',
  },
] as const

export const SMART_DB_CONTENT = {
  eyebrow: 'SMART DB / o5',
  title: 'A distribution board that thinks...',
  description:
    'o5 and Smart DB bring intelligence from the meter into the electrical backbone - enabling circuit-level tracking, safety, automation, backup orchestration, and edge decision-making.',
} as const

export const SMART_DB_FEATURES = [
  {
    title: 'Circuit Intelligence',
    description: 'Track circuit status, load, voltage, current, and temperature.',
    accent: 'mint',
  },
  {
    title: 'Arc Safety',
    description: 'Detect arc events and issue high-confidence isolation commands.',
    accent: 'lavender',
  },
  {
    title: 'Backup Orchestration',
    description: 'Prioritize critical loads during grid outages.',
    accent: 'cream',
  },
  {
    title: 'DER Ready',
    description: 'Built for solar, batteries, EV charging, and inverter integration.',
    accent: 'blush',
  },
  {
    title: 'Local Autonomy',
    description: 'Built for solar, batteries, EV charging, and inverter integration.',
    accent: 'ice',
  },
] as const

export const ORA_CONTENT = {
  eyebrow: 'ORA',
  titleLead: 'Electricity intelligence,',
  titleAccent: 'visible in the room.',
  description:
    "Ora is a calm, wall-mounted intelligence display that makes Ohm's invisible value continuously visible.",
} as const

export const ORA_CARDS = [
  {
    title: 'Ambient by Default',
    description: 'A passive, always-on presence - not another dashboard.',
    tone: 'teal',
    layout: 'wide',
  },
  {
    title: 'Clock Form Factor',
    description: 'A familiar object that earns wall space without explanation.',
    tone: 'blue',
    layout: 'split',
  },
  {
    title: 'Energy Awareness',
    description: 'Glanceable usage, appliance, and safety signals.',
    tone: 'violet',
    layout: 'split',
  },
  {
    title: 'Developer Value',
    description: 'A tangible smart-infrastructure artifact for modern homes.',
    tone: 'amber',
    layout: 'wide',
  },
  {
    title: 'No Screen Fatigue',
    description: 'Minimal density, rare interruptions, and automatic return to baseline.',
    tone: 'coral',
    layout: 'wide',
  },
] as const

export const ENTERPRISE_CONTENT = {
  eyebrow: 'ENTERPRISE & ECOSYSTEM',
  titleLead: 'Powering the',
  titleAccent: 'next generation of energy systems.',
  description:
    'Ohm OS helps utilities, developers, OEMs, facility managers, and energy partners build safer, more efficient, and data-driven infrastructure.',
} as const

export const ENTERPRISE_AUDIENCES = [
  {
    number: '01.',
    title: 'Utilities',
    description: 'Consent-led visibility into power quality, faults, events, and recommendations.',
  },
  {
    number: '02.',
    title: 'Developers',
    description:
      'Smart electrical infrastructure that improves resident experience and project differentiation.',
  },
  {
    number: '03.',
    title: 'OEMs',
    description: 'Embedded intelligence for meters, appliances, panels, and energy products.',
  },
  {
    number: '04.',
    title: 'Facility Managers',
    description: 'Multi-site monitoring, alerts, audits, and safety workflows.',
  },
  {
    number: '05.',
    title: 'Insurance / AMC Partners',
    description: 'Data-backed risk, servicing, health, and protection layers.',
  },
] as const

export const INFRASTRUCTURE_CONTENT = {
  title: 'Built for real buildings and critical infrastructure',
  description:
    'From homes to fire pump rooms, SustLabs brings visibility, safety intelligence, and operational confidence to the places electricity matters most.',
} as const

export const INFRASTRUCTURE_USE_CASES = [
  {
    title: 'Fire Pump Rooms',
    description: 'Always-on monitoring for mission-critical fire infrastructure.',
  },
  {
    title: 'Real Estate Developers',
    description: 'A premium intelligence layer for safer, smarter homes.',
  },
  {
    title: 'Warehouses',
    description: 'Monitor high-load environments and catch risks early.',
  },
  {
    title: 'Data Centres',
    description: 'Power-quality and anomaly intelligence for critical operations.',
  },
  {
    title: 'Retail / QSR',
    description: 'One view across distributed sites, appliances, and energy costs.',
  },
] as const

export const SOVEREIGNTY_CONTENT = {
  eyebrow: 'USER SOVEREIGNTY',
  titleLead: 'Your data.',
  titleAccent: 'Your control.',
  description:
    'Ohm OS is built around user primacy. Data sharing is consent-led. Control remains user-governed.',
} as const

export const SOVEREIGNTY_CARDS = [
  {
    eyebrow: 'CONSENT FIRST',
    title: 'Users authorize every third-party data connection.',
    description: '',
    tone: 'teal',
    size: 'large',
  },
  {
    eyebrow: 'DATA PIPELINE',
    title: 'Utilities and partners receive only approved data.',
    description: '',
    tone: 'violet',
    size: 'regular',
  },
  {
    eyebrow: 'CONTROL PIPELINE',
    title: 'Tripping and actuation remain owned by the user.',
    description: '',
    tone: 'amber',
    size: 'regular',
  },
  {
    eyebrow: 'INSTANT REVOCATION',
    title: 'Data access can be revoked through Ohm Assistant.',
    description: '',
    tone: 'coral',
    size: 'regular',
  },
  {
    eyebrow: 'AUDIT LOGS',
    title: 'Every access, action, threshold, and event is traceable.',
    description: '',
    tone: 'blue',
    size: 'regular',
  },
] as const

export const IMPACT_CONTENT = {
  eyebrow: 'PROOF & CTA',
  titleLead: 'Proven intelligence.',
  titleAccent: 'Real impact.',
  description:
    'SustLabs is building the intelligence layer for safer, smarter, and more efficient electricity.',
} as const

export const IMPACT_METRICS = [
  {
    value: '12k+',
    label: 'Deployments',
    variant: 'primary',
  },
  {
    value: '17.5%',
    label: 'Electricity savings observed',
    variant: 'primary',
  },
  {
    value: '4',
    label: 'Avoided fires',
    variant: 'primary',
  },
  {
    value: 'Real-time',
    label: 'Fault and power-quality intelligence',
    variant: 'secondary',
  },
  {
    value: 'Edge + Cloud',
    label: 'Designed for resilience, scale, and continuous improvement',
    variant: 'secondary',
  },
] as const

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: 'HOW IT WORKS',
  titleLead: 'One connection.',
  titleAccent: 'Full visibility.',
  description:
    "Installed at your main panel, Ohm learns your home's electrical signature and decodes it using proprietary AI.",
} as const

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01.',
    title: 'Install',
    description: 'Connect Ohm at the electrical panel.',
  },
  {
    number: '02.',
    title: 'Learn',
    description: 'Capture electrical behaviour across appliances and circuits.',
  },
  {
    number: '03.',
    title: 'Detect',
    description: 'Identify anomalies, faults, usage patterns, and inefficiencies.',
  },
  {
    number: '04.',
    title: 'Guide',
    description: 'Send alerts, insights, recommendations, and control signals where supported.',
  },
] as const

export const SAFETY_CONTENT = {
  eyebrow: 'SAFETY FIRST',
  titleLead: 'Built to detect risks',
  titleRest: 'before they become incidents',
  description:
    'Ohm separates detection, notification, and control — so every event is logged, every alert is explainable, and every action remains user-governed.',
} as const

export const SAFETY_CARDS = [
  {
    title: 'Arc Detection',
    description: 'Detect series and parallel arc signatures.',
  },
  {
    title: 'Neutral Loss',
    description: 'Identify dangerous imbalance conditions.',
  },
  {
    title: 'Earth Leakage',
    description: 'Surface leakage risks and insulation problems.',
  },
  {
    title: 'Overload Signals',
    description: 'Catch persistent overload patterns before failure.',
  },
] as const
