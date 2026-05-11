import { memo } from 'react'
import type { OhmOsLicenseeSectionProps } from '../../types'

function OhmOsLicenseeSectionComponent({ section }: OhmOsLicenseeSectionProps) {
  return (
    <section className="ohm-os-licensees" aria-labelledby="ohm-os-licensees-title">
      <div className="ohm-os-licensees__inner">
        <h2 id="ohm-os-licensees-title">{section.title}</h2>
        <p>{section.description}</p>

        <div className="ohm-os-licensees__logo-grid" aria-label="Licensee partner logos">
          {section.logos.map((logo) => (
            <div className={`ohm-os-licensees__logo ohm-os-licensees__logo--${logo.id}`} key={logo.id}>
              {logo.id === 'legrand' ? <span className="ohm-os-licensees__mark" aria-hidden="true">▰▱</span> : null}
              <span>{logo.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const OhmOsLicenseeSection = memo(OhmOsLicenseeSectionComponent)
