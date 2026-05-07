import { memo } from 'react'
import { SETUP_CONTENT, SETUP_POINTS } from '../../utils/constants'
import { TechnologyPoint } from '../ui/TechnologyPoint'

function SetupSectionComponent() {
    return (
        <section className="setup-section" id="smart-db">
            <div className="setup-section__inner">
                <div className="setup-section__heading">
                    <p className="setup-section__eyebrow">{SETUP_CONTENT.eyebrow}</p>
                    <h2>
                        <span>{SETUP_CONTENT.titleLead}</span>
                        <span className="setup-section__title-accent">{SETUP_CONTENT.titleAccent}</span>
                    </h2>
                    <p>{SETUP_CONTENT.description}</p>
                </div>

                <div className="setup-section__points" aria-label="Simple setup advantages">
                    {SETUP_POINTS.map((point) => (
                        <TechnologyPoint
                            description={point.description}
                            key={`${point.number}-${point.title}`}
                            number={point.number}
                            title={point.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const SetupSection = memo(SetupSectionComponent)