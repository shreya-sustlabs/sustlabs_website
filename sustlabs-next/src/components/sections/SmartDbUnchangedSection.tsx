import { memo } from 'react'
import type { SmartDbUnchangedSectionData } from '@/types'

type SmartDbUnchangedSectionProps = {
  section: SmartDbUnchangedSectionData
}

function SmartDbUnchangedSectionComponent({ section }: SmartDbUnchangedSectionProps) {
  return (
    <section className="sdb-unchanged" aria-labelledby="sdb-unchanged-title">
      <div className="sdb-unchanged__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        <h2 className="sdb-title" id="sdb-unchanged-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <p className="sdb-description">{section.description}</p>

        <div className="sdb-unchanged__grid">
          {section.cards.map((card) => (
            <article className="sdb-unchanged__card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbUnchangedSection = memo(SmartDbUnchangedSectionComponent)
