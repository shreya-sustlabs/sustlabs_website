import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { LegalPage } from '@/components/page/LegalPage'
import { getLegalPage, getLegalSeo } from '@/lib/cms/legal'

const SLUG = 'terms-and-conditions'

export async function generateMetadata(): Promise<Metadata> {
  return getLegalSeo(SLUG, `/${SLUG}`)
}

export default async function Page() {
  const { isEnabled } = await draftMode()
  const page = await getLegalPage(SLUG, isEnabled)

  if (!page) {
    notFound()
  }

  return <LegalPage page={page} />
}
