import { memo } from 'react'
import type { OraPageContent } from '@/lib/cms/oraSupport'
import { OraAddOnHeroSection } from '../sections/OraAddOnHeroSection'
// import { OraDeveloperSection } from '../sections/OraDeveloperSection'
import { OraEnablesSection } from '../sections/OraEnablesSection'

type OraAddOnPageProps = {
  content: OraPageContent
}

function OraAddOnPageComponent({ content }: OraAddOnPageProps) {
  return (
    <main className="ora-add-on-page">
      <OraAddOnHeroSection section={content.heroSection} />
      {/* <OraDeveloperSection section={ORA_DEVELOPER_SECTION} /> */}
      <OraEnablesSection section={content.enablesSection} />
    </main>
  )
}

export const OraAddOnPage = memo(OraAddOnPageComponent)
