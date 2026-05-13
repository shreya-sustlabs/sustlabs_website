import { memo } from 'react'
import type { OhmOsApplicationsSectionProps } from '../../types'
import ohmOS from '../../assets/Ohm OS.svg'

function OhmOsApplicationsSectionComponent({ section }: OhmOsApplicationsSectionProps) {
  return (
    <>
      <section className="ohm-os-applications" id="ecosystem" aria-labelledby="ohm-os-applications-title">
        <div className="ohm-os-applications__intro">
          {/* <ProductSectionHeading
            accent="var(--terra500)"
            eyebrow=""
            titleAccent={section.titleAccent}
            titleLead={section.titleLead}
          /> */}
          <p style={{ fontSize: '70px', marginBottom: '10px' }}>{section.titleLead}</p>
          <p className="ohm-os-applications__eyebrow">{section.eyebrow}</p>
          <p className="ohm-os-applications__desc">{section.description}</p>
        </div>
      </section >
      <section className="smart-db-page__visual-band" aria-label="Smart DB installed panel visual">
        <div className="smart-db-page__visual-scene">
          <img src={ohmOS} alt="ohmOS" />
        </div>
      </section>
      <section className="ohm-os-applications__list" aria-label="Ohm OS applications">
        <div className="ohm-os-applications__list__intro">
          {section.items.map((application) => (
            <article className="ohm-os-application" key={application.title}>
              <h3>{application.title}</h3>
              <p>{application.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export const OhmOsApplicationsSection = memo(OhmOsApplicationsSectionComponent)
