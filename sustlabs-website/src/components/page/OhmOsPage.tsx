import { memo } from 'react'
import {
  OHM_OS_APPLICATION_CONTENT,
  OHM_OS_APPLICATIONS,
  OHM_OS_LICENSEE_CONTENT,
  OHM_OS_PAGE_CONTENT,
  SMART_DB_PAGE_CONTENT,
} from '../../utils/constants'
import { OhmOsApplicationsSection } from '../sections/OhmOsApplicationsSection'
import { OhmOsHeroSection } from '../sections/OhmOsHeroSection'
import { OhmOsLicenseeSection } from '../sections/OhmOsLicenseeSection'
import { SmartDbLayerSection } from '../sections/SmartDbLayerSection'

function OhmOsPageComponent() {
  return (
    <main className="ohm-os-page">
      <OhmOsHeroSection section={OHM_OS_PAGE_CONTENT} />
      <OhmOsApplicationsSection section={{ ...OHM_OS_APPLICATION_CONTENT, items: OHM_OS_APPLICATIONS }} />
      <SmartDbLayerSection section={SMART_DB_PAGE_CONTENT.layerSection} />
      <OhmOsLicenseeSection section={OHM_OS_LICENSEE_CONTENT} />
    </main>
  )
}

export const OhmOsPage = memo(OhmOsPageComponent)
