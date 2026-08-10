'use client'

import { memo } from 'react'
import type { FmsHeroSectionProps } from '@/types'
import { Button } from '../ui/Button'
import { useLeadModal } from '../lead/LeadModalProvider'

function FmsHeroSectionComponent({ section }: FmsHeroSectionProps) {
  const { openForAction } = useLeadModal()

  return (
    <section className="fms-hero" aria-labelledby="fms-hero-title">
      <div className="fms-hero__inner">
        <p className="fms-hero__eyebrow">
          {section.eyebrow}
          {section.badge ? <span className="fms-hero__badge">{section.badge}</span> : null}
        </p>

        <h1 id="fms-hero-title">
          <span>{section.titleLead}</span>
          <span className="fms-hero__accent">{section.titleAccent}</span>
        </h1>

        <div className="fms-hero__actions" aria-label="Fire monitoring actions">
          {section.actions.map((action) => (
            <Button
              href={action.href}
              key={action.label}
              onClick={(event) => openForAction(action, event)}
              type={`${action.analyticsId ?? action.label}-fms`}
              variant={action.variant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      <dl className="fms-hero__stats">
        {section.stats.map((stat) => (
          <div className="fms-hero__stat" key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export const FmsHeroSection = memo(FmsHeroSectionComponent)
