import { memo } from 'react'
import { SOLUTIONS_PAGE_CONTENT } from '../../utils/constants'
import { SolutionPanel } from '../sections/SolutionPanel'
import { SolutionsPartnerSection } from '../sections/SolutionsPartnerSection'
import { Helmet } from 'react-helmet-async'

function SolutionsPageComponent() {
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
      {SOLUTIONS_PAGE_CONTENT.panels.map((panel, index) => (
        <SolutionPanel index={index} key={`${panel.titleLead}`} panel={panel} />
      ))}
      <SolutionsPartnerSection section={SOLUTIONS_PAGE_CONTENT.partnerSection} />
    </main>
  )
}

export const SolutionsPage = memo(SolutionsPageComponent)
