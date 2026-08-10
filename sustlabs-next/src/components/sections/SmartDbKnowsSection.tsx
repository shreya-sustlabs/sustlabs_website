import { memo } from 'react'
import type { SmartDbKnowsSectionData } from '@/types'
import { SmartDbTextLink } from '../ui/SmartDbTextLink'

type SmartDbKnowsSectionProps = {
  section: SmartDbKnowsSectionData
}

function SmartDbKnowsSectionComponent({ section }: SmartDbKnowsSectionProps) {
  return (
    <section className="sdb-knows" aria-labelledby="sdb-knows-title">
      <div className="sdb-knows__inner">
        <p className="sdb-eyebrow sdb-eyebrow--dark">{section.eyebrow}</p>

        <h2 className="sdb-title sdb-title--dark" id="sdb-knows-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <div className="sdb-knows__copy">
          {section.descriptions.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="sdb-knows__stats">
          {section.stats.map((stat) => (
            <div className="sdb-knows__stat" key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <SmartDbTextLink action={section.action} eventSection="smart_db_product" onDark />
      </div>
    </section>
  )
}

export const SmartDbKnowsSection = memo(SmartDbKnowsSectionComponent)
