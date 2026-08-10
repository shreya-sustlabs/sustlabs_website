import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { LeadModalProvider } from '@/components/lead/LeadModalProvider'
import { FmsPage } from '@/components/page/FmsPage'
import { getFmsPage, getFmsSeo } from '@/lib/cms/fms'

export async function generateMetadata(): Promise<Metadata> {
  return getFmsSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return (
    <LeadModalProvider source="fms">
      <FmsPage content={await getFmsPage(isEnabled)} />
    </LeadModalProvider>
  )
}
