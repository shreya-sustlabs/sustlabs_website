import { memo, useState } from 'react'
import { SOLUTIONS_PAGE_CONTENT } from '../../utils/constants'
import { SmartDbLeadModal } from '../sections/SmartDbLeadModal'
import { SolutionsHeroSection } from '../sections/SolutionsHeroSection'
import { SolutionPanel } from '../sections/SolutionPanel'
import { SolutionsPartnerSection } from '../sections/SolutionsPartnerSection'
import { Helmet } from 'react-helmet-async'

function SolutionsPageComponent() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false)

  return (
    <main className="solutions-page">
      <Helmet>
        <title>Solutions</title>

        <meta
          name="description"
          content="Electrical intelligence for homes, developers, facilities, fire pump rooms, warehouses, data centers, utilities and partners."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.sustlabs.com/solutions"
        />
      </Helmet>
      <SolutionsHeroSection
        section={SOLUTIONS_PAGE_CONTENT.heroSection}
        onActionClick={(action, event) => {
          if (action.label === 'Talk to us') {
            event.preventDefault()
            setIsLeadFormOpen(true)
          }
        }}
      />
      {isLeadFormOpen ? <SmartDbLeadModal source = "solution" onClose={() => setIsLeadFormOpen(false)} /> : null}
      {SOLUTIONS_PAGE_CONTENT.panels.map((panel, index) => (
        <SolutionPanel index={index} key={`${panel.titleLead}`} panel={panel} />
      ))}
      <SolutionsPartnerSection section={SOLUTIONS_PAGE_CONTENT.partnerSection} />
    </main>
  )
}

export const SolutionsPage = memo(SolutionsPageComponent)
