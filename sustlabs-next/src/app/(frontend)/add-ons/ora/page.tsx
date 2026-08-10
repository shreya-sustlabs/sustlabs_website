import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { OraAddOnPage } from '@/components/page/OraAddOnPage'
import { getOraPage, getOraSeo } from '@/lib/cms/oraSupport'

export async function generateMetadata(): Promise<Metadata> {
  return getOraSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return <OraAddOnPage content={await getOraPage(isEnabled)} />
}
