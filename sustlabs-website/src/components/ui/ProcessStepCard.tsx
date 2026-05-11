import type { NumberedCardProps } from '../../types'

export function ProcessStepCard({ description, number, title }: NumberedCardProps) {
  return (
    <article className="process-step-card">
      {/* <p className="process-step-card__number">{number}</p> */}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
