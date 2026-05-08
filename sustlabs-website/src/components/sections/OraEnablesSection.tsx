import { memo } from 'react'
import type { OraEnablesSectionProps } from '../../types'

function OraEnablesSectionComponent({ section }: OraEnablesSectionProps) {
  return (
    <section className="ora-add-on-enables" aria-labelledby="ora-enables-title">
      <div className="ora-add-on-enables__heading">
        <h2 id="ora-enables-title">
          {section.titleLead} <span>{section.titleAccent}</span>
        </h2>
        <p>{section.description}</p>
      </div>
      <div className="ora-add-on-enables__visual" aria-hidden="true" />
      <div className="ora-add-on-enables__safety">
        <h3>{section.safetyTitle}</h3>
        <p>{section.safetyDescription}</p>
        <p>{section.safetyEyebrow}</p>
      </div>
    </section>
  )
}

export const OraEnablesSection = memo(OraEnablesSectionComponent)
