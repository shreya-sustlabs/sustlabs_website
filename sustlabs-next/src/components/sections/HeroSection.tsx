import { memo } from 'react'
import type { HomeHeroSectionData } from '@/types'
import { Button } from '../ui/Button'

type HeroSectionProps = {
  section: HomeHeroSectionData
}

function HeroSectionComponent({ section }: HeroSectionProps) {
  return (
    <main className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{section.eyebrow}</p>

        <h1 className="hero__title">
          <span>{section.titleLead}</span>
          <span>
            <span>{section.titleMiddle}</span>
            <span className="hero__title-accent">{section.titleAccent}</span>
          </span>
        </h1>

        <p className="hero__description">{section.description}</p>

        <div className="hero__actions" aria-label="Ohm OS actions">
          {section.actions.map((action) => (
            <Button href={action.href} key={action.label} variant={action.variant} type = {action.label}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}

export const HeroSection = memo(HeroSectionComponent)
