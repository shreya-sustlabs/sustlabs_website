import { Zap } from 'lucide-react'
import type { InsightCardProps } from '../../types'

export function InsightCard({ description, metric, title }: InsightCardProps) {
  return (
    <article className="insight-card">
      <Zap className="insight-card__icon" aria-hidden="true" size={36} fill="currentColor" />
      <h3 className="insight-card__title">{title}</h3>
      <div className="insight-card__panel">
        <p>
          <span>{metric}</span>
          {description}
        </p>
      </div>
    </article>
  )
}
