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
    accent: '#145599',
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
    introSection: {
      accent: '#145599',
      titleLead: 'o3 makes electricity',
      titleAccent: 'visible',
      descriptions: [
        'o3 is the entry point into SustLabs electricity intelligence. It gives homeowners real-time visibility into power usage, appliance behaviour, and energy patterns without installing sensors on every appliance.',
      ],
    },
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
    accent: '#145599',
    badge: 'SAFETY AI',
    ctaSection: {
      accent: '#4caf53',
      accentTarget: 'lead',
      eyebrow: 'PROOF & CTA',
      titleLead: 'Electrical safety,',
      titleAccent: 'explained.',
      description: 'Events are detected, classified, logged, and communicated clearly.',
      items: [
        'Arcing',
        'Neutral Loss',
        'Earth Leakage',
        'Overload',
        'Voltage Anomaly',
        'Event Timeline',
        'Notification Channels',
        'Safety Override',
      ],
    },
    description:
      'o4 builds on energy monitoring and adds a safety-first layer: alerts, notifications, anomaly detection, threshold configuration, event logging, and protection workflows.',
    detailSection: {
      visualColor: '#d9352a',
      items: [
        {
          title: 'Fault Detection',
          description: 'Detect electrical events that traditional meters do not explain',
        },
        {
          title: 'Severity-Based Alerts',
          description: 'Critical, medium, and low-severity alerts help reduce noise and focus attention.',
        },
        {
          title: 'Multi-Channel Notifications',
          description:
            'Notify users through app push, WhatsApp, SMS, email, calls, webhooks, MQTTS, or the Native Console where configured.',
        },
        {
          title: 'Threshold Configuration',
          description: 'Users and utilities can maintain independent thresholds, evaluated in parallel.',
        },
        {
          title: 'Configurable Protection',
          description:
            'Auto-trip or manual trip can be configured based on severity, event type, and hardware support.',
        },
        {
          title: 'Recovery Guidance',
          description: 'Ohm AI can attach recommendations to help users understand recovery steps after an event.',
        },
      ],
    },
    eyebrow: 'O4 MONITORING',
    featureSection: {
      accent: '#d9352a',
      eyebrow: 'SAFETY INTELLIGENCE',
      titleLead: 'Designed around',
      titleAccent: 'early warnings',
      cards: [
        {
          eyebrow: 'Critical Faults',
          title: 'Catch high risk events',
          description:
            'Detect critical conditions such as arcing, neutral loss, short circuit, earth leakage, and severe phase loss.',
        },
        {
          eyebrow: 'Power Quality',
          title: 'Understand electrical stress',
          description:
            'Track persistent power-quality issues such as THD, repeated overloads, and power factor deterioration',
        },
        {
          eyebrow: 'Alert Choices',
          title: 'Choose what matters',
          description:
            'Users can configure alerts, thresholds, severity, and channels - while critical events require explicit safety overrides.',
        },
      ],
    },
    heroAccent: 'electrical risks',
    heroAccentColor: '#e43d32',
    heroDescription:
      'o4 combines energy visibility with safety intelligence - helping detect abnormal voltage, leakage, arcing, overloads, and fault conditions before they become serious incidents.',
    heroKicker: 'o4 monitoring',
    heroLead: 'Detect',
    heroRest: 'before they escalate',
    heroActions: [
      {
        label: 'Explore o4',
        href: '#features',
        variant: 'primary',
      },
      {
        label: 'Talk to sales',
        href: '#contact',
        variant: 'secondary',
      },
    ],
    introSection: {
      accent: '#145599',
      titleLead: 'o4 adds',
      titleAccent: 'electrical safety intelligence',
      descriptions: [
        'o4 builds on energy monitoring and adds a safety-first layer: alerts, notifications, anomaly detection, threshold configuration, event logging, and protection workflows.',
        'The consolidated Native PRD defines the safety architecture as three separate layers: alerts for detection, notifications for communication, and tripping for hardware actuation. It also emphasizes user primacy, pipeline separation, safety-first defaults, independent thresholds, and always-on logging.',
      ],
    },
    navLabel: 'o4 - Electrical Safety Intelligence',
    path: '/monitoring/o4-electrical-safety',
    postDetailUseCaseSection: {
      accent: '#34363a',
      eyebrow: '',
      titleLead: 'o4 Ideal Use',
      titleAccent: '',
      cards: [
        {
          number: '01.',
          title: 'Premium Residential Project',
          description: 'For developers who want safety intelligence as part of the home infrastructure.',
        },
        {
          number: '02.',
          title: 'Existing Apartments',
          description:
            'For retrofit deployments where visibility and fault detection are more practical than full DB replacement.',
        },
        {
          number: '03.',
          title: 'High-Risk Loads',
          description: 'For homes with heavy appliances, unstable power quality, or repeated electrical issues.',
        },
        {
          number: '04.',
          title: 'Facility / Society Monitoring',
          description: 'For sites that need event history, alerts, and safety visibility.',
        },
      ],
    },
    title: 'o4 adds electrical safety intelligence',
    useCaseSection: {
      accent: '#24a595',
      eyebrow: 'ALERTS, NOTIFICATIONS, PROTECTION',
      titleLead: 'Detection is not the',
      titleAccent: 'same as action',
      cards: [
        {
          number: 'Alerts',
          title: 'The system detects an event',
          description: 'An alert is generated when a measured parameter deviates from configured norms.',
        },
        {
          number: 'Notifications',
          title: 'The user is informed',
          description:
            'Notifications carry alerts through selected channels such as app push, WhatsApp, SMS, email, or enterprise integrations.',
        },
        {
          number: 'Tripping',
          title: 'Protection happens only where configured',
          description:
            'Tripping is hardware actuation that isolates or shuts a circuit, distinct from a notification or normal "off" state.',
        },
        {
          number: 'Audit Trail',
          title: 'Every action is traceable',
          description: 'Trip events include cause, actor, timestamp, method, and recovery history',
        },
      ],
    },
  },
  {
    accent: '#145599',
    badge: 'SMART DB',
    ctaSection: {
      accent: '#4caf53',
      eyebrow: 'PROOF & CTA',
      titleLead: 'A distribution board',
      titleAccent: 'that thinks.',
      description: 'Circuit-level visibility, control, safety, and energy orchestration.',
      items: [
        'Circuit Map',
        'Arc Detection',
        'Load Priority',
        'Solar / Battery',
        'EV Ready',
        'Local Autonomy',
        'Installer Flow',
        'Safety Event Timeline',
      ],
    },
    description:
      'o5 is SustLabs next-generation Smart DB platform: a modular smart electrical panel designed for per-circuit monitoring, control, backup orchestration, native arc detection, and edge intelligence.',
    introSection: {
      accent: '#145599',
      titleLead: 'o5 turns the distribution board into',
      titleAccent: 'intelligence infrastructure',
      descriptions: [
        'o5 is SustLabs next-generation Smart DB platform: a modular smart electrical panel designed for per-circuit monitoring, control, backup orchestration, native arc detection, and edge intelligence.',
        'The 5th Gen PRD defines the product as a modular smart electrical panel with per-circuit control, backup orchestration, native series/parallel arc detection, edge ML, homeowner and installer experiences, and privacy-first local autonomy.',
      ],
    },
    detailSection: {
      visualColor: '#145599',
      items: [
        {
          title: 'Circuit Intelligence',
          description: 'View each branch circuit as an intelligent node, not just a wire.',
        },
        {
          title: 'Native Safety Engine',
          description: 'Detect arc, overcurrent, over temperature, and other high-risk conditions.',
        },
        {
          title: 'Backup Orchestration',
          description: 'Prioritize critical loads during outages and energy constraints.',
        },
        {
          title: 'Edge ML',
          description: 'Run safety and anomaly intelligence locally for faster, more resilient decisions.',
        },
        {
          title: 'Local API',
          description: 'Support offline operation and local integrations where enabled.',
        },
        {
          title: 'OTA Updates',
          description: 'Improve models, thresholds, and firmware safely over time.',
        },
        {
          title: 'Secure by Design',
          description:
            'Signed firmware, secure boot, mTLS, role-based access, and tamper logging. The PRD specifies signed firmware, secure boot, TLS 1.3 mTLS, rotating keys, OTA rollback, and role-based access.',
        },
      ],
    },
    eyebrow: 'O5 MONITORING',
    featureSection: {
      accent: '#145599',
      eyebrow: 'SMART DB INTELLIGENCE',
      titleLead: 'Every circuit becomes',
      titleAccent: 'visible',
      cards: [
        {
          eyebrow: 'Per-Circuit Monitoring',
          title: 'Know what each circuit is doing',
          description:
            'Track circuit status, current, voltage, temperature, energy, and safety events at the distribution layer.',
        },
        {
          eyebrow: 'Per-Circuit Control',
          title: 'Control the home from the panel',
          description: 'Enable switching, schedules, scenes, and load groups where hardware supports it.',
        },
        {
          eyebrow: 'Native Arc Detection',
          title: 'Detect dangerous arc signatures',
          description:
            'o5 is designed to detect series and parallel arcing on monitored branches using high-frequency sensing and edge classification.',
        },
      ],
    },
    heroAccent: 'reimagined',
    heroAccentColor: '#f5a51d',
    heroDescription:
      'o5 brings intelligence into the electrical backbone of the home - monitoring circuits, detecting risks, prioritizing backup loads, and enabling safer energy control.',
    heroKicker: 'o5 smart db',
    heroLead: 'The distribution board,',
    heroActions: [
      {
        label: 'Explore o5',
        href: '#features',
        variant: 'primary',
      },
      {
        label: 'Partner with SustLabs',
        href: '#contact',
        variant: 'secondary',
      },
    ],
    navLabel: 'o5 - Smart DB / Autonomous Control',
    path: '/monitoring/o5-smart-db',
    title: 'o5 makes the DB autonomous',
    useCaseSection: {
      accent: '#f5a51d',
      accentTarget: 'lead',
      eyebrow: 'BACKUP & DER',
      titleLead: 'Built for',
      titleAccent: 'homes with backup, solar, batteries, and EVs',
      cards: [
        {
          number: 'Backup Prioritization',
          title: 'Keep critical loads running',
          description: 'Group circuits into Critical, Important, and Nice-to-have tiers',
        },
        {
          number: 'Deterministic Load Shedding',
          title: 'Reduce guesswork during outages.',
          description: 'o5 can support deterministic shed logic based on configured priorities.',
        },
        {
          number: 'Solar & Storage Ready',
          title: 'Designed for distributed energy',
          description:
            'The PRD includes integrations for common inverters and ESS through Modbus-TCP/RTU and Sunspec.',
        },
        {
          number: 'EV & Tariff Ready',
          title: 'Prepare for smarter demand',
          description:
            'o5 roadmap includes EVSE integration, time-of-use optimization, demand caps, and export limiting.',
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
