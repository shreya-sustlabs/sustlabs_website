import type { BasicCardProps } from '../../types'

export function SafetyCard({ description, title }: BasicCardProps) {
  return (
    <article className="safety-card">
      <div className="safety-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="safety-card__visual" aria-hidden="true" />
    </article>
  )
}
