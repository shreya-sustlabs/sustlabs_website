import { memo } from 'react'
import type { OraHeroSectionProps } from '@/types'
import { Button } from '../ui/Button'

function OraAddOnHeroSectionComponent({ section }: OraHeroSectionProps) {

  return (
    <section className="ora-add-on-hero" aria-labelledby="ora-add-on-page-title">
      <div className="ora-add-on-hero__media" aria-hidden="true">
        <img alt={section.image.alt} height={section.image.height} src={section.image.src} width={section.image.width} />
        <div className="ora-add-on-hero__callout">
          <h2>{section.callout.title}</h2>
          <p>{section.callout.description}</p>
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
