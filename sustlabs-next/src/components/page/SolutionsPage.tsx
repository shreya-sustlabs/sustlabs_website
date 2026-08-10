import { memo } from 'react'
import type { SolutionsPageContent } from '@/lib/cms/solutions'
import { SolutionsHeroSection } from '../sections/SolutionsHeroSection'
import { SolutionPanel } from '../sections/SolutionPanel'
import { SolutionsPartnerSection } from '../sections/SolutionsPartnerSection'

type SolutionsPageProps = {
  content: SolutionsPageContent
}

function SolutionsPageComponent({ content }: SolutionsPageProps) {
  return (
    <main className="solutions-page">
      <SolutionsHeroSection
        section={content.heroSection}
      />
      {content.panels.map((panel, index) => (
        <SolutionPanel index={index} key={`${panel.titleLead}`} panel={panel} />
      ))}
      <SolutionsPartnerSection
        number={`${String(content.panels.length + 1).padStart(2, '0')}.`}
        section={content.partnerSection}
      />
    </main>
  )
}

export const SolutionsPage = memo(SolutionsPageComponent)
