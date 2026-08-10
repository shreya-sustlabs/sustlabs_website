import { memo } from 'react'
import type { HomeSmartDbSectionData } from '@/types'
import { SmartDbFeature } from '../ui/SmartDbFeature'

type SmartDbSectionProps = {
  section: HomeSmartDbSectionData
}

function SmartDbSectionComponent({ section }: SmartDbSectionProps) {
    return (
        <section className="smart-db-section" id="smart-db-details">
            <div className="smart-db-section__inner">
                <div className="smart-db-section__intro">
                    <p className="smart-db-section__eyebrow">{section.eyebrow}</p>
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                </div>

                <div className="smart-db-section__features" aria-label="Smart DB capabilities">
                    {section.features.map((feature) => (
                        <SmartDbFeature
                            accent={feature.accent}
                            description={feature.description}
                            key={feature.title}
                            title={feature.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const SmartDbSection = memo(SmartDbSectionComponent)