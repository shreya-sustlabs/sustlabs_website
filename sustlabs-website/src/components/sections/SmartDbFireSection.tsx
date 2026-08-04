import { memo } from 'react'
import type { SmartDbFireSectionData } from '../../types'

type SmartDbFireSectionProps = {
  section: SmartDbFireSectionData
}

function SmartDbFireSectionComponent({ section }: SmartDbFireSectionProps) {
  return (
    <section className="sdb-fire" aria-labelledby="sdb-fire-title">
      <div className="sdb-fire__inner">
        <p className="sdb-eyebrow sdb-eyebrow--dark">{section.eyebrow}</p>

        {/* Both halves sit on one line here, so the spans need a real space. */}
        <h2 className="sdb-title sdb-title--dark" id="sdb-fire-title">
          <span>{section.titleLead}</span>{' '}
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        {/* <p className="sdb-description sdb-description--dark">{section.description}</p>

        <ul className="sdb-fire__tags">
          {section.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    </section>
  )
}

export const SmartDbFireSection = memo(SmartDbFireSectionComponent)
