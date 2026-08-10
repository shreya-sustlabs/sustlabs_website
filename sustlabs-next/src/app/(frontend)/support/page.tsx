import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { LeadModalProvider } from '@/components/lead/LeadModalProvider'
import { SupportPage } from '@/components/page/SupportPage'
import { getSupportPage, getSupportSeo } from '@/lib/cms/oraSupport'

export async function generateMetadata(): Promise<Metadata> {
  return getSupportSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return (
    <LeadModalProvider source="support">
      <SupportPage content={await getSupportPage(isEnabled)} />
    </LeadModalProvider>
  )
}
