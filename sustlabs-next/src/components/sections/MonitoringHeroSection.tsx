'use client'

import { memo } from 'react'
import type { MonitoringHeroSectionProps } from '@/types'
import { Button } from '../ui/Button'
import { useLeadModal } from '../lead/LeadModalProvider'

function MonitoringHeroSectionComponent({
  accent,
  actions,
  description,
  eyebrow,
  imageAlt = '',
  imageSrc,
  imageVariant,
  kicker,
  titleAccent,
  titleLead,
  titleRest,
}: MonitoringHeroSectionProps) {
  const { openForAction } = useLeadModal()

  // const hasCommerceAction = actions.some((action) => action.href.includes('https://www.miraielifestyle.com/'))

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
            <Button
              href={action.href}
              key={action.label}
              onClick={(event) => openForAction(action, event)}
              variant={action.variant}
              type={`${action.analyticsId ?? action.label}-smartdb`}
            >
              {action.label}
            </Button>
          ))}
        </div>
        {/* {hasCommerceAction ? <p className="monitoring-hero__commerce-note">*Continues to MirAIe Lifestyle.</p> : null} */}
      </div>
      {imageSrc ? (
        <div className={`monitoring-hero__media monitoring-hero__media--${imageVariant ?? 'default'}`}>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      ) : null}
    </section>
  )
}

export const MonitoringHeroSection = memo(MonitoringHeroSectionComponent)
