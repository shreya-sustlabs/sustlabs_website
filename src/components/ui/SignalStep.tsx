import type { NumberedCardProps } from '../../types'

export function SignalStep({ description, number, title }: NumberedCardProps) {
  return (
    <article className="signal-step">
      <p className="signal-step__number">{number}</p>
      <h3>{title}</h3>
      <p className="signal-step__description">{description}</p>
    </article>
  )
}
