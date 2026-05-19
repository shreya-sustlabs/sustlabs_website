import { memo } from 'react'
import o4HeroImage from '../../assets/o4.webp'
import o3HeroImage from '../../assets/o3.webp'
import type { MonitoringPageData } from '../../types'
import { MonitoringHeroSection } from '../sections/MonitoringHeroSection'
import { MonitoringIntroSection } from '../sections/MonitoringIntroSection'
import { ProductCtaSection } from '../sections/ProductCtaSection'
import { ProductFeatureSection } from '../sections/ProductFeatureSection'
import { ProductUseCaseSection } from '../sections/ProductUseCaseSection'
import { Helmet } from 'react-helmet-async'

type MonitoringPageProps = {
  data: MonitoringPageData
}

const MONITORING_HERO_IMAGES = {
  '/products/o3-energy-visibility': {
    alt: 'o3 energy monitoring device',
    src: o3HeroImage,
    variant: 'o3',
  },
  '/products/o4-electrical-safety': {
    alt: 'o4 electrical safety device',
    src: o4HeroImage,
    variant: 'o4',
  },
} as const

function MonitoringPageComponent({ data }: MonitoringPageProps) {
  const heroImage = MONITORING_HERO_IMAGES[data.path as keyof typeof MONITORING_HERO_IMAGES]

  return (
    <main className="monitoring-page">
      <Helmet>
        <title>{data.searchTitle}</title>

        <meta
          name="description"
          content={data.searchSubTitle}
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href={`https://www.sustlabs.com/${data.path}`}
        />
      </Helmet>
      <MonitoringIntroSection section={data.introSection} />
      <MonitoringHeroSection
        accent={data.heroAccentColor ?? data.accent}
        actions={data.heroActions}
        description={data.heroDescription}
        eyebrow={data.eyebrow}
        imageAlt={heroImage?.alt}
        imageSrc={heroImage?.src}
        imageVariant={heroImage?.variant}
        kicker={data.heroKicker}
        titleAccent={data.heroAccent}
        titleLead={data.heroLead}
        titleRest={data.heroRest}
      />
      <ProductFeatureSection section={data.featureSection} />
      {/* <ProductUseCaseSection section={data.useCaseSection} /> */}
      {/* <ProductDetailSection section={data.detailSection} /> */}
      {data.postDetailUseCaseSection ? (
        <ProductUseCaseSection section={data.postDetailUseCaseSection} />
      ) : null}
      <ProductCtaSection section={data.ctaSection} />
    </main>
  )
}

export const MonitoringPage = memo(MonitoringPageComponent)
