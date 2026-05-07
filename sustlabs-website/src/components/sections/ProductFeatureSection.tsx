import { memo } from 'react'
import type { ProductFeatureSection as ProductFeatureSectionData } from '../../types'
import { ProductFeatureCard } from '../ui/ProductFeatureCard'
import { ProductSectionHeading } from '../ui/ProductSectionHeading'

type ProductFeatureSectionProps = {
  section: ProductFeatureSectionData
}

function ProductFeatureSectionComponent({ section }: ProductFeatureSectionProps) {
  return (
    <section className="product-feature-section" id="features">
      <ProductSectionHeading
        accent={section.accent}
        eyebrow={section.eyebrow}
        titleAccent={section.titleAccent}
        titleLead={section.titleLead}
      />

      <div className="product-feature-rail" aria-label={section.eyebrow}>
        {section.cards.map((card) => (
          <ProductFeatureCard
            description={card.description}
            eyebrow={card.eyebrow}
            key={card.title}
            title={card.title}
          />
        ))}
      </div>
    </section>
  )
}

export const ProductFeatureSection = memo(ProductFeatureSectionComponent)
