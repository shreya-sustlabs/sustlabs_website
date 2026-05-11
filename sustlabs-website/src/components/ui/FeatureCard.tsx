import type { BasicCardProps } from '../../types'

type FeatureCardProps = BasicCardProps & {
  image?: string
}

export function FeatureCard({ description, image, title }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="feature-card__visual" aria-hidden="true">
        {image ? <img src={image} alt="" /> : null}
      </div>
    </article>
  )
}
