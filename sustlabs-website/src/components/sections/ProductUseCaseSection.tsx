import { memo } from 'react'
import type { ProductUseCaseSection as ProductUseCaseSectionData } from '../../types'
import { ProductSectionHeading } from '../ui/ProductSectionHeading'
import { ProductUseCaseCard } from '../ui/ProductUseCaseCard'

type ProductUseCaseSectionProps = {
  section: ProductUseCaseSectionData
}

function ProductUseCaseSectionComponent({ section }: ProductUseCaseSectionProps) {
  return (
    <section className="product-use-case-section">
      <ProductSectionHeading
        accent={section.accent}
        accentTarget={section.accentTarget}
        eyebrow={section.eyebrow}
        titleAccent={section.titleAccent}
        titleLead={section.titleLead}
      />
      {section.description ? (
        <p className="product-use-case-section__description">{section.description}</p>
      ) : null}

      <div className="product-use-case-grid" aria-label={section.eyebrow}>
        {section.cards.map((card) => (
          <ProductUseCaseCard
            description={card.description}
            key={card.number}
            number={card.number}
            title={card.title}
          />
        ))}
      </div>
    </section>
  )
}

export const ProductUseCaseSection = memo(ProductUseCaseSectionComponent)
