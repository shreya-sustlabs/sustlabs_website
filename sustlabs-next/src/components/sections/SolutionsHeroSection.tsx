'use client'

import { memo } from 'react'
import type { SolutionsHeroSectionProps } from '@/types'
import { Button } from '../ui/Button'
import { useLeadModal } from '../lead/LeadModalProvider'

function SolutionsHeroSectionComponent({ section }: SolutionsHeroSectionProps) {
  const { openForAction } = useLeadModal()

  return (
    <section className="solutions-hero" aria-labelledby="solutions-hero-title">
      <div className="solutions-hero__inner">
        <h1 id="solutions-hero-title">
          <span>{section.titleLead}</span>
          <span className="solutions-hero__accent"> {section.titleAccent}</span>
          <span> {section.titleRest}</span>
        </h1>
        <p className="solutions-hero__description">{section.description}</p>
        <div className="solutions-hero__actions" aria-label="Solutions actions">
          {section.actions.map((action) => (
            <Button
              href={action.href}
              key={action.label}
              onClick={(event) => openForAction(action, event)}
              type={`${action.analyticsId ?? action.label}-solutions`}
              variant={action.variant}
            >
              {action.label}
            </Button>
          ))}
        </div>
        <p className="solutions-hero__note">{section.note}</p>
      </div>
    </section>
  )
}

export const SolutionsHeroSection = memo(SolutionsHeroSectionComponent)
