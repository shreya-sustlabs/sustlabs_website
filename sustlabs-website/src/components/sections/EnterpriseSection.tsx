import { memo } from 'react'
import { ENTERPRISE_AUDIENCES, ENTERPRISE_CONTENT } from '../../utils/constants'
import { EnterpriseAudience } from '../ui/EnterpriseAudience'

function EnterpriseSectionComponent() {
    return (
        <section className="enterprise-section" id="enterprise">
            <div className="enterprise-section__inner">
                <div className="enterprise-section__heading">
                    <p className="enterprise-section__eyebrow">{ENTERPRISE_CONTENT.eyebrow}</p>
                    <h2>
                        <span>{ENTERPRISE_CONTENT.titleLead}</span>
                        <span>{ENTERPRISE_CONTENT.titleAccent}</span>
                    </h2>
                    <p>{ENTERPRISE_CONTENT.description}</p>
                </div>

                <div className="enterprise-section__audiences" aria-label="Enterprise ecosystem audiences">
                    {ENTERPRISE_AUDIENCES.map((audience) => (
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