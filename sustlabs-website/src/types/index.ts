import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

export type CardRailProps = {
  children: ReactNode
  className?: string
  label: string
}

export type BasicCardProps = {
  description: string
  title: string
}

export type NumberedCardProps = BasicCardProps & {
  number: string
}

export type InsightCardProps = BasicCardProps & {
  metric: string
}

export type TechnologyPointProps = NumberedCardProps

export type LayerCardTone = 'teal' | 'violet' | 'amber' | 'coral'

export type LayerCardProps = BasicCardProps & {
  tone: LayerCardTone
}

export type SmartDbFeatureAccent = 'mint' | 'lavender' | 'cream' | 'blush' | 'ice'

export type SmartDbFeatureProps = BasicCardProps & {
  accent: SmartDbFeatureAccent
}

export type OraCardTone = 'teal' | 'blue' | 'violet' | 'amber' | 'coral'

export type OraCardLayout = 'wide' | 'split'

export type OraCardProps = BasicCardProps & {
  layout: OraCardLayout
  tone: OraCardTone
}

export type EnterpriseAudienceProps = NumberedCardProps

export type InfrastructureUseCaseProps = BasicCardProps

export type SovereigntyCardTone = 'teal' | 'violet' | 'amber' | 'coral' | 'blue'

export type SovereigntyCardSize = 'large' | 'regular'

export type SovereigntyCardProps = BasicCardProps & {
  eyebrow: string
  size: SovereigntyCardSize
  tone: SovereigntyCardTone
}

export type ImpactMetricVariant = 'primary' | 'secondary'

export type ImpactMetricProps = {
  label: string
  value: string
  variant: ImpactMetricVariant
}

export type PageAction = {
  href: string
  label: string
  variant: ButtonVariant
}

export type OhmOsHeroSectionData = {
  actions: readonly PageAction[]
  description: string
  titleAccent: string
  titleLead: string
  titleRest: string
}

export type OhmOsHeroSectionProps = {
  section: OhmOsHeroSectionData
}

export type OhmOsApplication = BasicCardProps

export type OhmOsApplicationsSectionData = {
  description: string
  eyebrow: string
  items: readonly OhmOsApplication[]
  titleAccent: string
  titleLead: string
}

export type OhmOsApplicationsSectionProps = {
  section: OhmOsApplicationsSectionData
}

export type OhmOsLicenseeSectionData = {
  description: string
  logos: readonly {
    id: string
    label: string
    image: string
  }[]
  title: string
}

export type OhmOsLicenseeSectionProps = {
  section: OhmOsLicenseeSectionData
}

export type OraHeroSectionData = {
  action: PageAction
  description: string
  titleAccent: string
  titleLead: string
}

export type OraHeroSectionProps = {
  section: OraHeroSectionData
}

export type OraDeveloperBenefit = NumberedCardProps

export type OraDeveloperSectionData = {
  benefits: readonly OraDeveloperBenefit[]
  description: string
  titleAccent: string
  titleLead: string
}

export type OraDeveloperSectionProps = {
  section: OraDeveloperSectionData
}

export type OraEnablesSectionData = {
  cards: readonly BasicCardProps[]
  description: string
  safetyDescription: string
  safetyEyebrow: string
  safetyTitle: string
  titleAccent: string
  titleLead: string
}

export type OraEnablesSectionProps = {
  section: OraEnablesSectionData
}

export type SolutionPanelData = {
  capabilities: readonly string[]
  description?: string
  eyebrow?: string
  titleAccent?: string
  titleLead: string
  titlePrefix?: string
}

export type SolutionPanelProps = {
  index: number
  panel: SolutionPanelData
}

export type SolutionsHeroSectionData = {
  actions: readonly PageAction[]
  description: string
  note: string
  titleAccent: string
  titleLead: string
  titleRest: string
}

export type SolutionsHeroSectionProps = {
  onActionClick?: (action: PageAction, event: MouseEvent<HTMLAnchorElement>) => void
  section: SolutionsHeroSectionData
}

