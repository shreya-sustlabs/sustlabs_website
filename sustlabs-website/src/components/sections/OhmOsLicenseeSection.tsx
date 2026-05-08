import { memo } from 'react'
import type { OhmOsLicenseeSectionProps } from '../../types'

function OhmOsLicenseeSectionComponent({ section }: OhmOsLicenseeSectionProps) {
  return (
    <section className="ohm-os-licensees" aria-labelledby="ohm-os-licensees-title">
      <div className="ohm-os-licensees__inner">
        <h2 id="ohm-os-licensees-title">{section.title}</h2>
        <p>{section.description}</p>
        <div className="ohm-os-licensees__logos" aria-label="Licensee partner logos">
          <p>
            <span>{section.logoLabel}</span>
            {section.logos.join(' · ')}
          </p>
          <div className="ohm-os-licensees__logo-grid" aria-hidden="true">
            {section.logos.map((logo) => (
              <span key={logo} />
            ))}
          </div>
        </div>
      </div>
      <div className="ohm-os-licensees__note">
        <p>{section.note}</p>
      </div>
    </section>
  )
}

export const OhmOsLicenseeSection = memo(OhmOsLicenseeSectionComponent)
