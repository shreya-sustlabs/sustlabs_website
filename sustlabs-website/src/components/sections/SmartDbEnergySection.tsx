import { memo } from 'react'
import type { SmartDbEnergySectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbEnergySectionProps = {
  section: SmartDbEnergySectionData
}

function SmartDbEnergySectionComponent({ section }: SmartDbEnergySectionProps) {
  const titleWords = section.titleLead.split(' ')
  const titleSecondLineLead = titleWords.pop()
  const titleFirstLine = titleWords.join(' ')

  return (
    <section className="smart-db-page__energy" aria-labelledby="smart-db-energy-title">
      <div className="smart-db-page__energy-inner">
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-energy-title">
          <span className="smart-db-page__energy-title-line">{titleFirstLine}</span>
          <span className="smart-db-page__energy-title-line">
            {titleSecondLineLead} <span>{section.titleAccent}</span>
          </span>
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
