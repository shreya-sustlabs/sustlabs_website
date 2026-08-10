import { memo } from 'react'
import type { HomeEnterpriseSectionData } from '@/types'
import { EnterpriseAudience } from '../ui/EnterpriseAudience'

type EnterpriseSectionProps = {
  section: HomeEnterpriseSectionData
}

function EnterpriseSectionComponent({ section }: EnterpriseSectionProps) {
    return (
        <section className="enterprise-section" id="enterprise">
            <div className="enterprise-section__inner">
                <div className="enterprise-section__heading">
                    <p className="enterprise-section__eyebrow">{section.eyebrow}</p>
                    <h2>
                        <span>{section.titleLead}</span>
                        <span>{section.titleAccent}</span>
                    </h2>
                    <p>{section.description}</p>
                </div>

                <div className="enterprise-section__audiences" aria-label="Enterprise ecosystem audiences">
                    {section.audiences.map((audience) => (
                        <EnterpriseAudience
                            description={audience.description}
                            key={audience.number}
                            number={audience.number}
                            title={audience.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const EnterpriseSection = memo(EnterpriseSectionComponent)