import { memo } from 'react'
import type { ProductUseCaseCardProps } from '../../types'

function ProductUseCaseCardComponent({ description, title }: ProductUseCaseCardProps) {
  return (
    <article className="product-use-case-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export const ProductUseCaseCard = memo(ProductUseCaseCardComponent)
