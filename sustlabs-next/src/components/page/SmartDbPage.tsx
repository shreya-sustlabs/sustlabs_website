import { memo } from 'react'
import type { SmartDbPageContent } from '@/lib/cms/smartDb'
import { SmartDbCapabilitiesSection } from '../sections/SmartDbCapabilitiesSection'
import { SmartDbComparisonSection } from '../sections/SmartDbComparisonSection'
import { SmartDbFireSection } from '../sections/SmartDbFireSection'
import { SmartDbHeroSection } from '../sections/SmartDbHeroSection'
import { SmartDbKnowsSection } from '../sections/SmartDbKnowsSection'
import { SmartDbLayersSection } from '../sections/SmartDbLayersSection'
import { SmartDbLoopSection } from '../sections/SmartDbLoopSection'
import { SmartDbPlatformSection } from '../sections/SmartDbPlatformSection'
import { SmartDbPocketSection } from '../sections/SmartDbPocketSection'
import { SmartDbSegmentsSection } from '../sections/SmartDbSegmentsSection'
import { SmartDbSpecsSection } from '../sections/SmartDbSpecsSection'
import { SmartDbUnchangedSection } from '../sections/SmartDbUnchangedSection'

type SmartDbPageProps = {
  content: SmartDbPageContent
}

function SmartDbPageComponent({ content }: SmartDbPageProps) {
  return (
    <main className="smart-db-page">

      <SmartDbHeroSection
        section={content.heroSection}
      />

      <SmartDbLayersSection section={content.layersSection} />
      <SmartDbKnowsSection section={content.knowsSection} />
      <SmartDbUnchangedSection section={content.unchangedSection} />
      <SmartDbLoopSection section={content.loopSection} />
      <SmartDbCapabilitiesSection section={content.capabilitiesSection} />
      <SmartDbPocketSection section={content.pocketSection} />
      <SmartDbPlatformSection section={content.platformSection} />
      {content.specsSection ? (
        <SmartDbSpecsSection section={content.specsSection} />
      ) : null}
      <SmartDbComparisonSection
        section={content.comparisonSection}
      />
      <SmartDbSegmentsSection section={content.segmentsSection} />
      <SmartDbFireSection section={content.fireSection} />
    </main>
  )
}

export const SmartDbPage = memo(SmartDbPageComponent)
