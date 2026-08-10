import type { Metadata } from 'next'

import type { Media, Setting } from '@/payload-types'
import { uploadUrlOpt } from './helpers'

type SeoGroup =
  | {
      description?: string | null
      image?: number | Media | null
      noindex?: boolean | null
      title?: string | null
    }
  | null
  | undefined

/**
 * Builds a page's metadata from its CMS fields, falling back to the site-wide
 * defaults in Site settings.
 *
 * This replaces `react-helmet-async`, which only ran on 5 of the 11 pages — the
 * other six inherited whatever title and canonical the previously-viewed page
 * had set, because Helmet only overrides on mount.
 */
export function buildMetadata(seo: SeoGroup, settings: Setting, path: string): Metadata {
  const title = seo?.title?.trim() || settings.defaultSeoTitle
  const description = seo?.description?.trim() || settings.defaultSeoDescription
  const shareImage =
    uploadUrlOpt(seo?.image) ?? uploadUrlOpt(settings.defaultShareImage)

  return {
    title,
    description,
    alternates: { canonical: path },
    robots: seo?.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      images: shareImage ? [{ url: shareImage }] : undefined,
    },
    twitter: {
      title,
      description,
      images: shareImage ? [shareImage] : undefined,
    },
  }
}
