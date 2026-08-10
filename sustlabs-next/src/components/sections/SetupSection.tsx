import { memo } from 'react'
import type { HomeSetupSectionData } from '@/types'
import { TechnologyPoint } from '../ui/TechnologyPoint'

type SetupSectionProps = {
  section: HomeSetupSectionData
}

function SetupSectionComponent({ section }: SetupSectionProps) {
    return (
        <section className="setup-section" id="smart-db">
            <div className="setup-section__inner">
                <div className="setup-section__heading">
                    <p className="setup-section__eyebrow">{section.eyebrow}</p>
                    <h2>
                        <span>{section.titleLead}</span>
                        <span className="setup-section__title-accent">{section.titleAccent}</span>
                    </h2>
                    <p>{section.description}</p>
                </div>

                <div className="setup-section__points" aria-label="Simple setup advantages">
                    {section.points.map((point) => (
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