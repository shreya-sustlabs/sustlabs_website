import { memo } from 'react'
import type { SmartDbSpecsSectionData } from '@/types'

type SmartDbSpecsSectionProps = {
  section: SmartDbSpecsSectionData
}

function SmartDbSpecsSectionComponent({ section }: SmartDbSpecsSectionProps) {
  return (
    <section className="sdb-specs" aria-labelledby="sdb-specs-title">
      <div className="sdb-specs__inner">
        <h2 className="sdb-title" id="sdb-specs-title">
          <span className="sdb-title__accent">{section.title}</span>
        </h2>

        <dl className="sdb-specs__list">
          {section.specs.map((spec) => (
            <div className="sdb-specs__row" key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <p className="sdb-specs__note">{section.note}</p>
      </div>
    </section>
  )
}

export const SmartDbSpecsSection = memo(SmartDbSpecsSectionComponent)
