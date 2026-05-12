import { memo } from 'react'
import { SOLUTIONS_PAGE_CONTENT } from '../../utils/constants'
import { SolutionPanel } from '../sections/SolutionPanel'
import { SolutionsPartnerSection } from '../sections/SolutionsPartnerSection'

function SolutionsPageComponent() {
  return (
    <main className="solutions-page">
      {SOLUTIONS_PAGE_CONTENT.panels.map((panel, index) => (
        <SolutionPanel index={index} key={`${panel.titleLead}`} panel={panel} />
      ))}
      <SolutionsPartnerSection section={SOLUTIONS_PAGE_CONTENT.partnerSection} />
    </main>
  )
}

export const SolutionsPage = memo(SolutionsPageComponent)
