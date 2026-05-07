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
