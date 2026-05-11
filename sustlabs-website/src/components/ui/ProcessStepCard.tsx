import type { NumberedCardProps } from '../../types'

export function ProcessStepCard({ description, title }: NumberedCardProps) {
  return (
    <article className="process-step-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
