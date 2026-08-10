import { memo } from 'react'
import type { SmartDbLoopSectionData } from '@/types'
import { SmartDbTextLink } from '../ui/SmartDbTextLink'

type SmartDbLoopSectionProps = {
  section: SmartDbLoopSectionData
}

function SmartDbLoopSectionComponent({ section }: SmartDbLoopSectionProps) {
  return (
    <section className="sdb-loop" aria-labelledby="sdb-loop-title">
      <div className="sdb-loop__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        {/* Both halves sit on one line here, so the spans need a real space. */}
        <h2 className="sdb-title" id="sdb-loop-title">
          <span>{section.titleLead}</span>{' '}
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <p className="sdb-description">{section.description}</p>

        <ol className="sdb-loop__grid">
          {section.steps.map((step) => (
            <li className="sdb-loop__step" key={step.title}>
              <span className="sdb-loop__number" aria-hidden="true">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <SmartDbTextLink action={section.action} eventSection="smart_db_mechanism" />
      </div>
    </section>
  )
}

export const SmartDbLoopSection = memo(SmartDbLoopSectionComponent)
