import type { BasicCardProps, SectionImage } from '@/types'

type FeatureCardProps = BasicCardProps & {
  image?: SectionImage
}

export function FeatureCard({ description, image, title }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="feature-card__visual" aria-hidden="true">
        {image ? <img alt="" height={image.height} src={image.src} width={image.width} /> : null}
      </div>
    </article>
  )
}
