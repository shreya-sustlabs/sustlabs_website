import { memo } from 'react'
import type { HomeIntelligenceSectionData } from '@/types'
import { CardRail } from '../ui/CardRail'
import { FeatureCard } from '../ui/FeatureCard'

type IntelligenceSectionProps = {
  section: HomeIntelligenceSectionData
}

function IntelligenceSectionComponent({ section }: IntelligenceSectionProps) {
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
        <p className="promise-heading__eyebrow">{section.eyebrow}</p>
        <h2>
          {section.titleLead}{' '}
          <span>{section.titleAccent}</span>
        </h2>
        <p>{section.description}</p>
      </div>

      <CardRail className="intelligence-section__features" label="Core Ohm OS features">
        {section.features.map((item) => (
          <FeatureCard
            description={item.description}
            image={item.image}
            key={item.title}
            title={item.title}
          />
        ))}
      </CardRail>
    </section>
  )
}

export const IntelligenceSection = memo(IntelligenceSectionComponent)
