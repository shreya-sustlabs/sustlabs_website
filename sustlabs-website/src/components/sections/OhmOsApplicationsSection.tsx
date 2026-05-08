import { memo } from 'react'
import type { OhmOsApplicationsSectionProps } from '../../types'
import { ProductSectionHeading } from '../ui/ProductSectionHeading'

function OhmOsApplicationsSectionComponent({ section }: OhmOsApplicationsSectionProps) {
  return (
    <section className="ohm-os-applications" id="ecosystem" aria-labelledby="ohm-os-applications-title">
      <div className="ohm-os-applications__intro">
        <ProductSectionHeading
          accent="var(--terra500)"
          eyebrow=""
          titleAccent={section.titleAccent}
          titleLead={section.titleLead}
        />
        <p className="ohm-os-applications__eyebrow">{section.eyebrow}</p>
        <p>{section.description}</p>
      </div>

      <div className="ohm-os-applications__list" aria-label="Ohm OS applications">
        {section.items.map((application) => (
          <article className="ohm-os-application" key={application.title}>
            <h3>{application.title}</h3>
            <p>{application.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export const OhmOsApplicationsSection = memo(OhmOsApplicationsSectionComponent)
