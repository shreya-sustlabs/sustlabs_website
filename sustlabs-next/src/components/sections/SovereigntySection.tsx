import { memo } from 'react'
import type { HomeSovereigntySectionData } from '@/types'
import { SovereigntyCard } from '../ui/SovereigntyCard'

type SovereigntySectionProps = {
  section: HomeSovereigntySectionData
}

function SovereigntySectionComponent({ section }: SovereigntySectionProps) {
    return (
        <section className="sovereignty-section" id="user-sovereignty">
            <div className="sovereignty-section__inner">
                <div className="sovereignty-section__heading">
                    <p className="section-pill sovereignty-section__eyebrow">
                        {section.eyebrow}
                    </p>
                    <h2>
                        {section.titleLead}{' '}
                        <span>{section.titleAccent}</span>
                    </h2>
                    <p>{section.description}</p>
                </div>

                <div className="sovereignty-grid" aria-label="User data control principles">
                    {section.cards.map((card) => (
                        <SovereigntyCard
                            description={card.description}
                            eyebrow={card.eyebrow}
                            key={card.eyebrow}
                            size={card.size}
                            title={card.title}
                            tone={card.tone}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const SovereigntySection = memo(SovereigntySectionComponent)