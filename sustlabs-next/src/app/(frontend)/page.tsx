import type { Metadata } from 'next'
import { draftMode } from 'next/headers'

import { HomePage } from '@/components/page/HomePage'
import { getHomePage, getHomeSeo } from '@/lib/cms/home'

export async function generateMetadata(): Promise<Metadata> {
  return getHomeSeo()
}

export default async function Page() {
  const { isEnabled } = await draftMode()

  return <HomePage content={await getHomePage(isEnabled)} />
}
