import { memo } from 'react'
import type { SmartDbCapabilitiesSectionData } from '../../types'

type SmartDbCapabilitiesSectionProps = {
  section: SmartDbCapabilitiesSectionData
}

function SmartDbCapabilitiesSectionComponent({ section }: SmartDbCapabilitiesSectionProps) {
  return (
    <section className="sdb-capabilities" aria-labelledby="sdb-capabilities-title">
      <div className="sdb-capabilities__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        <h2 className="sdb-title" id="sdb-capabilities-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <dl className="sdb-capabilities__list">
          {section.items.map((item) => (
            <div className="sdb-capabilities__item" key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export const SmartDbCapabilitiesSection = memo(SmartDbCapabilitiesSectionComponent)
