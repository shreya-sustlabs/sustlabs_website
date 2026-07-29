import { memo } from 'react'
import { Check } from 'lucide-react'
import type { FmsCoverageSectionProps } from '../../types'
import { CardRail } from '../ui/CardRail'

function FmsCoverageSectionComponent({ section }: FmsCoverageSectionProps) {
  return (
    <section className="fms-coverage" aria-labelledby="fms-coverage-title">
      <div className="fms-coverage__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id="fms-coverage-title">
          <span>{section.titleLead}</span>{' '}
          <span className="fms-section-title__accent">{section.titleAccent}</span>
        </h2>

        {section.description ? <p className="fms-section-description">{section.description}</p> : null}
      </div>

      <CardRail className="fms-coverage__rail" label="Monitored parameter groups">
        {section.groups.map((group) => (
          <article className="fms-coverage__card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.parameters.map((parameter) => (
                <li key={parameter}>
                  <Check aria-hidden="true" size={15} strokeWidth={2} />
                  <span>{parameter}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </CardRail>
    </section>
  )
}

export const FmsCoverageSection = memo(FmsCoverageSectionComponent)
