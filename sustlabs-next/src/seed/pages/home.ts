import type { Payload } from 'payload'

import {
  CORE_FEATURES,
  ENTERPRISE_AUDIENCES,
  ENTERPRISE_CONTENT,
  HERO_CONTENT,
  IMPACT_CONTENT,
  IMPACT_METRICS,
  INTELLIGENCE_CONTENT,
  LAYERS_CONTENT,
  SAFETY_CONTENT,
  SETUP_CONTENT,
  SETUP_POINTS,
  SIGNAL_LAYER_CONTENT,
  SIGNAL_STEPS,
  SMART_DB_CONTENT,
  SMART_DB_FEATURES,
  SOVEREIGNTY_CARDS,
  SOVEREIGNTY_CONTENT,
} from '../legacy/constants'
import type { PageAction } from '../legacy/types'
import { mediaId, type MediaMap } from '../media'
import { withSettingsToken } from '../helpers'

/**
 * The old code matched each feature card to its picture by the card's *title*,
 * so renaming a card silently blanked its image. Seeded by position instead, and
 * from here on the picture is attached to the card itself.
 */
const FEATURE_IMAGE = ['home1.webp', 'home2.webp', 'home3.webp']

/** Lifted out of `LayersSection`, where it was written inline in the component. */
const LAYER_SHOWCASE = [
  {
    title: 'Ohm Assistant',
    description:
      'The consumer-facing app for energy visibility, safety alerts, appliance intelligence, and bill clarity.',
    file: 'home5.webp',
    tone: 'light' as const,
  },
  {
    title: 'Ohm Native',
    description:
      'The core intelligence and data exchange layer for dashboards, APIs, utilities, and enterprise workflows.',
    file: 'home6.webp',
    tone: 'dark' as const,
  },
]

export const seedHome = async (payload: Payload, media: MediaMap) => {
  const heroActions = HERO_CONTENT.actions as readonly PageAction[]

  await payload.updateGlobal({
    slug: 'home',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        eyebrow: HERO_CONTENT.eyebrow,
        titleLead: HERO_CONTENT.titleLead,
        // Was hardcoded mid-heading in the component.
        titleMiddle: 'electricity ',
        titleAccent: HERO_CONTENT.titleAccent,
        description: HERO_CONTENT.description,
        actions: heroActions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          analyticsId: action.label,
        })),
      },

      intelligenceSection: {
        eyebrow: INTELLIGENCE_CONTENT.eyebrow,
        titleLead: INTELLIGENCE_CONTENT.titleLead,
        titleAccent: INTELLIGENCE_CONTENT.titleAccent,
        description: INTELLIGENCE_CONTENT.description,
        features: CORE_FEATURES.map((feature, index) => ({
          title: feature.title,
          description: feature.description,
          image: mediaId(media, FEATURE_IMAGE[index] ?? FEATURE_IMAGE[0]),
          alt: '',
        })),
      },

      signalLayerSection: {
        eyebrow: SIGNAL_LAYER_CONTENT.eyebrow,
        // Two separate fields in the old content, joined by a line break in the
        // markup. One multiline field is the same thing without the second field.
        titleLead: `${SIGNAL_LAYER_CONTENT.titleLead}\n${SIGNAL_LAYER_CONTENT.titleLeadLine}`,
        titleAccent: SIGNAL_LAYER_CONTENT.titleAccent,
        description: SIGNAL_LAYER_CONTENT.description,
        steps: SIGNAL_STEPS.map((step) => ({
          number: step.number,
          title: step.title,
          description: step.description,
        })),
      },

      safetySection: {
        eyebrow: SAFETY_CONTENT.eyebrow,
        titleLead: SAFETY_CONTENT.titleLead,
        titleAccent: '',
        titleRest: SAFETY_CONTENT.titleRest,
        description: SAFETY_CONTENT.description,
        image: mediaId(media, 'home4.webp'),
        alt: 'Electrical safety detections around Ohm intelligence',
      },

      setupSection: {
        eyebrow: SETUP_CONTENT.eyebrow,
        titleLead: SETUP_CONTENT.titleLead,
        titleAccent: SETUP_CONTENT.titleAccent,
        description: SETUP_CONTENT.description,
        points: SETUP_POINTS.map((point) => ({
          number: point.number,
          title: point.title,
          description: point.description,
        })),
      },

      layersSection: {
        eyebrow: LAYERS_CONTENT.eyebrow,
        titleLead: LAYERS_CONTENT.titleLead,
        titleAccent: LAYERS_CONTENT.titleAccent,
        description: LAYERS_CONTENT.description,
        layers: LAYER_SHOWCASE.map((layer) => ({
          title: layer.title,
          description: layer.description,
          image: mediaId(media, layer.file),
          alt: '',
          tone: layer.tone,
        })),
      },

      smartDbSection: {
        eyebrow: SMART_DB_CONTENT.eyebrow,
        title: SMART_DB_CONTENT.title,
        description: SMART_DB_CONTENT.description,
        features: SMART_DB_FEATURES.map((feature) => ({
          title: feature.title,
          description: feature.description,
          accent: feature.accent,
        })),
      },

      sovereigntySection: {
        eyebrow: SOVEREIGNTY_CONTENT.eyebrow,
        titleLead: SOVEREIGNTY_CONTENT.titleLead,
        titleAccent: SOVEREIGNTY_CONTENT.titleAccent,
        description: SOVEREIGNTY_CONTENT.description,
        cards: SOVEREIGNTY_CARDS.map((card) => ({
          title: card.title,
          description: card.description,
          eyebrow: card.eyebrow,
          tone: card.tone,
          size: card.size,
        })),
      },

      enterpriseSection: {
        eyebrow: ENTERPRISE_CONTENT.eyebrow,
        titleLead: ENTERPRISE_CONTENT.titleLead,
        titleAccent: ENTERPRISE_CONTENT.titleAccent,
        description: ENTERPRISE_CONTENT.description,
        audiences: ENTERPRISE_AUDIENCES.map((audience) => ({
          number: audience.number,
          title: audience.title,
          description: audience.description,
        })),
      },

      impactSection: {
        eyebrow: IMPACT_CONTENT.eyebrow,
        titleLead: IMPACT_CONTENT.titleLead,
        titleAccent: IMPACT_CONTENT.titleAccent,
        description: IMPACT_CONTENT.description,
        metrics: IMPACT_METRICS.map((metric) => ({
          value: metric.value,
          label: metric.label,
          variant: metric.variant,
        })),
      },

      seo: {
        title: 'SustLabs',
        description:
          'SustLabs builds electrical intelligence for homes and buildings. Understand ' +
          'electricity in real time, detect risks early and make better energy decisions.',
        noindex: false,
      },

      _status: 'published',
    },
  })

  console.log(
    `  home: 9 sections, ${CORE_FEATURES.length} features, ${IMPACT_METRICS.length} impact figures`,
  )
}