export type SolutionsPartnerItem = BasicCardProps

export type SolutionsPartnerSectionData = ProductSectionHeadingProps & {
  description: string
  items: readonly SolutionsPartnerItem[]
}

export type SolutionsPartnerSectionProps = {
  section: SolutionsPartnerSectionData
}

export type SupportHeroSectionData = {
  action: PageAction
  description: string
  title: string
}

export type SupportHeroSectionProps = {
  section: SupportHeroSectionData
}

export type SupportFormField = {
  id: string
  label: string
  placeholder: string
  type?: string
  variant?: 'textarea'
}

export type SupportContactSectionData = {
  fields: readonly SupportFormField[]
  title: string
}

export type SupportContactSectionProps = {
  section: SupportContactSectionData
}

export type MonitoringPageData = {
  accent: string
  ctaSection: ProductCtaSection
  description: string
  detailSection: ProductDetailSection
  eyebrow: string
  featureSection: ProductFeatureSection
  heroActions: readonly ProductHeroAction[]
  heroAccent: string
  heroAccentColor?: string
  heroDescription: string
  heroKicker: string
  heroLead: string
  heroRest?: string
  introSection: MonitoringIntroSectionData
  navLabel: string
  path: string
  postDetailUseCaseSection?: ProductUseCaseSection
  title: string
  searchTitle?: string
  searchSubTitle?: string
  useCaseSection: ProductUseCaseSection
  itemsAccent?: string
}

export type MonitoringIntroSectionData = {
  accent: string
  descriptions: readonly string[]
  eyebrow?: string
  titleAccent: string
  titleLead: string
  titleKicker?: string
}

export type MonitoringIntroSectionProps = {
  section: MonitoringIntroSectionData
}

export type ProductHeroAction = {
  href: string
  label: string
  variant: ButtonVariant
}

export type MonitoringHeroSectionProps = {
  accent: string
  actions: readonly ProductHeroAction[]
  description: string
  eyebrow: string
  imageAlt?: string
  imageSrc?: string
  imageVariant?: 'o3' | 'o4' | 'smart-db'
  kicker: string
  onActionClick?: (action: ProductHeroAction, event: MouseEvent<HTMLAnchorElement>) => void
  titleAccent: string
  titleLead: string
  titleRest?: string
}

export type ProductSectionHeadingProps = {
  accent: string
  accentTarget?: 'lead' | 'accent'
  eyebrow: string
  titleAccent: string
  titleLead: string
}

export type ProductFeatureCardProps = BasicCardProps & {
  eyebrow: string
}

export type ProductFeatureSection = ProductSectionHeadingProps & {
  cards: readonly ProductFeatureCardProps[]
}

export type ProductUseCaseCardProps = NumberedCardProps

export type ProductUseCaseSection = ProductSectionHeadingProps & {
  cards: readonly ProductUseCaseCardProps[]
  description?: string
}

export type ProductDetailItem = BasicCardProps

export type ProductDetailSection = {
  body?: string
  items: readonly ProductDetailItem[]
  visualColor: string
}

export type ProductCtaSection = {
  accent: string
  accentTarget?: 'lead' | 'accent'
  description: string
  eyebrow: string
  items: readonly string[]
  titleAccent: string
  titleLead: string
  itemAccent?: string
  footer?: string
}

export type SmartDbTone = 'teal' | 'violet' | 'amber' | 'coral' | 'blue'

export type SmartDbEyebrowCard = BasicCardProps & {
  eyebrow: string
}

export type SmartDbLayerSectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbEyebrowCard[]
  description: string
}

/**
 * Every heading on the Smart DB page is "lead + accent", where the accent half is
 * the emphasised (darker) line. Sections that also carry body copy extend this.
 */
export type SmartDbHeading = {
  eyebrow: string
  titleAccent: string
  titleLead: string
}

