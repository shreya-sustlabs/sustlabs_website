import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Document, Fm, Setting } from '@/payload-types'
import type {
  FmsAlertsSectionData,
  FmsAssuranceSectionData,
  FmsChainSectionData,
  FmsCoverageSectionData,
  FmsFaqSectionData,
  FmsGapSectionData,
  FmsHeroSectionData,
  FmsMediaSectionData,
  FmsStepsSectionData,
} from '@/types'
import { buildMetadata } from './metadata'
import { flatten, image, opt, req, resolveUrl, uploadUrl } from './helpers'

/** The FAQ is optional because it sits behind a visibility toggle. */
export type FmsPageContent = {
  alertsSection: FmsAlertsSectionData
  assuranceSection: FmsAssuranceSectionData
  audienceSection: FmsMediaSectionData
  chainSection: FmsChainSectionData
  coverageSection: FmsCoverageSectionData
  faqSection?: FmsFaqSectionData
  gapSection: FmsGapSectionData
  heroSection: FmsHeroSectionData
  problemSection: FmsMediaSectionData
  stepsSection: FmsStepsSectionData
  visibilitySection: FmsMediaSectionData
}

type HeadingRow = {
  description?: string | null
  eyebrow?: string | null
  titleAccent?: string | null
  titleLead?: string | null
}

const heading = (section: HeadingRow | null | undefined, at: string) => {
  const value = req(section, at)

  return {
    description: opt(value.description),
    eyebrow: req(value.eyebrow, `${at}.eyebrow`),
    titleAccent: value.titleAccent ?? '',
    titleLead: req(value.titleLead, `${at}.titleLead`),
  }
}

const cards = (rows: { description?: string | null; title?: string | null }[] | null | undefined) =>
  (rows ?? []).map((row) => ({
    description: row.description ?? '',
    title: row.title ?? '',
  }))

type MediaGroup = HeadingRow & {
  alt?: string | null
  downloadAction?: {
    document?: number | Document | null
    label?: string | null
  } | null
  image?: number | { url?: string | null } | null
  mediaCaption?: string | null
}

const mediaSection = (
  group: MediaGroup | null | undefined,
  at: string,
): FmsMediaSectionData => {
  const value = req(group, at)
  const download = value.downloadAction

  return {
    ...heading(value, at),
    downloadAction:
      download?.label && download.document
        ? {
            fileName:
              typeof download.document === 'number'
                ? undefined
                : (download.document.downloadFileName ?? undefined),
            href: uploadUrl(download.document, `${at}.downloadAction.document`),
            label: download.label,
          }
        : undefined,
    image: image(value.image as number, `${at}.image`, value.alt),
    mediaCaption: opt(value.mediaCaption),
  }
}

export function toFmsPage(global: Fm, settings: Setting): FmsPageContent {
  const hero = req(global.heroSection, 'heroSection')
  const chain = req(global.chainSection, 'chainSection')
  const faq = global.faqSection

  return {
    heroSection: {
      ...heading(hero, 'heroSection'),
      actions: (hero.actions ?? []).map((action, index) => ({
        analyticsId: opt(action.analyticsId),
        href: resolveUrl(req(action.href, `heroSection.actions[${index}].href`), settings),
        label: req(action.label, `heroSection.actions[${index}].label`),
        opensLeadForm: Boolean(action.opensLeadForm),
        variant: req(action.variant, `heroSection.actions[${index}].variant`),
      })),
      badge: opt(hero.badge),
      stats: (hero.stats ?? []).map((stat) => ({
        label: stat.label ?? '',
        value: stat.value ?? '',
      })),
    },

    problemSection: mediaSection(global.problemSection, 'problemSection'),
    audienceSection: mediaSection(global.audienceSection, 'audienceSection'),
    visibilitySection: mediaSection(global.visibilitySection, 'visibilitySection'),

    gapSection: {
      ...heading(global.gapSection, 'gapSection'),
      columns: (global.gapSection?.columns ?? []).map((column, index) => ({
        eyebrow: column.eyebrow ?? '',
        items: flatten(column.items),
        title: column.title ?? '',
        tone: req(column.tone, `gapSection.columns[${index}].tone`),
      })),
      titleHighlight: opt(global.gapSection?.titleHighlight),
    },

    chainSection: {
      ...heading(chain, 'chainSection'),
      items: cards(chain.items),
      mediaAlt: req(chain.mediaAlt, 'chainSection.mediaAlt'),
      videoSrc: uploadUrl(chain.video, 'chainSection.video'),
    },

    coverageSection: {
      ...heading(global.coverageSection, 'coverageSection'),
      groups: (global.coverageSection?.groups ?? []).map((group) => ({
        parameters: flatten(group.parameters),
        title: group.title ?? '',
      })),
    },

    alertsSection: {
      ...heading(global.alertsSection, 'alertsSection'),
      cards: (global.alertsSection?.cards ?? []).map((card, index) => ({
        body: card.text ?? '',
        meta: card.meta ?? '',
        tone: req(card.tone, `alertsSection.cards[${index}].tone`),
      })),
    },

    assuranceSection: {
      ...heading(global.assuranceSection, 'assuranceSection'),
      items: cards(global.assuranceSection?.items),
    },

    stepsSection: {
      ...heading(global.stepsSection, 'stepsSection'),
      cards: (global.stepsSection?.cards ?? []).map((card) => ({
        description: card.description ?? '',
        number: card.number ?? '',
        title: card.title ?? '',
      })),
    },

    faqSection: faq?.enabled
      ? {
          ...heading(faq, 'faqSection'),
          action: {
            href: resolveUrl(req(faq.action?.href, 'faqSection.action.href'), settings),
            label: req(faq.action?.label, 'faqSection.action.label'),
            variant: 'primary',
          },
          items: (faq.items ?? []).map((item) => ({
            answer: item.answer ?? '',
            question: item.title ?? '',
          })),
          note: faq.note ?? '',
        }
      : undefined,
  }
}

export async function getFmsPage(draft = false): Promise<FmsPageContent> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'fms', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toFmsPage(global, settings)
}

export async function getFmsSeo(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'fms', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/fms')
}
