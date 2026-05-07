import { memo } from 'react'
import type { MonitoringPageData } from '../../types'
import { MonitoringHeroSection } from '../sections/MonitoringHeroSection'
import { MonitoringIntroSection } from '../sections/MonitoringIntroSection'
import { ProductCtaSection } from '../sections/ProductCtaSection'
import { ProductDetailSection } from '../sections/ProductDetailSection'
import { ProductFeatureSection } from '../sections/ProductFeatureSection'
import { ProductUseCaseSection } from '../sections/ProductUseCaseSection'

type MonitoringPageProps = {
  data: MonitoringPageData
}

function MonitoringPageComponent({ data }: MonitoringPageProps) {
  return (
    <main className="monitoring-page">
      <MonitoringIntroSection section={data.introSection} />
      <MonitoringHeroSection
        accent={data.heroAccentColor ?? data.accent}
        actions={data.heroActions}
        description={data.heroDescription}
        eyebrow={data.eyebrow}
        kicker={data.heroKicker}
        titleAccent={data.heroAccent}
        titleLead={data.heroLead}
        titleRest={data.heroRest}
      />
      <ProductFeatureSection section={data.featureSection} />
      <ProductUseCaseSection section={data.useCaseSection} />
      <ProductDetailSection section={data.detailSection} />
      {data.postDetailUseCaseSection ? (
        <ProductUseCaseSection section={data.postDetailUseCaseSection} />
      ) : null}
      <ProductCtaSection section={data.ctaSection} />
    </main>
  )
}

export const MonitoringPage = memo(MonitoringPageComponent)
