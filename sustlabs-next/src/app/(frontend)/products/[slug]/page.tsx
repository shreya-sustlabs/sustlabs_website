import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { LeadModalProvider } from '@/components/lead/LeadModalProvider'
import { MonitoringPage } from '@/components/page/MonitoringPage'
import { getProductPage, getProductSeo, getPublishedProducts } from '@/lib/cms/products'

type RouteParams = { slug: string }

export async function generateStaticParams(): Promise<RouteParams[]> {
  const products = await getPublishedProducts()

  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { slug } = await params

  return getProductSeo(slug)
}

export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const content = await getProductPage(slug, isEnabled)

  // The old app silently redirected unknown slugs to the first product, which
  // hid broken links from crawlers. A real 404 is the honest answer.
  if (!content) {
    notFound()
  }

  return (
    <LeadModalProvider source="smartdb">
      <MonitoringPage data={content} />
    </LeadModalProvider>
  )
}
