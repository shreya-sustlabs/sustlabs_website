import type { BasicCardProps } from '../../types'

export function FeatureCard({ description, title }: BasicCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="feature-card__visual" aria-hidden="true" />
    </article>
  )
}
