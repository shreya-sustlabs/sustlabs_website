import { memo } from 'react'
import type { ProductFeatureSection as ProductFeatureSectionData } from '../../types'
import { ProductFeatureCard } from '../ui/ProductFeatureCard'
import { ProductSectionHeading } from '../ui/ProductSectionHeading'

type ProductFeatureSectionProps = {
  section: ProductFeatureSectionData
  variant?: 'smart-db'
}

function ProductFeatureSectionComponent({ section, variant }: ProductFeatureSectionProps) {
  return (
    <section className={`product-feature-section${variant ? ` product-feature-section--${variant}` : ''}`} id="features">
      <ProductSectionHeading
        accent={section.accent}
        accentTarget={section.accentTarget}
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
