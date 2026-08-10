import { memo } from 'react'
import type { HomeImpactSectionData } from '@/types'
import { ImpactMetric } from '../ui/ImpactMetric'

type ImpactSectionProps = {
  section: HomeImpactSectionData
}

function ImpactSectionComponent({ section }: ImpactSectionProps) {
    return (
        <section className="impact-section" id="impact">
            <div className="impact-section__inner">
                <div className="impact-section__heading">
                    <p className="impact-section__eyebrow">{section.eyebrow}</p>
                    <h2>
                        <span>{section.titleLead}</span>
                        <span>{section.titleAccent}</span>
                    </h2>
                    <p>{section.description}</p>
                </div>

                <div className="impact-section__metrics" aria-label="SustLabs proof and impact metrics">
                    {section.metrics.map((metric) => (
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