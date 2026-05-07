import { memo } from 'react'
import { IMPACT_CONTENT, IMPACT_METRICS } from '../../utils/constants'
import { ImpactMetric } from '../ui/ImpactMetric'

function ImpactSectionComponent() {
  return (
    <section className="impact-section" id="impact">
      <div className="impact-section__inner">
        <div className="impact-section__heading">
          <p className="impact-section__eyebrow">{IMPACT_CONTENT.eyebrow}</p>
          <h2>
            <span>{IMPACT_CONTENT.titleLead}</span>
            <span>{IMPACT_CONTENT.titleAccent}</span>
          </h2>
          <p>{IMPACT_CONTENT.description}</p>
        </div>

        <div className="impact-section__metrics" aria-label="SustLabs proof and impact metrics">
          {IMPACT_METRICS.map((metric) => (
            <ImpactMetric
              key={metric.value}
              label={metric.label}
              value={metric.value}
              variant={metric.variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const ImpactSection = memo(ImpactSectionComponent)
