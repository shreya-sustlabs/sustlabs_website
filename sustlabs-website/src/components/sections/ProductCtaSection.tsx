import { memo } from 'react'
import type { ProductCtaSection as ProductCtaSectionData } from '../../types'

type ProductCtaSectionProps = {
  section: ProductCtaSectionData
}

function ProductCtaSectionComponent({ section }: ProductCtaSectionProps) {
  const leadStyle = section.accentTarget === 'lead' ? { color: section.accent } : undefined
  const accentStyle = section.accentTarget === 'lead' ? undefined : { color: section.accent }

  return (
    <section className="product-cta-section">
      <div className="product-cta-section__inner">
        <p className="product-cta-section__eyebrow">{section.eyebrow}</p>
        <h2>
          <span style={leadStyle}>{section.titleLead}</span> <span style={accentStyle}>{section.titleAccent}</span>
        </h2>
        <p>{section.description}</p>

        <ul className="product-cta-section__list" aria-label={section.eyebrow}>
          {section.items.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const ProductCtaSection = memo(ProductCtaSectionComponent)
