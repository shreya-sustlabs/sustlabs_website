import { memo } from 'react'
import type { SmartDbLayerSectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbLayerSectionProps = {
  section: SmartDbLayerSectionData
}

function SmartDbLayerSectionComponent({ section }: SmartDbLayerSectionProps) {
  return (
    <section className="smart-db-page__layer" aria-labelledby="smart-db-layer-title">
      <div className="smart-db-page__layer-inner">
        <SmartDbPill variant="dark">{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-layer-title">
          {section.titleLead} <span style={{ color: section.accent }}>{section.titleAccent}</span>
        </h2>
        <p>{section.description}</p>
        <div className="smart-db-page__layer-grid">
          {section.cards.map((item) => (
            <article className="smart-db-page__layer-item" key={item.eyebrow}>
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbLayerSection = memo(SmartDbLayerSectionComponent)
