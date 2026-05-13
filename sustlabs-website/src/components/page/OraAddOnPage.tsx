import { memo } from 'react'
import {
  ORA_ADD_ON_PAGE_CONTENT,
  ORA_DEVELOPER_SECTION,
  ORA_ENABLES_SECTION,
} from '../../utils/constants'
import { OraAddOnHeroSection } from '../sections/OraAddOnHeroSection'
import { OraDeveloperSection } from '../sections/OraDeveloperSection'
import { OraEnablesSection } from '../sections/OraEnablesSection'

function OraAddOnPageComponent() {
  return (
    <main className="ora-add-on-page">
      <OraAddOnHeroSection section={ORA_ADD_ON_PAGE_CONTENT} />
      {/* <OraDeveloperSection section={ORA_DEVELOPER_SECTION} /> */}
      <OraEnablesSection section={ORA_ENABLES_SECTION} />
    </main>
  )
}

export const OraAddOnPage = memo(OraAddOnPageComponent)
