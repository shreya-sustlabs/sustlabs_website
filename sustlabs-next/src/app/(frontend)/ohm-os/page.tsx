import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { OhmOsPage } from '@/components/page/OhmOsPage'
import { getOhmOsPage, getOhmOsSeo } from '@/lib/cms/ohmOs'

export async function generateMetadata(): Promise<Metadata> {
  return getOhmOsSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return <OhmOsPage content={await getOhmOsPage(isEnabled)} />
}
