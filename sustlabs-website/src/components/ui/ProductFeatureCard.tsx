import { memo } from 'react'
import type { ProductFeatureCardProps } from '../../types'

function ProductFeatureCardComponent({
  description,
  eyebrow,
  title,
}: ProductFeatureCardProps) {
  return (
    <article className="product-feature-card">
      <p className="product-feature-card__eyebrow">{eyebrow}</p>

      <h3>{title}</h3>

      <p className="product-feature-card__description">
        {description}
      </p>
    </article>
  )
}

export const ProductFeatureCard = memo(ProductFeatureCardComponent)
