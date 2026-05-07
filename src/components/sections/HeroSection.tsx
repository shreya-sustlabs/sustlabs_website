import { memo } from 'react'
import { HERO_CONTENT } from '../../utils/constants'
import { Button } from '../ui/Button'

function HeroSectionComponent() {
  return (
    <main className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">{HERO_CONTENT.eyebrow}</p>

        <h1 className="hero__title">
          <span>{HERO_CONTENT.titleLead}</span>
          <span>
            <span className="hero__title-text">electricity </span>
            <span className="hero__title-accent">{HERO_CONTENT.titleAccent}</span>
          </span>
        </h1>

        <p className="hero__description">{HERO_CONTENT.description}</p>

        <div className="hero__actions" aria-label="Ohm OS actions">
          {HERO_CONTENT.actions.map((action) => (
            <Button href={action.href} key={action.label} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}

export const HeroSection = memo(HeroSectionComponent)
