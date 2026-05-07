import { memo } from 'react'
import type { SmartDbTextStackSectionData } from '../../types'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbTextStackSectionProps = {
  headingId: string
  section: SmartDbTextStackSectionData
  variant: 'project' | 'stack'
}

function SmartDbTextStackSectionComponent({
  headingId,
  section,
  variant,
}: SmartDbTextStackSectionProps) {
  const sectionClass = variant === 'project' ? 'smart-db-page__project' : 'smart-db-page__stack'
  const innerClass =
    variant === 'project' ? 'smart-db-page__project-inner' : 'smart-db-page__stack-inner'
  const listClass =
    variant === 'project' ? 'smart-db-page__project-list' : 'smart-db-page__stack-list'
  const itemClass =
    variant === 'project' ? 'smart-db-page__project-item' : 'smart-db-page__stack-item'
  const leadStyle = section.accentTarget === 'lead' ? { color: section.accent } : undefined
  const accentStyle = section.accentTarget === 'lead' ? undefined : { color: section.accent }

  return (
    <section className={sectionClass} aria-labelledby={headingId}>
      <div className={innerClass}>
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id={headingId}>
          <span style={leadStyle}>{section.titleLead}</span>{' '}
          <span style={accentStyle}>{section.titleAccent}</span>
        </h2>
        <div className={listClass}>
          {section.cards.map((item) => (
            <article className={itemClass} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbTextStackSection = memo(SmartDbTextStackSectionComponent)
