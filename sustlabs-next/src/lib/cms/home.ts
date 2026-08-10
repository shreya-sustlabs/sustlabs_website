import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Home, Setting } from '@/payload-types'
import type {
  HomeEnterpriseSectionData,
  HomeHeroSectionData,
  HomeImpactSectionData,
  HomeIntelligenceSectionData,
  HomeLayersSectionData,
  HomeSafetySectionData,
  HomeSetupSectionData,
  HomeSignalLayerSectionData,
  HomeSmartDbSectionData,
  HomeSovereigntySectionData,
} from '@/types'
import { buildMetadata } from './metadata'
import { image, opt, req, resolveUrl } from './helpers'

export type HomePageContent = {
  enterpriseSection: HomeEnterpriseSectionData
  heroSection: HomeHeroSectionData
  impactSection: HomeImpactSectionData
  intelligenceSection: HomeIntelligenceSectionData
  layersSection: HomeLayersSectionData
  safetySection: HomeSafetySectionData
  setupSection: HomeSetupSectionData
  signalLayerSection: HomeSignalLayerSectionData
  smartDbSection: HomeSmartDbSectionData
  sovereigntySection: HomeSovereigntySectionData
}

type HeadingRow = {
  description?: string | null
  eyebrow?: string | null
  titleAccent?: string | null
  titleLead?: string | null
}

const heading = (row: HeadingRow | null | undefined, at: string) => {
  const value = req(row, at)

  return {
    description: req(value.description, `${at}.description`),
    eyebrow: req(value.eyebrow, `${at}.eyebrow`),
    titleAccent: value.titleAccent ?? '',
    titleLead: req(value.titleLead, `${at}.titleLead`),
  }
}

const numbered = (
  rows: { description?: string | null; number?: string | null; title?: string | null }[] | null | undefined,
) =>
  (rows ?? []).map((row) => ({
    description: row.description ?? '',
    number: row.number ?? '',
    title: row.title ?? '',
  }))

export function toHomePage(global: Home, settings: Setting): HomePageContent {
  const hero = req(global.heroSection, 'heroSection')
  const smartDb = req(global.smartDbSection, 'smartDbSection')

  return {
    heroSection: {
      ...heading(hero, 'heroSection'),
      actions: (hero.actions ?? []).map((action, index) => ({
        analyticsId: opt(action.analyticsId),
        href: resolveUrl(req(action.href, `heroSection.actions[${index}].href`), settings),
        label: req(action.label, `heroSection.actions[${index}].label`),
        variant: req(action.variant, `heroSection.actions[${index}].variant`),
      })),
      titleMiddle: hero.titleMiddle ?? '',
    },

    intelligenceSection: {
      ...heading(global.intelligenceSection, 'intelligenceSection'),
      features: (global.intelligenceSection?.features ?? []).map((feature, index) => ({
        description: feature.description ?? '',
        image: image(feature.image, `intelligenceSection.features[${index}].image`, feature.alt),
        title: feature.title ?? '',
      })),
    },

    signalLayerSection: {
      ...heading(global.signalLayerSection, 'signalLayerSection'),
      steps: numbered(global.signalLayerSection?.steps),
    },

    safetySection: {
      ...heading(global.safetySection, 'safetySection'),
      image: image(global.safetySection?.image, 'safetySection.image', global.safetySection?.alt),
      titleRest: global.safetySection?.titleRest ?? '',
    },

    setupSection: {
      ...heading(global.setupSection, 'setupSection'),
      points: numbered(global.setupSection?.points),
    },

    layersSection: {
      ...heading(global.layersSection, 'layersSection'),
      layers: (global.layersSection?.layers ?? []).map((layer, index) => ({
        description: layer.description ?? '',
        image: image(layer.image, `layersSection.layers[${index}].image`, layer.alt),
        title: layer.title ?? '',
        tone: req(layer.tone, `layersSection.layers[${index}].tone`),
      })),
    },

    smartDbSection: {
      description: req(smartDb.description, 'smartDbSection.description'),
      eyebrow: req(smartDb.eyebrow, 'smartDbSection.eyebrow'),
      features: (smartDb.features ?? []).map((feature, index) => ({
        accent: req(feature.accent, `smartDbSection.features[${index}].accent`),
        description: feature.description ?? '',
        title: feature.title ?? '',
      })),
      title: req(smartDb.title, 'smartDbSection.title'),
    },

    sovereigntySection: {
      ...heading(global.sovereigntySection, 'sovereigntySection'),
      cards: (global.sovereigntySection?.cards ?? []).map((card, index) => ({
        description: card.description ?? '',
        eyebrow: card.eyebrow ?? '',
        size: req(card.size, `sovereigntySection.cards[${index}].size`),
        title: card.title ?? '',
        tone: req(card.tone, `sovereigntySection.cards[${index}].tone`),
      })),
    },

    enterpriseSection: {
      ...heading(global.enterpriseSection, 'enterpriseSection'),
      audiences: numbered(global.enterpriseSection?.audiences),
    },

    impactSection: {
      ...heading(global.impactSection, 'impactSection'),
      metrics: (global.impactSection?.metrics ?? []).map((metric, index) => ({
        label: metric.label ?? '',
        value: metric.value ?? '',
        variant: req(metric.variant, `impactSection.metrics[${index}].variant`),
      })),
    },
  }
}

export async function getHomePage(draft = false): Promise<HomePageContent> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'home', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toHomePage(global, settings)
}

export async function getHomeSeo(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'home', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/')
}
