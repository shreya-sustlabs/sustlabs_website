import { memo } from 'react'
import type { MonitoringHeroSectionProps } from '../../types'
import { Button } from '../ui/Button'

function MonitoringHeroSectionComponent({
  accent,
  actions,
  description,
  eyebrow,
  kicker,
  titleAccent,
  titleLead,
  titleRest,
}: MonitoringHeroSectionProps) {
  return (
    <section className="monitoring-hero" aria-labelledby="monitoring-hero-title">
      <div className="monitoring-hero__copy">
        <p className="monitoring-hero__kicker">{kicker}</p>
        <h2 id="monitoring-hero-title">
          {titleLead} <span style={{ color: accent }}>{titleAccent}</span>
          {titleRest ? <span className="monitoring-hero__title-rest"> {titleRest}</span> : null}
        </h2>
        <p>{description}</p>
        <div className="monitoring-hero__actions" aria-label={`${eyebrow} actions`}>
          {actions.map((action) => (
            <Button href={action.href} key={action.label} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export const MonitoringHeroSection = memo(MonitoringHeroSectionComponent)
