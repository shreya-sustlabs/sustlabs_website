import { memo } from 'react'
import home1 from '../../assets/home1.webp'
import home2 from '../../assets/home2.webp'
import home3 from '../../assets/home3.webp'
import { CORE_FEATURES, INTELLIGENCE_CONTENT } from '../../utils/constants'
import { CardRail } from '../ui/CardRail'
import { FeatureCard } from '../ui/FeatureCard'

const FEATURE_IMAGES = {
  'Live Tracking': home1,
  'Appliance-Level Visibility': home2,
  'Advanced Safety': home3,
} as const

function IntelligenceSectionComponent() {
  return (
    <section className="intelligence-section" id="monitoring">
      {/* <CardRail className="intelligence-section__insights" label="Live electricity intelligence">
        {LIVE_INSIGHTS.map((item) => (
          <InsightCard
            description={item.description}
            key={item.title}
            metric={item.metric}
            title={item.title}
          />
        ))}
      </CardRail> */}

      <div className="promise-heading">
        <p className="promise-heading__eyebrow">{INTELLIGENCE_CONTENT.eyebrow}</p>
        <h2>
          {INTELLIGENCE_CONTENT.titleLead}{' '}
          <span>{INTELLIGENCE_CONTENT.titleAccent}</span>
        </h2>
        <p>{INTELLIGENCE_CONTENT.description}</p>
      </div>

      <CardRail className="intelligence-section__features" label="Core Ohm OS features">
        {CORE_FEATURES.map((item) => (
          <FeatureCard
            description={item.description}
            image={FEATURE_IMAGES[item.title]}
            key={item.title}
            title={item.title}
          />
        ))}
      </CardRail>
    </section>
  )
}

export const IntelligenceSection = memo(IntelligenceSectionComponent)