export type SmartDbHeadingWithCopy = SmartDbHeading & {
  description: string
}

export type SmartDbHeroSectionData = SmartDbHeading & {
  actions: readonly ProductHeroAction[]
  description: string
}

export type SmartDbHeroSectionProps = {
  onActionClick?: (action: ProductHeroAction, event: MouseEvent<HTMLAnchorElement>) => void
  section: SmartDbHeroSectionData
}

/**
 * The exploded-panel render. Its "Intelligence Layer" / "Conventional Layer"
 * callouts are drawn into the image, so the section carries no legend data.
 */
export type SmartDbLayersSectionData = {
  imageAlt: string
  title: string
}

export type SmartDbStat = {
  label: string
  value: string
}

/** An underlined text link with a trailing arrow, not a button. */
export type SmartDbTextLinkAction = {
  /** Set when href points at a file the browser should save rather than open. */
  download?: boolean
  /** Filename the download is saved as; implies `download`. */
  fileName?: string
  href: string
  label: string
  /** Opens the shared lead form instead of following the href. */
  opensLeadForm?: boolean
}

export type SmartDbKnowsSectionData = SmartDbHeading & {
  action: SmartDbTextLinkAction
  /** Rendered as separate paragraphs. */
  descriptions: readonly string[]
  stats: readonly SmartDbStat[]
}

export type SmartDbUnchangedSectionData = SmartDbHeadingWithCopy & {
  cards: readonly BasicCardProps[]
}

/** Sense -> Understand -> Alert -> Act. `step` renders as the card ordinal. */
export type SmartDbLoopStep = NumberedCardProps

export type SmartDbLoopSectionData = SmartDbHeadingWithCopy & {
  action: SmartDbTextLinkAction
  steps: readonly SmartDbLoopStep[]
}

export type SmartDbCapabilitiesSectionData = SmartDbHeading & {
  items: readonly BasicCardProps[]
}

export type SmartDbAppScreen = {
  alt: string
  caption: string
  /** Key into the section's image map, resolved by the component. */
  image: 'live' | 'alerts' | 'energy'
}

export type SmartDbPocketSectionData = SmartDbHeadingWithCopy & {
  highlight: SmartDbEyebrowCard
  screens: readonly SmartDbAppScreen[]
}

export type SmartDbPlatformTile = {
  description: string
  /** Key into the section's image map, resolved by the component. */
  image: 'app' | 'dashboard' | 'clock'
  /** Short form-factor line under the name, e.g. "Mobile · On the go". */
  kicker: string
  name: string
}

export type SmartDbPlatformSectionData = SmartDbHeading & {
  tiles: readonly SmartDbPlatformTile[]
}

export type SmartDbSpecGroup = {
  label: string
  value: string
}

export type SmartDbSpecsSectionData = {
  note: string
  specs: readonly SmartDbSpecGroup[]
  title: string
}

export type SmartDbComparisonSectionData = SmartDbHeading & {
  action?: SmartDbTextLinkAction
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}

export type SmartDbSegment = {
  alt: string
  description: string
  /** Key into the section's image map, resolved by the component. */
  image: 'residential' | 'villa' | 'retrofit' | 'facility'
  name: string
}

export type SmartDbSegmentsSectionData = SmartDbHeadingWithCopy & {
  segments: readonly SmartDbSegment[]
}

export type SmartDbFireSectionData = SmartDbHeadingWithCopy & {
  tags: readonly string[]
}

export type SmartDbPageData = {
  capabilitiesSection: SmartDbCapabilitiesSectionData
  comparisonSection: SmartDbComparisonSectionData
  fireSection: SmartDbFireSectionData
  heroSection: SmartDbHeroSectionData
  knowsSection: SmartDbKnowsSectionData
  layerSection: SmartDbLayerSectionData
  layersSection: SmartDbLayersSectionData
  loopSection: SmartDbLoopSectionData
  platformSection: SmartDbPlatformSectionData
  pocketSection: SmartDbPocketSectionData
  segmentsSection: SmartDbSegmentsSectionData
  specsSection?: SmartDbSpecsSectionData
  unchangedSection: SmartDbUnchangedSectionData
}

