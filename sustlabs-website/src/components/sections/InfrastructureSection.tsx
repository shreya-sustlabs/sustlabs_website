import { memo } from 'react'
import { INFRASTRUCTURE_CONTENT, INFRASTRUCTURE_USE_CASES } from '../../utils/constants'
import { InfrastructureUseCase } from '../ui/InfrastructureUseCase'

function InfrastructureSectionComponent() {
    return (
        <section className="infrastructure-section" id="infrastructure">
            <div className="infrastructure-section__inner">
                <div className="infrastructure-section__heading">
                    <h2>{INFRASTRUCTURE_CONTENT.title}</h2>
                    <p>{INFRASTRUCTURE_CONTENT.description}</p>
                </div>

                <div className="infrastructure-section__cases" aria-label="Critical infrastructure use cases">
                    {INFRASTRUCTURE_USE_CASES.map((useCase) => (
                        <InfrastructureUseCase
                            description={useCase.description}
                            key={useCase.title}
                            title={useCase.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const InfrastructureSection = memo(InfrastructureSectionComponent)