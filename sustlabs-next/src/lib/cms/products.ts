import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Product, Setting } from '@/payload-types'
import type { MonitoringPageData } from '@/types'
import { buildMetadata } from './metadata'
import { flatten, image, opt, req, resolveUrl } from './helpers'

type HeadingRow = {
  accent?: string | null
  accentTarget?: ('lead' | 'accent') | null
  breakAfterLead?: boolean | null
  eyebrow?: string | null
  titleAccent?: string | null
  titleLead?: string | null
}

const sectionHeading = (row: HeadingRow, at: string) => ({
  accent: req(row.accent, `${at}.accent`),
  accentTarget: opt(row.accentTarget),
  breakAfterLead: row.breakAfterLead ?? true,
  eyebrow: row.eyebrow ?? '',
  titleAccent: row.titleAccent ?? '',
  titleLead: req(row.titleLead, `${at}.titleLead`),
})

const numbered = (
  rows: { description?: string | null; number?: string | null; title?: string | null }[] | null | undefined,
) =>
  (rows ?? []).map((row) => ({
    description: row.description ?? '',
    number: row.number ?? '',
    title: row.title ?? '',
  }))

export function toProductPage(product: Product, settings: Setting): MonitoringPageData {
  const hero = req(product.heroSection, 'heroSection')
  const intro = req(product.introSection, 'introSection')
  const cta = req(product.ctaSection, 'ctaSection')
  const feature = req(product.featureSection, 'featureSection')
  const useCase = product.useCaseSection
  const postDetail = product.postDetailUseCaseSection

  const heroImage = hero.image
    ? image(hero.image, 'heroSection.image', hero.alt)
    : undefined

  return {
    accent: req(intro.accent, 'introSection.accent'),
    description: req(product.description, 'description'),
    eyebrow: req(product.eyebrow, 'eyebrow'),
    navLabel: req(product.navLabel, 'navLabel'),
    path: `/products/${req(product.slug, 'slug')}`,
    title: req(product.title, 'title'),
    searchTitle: opt(product.seo?.title),
    searchSubTitle: opt(product.seo?.description),

    introSection: {
      accent: req(intro.accent, 'introSection.accent'),
      descriptions: flatten(intro.descriptions),
      titleAccent: intro.titleAccent ?? '',
      titleKicker: opt(intro.titleKicker),
      titleLead: req(intro.titleLead, 'introSection.titleLead'),
    },

    heroAccent: hero.titleAccent ?? '',
    heroAccentColor: opt(hero.accentColor),
    heroDescription: req(hero.description, 'heroSection.description'),
    heroKicker: req(hero.kicker, 'heroSection.kicker'),
    heroLead: req(hero.titleLead, 'heroSection.titleLead'),
    heroRest: opt(hero.titleRest),
    heroImage,
    heroImageVariant: opt(hero.imageVariant),
    heroActions: (hero.actions ?? []).map((action, index) => ({
      analyticsId: opt(action.analyticsId),
      href: resolveUrl(req(action.href, `heroSection.actions[${index}].href`), settings),
      label: req(action.label, `heroSection.actions[${index}].label`),
      opensLeadForm: Boolean(action.opensLeadForm),
      variant: req(action.variant, `heroSection.actions[${index}].variant`),
    })),

    featureSection: {
      ...sectionHeading(feature, 'featureSection'),
      cards: (feature.cards ?? []).map((card) => ({
        description: card.description ?? '',
        eyebrow: card.eyebrow ?? '',
        title: card.title ?? '',
      })),
    },

    useCaseSection: {
      ...sectionHeading(useCase ?? {}, 'useCaseSection'),
      cards: numbered(useCase?.cards),
      description: opt(useCase?.description),
    },

    postDetailUseCaseSection: postDetail?.enabled
      ? {
          ...sectionHeading(postDetail, 'postDetailUseCaseSection'),
          cards: numbered(postDetail.cards),
        }
      : undefined,

    ctaSection: {
      accent: req(cta.accent, 'ctaSection.accent'),
      accentTarget: opt(cta.accentTarget),
      description: req(cta.description, 'ctaSection.description'),
      eyebrow: req(cta.eyebrow, 'ctaSection.eyebrow'),
      footer: opt(cta.footer),
      itemAccent: opt(cta.itemsAccent),
      items: flatten(cta.items),
      titleAccent: cta.titleAccent ?? '',
      titleLead: req(cta.titleLead, 'ctaSection.titleLead'),
    },
  }
}

/** Only published products are served; o5 is kept as a draft. */
export async function getPublishedProducts(): Promise<Product[]> {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'products',
    depth: 0,
    limit: 100,
    pagination: false,
    sort: 'order',
    where: { _status: { equals: 'published' } },
  })

  return result.docs
}

export async function getProductPage(
  slug: string,
  draft = false,
): Promise<MonitoringPageData | null> {
  const payload = await getPayload({ config })
  const [result, settings] = await Promise.all([
    payload.find({
      collection: 'products',
      depth: 2,
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: { slug: { equals: slug } },
    }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  const product = result.docs[0]

  return product ? toProductPage(product, settings) : null
}

export async function getProductSeo(slug: string): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [result, settings] = await Promise.all([
    payload.find({
      collection: 'products',
      depth: 1,
      limit: 1,
      pagination: false,
      where: { slug: { equals: slug } },
    }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  const product = result.docs[0]

  return product ? buildMetadata(product.seo, settings, `/products/${slug}`) : {}
}
