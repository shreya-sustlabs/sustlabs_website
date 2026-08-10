import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { LeadModalProvider } from '@/components/lead/LeadModalProvider'
import { SmartDbPage } from '@/components/page/SmartDbPage'
import { getSmartDbPage, getSmartDbSeo } from '@/lib/cms/smartDb'

export async function generateMetadata(): Promise<Metadata> {
  return getSmartDbSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()
  const content = await getSmartDbPage(isEnabled)

  return (
    <LeadModalProvider source="smartdb">
      <SmartDbPage content={content} />
    </LeadModalProvider>
  )
}
