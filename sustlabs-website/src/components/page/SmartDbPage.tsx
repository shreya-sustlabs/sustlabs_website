import { memo } from 'react'
import { MonitoringHeroSection } from '../sections/MonitoringHeroSection'
import { MonitoringIntroSection } from '../sections/MonitoringIntroSection'
import { ProductFeatureSection } from '../sections/ProductFeatureSection'
import { ProductUseCaseSection } from '../sections/ProductUseCaseSection'
import { SmartDbComparisonSection } from '../sections/SmartDbComparisonSection'
import { SmartDbEnergySection } from '../sections/SmartDbEnergySection'
import { SmartDbLayerSection } from '../sections/SmartDbLayerSection'
import { SmartDbProductsSection } from '../sections/SmartDbProductsSection'
import { SmartDbSafetySection } from '../sections/SmartDbSafetySection'
import { SmartDbTextStackSection } from '../sections/SmartDbTextStackSection'
import { SmartDbVariantsSection } from '../sections/SmartDbVariantsSection'
import { SMART_DB_PAGE_CONTENT } from '../../utils/constants'

function SmartDbPageComponent() {
  return (
    <main className="smart-db-page">
      <MonitoringIntroSection section={SMART_DB_PAGE_CONTENT.introSection} />
      <MonitoringHeroSection {...SMART_DB_PAGE_CONTENT.heroSection} />
      <ProductFeatureSection section={SMART_DB_PAGE_CONTENT.promiseSection} />
      <section className="smart-db-page__visual-band" aria-label="Smart DB visual area" />
      <SmartDbTextStackSection
        headingId="smart-db-stack-title"
        section={SMART_DB_PAGE_CONTENT.stackSection}
        variant="stack"
      />
      <SmartDbSafetySection section={SMART_DB_PAGE_CONTENT.safetySection} />
      <SmartDbEnergySection section={SMART_DB_PAGE_CONTENT.energySection} />
      <SmartDbVariantsSection section={SMART_DB_PAGE_CONTENT.variantsSection} />
      <SmartDbTextStackSection
        headingId="smart-db-project-title"
        section={SMART_DB_PAGE_CONTENT.projectSection}
        variant="project"
      />
      <SmartDbComparisonSection section={SMART_DB_PAGE_CONTENT.comparisonSection} />
      <SmartDbProductsSection section={SMART_DB_PAGE_CONTENT.productsSection} />
      <SmartDbLayerSection section={SMART_DB_PAGE_CONTENT.layerSection} />
      <ProductUseCaseSection section={SMART_DB_PAGE_CONTENT.derSection} />
    </main>
  )
}

export const SmartDbPage = memo(SmartDbPageComponent)
