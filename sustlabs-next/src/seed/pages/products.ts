import type { Payload } from 'payload'

import { MONITORING_PRODUCTS } from '../legacy/constants'
import type { MonitoringPageData } from '../legacy/types'
import { mediaId, type MediaMap } from '../media'
import { withSettingsToken } from '../helpers'

/** The hero photograph the old page picked from a path-keyed map. */
const HERO_FILE: Record<string, string> = {
  '/products/o3-energy-visibility': 'o3.webp',
  '/products/o4-electrical-safety': 'o4.webp',
}

const HERO_VARIANT: Record<string, 'o3' | 'o4'> = {
  '/products/o3-energy-visibility': 'o3',
  '/products/o4-electrical-safety': 'o4',
}

export const seedProducts = async (payload: Payload, media: MediaMap) => {
  const products = MONITORING_PRODUCTS as readonly MonitoringPageData[]
  let created = 0

  for (const [index, product] of products.entries()) {
    const isServed = product.path.startsWith('/products/')
    const slug = product.path.replace(/^.*\//, '')

    const data = {
      navLabel: product.navLabel,
      slug,
      order: index,
      eyebrow: product.eyebrow,
      title: product.title,
      description: product.description,

      introSection: {
        titleKicker: product.introSection.titleKicker,
        titleLead: product.introSection.titleLead,
        titleAccent: product.introSection.titleAccent,
        descriptions: product.introSection.descriptions.map((text) => ({ text })),
        accent: product.introSection.accent as 'var(--terra500)',
      },

      heroSection: {
        kicker: product.heroKicker,
        titleLead: product.heroLead,
        titleAccent: product.heroAccent,
        titleRest: product.heroRest,
        description: product.heroDescription,
        accentColor: (product.heroAccentColor ?? product.accent) as 'var(--terra500)',
        actions: product.heroActions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          analyticsId: action.label,
        })),
        image: HERO_FILE[product.path] ? mediaId(media, HERO_FILE[product.path]) : undefined,
        alt: '',
        imageVariant: HERO_VARIANT[product.path],
      },

      featureSection: {
        eyebrow: product.featureSection.eyebrow,
        titleLead: product.featureSection.titleLead,
        titleAccent: product.featureSection.titleAccent,
        accent: product.featureSection.accent as 'var(--terra500)',
        accentTarget: product.featureSection.accentTarget ?? 'accent',
        breakAfterLead: true,
        cards: product.featureSection.cards.map((card) => ({
          eyebrow: card.eyebrow,
          title: card.title,
          description: card.description,
        })),
      },

      // Commented out of the page in code, so it comes across switched off.
      useCaseSection: {
        enabled: false,
        eyebrow: product.useCaseSection.eyebrow,
        titleLead: product.useCaseSection.titleLead,
        titleAccent: product.useCaseSection.titleAccent,
        description: product.useCaseSection.description,
        accent: product.useCaseSection.accent as 'var(--terra500)',
        accentTarget: product.useCaseSection.accentTarget ?? 'accent',
        breakAfterLead: true,
        cards: product.useCaseSection.cards.map((card) => ({
          number: card.number,
          title: card.title,
          description: card.description,
        })),
      },

      postDetailUseCaseSection: product.postDetailUseCaseSection
        ? {
            enabled: true,
            eyebrow: product.postDetailUseCaseSection.eyebrow,
            titleLead: product.postDetailUseCaseSection.titleLead,
            titleAccent: product.postDetailUseCaseSection.titleAccent,
            accent: product.postDetailUseCaseSection.accent as 'var(--black400)',
            // The old component inferred this by checking whether the heading
            // contained the words "o4 Ideal Use".
            accentTarget: 'lead' as const,
            breakAfterLead: true,
            cards: product.postDetailUseCaseSection.cards.map((card) => ({
              number: card.number,
              title: card.title,
              description: card.description,
            })),
          }
        : { accent: 'var(--terra500)' as const, cards: [], enabled: false },

      ctaSection: {
        eyebrow: product.ctaSection.eyebrow,
        titleLead: product.ctaSection.titleLead,
        titleAccent: product.ctaSection.titleAccent,
        description: product.ctaSection.description,
        accent: product.ctaSection.accent as 'var(--success500)',
        accentTarget: product.ctaSection.accentTarget ?? 'accent',
        items: product.ctaSection.items.map((text) => ({ text })),
        itemsAccent: product.ctaSection.itemAccent,
        footer: product.ctaSection.footer,
      },

      seo: {
        title: product.searchTitle,
        description: product.searchSubTitle,
        noindex: false,
      },

      // o5's path points at a route that does not exist and it is hidden from the
      // menu, so it comes across as a draft rather than being deleted.
      _status: (isServed ? 'published' : 'draft') as 'published' | 'draft',
    }

    const existing = await payload.find({
      collection: 'products',
      where: { slug: { equals: slug } },
      limit: 1,
      pagination: false,
      overrideAccess: true,
    })

    if (existing.docs[0]) {
      await payload.update({
        collection: 'products',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
    } else {
      await payload.create({
        collection: 'products',
        data,
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      created += 1
    }
  }

  const published = products.filter((p) => p.path.startsWith('/products/')).length
  console.log(`  products: ${products.length} docs (${published} published, ${products.length - published} draft), ${created} new`)
}
