import { memo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { SMART_DB_PAGE_CONTENT } from '../../utils/constants'
import { SmartDbCapabilitiesSection } from '../sections/SmartDbCapabilitiesSection'
import { SmartDbComparisonSection } from '../sections/SmartDbComparisonSection'
import { SmartDbFireSection } from '../sections/SmartDbFireSection'
import { SmartDbHeroSection } from '../sections/SmartDbHeroSection'
import { SmartDbKnowsSection } from '../sections/SmartDbKnowsSection'
import { SmartDbLayersSection } from '../sections/SmartDbLayersSection'
import { SmartDbLeadModal } from '../sections/SmartDbLeadModal'
import { SmartDbLoopSection } from '../sections/SmartDbLoopSection'
import { SmartDbPlatformSection } from '../sections/SmartDbPlatformSection'
import { SmartDbPocketSection } from '../sections/SmartDbPocketSection'
import { SmartDbSegmentsSection } from '../sections/SmartDbSegmentsSection'
import { SmartDbSpecsSection } from '../sections/SmartDbSpecsSection'
import { SmartDbUnchangedSection } from '../sections/SmartDbUnchangedSection'

function SmartDbPageComponent() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)

  const openLeadForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLeadFormOpen(true)
  }

  return (
    <main className="smart-db-page">
      <Helmet>
        <title>Smart DB</title>

        <meta
          name="description"
          content="An intelligent distribution board that brings circuit-level visibility, safety intelligence and backup orchestration to buildings."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.sustlabs.com/smart-db" />
      </Helmet>

      <SmartDbHeroSection
        section={SMART_DB_PAGE_CONTENT.heroSection}
        onActionClick={(action, event) => {
          // Same rule as FMS: internal links open the lead form, external ones
          // (the Calendly demo) follow through.
          if (!action.href.startsWith('http')) {
            openLeadForm(event)
          }
        }}
      />

      {isLeadFormOpen ? <SmartDbLeadModal source="smartdb" onClose={() => setIsLeadFormOpen(false)} /> : null}

      <SmartDbLayersSection section={SMART_DB_PAGE_CONTENT.layersSection} />
      <SmartDbKnowsSection section={SMART_DB_PAGE_CONTENT.knowsSection} />
      <SmartDbUnchangedSection section={SMART_DB_PAGE_CONTENT.unchangedSection} />
      <SmartDbLoopSection section={SMART_DB_PAGE_CONTENT.loopSection} />
      <SmartDbCapabilitiesSection section={SMART_DB_PAGE_CONTENT.capabilitiesSection} />
      <SmartDbPocketSection section={SMART_DB_PAGE_CONTENT.pocketSection} />
      <SmartDbPlatformSection section={SMART_DB_PAGE_CONTENT.platformSection} />
      {SMART_DB_PAGE_CONTENT.specsSection ? (
        <SmartDbSpecsSection section={SMART_DB_PAGE_CONTENT.specsSection} />
      ) : null}
      <SmartDbComparisonSection
        section={SMART_DB_PAGE_CONTENT.comparisonSection}
        onLeadFormOpen={openLeadForm}
      />
      <SmartDbSegmentsSection section={SMART_DB_PAGE_CONTENT.segmentsSection} />
      <SmartDbFireSection section={SMART_DB_PAGE_CONTENT.fireSection} />
    </main>
  )
}

export const SmartDbPage = memo(SmartDbPageComponent)
