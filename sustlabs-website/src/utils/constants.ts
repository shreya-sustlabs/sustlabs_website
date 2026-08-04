import type { FmsPageData, MonitoringPageData, SmartDbPageData } from '../types'

import fmsBrochure from '../assets/Automated Control Monitoring System Brochure_SustLabs_2026.pdf'
import smartDbBrochure from '../assets/smart-db-brochure.pdf'
import panasonicLogo from '../assets/Frame 80.png'
import schneiderLogo from '../assets/Frame 81.png'
import ineproLogo from '../assets/Frame 82.png'

export const NAV_LINKS = [
  'Ohm OS',
  'Products',
  'Smart DB',
  'Add-ons',
  'FMS',
  'Solutions',
  'Support',
] as const

export const ADD_ON_PRODUCTS = [
  {
    navLabel: 'Ora',
    path: '/add-ons/ora',
  },
] as const

export const FOOTER_CONTENT = {
  tagline: 'Rewiring the Future of Homes',
  columns: [
    {
      title: 'Explore',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Ohm OS', path: '/ohm-os' },
        { label: 'Smart DB', path: '/smart-db' },
        { label: 'Add-ons', path: '/add-ons/ora' },
      ],
    },
    {
      title: 'Store',
      links: [
        { label: 'o3', path: '/products/o3-energy-visibility' },
        { label: 'o4', path: '/products/o4-electrical-safety' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Solutions', path: '/solutions' },
        { label: 'FMS', path: '/fms' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Sales', path: '/support' },
        { label: 'Book a Demo', path: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo' },
        { label: 'Gen3 Setup Guide', path: 'https://drive.google.com/file/d/1FR4I9CKqep2agWU8V33sGO5tf72UaxY_/view?ts=6a041b55' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
  ],
} as const

export const OHM_OS_PAGE_CONTENT = {
  titleLead: 'The',
  titleAccent: 'intelligence layer ',
  titleRest: 'behind modern electrical systems',
  description:
    'Ohm OS helps make electrical systems easier to read, easier\n to manage and easier to act on.',
  actions: [
    {
      label: 'Partner with us',
      href: '/support',
      variant: 'primary',
    },
  ],
} as const

export const OHM_OS_APPLICATION_CONTENT = {
  titleLead: 'Our Ecosystem',
  titleAccent: '',
  eyebrow: 'One core layer, applied across the system',
  description:
    'Ohm OS sits at the center of the electrical system, turning one layer of intelligence into useful outcomes across homes, buildings, partners, and infrastructure.',
} as const

export const OHM_OS_APPLICATIONS = [
  {
    title: 'Appliance activity and health',
    description:
      'For appliance brands and connected product partners, changes in electrical behavior can help surface usage patterns, efficiency drift, and early service need.',
  },
  {
    title: 'Data-backed servicing',
    description:
      'For service-led businesses, electrical signals can help make diagnosis faster and maintenance less reactive.',
  },
  {
    title: 'Autonomous load management',
    description:
      'For infrastructure and energy partners, the same intelligence can support smarter decisions around what should run, when, and at what priority.',
  },
  {
    title: 'Transformer health and DSM',
    description:
      'For utilities and grid-side stakeholders, behavior across connected systems can offer better visibility into electrical stress and changing demand patterns.',
  },
  {
    title: 'AMC and insurance companies',
    description:
      'For protection and lifecycle partners, electrical history can add context to faults, servicing, and claims-related decisions.',
  },
] as const

export const OHM_OS_LICENSEE_CONTENT = {
  title: 'Licensee Partners',
  description:
    'For electrical and infrastructure brands, Ohm OS can extend intelligence into products, systems, and connected experiences beyond a single deployment.',
  logos: [
    { id: 'panasonic', label: 'Panasonic', image: panasonicLogo },
    { id: 'inepro', label: 'inepro', image: ineproLogo },
    { id: 'schneider', label: 'Schneider Electric', image: schneiderLogo },
  ],
} as const

export const ORA_ADD_ON_PAGE_CONTENT = {
  titleLead: 'What if a',
  titleAccent: ' wall clock did more?',
  description:
    'A built-in amenity for modern developments. A new category of built-in intelligence designed to integrate at the building level and add long-term value to residential projects.',
  action: {
    label: 'Talk to us',
    href: '/support#contact-sales',
    variant: 'secondary',
  },
} as const

export const ORA_DEVELOPER_SECTION = {
  titleLead: 'For Real-Estate',
  titleAccent: 'Developers',
  description: 'Designed to add value where it matters',
  benefits: [
    {
      number: '01.',
      title: 'Stronger project differentiation',
      description: 'Elevates perceived value without increasing resident complexity.',
    },
    {
      number: '02.',
      title: 'Enhanced everyday safety',
      description: 'Enhances everyday safety through passive, always on intelligence.',
    },
    {
      number: '03.',
      title: 'Forward looking insights',
      description: 'Enables early maintenance and predicts appliance and circuit failures.',
    },
    {
      number: '04.',
      title: "Sustainability that's visible.",
      description: 'Encourages efficient living through subtle, ambient awareness.',
    },
  ],
} as const

export const ORA_ENABLES_SECTION = {
  titleLead: 'What this',
  titleAccent: 'enables',
  description: 'Transforming raw data into meaningful, everyday value for residents.',
  cards: [
    {
      title: 'Safety you can trust',
      description: 'Keeps a check on electrical activity and notifies you if something needs attention',
    },
    {
      title: 'Early alerts, fewer surprises',
      description: 'Monitors daily electrical activity and alerts you early before issues become problems',
    },
    {
      title: 'Real-time energy clarity',
      description: 'Shows real-time energy use so you stay informed and in control effortlessly',
    },
  ],
  safetyTitle: 'Safety you can trust.',
  safetyDescription:
    'Keeps a check on electrical activity and notifies you if something needs attention.',
  safetyEyebrow: 'ALWAYS WATCHING QUIETLY',
} as const

export const SOLUTIONS_PAGE_CONTENT = {
  heroSection: {
    titleLead: 'Intelligent',
    titleAccent: 'Electrical Solutions',
    titleRest: 'for Every Environment',
    description:
      'From retail stores and commercial spaces to warehouses and critical facilities, SustLabs helps organizations enhance safety, gain real-time visibility, and improve operational efficiency through connected electrical intelligence.',
    note: "Let's identify the right solution for your unique operational needs.",
    actions: [
      {
        label: 'Talk to us',
        href: '/solutions',
        variant: 'primary',
      },
      {
        label: 'Book a Demo',
        href: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo',
        variant: 'secondary',
      },
    ],
  },
  panels: [
    {
      eyebrow: 'Fire Pump Rooms',
      titleLead: 'Fire ',
      titleAccent: 'Pump Rooms',
      description:
        'Sustlabs extends Ohm Native into fire-pump-room monitoring for commercial buildings, hospitals, campuses, industrial sites, and data centres.',
      capabilities: [
        'Pump health',
        'Water level and pressure',
        'Control panel status',
        'Critical alarms',
        'Compliance reports',
        'Audit timeline',
      ],
    },
    {
      eyebrow: 'Real Estate Developers',
      titleLead: 'Real Estate ',
      titleAccent: 'Developers',
      description:
        'Offer homes that are not just connected, but electrically intelligent - with visibility, safety alerts, appliance insights, and ambient displays through Ora.',
      capabilities: [
        'Differentiated amenity',
        'Resident safety',
        'Lower post-handover complaints',
        'Visible smart-home value',
        'Premium project positioning',
      ],
    },
    {
      eyebrow: 'Warehouses',
      titleLead: 'Warehouses',
      description:
        'Monitor power quality, anomalies, and event history before small issues become downtime or operational risk.',
      capabilities: [
        'Load visibility',
        'Abnormal current draw',
        'Safety alerts',
        'Equipment behaviour',
        'Multi-site dashboard',
      ],
    },
    {
      eyebrow: 'DATA CENTERS',
      titleLead: 'Data Centers',
      description:
        'Track power quality, anomalies, and event history across systems where continuity matters.',
      capabilities: [
        'Voltage and current anomalies',
        'THD / power factor',
        'Event logging',
        'Auditability',
        'Early warning for critical circuits',
      ],
    },
    {
      eyebrow: 'RETAIL / QSR',
      titleLead: 'RETAIL / QSR',
      description:
        'See every store from one view and Keep every outlet running cleaner. Track across distributed locations.',
      capabilities: [
        'Site comparisons',
        'Appliance health',
        'Energy cost visibility',
        'Fault alerts',
        'Remote operations',
      ],
    },
  ],
  partnerSection: {
    accent: 'var(--black300)',
    accentTarget: 'accent',
    eyebrow: 'UTILITIES / ECOSYSTEM',
    titleLead: 'Consent-led energy intelligence',
    titleAccent: 'for partners',
    description:
      'Ohm Native lets utilities, OEMs, service partners, and facility managers access structured electricity intelligence through a secure console and API bundle - only with user consent.',
    items: [
      {
        title: 'Utility Console',
        description: 'A Native-based interface for monitoring and analysis.',
      },
      {
        title: 'REST APIs',
        description:
          '15-minute non-critical summaries, account data, analytics, and historical aggregates.',
      },
      {
        title: 'Streams',
        description:
          'Real-time faults and power quality issues',
      },
      {
        title: 'Consent Ledger',
        description: 'Every data access is scoped, logged, and revocable.',
      },
      {
        title: 'No Third-Party Control',
        description: 'Partners receive intelligence. They do not control actuation.',
      },
    ],
  },
} as const

export const SUPPORT_PAGE_CONTENT = {
  hero: {
    title: 'Support',
    description:
      "Have questions, planning a deployment, or exploring where Sustlabs fits? We're here to help you understand the system, the right setup, and what it could look like for your site or business.",
    action: {
      label: 'Book a Demo',
      href: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo',
      variant: 'primary',
    },
  },
  contact: {
    title: 'Get in touch',
    fields: [
      {
        id: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
      },
      {
        id: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
      },
      {
        id: 'phone',
        label: 'Phone',
        placeholder: 'Enter your phone number',
        type: 'tel',
      },
      {
        id: 'roles',
        label: 'Roles',
        placeholder: 'Enter your role',
        type: 'text',
      },
      {
        id: 'organisation',
        label: 'Organisation',
        placeholder: 'Enter your organisation',
        type: 'text',
      },
      {
        id: 'comment',
        label: 'Comment',
        placeholder: 'Comment',
        variant: 'textarea',
      },
    ],
  },
} as const

export const MONITORING_PRODUCTS = [
  {
    accent: 'var(--terra500)',
    ctaSection: {
      accent: 'var(--success500)',
      eyebrow: 'ELECTRICAL FAULTS COVERED',
      titleLead: 'Alerts,',
      titleAccent: 'that matter.',
      description: 'Know when your electrical system needs attention',
      itemsAccent: 'linear-gradient(to right, #F1EDFB, #3D3D3D)',
      items: [
        'Over Current',
        'Over Voltage',
        'Under Voltage',
        'Phase Loss',
        'Phase Reversal',
        'Neutral Loss',
        'Power Quality',
        'Low Power Factor',
        'High Harmonics',
      ],
      footer: "*Load imbalance applies to 3-phase meters."
    },
    description:
      'o3 gives homes a live view of electricity usage, appliance activity, and key electrical conditions — from one connection at the panel.',
    introSection: {
      accent: 'var(--black400)',
      titleKicker: 'o3 Energy Monitor',
      titleLead: 'Makes electricity',
      titleAccent: 'visible',
      descriptions: [
        'o3 gives homes a live view of electricity usage, appliance activity, and key electrical conditions — from one connection at the panel.',
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
      accent: 'var(--black500)',
      eyebrow: 'WHAT IT DOES',
      titleLead: 'Real-time energy',
      titleAccent: 'visibility for everyday homes',
      cards: [
        {
          eyebrow: 'Live Usage',
          title: 'Know your consumption in real time',
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
        {
          eyebrow: 'Usage History',
          title: 'See how behaviour changes over time',
          description: 'With subscription-enabled analytics, users can unlock daily, monthly, and yearly energy views, appliance analytics, health scores, and insight summaries.',
        },
      ],
    },
    heroAccent: 'in real-time.',
    heroDescription:
      "Track live usage, understand appliance patterns, and get alerts when key electrical conditions need attention.",
    heroKicker: 'o3 monitoring',
    heroLead: 'See what your home is using',
    heroActions: [
      {
        label: 'Buy from MirAIe Lifestyle',
        href: 'https://www.miraielifestyle.com/ohm-assistant-3rd-gen-for-1-3-phase-power-electricity-activity-tracker.html',
        variant: 'primary',
      },
      {
        label: 'Talk to us',
        href: '/support',
        variant: 'secondary',
      },
    ],
    navLabel: 'o3 - Energy Visibility',
    path: '/products/o3-energy-visibility',
    title: 'o3 makes electricity visible',
    searchTitle: 'o3 Energy Monitor',
    searchSubTitle: 'See live electricity usage, appliance activity, bill trends, and key electrical conditions from one connection at the panel.',
    useCaseSection: {
      accent: 'var(--black400)',
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
      accent: 'var(--success500)',
      accentTarget: 'lead',
      eyebrow: 'ELECTRICAL FAULTS COVERED',
      titleLead: 'Alerts,',
      titleAccent: 'that matter.',
      description: 'Covers 14 electrical parameters aligned with Fire-safetly compliance.',
      items: [
        'o3+',
        'Arcing',
        'Earth Leakage',
        'Short Circuit',
        'High Inrush'
      ]
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
      accent: 'var(--black500)',
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
        {
          eyebrow: 'Always-On Logging',
          title: 'Every event has a record',
          description:
            'Events are logged at theedge and synced to the cloud when online, independent of notification preferences.',
        },
      ],
    },
    heroAccent: 'electrical risks',
    heroAccentColor: 'var(--terra500)',
    heroDescription:
      'Track live usage, detect higher-risk electrical events, and trigger alerts or supported trip actions when conditions need attention.',
    heroKicker: 'o4 monitoring',
    heroLead: 'Prevent',
    heroRest: 'before they turn serious.',
    heroActions: [
      {
        label: 'Buy from MirAIe Lifestyle',
        href: 'https://www.miraielifestyle.com/ohm-assistant-4th-gen-for-1-3-phase-power-electricity-activity-tracker.html',
        variant: 'primary',
      },
      {
        label: 'Talk to us',
        href: '/support',
        variant: 'secondary',
      },
    ],
    introSection: {
      accent: 'var(--black400)',
      titleKicker: "o4 Energy Analyzer",
      titleLead: 'Adds',
      titleAccent: 'safety intelligence',
      descriptions: ['o4 includes everything in o3, then adds deeper anomaly detection and trip capability for higher-risk electrical events.'
      ],
    },
    navLabel: 'o4 - Electrical Safety Intelligence',
    path: '/products/o4-electrical-safety',
    postDetailUseCaseSection: {
      accent: 'var(--black400)',
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
    searchTitle: 'o4 Energy Analyzer',
    searchSubTitle: 'Detect electrical risks early with alerts for arcing, leakage, neutral loss, phase loss, overloads and unsafe power conditions.',
    useCaseSection: {
      accent: 'var(--black400)',
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
      accent: '#4CAF53',
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
      accent: 'var(--black400)',
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
      accent: 'var(--black400)',
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
            'o5 is designed to detect series and Data handled with care on monitored branches using high-frequency sensing and edge classification.',
        },
      ],
    },
    heroAccent: 'reimagined',
    heroAccentColor: 'var(--terra500)',
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
      accent: 'var(--black400)',
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

export const SMART_DB_PRODUCT: MonitoringPageData = {
  ...MONITORING_PRODUCTS[2],
  path: '/smart-db',
  searchTitle: '',
  searchSubTitle: ''
}

export const SMART_DB_PAGE_CONTENT: SmartDbPageData = {
  heroSection: {
    eyebrow: 'Smart DB',
    titleLead: 'A home that',
    titleAccent: 'understands its electricity',
    description:
      'Smart DB reads every circuit, catches faults a conventional board never sees, and puts full control in your hands — from wherever you are.',
    actions: [
      {
        label: 'Talk to us',
        href: '/support',
        variant: 'primary',
      },
      {
        label: 'Book a Demo',
        href: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo',
        variant: 'secondary',
      },
    ],
  },
  layersSection: {
    title: 'Bringing intelligence into the DB',
    imageAlt:
      'Exploded view of the Smart DB enclosure showing the intelligence layer stacked behind the conventional MCB layer',
  },
  knowsSection: {
    eyebrow: 'The Product',
    titleLead: 'Meet the',
    titleAccent: 'panel that knows',
    descriptions: [
      'Smart DB looks like a distribution board because, at its core, it still is one — built on the same fundamentals every electrical installation depends on.',
      'Behind the enclosure is a platform: continuous circuit-level sensing, on-device intelligence, and a living connection to Ohm OS that keeps learning about your home long after installation day.',
    ],
    stats: [
      { label: 'Circuit-level sensing', value: 'Live' },
      { label: 'Ohm OS intelligence layer', value: 'Continuous' },
      { label: 'Software updates', value: 'Over the air' },
    ],
    action: {
      label: 'Download the Product Brochure',
      href: smartDbBrochure,
      fileName: 'SustLabs-Smart-DB-Brochure.pdf',
    },
  },
  unchangedSection: {
    eyebrow: 'The gap',
    titleLead: 'Your distribution board',
    titleAccent: "hasn't changed in decades",
    description:
      'A traditional board still does exactly what it did fifty years ago — split power into circuits, and trip when something goes badly wrong. By the time it reacts, the fault has already happened.',
    cards: [
      {
        title: 'It only reacts, never anticipates.',
        description:
          'A breaker trips after a fault occurs - it can\'t flag one building up.',
      },
      {
        title: "It's invisible until something goes wrong.",
        description:
          'No one can see circuit-level activity inside a traditional panel.',
      },
      {
        title: "It can't be reached remotely.",
        description:
          'If a circuit needs to be switched off and no one\'s home, it stays on.',
      },
    ],
  },
  loopSection: {
    eyebrow: 'The mechanism',
    titleLead: 'Every circuit, understood',
    titleAccent: '- all the time',
    description:
      'Smart DB works in four continuous steps, running in the background for as long as the panel is powered.',
    steps: [
      {
        number: '01',
        title: 'Sense',
        description:
          'Circuit-level sensors read current, voltage, and load patterns across the panel - not just at the mains.',
      },
      {
        number: '02',
        title: 'Understand',
        description:
          'Ohm OS processes that activity continuously, learning what normal looks like for each circuit in this specific home.',
      },
      {
        number: '03',
        title: 'Alert',
        description:
          'When something departs from normal, you\'re told immediately, in plain language — not a technical fault code.',
      },
      {
        number: '04',
        title: 'Act',
        description:
          'Switch a circuit off, reroute backup power, or let Smart DB act on rules you\'ve already set, from anywhere.',
      },
    ],
    action: {
      label: 'Watch how it works — 60 second overview',
      href: 'https://youtu.be/Ofdv8quyXf4?si=8RBGLIi3MMBDYV7A',
    },
  },
  capabilitiesSection: {
    eyebrow: 'Six kinds of intelligence',
    titleLead: 'One panel. Every capability your electrical system',
    titleAccent: 'needs to understand itself.',
    items: [
      {
        title: 'Safety Intelligence',
        description: "Catches what a breaker can't",
      },
      {
        title: 'Circuit Intelligence',
        description: 'See every circuit, not just the total',
      },
      {
        title: 'Appliance Intelligence',
        description: "Know what's plugged in, and how it's behaving",
      },
      {
        title: 'Automation & Remote Control',
        description: 'Rules that run on their own',
      },
      {
        title: 'Backup & Energy Management',
        description: 'Priority power when it matters most',
      },
      {
        title: 'Predictive Intelligence',
        description: "Patterns a one-time check can't see",
      },
    ],
  },
  pocketSection: {
    eyebrow: 'FULL COVERAGE',
    titleLead: 'Your electrical system,',
    titleAccent: 'in your pocket',
    description:
      "The Ohm Assistant app is where Smart DB's intelligence becomes something you actually use - daily insight, instant alerts, one-tap circuit control, and a running history you can look back on anytime.",
    highlight: {
      eyebrow: 'Live visibility',
      title: 'See every electrical event as it happens',
      description:
        'The Smart DB dashboard shows your electrical system the way it actually behaves - live circuit status, active alerts, and a clear history of everything that\'s happened.',
    },
    screens: [
      {
        image: 'live',
        alt: 'Smart DB app home screen showing live household load in watts',
        caption: 'Home overview',
      },
      {
        image: 'alerts',
        alt: 'Smart DB app notifications screen listing arcing, surge and high-load alerts',
        caption: 'Alert details',
      },
      {
        image: 'energy',
        alt: 'Smart DB app energy screen showing consumption split by appliance',
        caption: 'Energy Mapping',
      },
    ],
  },
  platformSection: {
    eyebrow: 'Configurations',
    titleLead: 'One platform,',
    titleAccent: 'sized to your home',
    tiles: [
      {
        image: 'app',
        name: 'App',
        kicker: 'Mobile · On the go',
        description: 'Check your home\'s energy use and alerts wherever you are.',
      },
      {
        image: 'dashboard',
        name: 'Web App / Dashboard',
        kicker: 'Desktop · Detailed view',
        description: 'Explore energy trends, historical data and manage bots and access.',
      },
      {
        image: 'clock',
        name: 'Clock',
        kicker: 'Wall-mounted · Always on',
        description: 'See live consumption and key home insights at a glance.',
      },
    ],
  },
  // specsSection: {
  //   title: 'Specifications',
  //   specs: [
  //     { label: 'Supply', value: '230 V single-phase, 50 Hz (India variant)' },
  //     { label: 'Outgoing circuits', value: 'Up to 12 monitored and switchable branches' },
  //     { label: 'Metering', value: 'Voltage, current, active power, energy, power factor per circuit' },
  //     { label: 'Safety sensing', value: 'Series and parallel arc detection, earth leakage, thermal hotspots' },
  //     { label: 'Fault coverage', value: '14 fault types with severity and confidence scoring' },
  //     { label: 'Switching', value: 'Per-circuit isolation with configurable, auditable rules' },
  //     { label: 'Edge intelligence', value: 'Local ML inference, watchdogs and fail-safe behaviour' },
  //     { label: 'Connectivity', value: 'Wi-Fi 2.4 GHz, with local operation when offline' },
  //     { label: 'Mounting', value: 'Standard DIN rail, retrofits into existing DB enclosures' },
  //     { label: 'Cloud', value: 'Ohm OS - summaries, events, reports, fleet diagnostics, OTA updates' },
  //   ],
  //   note:
  //     'Specifications are indicative and vary by variant and configuration. India and US variants differ in service type, branch ratings, panel format, switching approach, thermal design, labelling and tariff logic. Final ratings are confirmed at the time of order.',
  // },
  comparisonSection: {
    eyebrow: 'The Difference',
    titleLead: "It isn't the box.",
    titleAccent: "It's what's behind it",
    columns: ['Capability', 'Traditional Board', 'Smart DB'],
    rows: [
      ['Faults detected', 'Overcurrent only', '7 fault types, including arcing & earth leakage'],
      ['Remote control', 'Not possible', 'Any circuit, from anywhere'],
      ['Backup power', 'All-or-nothing', 'Prioritized automatically'],
      ['Appliance insights', 'None', 'Yes'],
      ['Software', 'Fixed at installation', 'Improved over the air'],
      ['History', 'None', 'Full circuit history in-app'],
    ],
    action: {
      label: 'Contact Sales to Find Your Configuration',
      href: '/support',
      opensLeadForm: true,
    }
  },
  segmentsSection: {
    eyebrow: 'Applications',
    titleLead: 'Wherever electrical infrastructure',
    titleAccent: 'needs to be trusted',
    description:
      'Smart DB works in four continuous steps, running in the background for as long as the panel is powered.',
    segments: [
      {
        image: 'residential',
        name: 'New Residential Developments',
        alt: 'Modern apartment development with landscaped walkways',
        description: 'A difference buyers can see during a sales walkthrough.',
      },
      {
        image: 'villa',
        name: 'Luxury Villas',
        alt: 'Contemporary villa with a swimming pool and open terrace',
        description: 'Full backup orchestration across a complex electrical footprint.',
      },
      {
        image: 'retrofit',
        name: 'Retrofits',
        alt: 'Interior of a home stripped back to studs during renovation',
        description: 'Circuit-level visibility without rewiring the building.',
      },
      {
        image: 'facility',
        name: 'Facility Managed Buildings',
        alt: 'Light industrial building with a clear parking forecourt',
        description: 'One dashboard across multiple panels and units.',
      },
    ],
  },
  fireSection: {
    eyebrow: 'TRUST',
    titleLead: 'By the way,',
    titleAccent: 'we also prevent fire.',
    description:
      'Smart DB is engineered and tested against the electrical safety expectations applicable to the markets it serves, and every installation is carried out by certified electricians as part of a standard, code-compliant process.',
    tags: [
      'Certified electrical installation',
      'Data handled with care',
      'Compliance documentation on request'
    ],
  },
  layerSection: {
    accent: 'var(--terra500)',
    eyebrow: 'Intelligence layer',
    titleLead: 'From visibility to autonomous',
    titleAccent: 'electricity intelligence',
    description:
      "Ohm OS reads high-frequency electrical signals and translates them into appliance insights.|safety alerts, predictions, and decisions.", cards: [
        {
          eyebrow: 'o3',
          title: 'Energy Visibility',
          description: 'Live usage, appliance insights, and bill clarity.',
        },
        {
          eyebrow: 'o4',
          title: 'Safety Intelligence',
          description: 'Fault detection, alerts, notifications, and protection workflows.',
        },
        {
          eyebrow: 'o5',
          title: 'Smart DB Control',
          description: 'Circuit-level intelligence, backup orchestration, and native arc detection.',
        },
      ],
  },
}

export const HERO_CONTENT = {
  eyebrow: 'OHM OS BY SUSTLABS',
  titleLead: 'Understand your ',
  titleAccent: 'in real time',
  description:
    "See what is using power, catch electrical risk early and make better decisions without reworking your building.",
  actions: [
    {
      label: 'Get Ohm',
      href: 'https://www.miraielifestyle.com/',
      variant: 'primary',
    },
    {
      label: 'Book a Demo',
      href: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo',
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
    title: 'Appliance-Level Visibility',
    description: 'See which appliances are driving your usage.',
  },
  {
    title: 'Advanced Safety',
    description: 'Catch voltage, leakage, arcing, and fault risks early.',
  },
] as const

export const SIGNAL_LAYER_CONTENT = {
  eyebrow: 'INTELLIGENCE LAYER',
  titleLead: "Your home's ",
  titleLeadLine: "electrical heartbeat, ",
  titleAccent: 'decoded.',
  description:
    'Ohm OS reads high-frequency electrical signals and translates them into appliance insights, safety alerts, predictions, and decisions.',
} as const

export const SIGNAL_STEPS = [
  {
    number: '01.',
    title: 'Read',
    description: 'Electrical waveform data from the main panel.',
  },
  {
    number: '02.',
    title: 'Sense',
    description: 'Anomalous electrical events as they happen.',
  },
  {
    number: '03.',
    title: 'Understand',
    description: 'Consumption patterns and turn them into actionable insights.',
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
    title: 'No appliance-level sensors',
    description: 'Appliance intelligence without installing sensors on every device.',
  },
  {
    number: '02.',
    title: 'Existing wiring',
    description: 'Designed around real homes.',
  },
  {
    number: '03.',
    title: 'App + Web',
    description: 'For residents and enterprise users.',
  },
  {
    number: '03.',
    title: 'OTA Updates',
    description: 'Safety Logic improves over time.',
  },
] as const

export const LAYERS_CONTENT = {
  eyebrow: 'DASHBOARD  AND INTERFACES',
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
  eyebrow: 'SMART DB',
  title: 'A distribution board that thinks...',
  description:
    'Smart DB bring intelligence from the meter into the electrical backbone - enabling circuit-level tracking, safety, automation, backup orchestration, and edge decision-making.',
} as const

export const SMART_DB_FEATURES = [
  {
    title: 'Circuit Intelligence',
    description: 'Track circuit status, load, voltage, current, and temperature.',
    accent: 'mint',
  },
  {
    title: 'Electrical Safety',
    description: 'Detect anomalies and issue high-confidence isolation commands.',
    accent: 'lavender',
  },
  {
    title: 'Backup Orchestration',
    description: 'Prioritize critical loads during grid outages.',
    accent: 'cream',
  },
  {
    title: 'DER Ready',
    description: 'Route power from the right source — grid, solar, battery or inverter.',
    accent: 'blush',
  },
  {
    title: 'Local Autonomy',
    description: 'Makes decisions at the panel, even when cloud connectivity is limited.',
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
    'Ohm OS helps utilities, developers, Licensee partners, facility managers, and energy partners build safer, more efficient, and data-driven infrastructure.',
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
    title: 'Licensee Partners',
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
    title: 'Act',
    description: 'Move from insight to response with alerts, recommendations, and supported control actions.',
  },
] as const

export const SAFETY_CONTENT = {
  eyebrow: 'SAFETY FIRST',
  titleLead: 'Built to detect risks ',
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

export const FMS_PAGE_CONTENT: FmsPageData = {
  heroSection: {
    eyebrow: 'Fire Monitoring System',
    titleLead: 'Fire systems.',
    titleAccent: 'Always visible.',
    actions: [
      {
        label: 'Talk to us',
        href: '/support',
        variant: 'primary',
      },
      {
        label: 'Book a Demo',
        href: 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo',
        variant: 'secondary',
      },
    ],
    stats: [
      { value: '20+', label: 'Parameters monitored live' },
      { value: '24/7', label: 'Continuous readiness watch' },
      { value: '<60', label: 'Seconds to critical alert' },
    ],
  },
  problemSection: {
    eyebrow: 'Fire pump room monitoring',
    titleLead: 'Your fire systems pass inspection.',
    titleAccent: 'Do they stay ready every day\nin between?',
    description:
      'FMS watches 23+ fire and life-safety parameters around the clock - pump health, power, water, controllers - so you know the moment something needs attention, not months later at the next audit.',
    downloadAction: {
      label: 'Download Brochure',
      href: fmsBrochure,
      fileName: 'SustLabs-ACMS-Brochure-2026.pdf',
    },
    mediaCaption: 'Overview dashboard',
    mediaAlt: 'FMS overview dashboard showing readiness scores and buildings that require attention',
  },
  audienceSection: {
    eyebrow: 'BUILT FOR',
    titleLead: 'Wherever fire infrastructure',
    titleAccent: 'protects people',
    mediaAlt: 'FMS deployed across apartment societies, townships, commercial buildings, business parks, plants and mixed-use developments',
  },
  gapSection: {
    eyebrow: 'THE GAP INSPECTION LEAVES',
    titleLead: 'A',
    titleHighlight: 'clean inspection report',
    titleAccent: "doesn't mean a ready system tomorrow.",
    description:
      'Fire infrastructure is checked periodically - often quarterly. But pumps, batteries, and controllers don\'t fail on a schedule. Most faults happen quietly, in the weeks between visits, when no one is watching.',
    columns: [
      {
        tone: 'inspection',
        eyebrow: 'Periodic inspection',
        title: 'A snapshot, taken occasionally',
        items: [
          'Only reflects the moment it was performed',
          'Faults between visits go unnoticed',
          'Relies on someone remembering to check',
          'Paper logs, hard to audit later',
          'Committee finds out after the fact',
        ],
      },
      {
        tone: 'readiness',
        eyebrow: 'Continuous monitoring',
        title: 'Operational readiness, every minute',
        items: [
          'Live status of every monitored system',
          'Faults flagged the moment they occur',
          'Runs automatically, nothing to remember',
          'Digital event history, always available',
          'Committee knows before it becomes critical',
        ],
      },
    ],
  },
  chainSection: {
    eyebrow: 'INSIDE THE PUMP ROOM',
    titleLead: 'Every part of the',
    titleAccent: 'system depends on \n the others.',
    description:
      'A fire pump room is a chain of dependent parts. One unnoticed fault — a stuck relay, a low battery, a tank drifting below level — can quietly break the chain long before anyone opens the panel.',
    mediaAlt: 'FMS building view listing pump activity, severity, running status and operation mode for every asset',
    items: [
      {
        title: 'Water Tank',
        description:
          'Level and flow monitored continuously — no more discovering a low tank during an actual emergency.',
      },
      {
        title: 'Fire Pump',
        description:
          'Mode, run status and health tracked so the pump is ready to respond the instant it is needed.',
      },
      {
        title: 'Controllers & Sensors',
        description: 'Every signal from the panel is logged, so faults are caught at the source, not downstream.',
      },
      {
        title: 'Power & DG Backup',
        description: 'Phase failure, reversal and voltage anomalies flagged before they become an outage.',
      },
    ],
  },
  coverageSection: {
    eyebrow: 'FULL COVERAGE',
    titleLead: '20+ parameters,',
    titleAccent: 'watched continuously',
    description:
      'FMS doesn\'t sample occasionally - it keeps a constant eye on every system that determines whether your fire infrastructure is truly ready to respond.',
    groups: [
      {
        title: 'Pumps',
        parameters: ['Fire pump health', 'Auto / Manual mode', 'Pump running status', 'Jockey pump status'],
      },
      {
        title: 'Water',
        parameters: ['Water Tank levels', 'Flow status','Low-level warnings'],
      },
      {
        title: 'Power',
        parameters: ['Power availability', 'Phase failure', 'Phase reversal', 'Voltage anomalies', 'DG availability'],
      },
      {
        title: 'Fire alarm panel',
        parameters: ['Battery health', 'Fault conditions', 'Critical alarms', 'Relay status'],
      },
      {
        title: 'Pressure',
        parameters: ['Hydrant line pressure', 'Sprinkler line pressure'],
      },
      {
        title: 'Communication',
        parameters: ['Communication status','Panel connectivity','Signal loss alerts','Internet availability', 'PLC and Edge computer status'],
      },
      {
        title: 'System health',
        parameters: ['Device uptime', 'Event logging', 'Historical trends'],
      },
    ],
  },
  visibilitySection: {
    eyebrow: 'ONE SCREEN, FULL VISIBILITY',
    titleLead: 'See your own fire system,',
    titleAccent: 'monitored live',
    description:
      'A single dashboard shows every parameter across every building - active alarms, healthy devices, water levels, and a complete event timeline.',
    mediaAlt: 'FMS console showing asset score, communication, fire readiness and water availability for a live site',
  },
  alertsSection: {
    eyebrow: 'INSTANT ALERTS',
    titleLead: 'The moment something\nneeds attention,',
    titleAccent: "you'll know",
    description:
      'Alerts reach the right person on the channel they actually check - no dashboard-checking required.',
    cards: [
      {
        tone: 'critical',
        meta: 'SMS',
        body:
          'Tower B - Main Hydrant line pressure below 5 bar. Hydrant Jockey Pump on Manual mode. Please switch the pump to maintain pressure.',
      },
      {
        tone: 'critical',
        meta: 'WHATSAPP',
        body: 'Tower C - Underground Main Fire tank level low at 24%. Refill immediately.',
      },
      {
        tone: 'summary',
        meta: 'EMAIL',
        body:
          'Weekly Readiness Summary: Tower A, C, D - fully operational. Tower B - 1 open advisory, see attached report.',
      },
      {
        tone: 'advisory',
        meta: 'MOBILE PUSH',
        body: 'Tower A - Fire Alarm Panel Battery Health at 20%. Tap to view diagnostics.',
      },
    ],
  },
  assuranceSection: {
    eyebrow: 'WHAT COMMITTEES ACTUALLY GET',
    titleLead: 'Operational assurance,',
    titleAccent: 'not just compliance',
    items: [
      {
        title: 'Continuous Visibility',
        description: 'Know the real-time status of every fire fighting asset, not just its state during the last inspection.',
      },
      {
        title: 'Faster Maintenance',
        description: 'Faults are flagged early and precisely, so technicians arrive knowing exactly what to fix.',
      },
      {
        title: 'Centralized Monitoring',
        description: 'One dashboard for every building, every pump room, every parameter - no separate systems to check.',
      },
      {
        title: 'Historical Logs',
        description: 'A complete digital record of every event, ready whenever an audit or insurer asks for it.',
      },
      {
        title: 'Better Accountability',
        description: 'Clear records of who was notified, when, and what action followed - for the whole committee.',
      },
      {
        title: 'Peace of Mind',
        description: 'Residents\' safety depends on systems working when needed. ACMS gives your committee that confidence, daily.',
      },
    ],
  },
  stepsSection: {
    eyebrow: 'GETTING STARTED',
    titleLead: 'Up and running in three steps',
    titleAccent: '',
    description:
      'FMS doesn\'t sample occasionally - it keeps a constant eye on every system that determines whether your fire infrastructure is truly ready to respond.',
    cards: [
      {
        number: '01',
        title: 'Install',
        description:
          'Our technicians fit sensors to your existing pump room hardware - no rewiring, minimal disruption.',
      },
      {
        number: '02',
        title: 'Monitor',
        description:
          'FMS begins tracking all 23+ parameters immediately, visible on your dashboard from day one.',
      },
      {
        number: '03',
        title: 'Respond',
        description:
          'Alerts reach your committee and maintenance team the moment something needs action.',
      },
    ],
  },
  faqSection: {
    eyebrow: 'QUESTIONS',
    titleLead: 'Everything committees',
    titleAccent: 'usually ask',
    items: [
      {
        question: 'Can I get the FMS data into my facility management system?',
        answer:
          'Yes. FMS exposes REST APIs and MQTT streams, so readiness scores, live parameters and events can flow into an existing FM or BMS platform alongside the FMS console.',
      },
      {
        question: 'Is FMS compatible with our control panels and controller brands?',
        answer:
          'FMS reads from the panels and controllers you already have over standard interfaces such as Modbus RTU / TCP and dry contacts. It does not ask you to replace any part of your fire system.',
      },
      {
        question: 'What ongoing maintenance does FMS require?',
        answer:
          'Very little. The gateway and sensors are industrial-grade, firmware updates arrive over the air, and the console itself flags any device that stops reporting.',
      },
      {
        question: 'Who receives alerts, and can we customize that?ors alerts, and how are contractors involved?',
        answer:
          'You decide. Alerts can route to the facility team, the committee, your AMC vendor, or all three — each with its own channel and escalation window.',
      },
      {
        question: 'How is this different from the fire alarm system we already have?',
        answer:
          'A fire alarm system tells you when there is a fire. FMS tells you whether the system that fights the fire is actually ready — pump mode, water level, line pressure, battery health and power.',
      },
      {
        question: 'How is FMS priced?',
        answer:
          'Pricing depends on the number of towers, pump rooms and monitored assets. Talk to us and we will size it against your site.',
      },
      {
        question: 'How long does implementation take, start to finish? implementation take, and is it disruptive?',
        answer:
          'Most single pump-room installations are commissioned within a day. Work stays inside the pump room and panel enclosure, so residents are unaffected.',
      },
      {
        question: 'What support is available after installation?',
        answer:
          'EveryFMS deployment includes a dedicated support line for your committee and facility team, along with proactive outreach from us if we notice a persistent or unresolved alert.',
      },
    ],
    note:
      "Still have a question we haven't answered here? Our team can walk you through the parameters, the install and what monitoring would look like for your site.",
    action: {
      label: 'Talk to us',
      href: '/support',
      variant: 'primary',
    },
  },
}
