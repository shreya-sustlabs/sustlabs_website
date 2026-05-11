import { memo } from 'react'
import applianceVisibilityImage from '../../assets/324.png'
import safetyAlertsImage from '../../assets/iMockup - iPhone 15.png'
import liveTrackingImage from '../../assets/iMockup - iPhone 14.png'
import { CORE_FEATURES, INTELLIGENCE_CONTENT } from '../../utils/constants'
import { CardRail } from '../ui/CardRail'
import { FeatureCard } from '../ui/FeatureCard'

const FEATURE_IMAGES = {
  'Live Tracking': liveTrackingImage,
  'Appliance-Level Visibility': applianceVisibilityImage,
  'Advanced Safety': safetyAlertsImage,
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
