import type { MonitoringPageData, SmartDbPageData } from '../types'

export const NAV_LINKS = [
  'Ohm OS',
  'Monitoring',
  'Smart DB',
  'Add-ons',
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
        { label: 'o3', path: '/monitoring/o3-energy-visibility' },
        { label: 'o4', path: '/monitoring/o4-electrical-safety' },
      ],
    },
    {
      title: 'Solutions',
      links: [{ label: 'Solutions', path: '/solutions' }],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Sales', path: '/support' },
        { label: 'Book a Demo', path: '/support#contact-sales' },
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
      variant: 'secondary',
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
      'For appliance brands and connected product partners such as Panasonic, changes in electrical behaviour can help surface usage patterns, efficiency drift, and early service need.',
  },
  {
    title: 'Data-backed servicing',
    description:
      'For service-led businesses such as Urban Company, electrical signals can help make diagnosis faster and maintenance less reactive.',
  },
  {
    title: 'Autonomous load management',
    description:
      'For infrastructure and energy partners such as Fenice and Havells, the same intelligence can support smarter decisions around what should run, when, and at what priority.',
  },
  {
    title: 'Transformer health and DSM',
    description:
      'For utilities and grid-side stakeholders such as Tata Power, load behaviour across connected systems can offer better visibility into electrical stress and changing demand patterns.',
  },
  {
    title: 'AMC and insurance companies',
    description:
      'For protection and lifecycle partners such as Zopper and Onsitego, electrical history can add context to faults, servicing, and claims-related decisions.',
  },
] as const

export const OHM_OS_LICENSEE_CONTENT = {
  title: 'Licensee Partners',
  description:
    'For electrical and infrastructure brands, Ohm OS can extend intelligence into products, systems, and connected experiences beyond a single deployment.',
  logos: [
    { id: 'legrand', label: 'legrand' },
    { id: 'panasonic', label: 'Panasonic' },
    { id: 'inepro', label: 'inepro' },
    { id: 'schneider', label: 'Schneider Electric' },
  ],
} as const

export const ORA_ADD_ON_PAGE_CONTENT = {
  titleLead: 'What if a',
  titleAccent: 'wall clock did more?',
  description:
    'A built-in amenity for modern developments. A new category of built-in intelligence designed to integrate at the building level and add long-term value to residential projects.',
  action: {
    label: 'Book an Appointment',
    href: '#contact',
    variant: 'primary',
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
  safetyTitle: 'Safety you can trust.',
  safetyDescription:
    'Keeps a check on electrical activity and notifies you if something needs attention.',
  safetyEyebrow: 'ALWAYS WATCHING QUIETLY',
} as const

export const SOLUTIONS_PAGE_CONTENT = {
  panels: [
    {
      eyebrow: 'Fire Pump Rooms',
      titleLead: 'Mission-critical fire infrastructure,',
      titleAccent: 'continuously monitored',
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
      titleLead: 'Smart electrical infrastructure',
      titleAccent: 'residents can understand',
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
      titleLead: 'Detect electrical risk',
      titleAccent: 'before it becomes downtime',
      titlePrefix: '',
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
      titleLead: 'Power-quality intelligence',
      titleAccent: 'for critical infrastructure',
      titlePrefix: '',
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
      titleLead: 'One intelligence layer',
      titleAccent: 'across every store',
      titlePrefix: '',
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
    accent: 'var(--black400)',
    accentTarget: 'lead',
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
        title: 'MQTTS Streams',
        description:
          'Real-time critical data: faults, voltage, THD, leakage, arcing, neutral loss, and power-quality events.',
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
      label: 'Book a demo',
      href: '#contact-sales',
      variant: 'primary',
    },
  },
  contact: {
    title: 'Contact our sales team',
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
      accent: 'var(--black400)',
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
        label: 'Get o3*',
        href: 'https://ultron.lifestylecommerce.in/ohm-assistant-3rd-gen-for-1-3-phase-power-electricity-activity-tracker.html',
        variant: 'primary',
      },
      {
        label: 'Talks to sales',
        href: '/support',
        variant: 'secondary',
      },
    ],
    navLabel: 'o3 - Energy Visibility',
    path: '/monitoring/o3-energy-visibility',
    title: 'o3 makes electricity visible',
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
      accent: 'var(--black400)',
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
        label: 'Get o4',
        href: 'https://ultron.lifestylecommerce.in/ohm-assistant-4th-gen-for-1-3-phase-power-electricity-activity-tracker.html',
        variant: 'primary',
      },
      {
        label: 'Talk to sales',
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
    path: '/monitoring/o4-electrical-safety',
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
            'o5 is designed to detect series and parallel arcing on monitored branches using high-frequency sensing and edge classification.',
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
}

