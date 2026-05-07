export const NAV_LINKS = [
  'Ohm OS',
  'Monitoring',
  'Smart DB',
  'Add-ons',
  'Solutions',
  'Support',
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
