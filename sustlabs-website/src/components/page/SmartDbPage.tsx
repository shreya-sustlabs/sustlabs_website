import { memo } from 'react'
import smartDbImage from '../../assets/smartdb1.webp'
import smartDbPanelImage from '../../assets/smartdb2.webp'
import { SMART_DB_PAGE_CONTENT } from '../../utils/constants'
import { MonitoringHeroSection } from '../sections/MonitoringHeroSection'
import { MonitoringIntroSection } from '../sections/MonitoringIntroSection'
import { ProductFeatureSection } from '../sections/ProductFeatureSection'
import { SmartDbComparisonSection } from '../sections/SmartDbComparisonSection'
import { SmartDbEnergySection } from '../sections/SmartDbEnergySection'
import { SmartDbSafetySection } from '../sections/SmartDbSafetySection'
import { SmartDbTextStackSection } from '../sections/SmartDbTextStackSection'
import { Helmet } from 'react-helmet-async'

function SmartDbPageComponent() {
  return (
    <main className="smart-db-page">
      <Helmet>
        <title>Smart DB</title>

        <meta
          name="description"
          content="An intelligent distribution board that brings circuit-level visibility, safety intelligence and backup orchestration to buildings."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.sustlabs.com/smart-db"
        />
      </Helmet>
      <MonitoringIntroSection section={SMART_DB_PAGE_CONTENT.introSection} />
      <MonitoringHeroSection
        {...SMART_DB_PAGE_CONTENT.heroSection}
        imageAlt="Smart DB electrical panel"
        imageSrc={smartDbImage}
        imageVariant="smart-db"
      />
      <ProductFeatureSection section={SMART_DB_PAGE_CONTENT.promiseSection} variant="smart-db" />
      <section className="smart-db-page__visual-band" aria-label="Smart DB installed panel visual">
        <div className="smart-db-page__visual-scene">
          <img src={smartDbPanelImage} alt="Smart DB installed inside an electrical distribution panel" />
        </div>
      </section>
      {/* <SmartDbTextStackSection
        headingId="smart-db-stack-title"
        section={SMART_DB_PAGE_CONTENT.stackSection}
        variant="stack"
      /> */}
      <SmartDbSafetySection section={SMART_DB_PAGE_CONTENT.safetySection} />
      <SmartDbEnergySection section={SMART_DB_PAGE_CONTENT.energySection} />
      {/* <SmartDbVariantsSection section={SMART_DB_PAGE_CONTENT.variantsSection} /> */}
      <SmartDbTextStackSection
        headingId="smart-db-project-title"
        section={SMART_DB_PAGE_CONTENT.projectSection}
        variant="project"
      />
      <SmartDbComparisonSection section={SMART_DB_PAGE_CONTENT.comparisonSection} />
      {/* <SmartDbProductsSection section={SMART_DB_PAGE_CONTENT.productsSection} />
      <ProductUseCaseSection section={SMART_DB_PAGE_CONTENT.derSection} /> */}
    </main>
  )
}

export const SmartDbPage = memo(SmartDbPageComponent)
