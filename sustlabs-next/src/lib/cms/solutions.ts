import type { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Setting, Solution } from '@/payload-types'
import type {
  SolutionPanelData,
  SolutionsHeroSectionData,
  SolutionsPartnerSectionData,
} from '@/types'
import { buildMetadata } from './metadata'
import { flatten, opt, req, resolveUrl } from './helpers'

export type SolutionsPageContent = {
  heroSection: SolutionsHeroSectionData
  panels: SolutionPanelData[]
  partnerSection: SolutionsPartnerSectionData
}

export function toSolutionsPage(global: Solution, settings: Setting): SolutionsPageContent {
  const hero = req(global.heroSection, 'heroSection')
  const partner = req(global.partnerSection, 'partnerSection')

  return {
    heroSection: {
      actions: (hero.actions ?? []).map((action, index) => ({
        analyticsId: opt(action.analyticsId),
        href: resolveUrl(req(action.href, `heroSection.actions[${index}].href`), settings),
        label: req(action.label, `heroSection.actions[${index}].label`),
        opensLeadForm: Boolean(action.opensLeadForm),
        variant: req(action.variant, `heroSection.actions[${index}].variant`),
      })),
      description: req(hero.description, 'heroSection.description'),
      note: req(hero.note, 'heroSection.note'),
      titleAccent: hero.titleAccent ?? '',
      titleLead: req(hero.titleLead, 'heroSection.titleLead'),
      titleRest: hero.titleRest ?? '',
    },

    panels: (global.panels ?? []).map((panel, index) => ({
      capabilities: flatten(panel.capabilities),
      description: opt(panel.description),
      eyebrow: opt(panel.eyebrow),
      titleAccent: opt(panel.titleAccent),
      titleLead: req(panel.title, `panels[${index}].title`),
      titlePrefix: opt(panel.titlePrefix),
    })),

    partnerSection: {
      accent: req(partner.accent, 'partnerSection.accent'),
      accentTarget: opt(partner.accentTarget),
      breakAfterLead: partner.breakAfterLead ?? true,
      description: req(partner.description, 'partnerSection.description'),
      eyebrow: req(partner.eyebrow, 'partnerSection.eyebrow'),
      items: (partner.items ?? []).map((item) => ({
        description: item.description ?? '',
        title: item.title ?? '',
      })),
      titleAccent: partner.titleAccent ?? '',
      titleLead: req(partner.titleLead, 'partnerSection.titleLead'),
    },
  }
}

export async function getSolutionsPage(draft = false): Promise<SolutionsPageContent> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'solutions', depth: 2, draft, overrideAccess: draft }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return toSolutionsPage(global, settings)
}

export async function getSolutionsSeo(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const [global, settings] = await Promise.all([
    payload.findGlobal({ slug: 'solutions', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  return buildMetadata(global.seo, settings, '/solutions')
}
