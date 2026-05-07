import { memo } from 'react'
import type { SovereigntyCardProps } from '../../types'

function SovereigntyCardComponent({
  description,
  eyebrow,
  size,
  title,
  tone,
}: SovereigntyCardProps) {
  return (
    <article className={`sovereignty-card sovereignty-card--${tone} sovereignty-card--${size}`}>
      <p className="sovereignty-card__eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      {description ? <p className="sovereignty-card__description">{description}</p> : null}
    </article>
  )
}

export const SovereigntyCard = memo(SovereigntyCardComponent)
