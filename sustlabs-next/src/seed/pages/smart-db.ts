import type { Payload } from 'payload'

import { SMART_DB_PAGE_CONTENT } from '../legacy/constants'
import { mediaId, type MediaMap } from '../media'
import { CALENDLY_TOKEN, toList, withSettingsToken } from '../helpers'

/**
 * The image keys the old components resolved through hardcoded maps
 * (`SCREEN_IMAGES`, `TILE_IMAGES`, `SEGMENT_IMAGES`) become real upload
 * relations here. The platform tile keeps its key as well, because the CSS class
 * `sdb-platform__tile--{key}` is derived from it.
 */
const SCREEN_FILE = {
  live: 'smartdb-app-live.webp',
  alerts: 'smartdb-app-alerts.webp',
  energy: 'smartdb-app-energy.webp',
} as const

const TILE_FILE = {
  app: 'smartdb-app.webp',
  dashboard: 'smartdb-dashboard.webp',
  clock: 'smartdb-ora.webp',
} as const

const SEGMENT_FILE = {
  residential: 'smartdb-segment-residential.webp',
  villa: 'smartdb-segment-villa.webp',
  retrofit: 'smartdb-segment-retrofit.webp',
  facility: 'smartdb-segment-facility.webp',
} as const

const heading = (section: { eyebrow: string; titleLead: string; titleAccent: string }) => ({
  eyebrow: section.eyebrow,
  titleLead: section.titleLead,
  titleAccent: section.titleAccent,
})

export const seedSmartDb = async (payload: Payload, media: MediaMap) => {
  const content = SMART_DB_PAGE_CONTENT

  await payload.updateGlobal({
    slug: 'smart-db',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        ...heading(content.heroSection),
        description: content.heroSection.description,
        actions: content.heroSection.actions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          opensLeadForm: Boolean(action.opensLeadForm),
          // Preserves the existing Google Analytics event names, which were
          // previously derived from the label.
          analyticsId: action.label,
        })),
      },

      layersSection: {
        title: content.layersSection.title,
        image: mediaId(media, 'smartdb-layers.webp'),
        alt: content.layersSection.imageAlt,
      },

      knowsSection: {
        ...heading(content.knowsSection),
        descriptions: toList(content.knowsSection.descriptions),
        stats: content.knowsSection.stats.map((stat) => ({
          label: stat.label,
          value: stat.value,
        })),
        action: {
          label: content.knowsSection.action.label,
          document: mediaId(media, 'sustlabs-smart-db-brochure.pdf'),
          opensLeadForm: Boolean(content.knowsSection.action.opensLeadForm),
        },
      },

      unchangedSection: {
        ...heading(content.unchangedSection),
        description: content.unchangedSection.description,
        cards: content.unchangedSection.cards.map((card) => ({
          title: card.title,
          description: card.description,
        })),
      },

      loopSection: {
        ...heading(content.loopSection),
        description: content.loopSection.description,
        steps: content.loopSection.steps.map((step) => ({
          number: step.number,
          title: step.title,
          description: step.description,
        })),
        action: {
          label: content.loopSection.action.label,
          href: content.loopSection.action.href,
          opensLeadForm: Boolean(content.loopSection.action.opensLeadForm),
        },
      },

      capabilitiesSection: {
        ...heading(content.capabilitiesSection),
        items: content.capabilitiesSection.items.map((item) => ({
          title: item.title,
          description: item.description,
        })),
      },

      pocketSection: {
        ...heading(content.pocketSection),
        description: content.pocketSection.description,
        highlight: {
          eyebrow: content.pocketSection.highlight.eyebrow,
          title: content.pocketSection.highlight.title,
          description: content.pocketSection.highlight.description,
        },
        screens: content.pocketSection.screens.map((screen) => ({
          image: mediaId(media, SCREEN_FILE[screen.image]),
          alt: screen.alt,
          caption: screen.caption,
        })),
      },

      platformSection: {
        ...heading(content.platformSection),
        tiles: content.platformSection.tiles.map((tile) => ({
          name: tile.name,
          kicker: tile.kicker,
          description: tile.description,
          image: mediaId(media, TILE_FILE[tile.image]),
          variant: tile.image,
        })),
      },

      comparisonSection: {
        ...heading(content.comparisonSection),
        columns: toList(content.comparisonSection.columns),
        rows: content.comparisonSection.rows.map((row) => ({ cells: toList(row) })),
        action: content.comparisonSection.action
          ? {
              label: content.comparisonSection.action.label,
              href: content.comparisonSection.action.href,
              opensLeadForm: Boolean(content.comparisonSection.action.opensLeadForm),
            }
          : undefined,
      },

      segmentsSection: {
        ...heading(content.segmentsSection),
        description: content.segmentsSection.description,
        segments: content.segmentsSection.segments.map((segment) => ({
          name: segment.name,
          description: segment.description,
          image: mediaId(media, SEGMENT_FILE[segment.image]),
          alt: segment.alt,
        })),
      },

      fireSection: {
        ...heading(content.fireSection),
        description: content.fireSection.description,
        tags: toList(content.fireSection.tags),
      },

      // Authored but never rendered on the live site. Migrated behind the
      // visibility toggle rather than discarded.
      specsSection: {
        enabled: false,
        title: 'Specifications',
        specs: [],
        note: '',
      },

      seo: {
        title: 'Smart DB',
        description:
          'An intelligent distribution board that brings circuit-level visibility, ' +
          'safety intelligence and backup orchestration to buildings.',
        noindex: false,
      },

      _status: 'published',
    },
  })

  console.log(`  smart-db: 12 sections seeded (demo link -> ${CALENDLY_TOKEN})`)
}