export const SMART_DB_PAGE_CONTENT: SmartDbPageData = {
  introSection: {
    eyebrow: 'Smart DB by Sustlabs',
    titleLead: 'Smart DB is the',
    titleAccent: 'physical layer of Ohm OS',
    accent: 'var(--black400)',
    descriptions: [
      'Smart DB brings Sustlabs intelligence into the electrical distribution board - the place where power is divided, protected, monitored, and controlled. Instead of treating the DB as a passive box, Smart DB turns it into an intelligent infrastructure layer for homes, buildings, and energy ecosystems.',
    ],
  },
  heroSection: {
    accent: 'var(--terra500)',
    eyebrow: 'Smart DB',
    kicker: 'Smart DB by Sustlabs',
    titleLead: 'The electrical panel',
    titleAccent: 'becomes intelligent',
    description:
      'Smart DB combines monitoring, safety detection, circuit-level intelligence, backup orchestration, and edge decision-making inside the distribution layer.',
    actions: [
      {
        label: 'Explore Smart DB',
        href: '#features',
        variant: 'primary',
      },
      {
        label: 'Talk to Sustlabs',
        href: '#contact',
        variant: 'secondary',
      },
    ],
  },
  promiseSection: {
    accent: 'var(--black400)',
    eyebrow: 'Core promise',
    titleLead: 'From passive protection to',
    titleAccent: 'active intelligence',
    cards: [
      {
        eyebrow: 'Visibility',
        title: 'See the electrical system clearly',
        description: 'Track how power flows through circuits, loads, and devices.',
      },
      {
        eyebrow: 'Safety',
        title: 'Detect abnormal electrical behaviour',
        description: 'Identify arc signatures, overloads, over temperature, and unsafe patterns.',
      },
      {
        eyebrow: 'Control',
        title: 'Act at the circuit level',
        description:
          'Enable switching, scenes, schedules, emergency cutoff, and load prioritization where supported.',
      },
      {
        eyebrow: 'Intelligence',
        title: 'Learn from every event',
        description:
          'Use edge ML and cloud analytics to improve safety, detection, and recommendations over time.',
      },
    ],
  },
  stackSection: {
    accent: '#145599',
    eyebrow: 'Product architecture',
    titleLead: 'A complete intelligence',
    titleAccent: 'stack inside the DB',
    accentTarget: 'lead',
    cards: [
      {
        title: 'Measurement',
        description: 'Captures voltage, current, power, energy, temperature, and event data.',
      },
      {
        title: 'Safety Sensing',
        description: 'Uses high-frequency sensing to identify arc and safety signatures.',
      },
      {
        title: 'Edge Intelligence',
        description:
          'Processes safety events locally with deterministic firmware, watchdogs, and fail-safe behaviour.',
      },
      {
        title: 'Ohm OS Cloud',
        description: 'Syncs summaries, events, reports, model updates, fleet diagnostics, and user insights.',
      },
      {
        title: 'Apps & APIs',
        description: 'Connects homeowners, installers, support teams, utilities, and partner systems.',
      },
    ],
  },
  safetySection: {
    eyebrow: 'Safety',
    titleLead: 'Built for safety',
    titleAccent: 'critical intelligence',
    description:
      'Smart DB is designed to detect, classify, log, and act on critical events with clear separation between detection, notification, and actuation.',
    cards: [
      {
        number: '01.',
        title: 'Arc Detection',
        description: 'Series and parallel arc detection using high-frequency signatures.',
      },
      {
        number: '02.',
        title: 'Thermal Awareness',
        description: 'Temperature monitoring for hotspots and unsafe conditions.',
      },
      {
        number: '03.',
        title: 'Event Confidence',
        description: 'Events carry severity, confidence, circuit identity, and timestamp.',
      },
      {
        number: '04.',
        title: 'Safe Actuation',
        description: 'Isolation commands are configurable and auditable.',
      },
      {
        number: '05.',
        title: 'Monthly Self-Test',
        description: 'The arc engine includes self-test logic and health reporting in the 5th Gen PRD.',
      },
    ],
  },
  energySection: {
    accent: 'var(--black400)',
    eyebrow: 'Energy control',
    titleLead: 'Designed for the future',
    titleAccent: 'of home energy',
    accentTarget: 'lead',
    cards: [
      {
        eyebrow: 'Demand Caps',
        title: 'Help manage sanctioned load, peak demand, or time-of-use constraints',
        tone: 'teal',
      },
      {
        eyebrow: 'Critical Load Groups',
        title: 'Prioritise essential circuits',
        tone: 'violet',
      },
      {
        eyebrow: 'EV Smart Charging',
        title: 'Coordinate EV load with home demand and available supply',
        tone: 'coral',
      },
      {
        eyebrow: 'Solar Self-Consumption',
        title: 'Support policies that use solar energy more intelligently',
        tone: 'amber',
      },
    ],
  },
  variantsSection: {
    accent: 'var(--black400)',
    eyebrow: 'Product architecture',
    titleLead: 'Built for different',
    titleAccent: 'electrical realities',
    cards: [
      {
        eyebrow: 'India Variant',
        title: 'Optimised for retrofit and apartment DBs',
        description:
          'Designed around 230 V single-phase homes, slimmer sub-DB formats, inverter / UPS integration, brownout tolerance, and mixed socket / fan / lighting circuits.',
      },
      {
        eyebrow: 'US Variant',
        title: 'Optimised for electrified homes',
        description:
          'Designed around 120/240 V split-phase service, panel / sub panel formats, ESS backup, EV charging, solar integration, and compliance-led deployment.',
        note:
          'The 5th Gen PRD explicitly defines separate India and US variants, including service type, branch ratings, panel format, switching approach, thermal requirements, communication, labelling, backup orchestration, commissioning, and tariff logic.',
      },
    ],
  },
  projectSection: {
    accent: 'var(--black400)',
    eyebrow: 'Installer & developer value',
    titleLead: 'Made for projects,',
    titleAccent: 'not just products',
    accentTarget: 'lead',
    cards: [
      {
        title: 'Faster Installation',
        description: 'Smart DB is designed with guided commissioning and automated verification.',
      },
      {
        title: 'Cleaner Handover',
        description:
          'Generate reports with circuit labels, wiring photos, firmware versions, and safety checks.',
      },
      {
        title: 'Developer Differentiation',
        description:
          'Give residents a visible, useful smart-infrastructure layer - not just hidden hardware.',
      },
      {
        title: 'Support Visibility',
        description: 'Support teams can access fleet health, diagnostics, OTA status, and event history.',
      },
      {
        title: 'Channel Friendly',
        description:
          'Designed for builders, solar / EPC partners, backup installers, and electrical contractors. The PRD identifies channel partners as a primary user group.',
      },
    ],
  },
  comparisonSection: {
    accent: 'var(--black400)',
    eyebrow: 'Product comparison',
    titleLead: 'Three products.',
    titleAccent: 'One intelligence system',
    columns: ['', 'o3', 'o4', 'o5 / Smart DB'],
    rows: [
      ['Primary role', 'Energy visibility', 'Safety intelligence', 'Circuit-level intelligence'],
      ['Best for', 'Homes', 'Premium homes / developers', 'Future-ready homes / buildings'],
      ['Live energy', 'Yes', 'Yes', 'Yes'],
      ['Appliance insights', 'Yes', 'Yes', 'Yes, with circuit context'],
      ['Bill clarity', 'Yes', 'Yes', 'Yes'],
      ['Fault alerts', 'Basic / selected', 'Advanced', 'Advanced + circuit-aware'],
      ['Notifications', 'App-first', 'Multi-channel', 'Multi-channel + local event logic'],
      ['Tripping / control', 'No / limited', 'Where supported', 'Circuit-level where supported'],
      ['Backup orchestration', 'No', 'Limited', 'Yes'],
      ['Smart DB integration', 'No', 'Partial / external', 'Native'],
      ['Installer workflow', 'Simple install', 'Safety-led install', 'Guided commissioning'],
    ],
  },
  productsSection: {
    accent: 'var(--black400)',
    eyebrow: 'Monitoring products',
    titleLead: 'Monitoring that grows',
    titleAccent: 'with your electrical system',
    accentTarget: 'lead',
    description: 'Start with visibility. Add safety intelligence. Scale into circuit-level control.',
    cards: [
      {
        eyebrow: 'o3',
        title: 'Energy visibility for modern homes',
        description:
          'Track real-time power, understand appliance patterns, and predict your monthly electricity cost.',
        features: ['Live Usage', 'Bill Forecast', 'Appliance Insights', 'Energy Timeline'],
        action: {
          label: 'Explore o3',
          href: '/monitoring/o3-energy-visibility',
          variant: 'secondary',
        },
        tone: 'teal',
      },
      {
        eyebrow: 'o4',
        title: 'Safety intelligence for homes and buildings',
        description:
          'Detect abnormal electrical events, configure alerts, notify the right people, and support protection workflows.',
        features: ['Fault Detection', 'Voltage Anomalies', 'Earth Leakage', 'Arcing Alerts', 'Audit Logs'],
        action: {
          label: 'Explore o4',
          href: '/monitoring/o4-electrical-safety',
          variant: 'secondary',
        },
        tone: 'violet',
      },
      {
        eyebrow: 'o5',
        title: 'Smart DB intelligence and autonomous control',
        description:
          'Bring intelligence into the distribution board with circuit-level visibility, native safety sensing, backup orchestration, and edge control.',
        features: ['Circuit Control', 'Arc Detection', 'Backup Priority', 'Solar / EV Ready', 'Local Autonomy'],
        action: {
          label: 'Explore o5',
          href: '/smart-db',
          variant: 'secondary',
        },
        tone: 'coral',
      },
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
  derSection: {
    accent: 'var(--black400)',
    eyebrow: 'Backup & DER',
    titleLead: 'A distribution board that',
    titleAccent: 'sees, learns, and acts',
    description:
      'As homes add inverters, solar, batteries, and EV charging, the distribution board needs to do more than distribute power. It needs to make decisions.',
    cards: [
      {
        number: "o'DB",
        title: 'Distribution Intelligence',
        description: 'Circuit-level visibility, monitoring, and event intelligence.',
      },
      {
        number: "o'Wall",
        title: 'Visible Control Layer',
        description: 'A wall-mounted interface for energy status, safety alerts, and system awareness.',
      },
      {
        number: 'Smart Branch Modules',
        title: 'Retrofit Intelligence',
        description: 'Add monitoring and control to selected circuits.',
      },
      {
        number: 'Installer Experience',
        title: 'Commissioning Made Simple',
        description: 'Guided setup, circuit labelling, self-tests, and handover reports.',
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
      href: 'https://ultron.lifestylecommerce.in/our-products.html?cat=4',
      variant: 'primary',
    },
    {
      label: 'Book a Demo',
      href: '/ohm-os',
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
