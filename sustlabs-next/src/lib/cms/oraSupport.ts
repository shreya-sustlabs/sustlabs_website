import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Ora, Setting, Support } from '@/payload-types'
import type {
  OraEnablesSectionData,
  OraHeroSectionData,
  SupportHeroSectionData,
} from '@/types'
import { buildMetadata } from './metadata'
import { image, req, resolveUrl } from './helpers'

export type OraPageContent = {
  enablesSection: OraEnablesSectionData
  heroSection: OraHeroSectionData
}

export function toOraPage(global: Ora, settings: Setting): OraPageContent {
  const hero = req(global.heroSection, 'heroSection')
  const action = req(hero.action, 'heroSection.action')

  return {
    heroSection: {
      action: {
        href: resolveUrl(req(action.href, 'heroSection.action.href'), settings),
        label: req(action.label, 'heroSection.action.label'),
        variant: req(action.variant, 'heroSection.action.variant'),
      },
      callout: {
        description: req(
          hero.callout?.description,
          'heroSection.callout.description',
        ),
        title: req(hero.callout?.title, 'heroSection.callout.title'),
      },
      description: req(hero.description, 'heroSection.description'),
      image: image(hero.image, 'heroSection.image', hero.alt),
      titleAccent: hero.titleAccent ?? '',
      titleLead: req(hero.titleLead, 'heroSection.titleLead'),
    },
    enablesSection: {
      image: image(
        global.enablesSection?.image,
        'enablesSection.image',
        global.enablesSection?.alt,
      ),
    },
  }
}

export function toSupportPage(global: Support, settings: Setting): SupportHeroSectionData {
  const hero = req(global.heroSection, 'heroSection')
  const action = req(hero.action, 'heroSection.action')

  return {
    action: {
      href: resolveUrl(req(action.href, 'heroSection.action.href'), settings),
      label: req(action.label, 'heroSection.action.label'),
      variant: req(action.variant, 'heroSection.action.variant'),
    },
    description: req(hero.description, 'heroSection.description'),
    qrCards: (global.qrCards ?? []).map((card, index) => ({
      description: card.description ?? '',
      icon: image(card.icon, `qrCards[${index}].icon`),
      label: card.label ?? '',
      qrImage: image(card.qrImage, `qrCards[${index}].qrImage`),
    })),
    title: req(hero.title, 'heroSection.title'),
  }
}

const load = async () => {
  const payload = await getPayload({ config })

  return payload
}

export async function getOraPage(draft = false): Promise<OraPageContent> {
  const payload = await load()
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'ora', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toOraPage(global, settings)
}

export async function getOraSeo(): Promise<Metadata> {
  const payload = await load()
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'ora', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/add-ons/ora')
}

export async function getSupportPage(draft = false): Promise<SupportHeroSectionData> {
  const payload = await load()
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'support', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toSupportPage(global, settings)
}

export async function getSupportSeo(): Promise<Metadata> {
  const payload = await load()
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'support', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/support')
}
