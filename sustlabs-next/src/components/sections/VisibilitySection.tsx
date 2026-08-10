import { memo } from 'react'
import type { HomeSafetySectionData } from '@/types'

type VisibilitySectionProps = {
  section: HomeSafetySectionData
}

function VisibilitySectionComponent({ section }: VisibilitySectionProps) {
  return (
    <section className="visibility-section" id="solutions">
      <div className="visibility-section__inner">
        {/* <div className="visibility-heading visibility-heading--connection">
          <p className="section-pill">{HOW_IT_WORKS_CONTENT.eyebrow}</p>
          <h2>
            {HOW_IT_WORKS_CONTENT.titleLead} <span>{HOW_IT_WORKS_CONTENT.titleAccent}</span>
          </h2>
          <p>{HOW_IT_WORKS_CONTENT.description}</p>
        </div> */}
        {/* 
        <div className="process-grid" aria-label="How Ohm works">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <ProcessStepCard
              description={step.description}
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div> */}

        <div className="visibility-heading visibility-heading--safety">
          <p className="section-pill">{section.eyebrow}</p>
          <h2>
            <span>{section.titleLead}</span>
            {section.titleRest}
          </h2>
          <p>{section.description}</p>
        </div>
      </div>

      <div className="visibility-section__safety-graphic">
        <img alt={section.image.alt} height={section.image.height} src={section.image.src} width={section.image.width} />
      </div>
    </section>
  )
}

export const VisibilitySection = memo(VisibilitySectionComponent)
