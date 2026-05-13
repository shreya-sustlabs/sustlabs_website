import { memo } from 'react'
import oraHeroImage from '../../assets/ora1.webp'
import type { OraHeroSectionProps } from '../../types'
import { Button } from '../ui/Button'

function OraAddOnHeroSectionComponent({ section }: OraHeroSectionProps) {
  void section

  return (
    <section className="ora-add-on-hero" aria-labelledby="ora-add-on-page-title">
      <div className="ora-add-on-hero__media" aria-hidden="true">
        <img alt="" src={oraHeroImage} />
        <div className="ora-add-on-hero__callout">
          <h2>Ambient by Default</h2>
          <p>A familiar object that earns wall space without explanation.</p>
        </div>
      </div>
      <div className="ora-add-on-hero__content">
        <h1 id="ora-add-on-page-title">
          <span>{section.titleLead}</span>
          <span className="ora-add-on-hero__accent">{section.titleAccent}</span>
        </h1>
        <p>{section.description}</p>
        <Button href={section.action.href} variant={section.action.variant}>
          {section.action.label}
        </Button>
      </div>
    </section>
  )
}

export const OraAddOnHeroSection = memo(OraAddOnHeroSectionComponent)
