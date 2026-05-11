import { memo } from 'react'
import safetyDiagramImage from '../../assets/0987654.png'
import {
  HOW_IT_WORKS_CONTENT,
  HOW_IT_WORKS_STEPS,
  SAFETY_CONTENT,
} from '../../utils/constants'
import { ProcessStepCard } from '../ui/ProcessStepCard'

function VisibilitySectionComponent() {
  return (
    <section className="visibility-section" id="solutions">
      <div className="visibility-section__inner">
        <div className="visibility-heading visibility-heading--connection">
          <p className="section-pill">{HOW_IT_WORKS_CONTENT.eyebrow}</p>
          <h2>
            {HOW_IT_WORKS_CONTENT.titleLead} <span>{HOW_IT_WORKS_CONTENT.titleAccent}</span>
          </h2>
          <p>{HOW_IT_WORKS_CONTENT.description}</p>
        </div>

        <div className="process-grid" aria-label="How Ohm works">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <ProcessStepCard
              description={step.description}
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>

        <div className="visibility-heading visibility-heading--safety">
          <p className="section-pill">{SAFETY_CONTENT.eyebrow}</p>
          <h2>
            <span>{SAFETY_CONTENT.titleLead}</span>
            {SAFETY_CONTENT.titleRest}
          </h2>
          <p>{SAFETY_CONTENT.description}</p>
        </div>
      </div>

      <div className="visibility-section__safety-graphic">
        <img src={safetyDiagramImage} alt="Electrical safety detections around Ohm intelligence" />
      </div>
    </section>
  )
}

export const VisibilitySection = memo(VisibilitySectionComponent)
