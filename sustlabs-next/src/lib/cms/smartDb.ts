import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Document, SmartDb, Setting } from '@/payload-types'
import type {
  SmartDbHeading,
  SmartDbPageData,
  SmartDbTextLinkAction,
  ProductHeroAction,
} from '@/types'
import { buildMetadata } from './metadata'
import { flatten, image, opt, req, resolveUrl, table, uploadUrl } from './helpers'

/**
 * `layerSection` is authored under Smart DB in the original content but is only
 * ever rendered on /ohm-os, so it belongs to that page's own document.
 */
export type SmartDbPageContent = Omit<SmartDbPageData, 'layerSection'>

type Section = { eyebrow?: string | null; titleAccent?: string | null; titleLead?: string | null }

const heading = (section: Section | null | undefined, at: string): SmartDbHeading => {
  const value = req(section, at)

  return {
    eyebrow: req(value.eyebrow, `${at}.eyebrow`),
    titleLead: req(value.titleLead, `${at}.titleLead`),
    // Several headings legitimately have no accented half.
    titleAccent: value.titleAccent ?? '',
  }
}

type ActionRow = {
  analyticsId?: string | null
  href?: string | null
  label?: string | null
  opensLeadForm?: boolean | null
  variant?: ('primary' | 'secondary') | null
}

const buttons = (
  rows: ActionRow[] | null | undefined,
  settings: Setting,
  at: string,
): ProductHeroAction[] =>
  (rows ?? []).map((row, index) => ({
    analyticsId: opt(row.analyticsId),
    href: resolveUrl(req(row.href, `${at}[${index}].href`), settings),
    label: req(row.label, `${at}[${index}].label`),
    opensLeadForm: Boolean(row.opensLeadForm),
    variant: req(row.variant, `${at}[${index}].variant`),
  }))

type TextLinkGroup = {
  document?: number | Document | null
  href?: string | null
  label?: string | null
  opensLeadForm?: boolean | null
}

/** An empty label is how a section hides its text link. */
const textLink = (
  group: TextLinkGroup | null | undefined,
  settings: Setting,
  at: string,
): SmartDbTextLinkAction | undefined => {
  if (!group?.label) {
    return undefined
  }

  if (group.document) {
    // `fileName` is what the browser saves the download as. Without it the
    // visitor gets the raw upload name instead of the branded one.
    const file = group.document

    return {
      download: true,
      fileName:
        typeof file === 'number' ? undefined : (file.downloadFileName ?? undefined),
      href: uploadUrl(file, `${at}.document`),
      label: group.label,
      opensLeadForm: group.opensLeadForm ? true : undefined,
    }
  }

  return {
    href: resolveUrl(req(group.href, `${at}.href`), settings),
    label: group.label,
    opensLeadForm: group.opensLeadForm ? true : undefined,
  }
}

const cards = (rows: { description?: string | null; title?: string | null }[] | null | undefined) =>
  (rows ?? []).map((row) => ({
    description: row.description ?? '',
    title: row.title ?? '',
  }))

export function toSmartDbPage(global: SmartDb, settings: Setting): SmartDbPageContent {
  const hero = req(global.heroSection, 'heroSection')
  const knows = req(global.knowsSection, 'knowsSection')
  const pocket = req(global.pocketSection, 'pocketSection')
  const specs = global.specsSection

  return {
    heroSection: {
      ...heading(hero, 'heroSection'),
      actions: buttons(hero.actions, settings, 'heroSection.actions'),
      description: req(hero.description, 'heroSection.description'),
    },

    layersSection: {
      image: image(global.layersSection?.image, 'layersSection.image', global.layersSection?.alt),
      title: req(global.layersSection?.title, 'layersSection.title'),
    },

    knowsSection: {
      ...heading(knows, 'knowsSection'),
      action: req(
        textLink(knows.action, settings, 'knowsSection.action'),
        'knowsSection.action',
      ),
      descriptions: flatten(knows.descriptions),
      stats: (knows.stats ?? []).map((stat) => ({
        label: stat.label ?? '',
        value: stat.value ?? '',
      })),
    },

    unchangedSection: {
      ...heading(global.unchangedSection, 'unchangedSection'),
      cards: cards(global.unchangedSection?.cards),
      description: req(global.unchangedSection?.description, 'unchangedSection.description'),
    },

    loopSection: {
      ...heading(global.loopSection, 'loopSection'),
      action: req(
        textLink(global.loopSection?.action, settings, 'loopSection.action'),
        'loopSection.action',
      ),
      description: req(global.loopSection?.description, 'loopSection.description'),
      steps: (global.loopSection?.steps ?? []).map((step) => ({
        description: step.description ?? '',
        number: step.number ?? '',
        title: step.title ?? '',
      })),
    },

    capabilitiesSection: {
      ...heading(global.capabilitiesSection, 'capabilitiesSection'),
      items: cards(global.capabilitiesSection?.items),
    },

    pocketSection: {
      ...heading(pocket, 'pocketSection'),
      description: req(pocket.description, 'pocketSection.description'),
      highlight: {
        description: pocket.highlight?.description ?? '',
        eyebrow: pocket.highlight?.eyebrow ?? '',
        title: pocket.highlight?.title ?? '',
      },
      screens: (pocket.screens ?? []).map((screen, index) => ({
        caption: screen.caption ?? '',
        image: image(screen.image, `pocketSection.screens[${index}].image`, screen.alt),
      })),
    },

    platformSection: {
      ...heading(global.platformSection, 'platformSection'),
      tiles: (global.platformSection?.tiles ?? []).map((tile, index) => ({
        description: tile.description ?? '',
        image: image(tile.image, `platformSection.tiles[${index}].image`, tile.alt),
        kicker: tile.kicker ?? '',
        name: tile.name ?? '',
        variant: req(tile.variant, `platformSection.tiles[${index}].variant`),
      })),
    },

    comparisonSection: {
      ...heading(global.comparisonSection, 'comparisonSection'),
      action: textLink(global.comparisonSection?.action, settings, 'comparisonSection.action'),
      columns: flatten(global.comparisonSection?.columns),
      rows: table(global.comparisonSection?.rows),
    },

    segmentsSection: {
      ...heading(global.segmentsSection, 'segmentsSection'),
      description: req(global.segmentsSection?.description, 'segmentsSection.description'),
      segments: (global.segmentsSection?.segments ?? []).map((segment, index) => ({
        description: segment.description ?? '',
        image: image(segment.image, `segmentsSection.segments[${index}].image`, segment.alt),
        name: segment.name ?? '',
      })),
    },

    fireSection: {
      ...heading(global.fireSection, 'fireSection'),
      description: req(global.fireSection?.description, 'fireSection.description'),
      tags: flatten(global.fireSection?.tags),
    },

    // The visibility checkbox is what makes the section optional downstream.
    specsSection: specs?.enabled
      ? {
          note: specs.note ?? '',
          specs: (specs.specs ?? []).map((spec) => ({
            label: spec.label ?? '',
            value: spec.value ?? '',
          })),
          title: specs.title ?? '',
        }
      : undefined,
  }
}

/** Depth 2 is what populates uploads nested inside arrays. */
export async function getSmartDbPage(draft = false): Promise<SmartDbPageContent> {
  const payload = await getPayload({ config })

  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'smart-db', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toSmartDbPage(global, settings)
}

/** Per-page search and social metadata, replacing the old react-helmet block. */
export async function getSmartDbSeo(): Promise<Metadata> {
  const payload = await getPayload({ config })

  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'smart-db', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/smart-db')
}
