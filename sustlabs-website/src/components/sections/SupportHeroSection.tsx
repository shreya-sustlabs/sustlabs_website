import { memo } from 'react'
import type { SupportHeroSectionProps } from '../../types'
import { Button } from '../ui/Button'

function SupportHeroSectionComponent({ section }: SupportHeroSectionProps) {
  return (
    <section className="support-hero">
      <div className="support-hero__inner">
        <h1>{section.title}</h1>
        <p>{section.description}</p>
        <Button className="support-hero__button" href={'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo'} variant={section.action.variant}>
          {section.action.label}
        </Button>
      </div>
    </section>
  )
}

export const SupportHeroSection = memo(SupportHeroSectionComponent)
