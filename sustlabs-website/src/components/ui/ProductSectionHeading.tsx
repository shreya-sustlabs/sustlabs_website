import { memo } from 'react'
import type { ProductSectionHeadingProps } from '../../types'

function ProductSectionHeadingComponent({
  accent,
  eyebrow,
  titleAccent,
  titleLead,
}: ProductSectionHeadingProps) {
  return (
    <div className="product-section-heading">
      <p className="product-section-heading__eyebrow">{eyebrow}</p>
      <h2>
        {titleLead} <span style={{ color: accent }}>{titleAccent}</span>
      </h2>
    </div>
  )
}

export const ProductSectionHeading = memo(ProductSectionHeadingComponent)
