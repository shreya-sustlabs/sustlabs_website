import { memo } from 'react'
import type { OhmOsHeroSectionProps } from '../../types'
import { Button } from '../ui/Button'

function OhmOsHeroSectionComponent({ section }: OhmOsHeroSectionProps) {
  return (
    <section className="ohm-os-hero" aria-labelledby="ohm-os-page-title">
      <div className="ohm-os-hero__inner">
        <h1 id="ohm-os-page-title">
          {section.titleLead} <span className="ohm-os-hero__accent">{section.titleAccent}</span>{' '}
          {section.titleRest}
        </h1>
        <p>{section.description}</p>
        <div className="ohm-os-hero__actions" aria-label="Ohm OS actions">
          {section.actions.map((action) => (
            <Button href={action.href} key={action.label} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export const OhmOsHeroSection = memo(OhmOsHeroSectionComponent)
