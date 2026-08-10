import type { Payload } from 'payload'

import { SOLUTIONS_PAGE_CONTENT } from '../legacy/constants'
import { withSettingsToken } from '../helpers'
import type { PageAction, SolutionPanelData } from '../legacy/types'

export const seedSolutions = async (payload: Payload) => {
  const content = SOLUTIONS_PAGE_CONTENT
  // The source object is `as const`, so TypeScript narrows each entry to its own
  // literal shape and hides the properties only some of them carry. Widening to
  // the declared types is what the content already satisfies.
  const heroActions = content.heroSection.actions as readonly PageAction[]
  const panels = content.panels as readonly SolutionPanelData[]

  await payload.updateGlobal({
    slug: 'solutions',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        titleLead: content.heroSection.titleLead,
        titleAccent: content.heroSection.titleAccent,
        titleRest: content.heroSection.titleRest,
        description: content.heroSection.description,
        note: content.heroSection.note,
        actions: heroActions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          opensLeadForm: Boolean(action.opensLeadForm),
          analyticsId: action.label,
        })),
      },

      panels: panels.map((panel) => ({
        eyebrow: panel.eyebrow,
        titlePrefix: panel.titlePrefix,
        title: panel.titleLead,
        titleAccent: panel.titleAccent,
        description: panel.description,
        capabilities: panel.capabilities.map((text) => ({ text })),
      })),

      partnerSection: {
        eyebrow: content.partnerSection.eyebrow,
        titleLead: content.partnerSection.titleLead,
        titleAccent: content.partnerSection.titleAccent,
        description: content.partnerSection.description,
        accent: content.partnerSection.accent as 'var(--black300)',
        accentTarget: content.partnerSection.accentTarget,
        // The old component suppressed the line break by checking whether the
        // heading contained the words "for partners".
        breakAfterLead: false,
        items: content.partnerSection.items.map((item) => ({
          title: item.title,
          description: item.description,
        })),
      },

      seo: {
        title: 'Solutions',
        description:
          'Electrical intelligence for homes, developers, facilities, fire pump rooms, ' +
          'warehouses, data centers, utilities and partners.',
        noindex: false,
      },

      _status: 'published',
    },
  })

  console.log(`  solutions: hero + ${panels.length} panels + partner section`)
}
