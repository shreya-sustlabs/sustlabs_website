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

export type SmartDbTextStackItem = BasicCardProps

export type SmartDbTextStackSectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbTextStackItem[]
}

export type SmartDbSafetyItem = NumberedCardProps

export type SmartDbSafetySectionData = {
  cards: readonly SmartDbSafetyItem[]
  description: string
  eyebrow: string
  titleAccent: string
  titleLead: string
}

export type SmartDbEnergyCard = {
  eyebrow: string
  title: string
  tone: SmartDbTone
}

export type SmartDbEnergySectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbEnergyCard[]
}

export type SmartDbVariantCard = BasicCardProps & {
  eyebrow: string
  note?: string
}

export type SmartDbVariantsSectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbVariantCard[]
}

export type SmartDbComparisonSectionData = ProductSectionHeadingProps & {
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}

export type SmartDbProductCard = {
  action: ProductHeroAction
  description: string
  eyebrow: string
  features: readonly string[]
  title: string
  tone: 'teal' | 'violet' | 'coral'
}

export type SmartDbProductsSectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbProductCard[]
  description: string
}

export type SmartDbLayerSectionData = ProductSectionHeadingProps & {
  cards: readonly SmartDbEyebrowCard[]
  description: string
}

export type SmartDbPageData = {
  comparisonSection: SmartDbComparisonSectionData
  derSection: ProductUseCaseSection
  energySection: SmartDbEnergySectionData
  heroSection: MonitoringHeroSectionProps
  introSection: MonitoringIntroSectionData
  layerSection: SmartDbLayerSectionData
  productsSection: SmartDbProductsSectionData
  projectSection: SmartDbTextStackSectionData
  promiseSection: ProductFeatureSection
  safetySection: SmartDbSafetySectionData
  stackSection: SmartDbTextStackSectionData
  variantsSection: SmartDbVariantsSectionData
}