export type FmsHeroStat = {
  label: string
  value: string
}

export type FmsHeroSectionData = {
  actions: readonly ProductHeroAction[]
  badge?: string
  eyebrow: string
  stats: readonly FmsHeroStat[]
  titleAccent: string
  titleLead: string
}

export type FmsHeroSectionProps = {
  onActionClick?: (action: ProductHeroAction, event: MouseEvent<HTMLAnchorElement>) => void
  section: FmsHeroSectionData
}

export type FmsHeadingSectionData = {
  description?: string
  eyebrow: string
  titleAccent: string
  titleLead: string
}

export type FmsDownloadAction = {
  fileName?: string
  href: string
  label: string
}

export type FmsMediaSectionData = FmsHeadingSectionData & {
  downloadAction?: FmsDownloadAction
  mediaAlt: string
  mediaCaption?: string
}

export type FmsMediaSectionProps = {
  headingId: string
  imageSrc: string
  section: FmsMediaSectionData
  variant?: 'dashboard' | 'audience' | 'console'
}

export type FmsGapColumn = {
  eyebrow: string
  items: readonly string[]
  title: string
  tone: 'inspection' | 'readiness'
}

export type FmsGapSectionData = FmsHeadingSectionData & {
  columns: readonly FmsGapColumn[]
  titleHighlight?: string
}

export type FmsGapSectionProps = {
  section: FmsGapSectionData
}

export type FmsChainSectionData = FmsHeadingSectionData & {
  items: readonly BasicCardProps[]
  mediaAlt: string
}

export type FmsChainSectionProps = {
  section: FmsChainSectionData
  videoSrc: string
}

export type FmsCoverageGroup = {
  parameters: readonly string[]
  title: string
}

export type FmsCoverageSectionData = FmsHeadingSectionData & {
  groups: readonly FmsCoverageGroup[]
}

export type FmsCoverageSectionProps = {
  section: FmsCoverageSectionData
}

export type FmsAlertCard = {
  body: string
  meta: string
  tone: 'critical' | 'advisory' | 'summary'
}

export type FmsAlertsSectionData = FmsHeadingSectionData & {
  cards: readonly FmsAlertCard[]
}

export type FmsAlertsSectionProps = {
  section: FmsAlertsSectionData
}

export type FmsAssuranceSectionData = FmsHeadingSectionData & {
  items: readonly BasicCardProps[]
}

export type FmsAssuranceSectionProps = {
  section: FmsAssuranceSectionData
}

export type FmsStepCard = NumberedCardProps

export type FmsStepsSectionData = FmsHeadingSectionData & {
  cards: readonly FmsStepCard[]
}

export type FmsStepsSectionProps = {
  section: FmsStepsSectionData
}

export type FmsFaqItem = {
  answer: string
  question: string
}

export type FmsFaqSectionData = FmsHeadingSectionData & {
  action: ProductHeroAction
  items: readonly FmsFaqItem[]
  note: string
}

export type FmsFaqSectionProps = {
  onActionClick?: (action: ProductHeroAction, event: MouseEvent<HTMLAnchorElement>) => void
  section: FmsFaqSectionData
}

export type FmsPageData = {
  alertsSection: FmsAlertsSectionData
  assuranceSection: FmsAssuranceSectionData
  audienceSection: FmsMediaSectionData
  chainSection: FmsChainSectionData
  coverageSection: FmsCoverageSectionData
  faqSection: FmsFaqSectionData
  gapSection: FmsGapSectionData
  heroSection: FmsHeroSectionData
  problemSection: FmsMediaSectionData
  stepsSection: FmsStepsSectionData
  visibilitySection: FmsMediaSectionData
}
