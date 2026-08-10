import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings', depth: 0 })
  const origin = settings.canonicalOrigin.replace(/\/$/, '')

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The admin panel and Payload's own endpoints have no business in an index.
      disallow: ['/admin', '/api/'],
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}
