import { memo } from 'react'
import { SOVEREIGNTY_CARDS, SOVEREIGNTY_CONTENT } from '../../utils/constants'
import { SovereigntyCard } from '../ui/SovereigntyCard'

function SovereigntySectionComponent() {
  return (
    <section className="sovereignty-section" id="user-sovereignty">
      <div className="sovereignty-section__inner">
        <div className="sovereignty-section__heading">
          <p className="section-pill sovereignty-section__eyebrow">
            {SOVEREIGNTY_CONTENT.eyebrow}
          </p>
          <h2>
            {SOVEREIGNTY_CONTENT.titleLead}{' '}
            <span>{SOVEREIGNTY_CONTENT.titleAccent}</span>
          </h2>
          <p>{SOVEREIGNTY_CONTENT.description}</p>
        </div>

        <div className="sovereignty-grid" aria-label="User data control principles">
          {SOVEREIGNTY_CARDS.map((card) => (
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
