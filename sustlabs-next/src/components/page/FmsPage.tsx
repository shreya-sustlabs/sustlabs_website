import { memo } from 'react'
import type { FmsPageContent } from '@/lib/cms/fms'
import { FmsAlertsSection } from '../sections/FmsAlertsSection'
import { FmsAssuranceSection } from '../sections/FmsAssuranceSection'
import { FmsChainSection } from '../sections/FmsChainSection'
import { FmsCoverageSection } from '../sections/FmsCoverageSection'
// import { FmsFaqSection } from '../sections/FmsFaqSection'
import { FmsGapSection } from '../sections/FmsGapSection'
import { FmsHeroSection } from '../sections/FmsHeroSection'
import { FmsMediaSection } from '../sections/FmsMediaSection'
import { FmsStepsSection } from '../sections/FmsStepsSection'

type FmsPageProps = {
  content: FmsPageContent
}

function FmsPageComponent({ content }: FmsPageProps) {
  return (
    <main className="fms-page">

      <FmsHeroSection
        section={content.heroSection}
      />

      <FmsMediaSection
        headingId="fms-problem-title"
        section={content.problemSection}
        variant="dashboard"
      />
      <FmsMediaSection
        headingId="fms-audience-title"
        section={content.audienceSection}
        variant="audience"
      />
      <FmsGapSection section={content.gapSection} />
      <FmsChainSection section={content.chainSection} />
      <FmsCoverageSection section={content.coverageSection} />
      <FmsMediaSection
        headingId="fms-visibility-title"
        section={content.visibilitySection}
        variant="console"
      />
      <FmsAlertsSection section={content.alertsSection} />
      <FmsAssuranceSection section={content.assuranceSection} />
      <FmsStepsSection section={content.stepsSection} />
      {/* <FmsFaqSection
        section={content.faqSection}
      /> */}
    </main>
  )
}

export const FmsPage = memo(FmsPageComponent)
