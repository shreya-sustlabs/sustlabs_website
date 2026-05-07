import { memo } from 'react'
import { ORA_CARDS, ORA_CONTENT } from '../../utils/constants'
import { OraCard } from '../ui/OraCard'

function OraSectionComponent() {
    return (
        <section className="ora-section" id="ora">
            <div className="ora-section__inner">
                <div className="ora-section__heading">
                    <p className="section-pill ora-section__eyebrow">{ORA_CONTENT.eyebrow}</p>
                    <h2>
                        <span>{ORA_CONTENT.titleLead}</span>
                        <span>{ORA_CONTENT.titleAccent}</span>
                    </h2>
                    <p>{ORA_CONTENT.description}</p>
                </div>

                <div className="ora-grid" aria-label="Ora product qualities">
                    {ORA_CARDS.map((card) => (
                        <OraCard
                            description={card.description}
                            key={card.title}
                            layout={card.layout}
                            title={card.title}
                            tone={card.tone}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const OraSection = memo(OraSectionComponent)