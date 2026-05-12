import { memo } from 'react'
import type { SolutionsPartnerSectionProps } from '../../types'
import { ProductSectionHeading } from '../ui/ProductSectionHeading'

function SolutionsPartnerSectionComponent({ section }: SolutionsPartnerSectionProps) {
  return (
    <section className="solutions-partner-section">
      <p className="solutions-partner-section__number">06.</p>

      <ProductSectionHeading
        accent={section.accent}
        accentTarget={section.accentTarget}
        eyebrow={section.eyebrow}
        titleAccent={section.titleAccent}
        titleLead={section.titleLead}
      />
      
      <p className="solutions-partner-section__description">{section.description}</p>

      <div className="solutions-partner-section__items" aria-label="Consent-led partner intelligence">
        {section.items.map((item) => (
          <article className="solutions-partner-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export const SolutionsPartnerSection = memo(SolutionsPartnerSectionComponent)
