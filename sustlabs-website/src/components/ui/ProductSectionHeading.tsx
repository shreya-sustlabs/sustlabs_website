import { memo } from 'react'
import type { ProductSectionHeadingProps } from '../../types'

function ProductSectionHeadingComponent({
  accent,
  accentTarget,
  eyebrow,
  titleAccent,
  titleLead,
}: ProductSectionHeadingProps) {
  const leadStyle = accentTarget === 'lead' ? { color: accent } : undefined
  const accentStyle = accentTarget === 'lead' ? undefined : { color: 'var(--terra500)' }

  return (
    <div className="product-section-heading">
      {eyebrow ? <p className="product-section-heading__eyebrow">{eyebrow}</p> : null}
      <h2>
        <span style={leadStyle}>{titleLead}</span>
        {titleAccent ? <span style={accentStyle}> {titleAccent}</span> : null}
      </h2>
    </div>
  )
}

export const ProductSectionHeading = memo(ProductSectionHeadingComponent)
