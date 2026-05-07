import { memo } from 'react'
import type { OraCardProps } from '../../types'

function OraCardComponent({ description, layout, title, tone }: OraCardProps) {
  return (
    <article className={`ora-card ora-card--${layout} ora-card--${tone}`}>
      <div className="ora-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export const OraCard = memo(OraCardComponent)
