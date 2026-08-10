import { memo } from 'react'
import type { SupportHeroSectionData } from '@/types'
// import { SupportContactSection } from '../sections/SupportContactSection'
import { SupportHeroSection } from '../sections/SupportHeroSection'

type SupportPageProps = {
  content: SupportHeroSectionData
}

function SupportPageComponent({ content }: SupportPageProps) {
  return (
    <main className="support-page">
      <SupportHeroSection section={content} />
      {/* <SupportContactSection section={SUPPORT_PAGE_CONTENT.contact} /> */}
    </main>
  )
}

export const SupportPage = memo(SupportPageComponent)
