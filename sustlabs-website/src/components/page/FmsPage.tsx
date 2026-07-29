import { memo, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import fmsConsoleImage from '../../assets/fms.png'
import fmsBuildingImage from '../../assets/fmsdashboard.png'
import fmsAudienceImage from '../../assets/fmsoptions.png'
import fmsChainVideo from '../../assets/ACMS GIF WHITHOUT BG.mp4'
import { FMS_PAGE_CONTENT } from '../../utils/constants'
import { FmsAlertsSection } from '../sections/FmsAlertsSection'
import { FmsAssuranceSection } from '../sections/FmsAssuranceSection'
import { FmsChainSection } from '../sections/FmsChainSection'
import { FmsCoverageSection } from '../sections/FmsCoverageSection'
// import { FmsFaqSection } from '../sections/FmsFaqSection'
import { FmsGapSection } from '../sections/FmsGapSection'
import { FmsHeroSection } from '../sections/FmsHeroSection'
import { FmsMediaSection } from '../sections/FmsMediaSection'
import { FmsStepsSection } from '../sections/FmsStepsSection'
import { SmartDbLeadModal } from '../sections/SmartDbLeadModal'

function FmsPageComponent() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)

  const openLeadForm = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setIsLeadFormOpen(true)
  }

  return (
    <main className="fms-page">
      <Helmet>
        <title>FMS - Fire Monitoring System</title>

        <meta
          name="description"
          content="Continuous monitoring for fire pump rooms. Track pumps, water levels, line pressure, panel status and power health across every tower from one console."
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.sustlabs.com/fms" />
      </Helmet>

      <FmsHeroSection
        section={FMS_PAGE_CONTENT.heroSection}
        onActionClick={(action, event) => {
          if (!action.href.startsWith('http')) {
            openLeadForm(event)
          }
        }}
      />

      {isLeadFormOpen ? <SmartDbLeadModal source="fms" onClose={() => setIsLeadFormOpen(false)} /> : null}

      <FmsMediaSection
        headingId="fms-problem-title"
        imageSrc={fmsBuildingImage}
        section={FMS_PAGE_CONTENT.problemSection}
        variant="dashboard"
      />
      <FmsMediaSection
        headingId="fms-audience-title"
        imageSrc={fmsAudienceImage}
        section={FMS_PAGE_CONTENT.audienceSection}
        variant="audience"
      />
      <FmsGapSection section={FMS_PAGE_CONTENT.gapSection} />
      <FmsChainSection section={FMS_PAGE_CONTENT.chainSection} videoSrc={fmsChainVideo} />
      <FmsCoverageSection section={FMS_PAGE_CONTENT.coverageSection} />
      <FmsMediaSection
        headingId="fms-visibility-title"
        imageSrc={fmsConsoleImage}
        section={FMS_PAGE_CONTENT.visibilitySection}
        variant="console"
      />
      <FmsAlertsSection section={FMS_PAGE_CONTENT.alertsSection} />
      <FmsAssuranceSection section={FMS_PAGE_CONTENT.assuranceSection} />
      <FmsStepsSection section={FMS_PAGE_CONTENT.stepsSection} />
      {/* <FmsFaqSection
        section={FMS_PAGE_CONTENT.faqSection}
        onActionClick={(_action, event) => openLeadForm(event)}
      /> */}
    </main>
  )
}

export const FmsPage = memo(FmsPageComponent)
