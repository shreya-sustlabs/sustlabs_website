'use client'

import { memo } from 'react'
import type { SmartDbHeroSectionProps } from '@/types'
import { Button } from '../ui/Button'
import { useLeadModal } from '../lead/LeadModalProvider'

function SmartDbHeroSectionComponent({ section }: SmartDbHeroSectionProps) {
  const { openForAction } = useLeadModal()

  return (
    <section className="sdb-hero" aria-labelledby="sdb-hero-title">
      <div className="sdb-hero__inner">
        <p className="sdb-hero__eyebrow">{section.eyebrow}</p>

        <h1 id="sdb-hero-title">
          <span>{section.titleLead}</span>
          <span>{section.titleAccent}</span>
        </h1>

        <p className="sdb-hero__description">{section.description}</p>

        <div className="sdb-hero__actions" aria-label="Smart DB actions">
          {section.actions.map((action) => (
            <Button
              href={action.href}
              key={action.label}
              onClick={(event) => openForAction(action, event)}
              type={`${action.analyticsId ?? action.label}-smartdb`}
              variant={action.variant}
            >
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbHeroSection = memo(SmartDbHeroSectionComponent)
