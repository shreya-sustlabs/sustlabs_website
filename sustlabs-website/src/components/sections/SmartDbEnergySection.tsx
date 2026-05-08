import { memo } from 'react'
import type { SmartDbEnergySectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbEnergySectionProps = {
  section: SmartDbEnergySectionData
}

function SmartDbEnergySectionComponent({ section }: SmartDbEnergySectionProps) {
  return (
    <section className="smart-db-page__energy" aria-labelledby="smart-db-energy-title">
      <div className="smart-db-page__energy-inner">
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-energy-title">
          <span style={{ color: section.accent }}>{section.titleLead}</span> <span style={{ color: 'var(--black300)' }}>{section.titleAccent} </span>
        </h2>
        <div className="smart-db-page__energy-grid" aria-label="Smart DB energy control capabilities">
          {section.cards.map((item) => (
            <article
              className={`smart-db-page__energy-card smart-db-page__energy-card--${item.tone}`}
              key={item.title}
            >
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbEnergySection = memo(SmartDbEnergySectionComponent)
