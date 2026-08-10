import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { LegalPage } from '@/payload-types'
import { buildMetadata } from './metadata'

export async function getLegalPage(
  slug: string,
  draft = false,
): Promise<LegalPage | null> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'legal-pages',
    depth: 1,
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: { slug: { equals: slug } },
  })

  return result.docs[0] ?? null
}

export async function getLegalSeo(slug: string, path: string): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [result, settings] = await Promise.all([
    payload.find({
      collection: 'legal-pages',
      depth: 1,
      limit: 1,
      pagination: false,
      where: { slug: { equals: slug } },
    }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  const page = result.docs[0]

  return page ? buildMetadata(page.seo, settings, path) : {}
}
