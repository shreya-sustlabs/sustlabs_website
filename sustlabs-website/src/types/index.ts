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
