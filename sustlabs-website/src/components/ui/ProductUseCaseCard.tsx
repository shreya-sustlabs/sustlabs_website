import { memo } from 'react'
import type { ProductUseCaseCardProps } from '../../types'

function ProductUseCaseCardComponent({ description, number, title }: ProductUseCaseCardProps) {
  return (
    <article className="product-use-case-card">
      <p className="product-use-case-card__number">{number}</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export const ProductUseCaseCard = memo(ProductUseCaseCardComponent)
