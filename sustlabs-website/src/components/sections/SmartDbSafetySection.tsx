import { memo } from 'react'
import type { SmartDbSafetySectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbSafetySectionProps = {
  section: SmartDbSafetySectionData
}

function SmartDbSafetySectionComponent({ section }: SmartDbSafetySectionProps) {
  return (
    <section className="smart-db-page__safety" aria-labelledby="smart-db-safety-title">
      <div className="smart-db-page__safety-inner">
        <div className="smart-db-page__safety-copy">
          <SmartDbPill variant="dark">{section.eyebrow}</SmartDbPill>
          <h2 id="smart-db-safety-title">
            <span>{section.titleLead}</span> {section.titleAccent}
          </h2>
          <p>{section.description}</p>
        </div>
        <div className="smart-db-page__safety-list">
          {section.cards.map((item) => (
            <article className="smart-db-page__safety-item" key={item.title}>
              <p>{item.number}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbSafetySection = memo(SmartDbSafetySectionComponent)
