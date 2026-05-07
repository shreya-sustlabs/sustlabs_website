import { memo } from 'react'
import type { ProductFeatureCardProps } from '../../types'

function ProductFeatureCardComponent({ description, eyebrow, title }: ProductFeatureCardProps) {
  return (
    <article className="product-feature-card">
      <div className="product-feature-card__copy">
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="product-feature-card__visual" aria-hidden="true" />
    </article>
  )
}

export const ProductFeatureCard = memo(ProductFeatureCardComponent)
