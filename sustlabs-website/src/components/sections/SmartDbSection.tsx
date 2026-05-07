import { memo } from 'react'
import { SMART_DB_CONTENT, SMART_DB_FEATURES } from '../../utils/constants'
import { SmartDbFeature } from '../ui/SmartDbFeature'

function SmartDbSectionComponent() {
    return (
        <section className="smart-db-section" id="smart-db-details">
            <div className="smart-db-section__inner">
                <div className="smart-db-section__intro">
                    <p className="smart-db-section__eyebrow">{SMART_DB_CONTENT.eyebrow}</p>
                    <h2>{SMART_DB_CONTENT.title}</h2>
                    <p>{SMART_DB_CONTENT.description}</p>
                </div>

                <div className="smart-db-section__features" aria-label="Smart DB capabilities">
                    {SMART_DB_FEATURES.map((feature) => (
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