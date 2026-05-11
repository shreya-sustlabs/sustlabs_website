import type { NumberedCardProps } from '../../types'

export function SignalStep({ description, title }: NumberedCardProps) {
  return (
    <article className="signal-step">
      <h3>{title}</h3>
      <p className="signal-step__description">{description}</p>
    </article>
  )
}
