import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { OhmO, Setting } from '@/payload-types'
import type {
  OhmOsApplicationsSectionData,
  OhmOsHeroSectionData,
  OhmOsLicenseeSectionData,
  SmartDbLayerSectionData,
} from '@/types'
import { buildMetadata } from './metadata'
import { image, req, resolveUrl } from './helpers'

export type OhmOsPageContent = {
  applicationsSection: OhmOsApplicationsSectionData
  heroSection: OhmOsHeroSectionData
  layerSection: SmartDbLayerSectionData
  licenseeSection: OhmOsLicenseeSectionData
}

export function toOhmOsPage(global: OhmO, settings: Setting): OhmOsPageContent {
  const hero = req(global.heroSection, 'heroSection')
  const applications = req(global.applicationsSection, 'applicationsSection')
  const layer = req(global.layerSection, 'layerSection')
  const licensee = req(global.licenseeSection, 'licenseeSection')

  return {
    heroSection: {
      actions: (hero.actions ?? []).map((action, index) => ({
        href: resolveUrl(req(action.href, `heroSection.actions[${index}].href`), settings),
        label: req(action.label, `heroSection.actions[${index}].label`),
        variant: req(action.variant, `heroSection.actions[${index}].variant`),
      })),
      description: req(hero.description, 'heroSection.description'),
      titleAccent: hero.titleAccent ?? '',
      titleLead: req(hero.titleLead, 'heroSection.titleLead'),
      titleRest: hero.titleRest ?? '',
    },

    applicationsSection: {
      description: req(applications.description, 'applicationsSection.description'),
      eyebrow: req(applications.eyebrow, 'applicationsSection.eyebrow'),
      image: image(applications.image, 'applicationsSection.image', applications.alt),
      items: (applications.items ?? []).map((item) => ({
        description: item.description ?? '',
        title: item.title ?? '',
      })),
      titleAccent: applications.titleAccent ?? '',
      titleLead: req(applications.titleLead, 'applicationsSection.titleLead'),
    },

    layerSection: {
      accent: req(layer.accent, 'layerSection.accent'),
      cards: (layer.cards ?? []).map((card) => ({
        description: card.description ?? '',
        eyebrow: card.eyebrow ?? '',
        title: card.title ?? '',
      })),
      description: req(layer.description, 'layerSection.description'),
      eyebrow: req(layer.eyebrow, 'layerSection.eyebrow'),
      titleAccent: layer.titleAccent ?? '',
      titleLead: req(layer.titleLead, 'layerSection.titleLead'),
    },

    licenseeSection: {
      description: req(licensee.description, 'licenseeSection.description'),
      logos: (licensee.logos ?? []).map((logo, index) => ({
        image: image(logo.image, `licenseeSection.logos[${index}].image`, logo.label),
        label: logo.label ?? '',
        slug: req(logo.slug, `licenseeSection.logos[${index}].slug`),
      })),
      title: req(licensee.title, 'licenseeSection.title'),
    },
  }
}

export async function getOhmOsPage(draft = false): Promise<OhmOsPageContent> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'ohm-os', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toOhmOsPage(global, settings)
}

export async function getOhmOsSeo(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'ohm-os', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/ohm-os')
}
