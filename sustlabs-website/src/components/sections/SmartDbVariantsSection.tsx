import { memo } from 'react'
import type { SmartDbVariantsSectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbVariantsSectionProps = {
  section: SmartDbVariantsSectionData
}

function SmartDbVariantsSectionComponent({ section }: SmartDbVariantsSectionProps) {
  return (
    <section className="smart-db-page__variants" aria-labelledby="smart-db-variants-title">
      <div className="smart-db-page__variants-heading">
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-variants-title">
          {section.titleLead} <span style={{ color: section.accent }}>{section.titleAccent}</span>
        </h2>
      </div>
      <div className="smart-db-page__variant-grid">
        {section.cards.map((variant) => (
          <article className="smart-db-page__variant-card" key={variant.eyebrow}>
            <p>{variant.eyebrow}</p>
            <h3>{variant.title}</h3>
            <p>{variant.description}</p>
            {variant.note ? <p>{variant.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export const SmartDbVariantsSection = memo(SmartDbVariantsSectionComponent)
