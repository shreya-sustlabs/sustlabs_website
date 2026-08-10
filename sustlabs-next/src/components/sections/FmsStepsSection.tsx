import { memo } from 'react'
import type { FmsStepsSectionProps } from '@/types'

function FmsStepsSectionComponent({ section }: FmsStepsSectionProps) {
  return (
    <section className="fms-steps" aria-labelledby="fms-steps-title">
      <div className="fms-steps__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id="fms-steps-title">
          <span>{section.titleLead}</span>
          {section.titleAccent ? <span className="fms-section-title__accent"> {section.titleAccent}</span> : null}
        </h2>

        {section.description ? <p className="fms-section-description">{section.description}</p> : null}

        <ol className="fms-steps__grid">
          {section.cards.map((card) => (
            <li className="fms-steps__card" key={card.title}>
              <span className="fms-steps__number">{card.number}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export const FmsStepsSection = memo(FmsStepsSectionComponent)
