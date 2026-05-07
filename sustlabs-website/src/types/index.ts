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