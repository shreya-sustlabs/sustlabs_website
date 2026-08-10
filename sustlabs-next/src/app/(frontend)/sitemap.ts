import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import { getPublishedProducts } from '@/lib/cms/products'

/**
 * Generated rather than hand-maintained. The committed `public/sitemap.xml` on
 * the old site had drifted: it was missing /fms entirely — a live, actively
 * marketed page — and listed a product URL whose canonical pointed somewhere
 * that 404s.
 */
const STATIC_PATHS = [
  '/',
  '/ohm-os',
  '/smart-db',
  '/add-ons/ora',
  '/fms',
  '/solutions',
  '/support',
  '/privacy-policy',
  '/terms-and-conditions',
] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'settings', depth: 0 })
  const origin = settings.canonicalOrigin.replace(/\/$/, '')

  // Only published products, so a draft never leaks into the sitemap.
  const products = await getPublishedProducts()
  const productPaths = products.map((product) => `/products/${product.slug}`)

  return [...STATIC_PATHS, ...productPaths].map((path) => ({
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    lastModified: new Date(),
    priority: path === '/' ? 1 : 0.7,
    url: `${origin}${path === '/' ? '' : path}`,
  }))
}
