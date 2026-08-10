import type { Payload } from 'payload'

import { FMS_PAGE_CONTENT } from '../legacy/constants'
import { mediaId, type MediaMap } from '../media'
import { withSettingsToken } from '../helpers'

const heading = (section: {
  description?: string
  eyebrow: string
  titleAccent: string
  titleLead: string
}) => ({
  eyebrow: section.eyebrow,
  titleLead: section.titleLead,
  titleAccent: section.titleAccent,
  description: section.description,
})

export const seedFms = async (payload: Payload, media: MediaMap) => {
  const content = FMS_PAGE_CONTENT

  await payload.updateGlobal({
    slug: 'fms',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        eyebrow: content.heroSection.eyebrow,
        titleLead: content.heroSection.titleLead,
        titleAccent: content.heroSection.titleAccent,
        badge: content.heroSection.badge,
        stats: content.heroSection.stats.map((stat) => ({
          label: stat.label,
          value: stat.value,
        })),
        actions: content.heroSection.actions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          opensLeadForm: Boolean(action.opensLeadForm),
          analyticsId: action.label,
        })),
      },

      problemSection: {
        ...heading(content.problemSection),
        image: mediaId(media, 'fmsdashboard.png'),
        alt: content.problemSection.mediaAlt,
        mediaCaption: content.problemSection.mediaCaption,
        downloadAction: content.problemSection.downloadAction
          ? {
              label: content.problemSection.downloadAction.label,
              document: mediaId(media, 'sustlabs-acms-brochure-2026.pdf'),
            }
          : undefined,
      },

      audienceSection: {
        ...heading(content.audienceSection),
        image: mediaId(media, 'fmsoptions.png'),
        alt: content.audienceSection.mediaAlt,
        mediaCaption: content.audienceSection.mediaCaption,
      },

      gapSection: {
        ...heading(content.gapSection),
        titleHighlight: content.gapSection.titleHighlight,
        columns: content.gapSection.columns.map((column) => ({
          eyebrow: column.eyebrow,
          title: column.title,
          tone: column.tone,
          items: column.items.map((text) => ({ text })),
        })),
      },

      chainSection: {
        ...heading(content.chainSection),
        video: mediaId(media, 'fms-chain.mp4'),
        mediaAlt: content.chainSection.mediaAlt,
        items: content.chainSection.items.map((item) => ({
          title: item.title,
          description: item.description,
        })),
      },

      coverageSection: {
        ...heading(content.coverageSection),
        groups: content.coverageSection.groups.map((group) => ({
          title: group.title,
          parameters: group.parameters.map((text) => ({ text })),
        })),
      },

      visibilitySection: {
        ...heading(content.visibilitySection),
        image: mediaId(media, 'fms.png'),
        alt: content.visibilitySection.mediaAlt,
        mediaCaption: content.visibilitySection.mediaCaption,
      },

      alertsSection: {
        ...heading(content.alertsSection),
        cards: content.alertsSection.cards.map((card) => ({
          meta: card.meta,
          tone: card.tone,
          text: card.body,
        })),
      },

      assuranceSection: {
        ...heading(content.assuranceSection),
        items: content.assuranceSection.items.map((item) => ({
          title: item.title,
          description: item.description,
        })),
      },

      stepsSection: {
        ...heading(content.stepsSection),
        cards: content.stepsSection.cards.map((card) => ({
          number: card.number,
          title: card.title,
          description: card.description,
        })),
      },

      // Eight questions are written but the section is commented out of the page.
      // Carried over behind the toggle so the team can publish it themselves.
      faqSection: {
        enabled: false,
        ...heading(content.faqSection),
        items: content.faqSection.items.map((item) => ({
          title: item.question,
          answer: item.answer,
        })),
        note: content.faqSection.note,
        action: {
          label: content.faqSection.action.label,
          href: withSettingsToken(content.faqSection.action.href),
        },
      },

      seo: {
        title: 'FMS - Fire Monitoring System',
        description:
          'Continuous monitoring for fire pump rooms. Track pumps, water levels, line ' +
          'pressure, panel status and power health across every tower from one console.',
        noindex: false,
      },

      _status: 'published',
    },
  })

  console.log(
    `  fms: 10 live sections + ${content.faqSection.items.length} FAQ questions (hidden)`,
  )
}
