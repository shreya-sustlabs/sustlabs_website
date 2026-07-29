import { memo } from 'react'
import type { FmsAssuranceSectionProps } from '../../types'

function FmsAssuranceSectionComponent({ section }: FmsAssuranceSectionProps) {
  return (
    <section className="fms-assurance" aria-labelledby="fms-assurance-title">
      <div className="fms-assurance__inner">
        <div className="fms-assurance__heading">
          <p className="fms-section-eyebrow fms-section-eyebrow--dark">{section.eyebrow}</p>

          <h2 id="fms-assurance-title">
            <span>{section.titleLead}</span>{' '}
            <span className="fms-assurance__accent">{section.titleAccent}</span>
          </h2>
        </div>

        <dl className="fms-assurance__items">
          {section.items.map((item) => (
            <div className="fms-assurance__item" key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export const FmsAssuranceSection = memo(FmsAssuranceSectionComponent)
