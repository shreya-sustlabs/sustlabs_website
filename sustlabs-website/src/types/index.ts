import type { AnchorHTMLAttributes, ReactNode } from 'react'

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

export type MonitoringPageData = {
  accent: string
  ctaSection: ProductCtaSection
  description: string
  detailSection: ProductDetailSection
  eyebrow: string
  featureSection: ProductFeatureSection
  heroActions: readonly ProductHeroAction[]
  heroAccent: string
  heroDescription: string
  heroKicker: string
  heroLead: string
  navLabel: string
  path: string
  title: string
  useCaseSection: ProductUseCaseSection
}

export type MonitoringIntroSectionProps = {
  accent: string
  description: string
  title: string
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
  kicker: string
  titleAccent: string
  titleLead: string
}

export type ProductSectionHeadingProps = {
  accent: string
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
}

export type ProductDetailItem = BasicCardProps

export type ProductDetailSection = {
  body: string
  items: readonly ProductDetailItem[]
  visualColor: string
}

export type ProductCtaSection = {
  accent: string
  description: string
  eyebrow: string
  items: readonly string[]
  titleAccent: string
  titleLead: string
}
