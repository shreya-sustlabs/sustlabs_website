import { memo } from 'react'
import { SUPPORT_PAGE_CONTENT } from '../../utils/constants'
import { SupportContactSection } from '../sections/SupportContactSection'
import { SupportHeroSection } from '../sections/SupportHeroSection'

function SupportPageComponent() {
  return (
    <main className="support-page">
      <SupportHeroSection section={SUPPORT_PAGE_CONTENT.hero} />
      <SupportContactSection section={SUPPORT_PAGE_CONTENT.contact} />
    </main>
  )
}

export const SupportPage = memo(SupportPageComponent)
