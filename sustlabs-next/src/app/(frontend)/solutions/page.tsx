import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { LeadModalProvider } from '@/components/lead/LeadModalProvider'
import { SolutionsPage } from '@/components/page/SolutionsPage'
import { getSolutionsPage, getSolutionsSeo } from '@/lib/cms/solutions'

export async function generateMetadata(): Promise<Metadata> {
  return getSolutionsSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return (
    <LeadModalProvider source="solution">
      <SolutionsPage content={await getSolutionsPage(isEnabled)} />
    </LeadModalProvider>
  )
}
