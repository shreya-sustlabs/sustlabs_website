import { memo } from 'react'
import type { OhmOsPageContent } from '@/lib/cms/ohmOs'
import { OhmOsApplicationsSection } from '../sections/OhmOsApplicationsSection'
import { OhmOsHeroSection } from '../sections/OhmOsHeroSection'
import { OhmOsLicenseeSection } from '../sections/OhmOsLicenseeSection'
import { SmartDbLayerSection } from '../sections/SmartDbLayerSection'

type OhmOsPageProps = {
  content: OhmOsPageContent
}

function OhmOsPageComponent({ content }: OhmOsPageProps) {
  return (
    <main className="ohm-os-page">
      <OhmOsHeroSection section={content.heroSection} />
      <OhmOsApplicationsSection section={content.applicationsSection} />
      <SmartDbLayerSection section={content.layerSection} />
      <OhmOsLicenseeSection section={content.licenseeSection} />
    </main>
  )
}

export const OhmOsPage = memo(OhmOsPageComponent)
