import type { Payload } from 'payload'

import {
  OHM_OS_APPLICATION_CONTENT,
  OHM_OS_APPLICATIONS,
  OHM_OS_LICENSEE_CONTENT,
  OHM_OS_PAGE_CONTENT,
  SMART_DB_PAGE_CONTENT,
} from '../legacy/constants'
import { mediaId, type MediaMap } from '../media'
import { withSettingsToken } from '../helpers'

/** The licensee logos, in the order the old content listed them. */
const LOGO_FILE: Record<string, string> = {
  panasonic: 'logo-panasonic.png',
  inepro: 'logo-inepro.png',
  schneider: 'logo-schneider.png',
}

export const seedOhmOs = async (payload: Payload, media: MediaMap) => {
  // Authored under Smart DB in the old content file, but only ever rendered here.
  const layer = SMART_DB_PAGE_CONTENT.layerSection

  await payload.updateGlobal({
    slug: 'ohm-os',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        titleLead: OHM_OS_PAGE_CONTENT.titleLead,
        titleAccent: OHM_OS_PAGE_CONTENT.titleAccent,
        titleRest: OHM_OS_PAGE_CONTENT.titleRest,
        description: OHM_OS_PAGE_CONTENT.description,
        actions: OHM_OS_PAGE_CONTENT.actions.map((action) => ({
          label: action.label,
          href: withSettingsToken(action.href),
          variant: action.variant,
          analyticsId: action.label,
        })),
      },

      applicationsSection: {
        eyebrow: OHM_OS_APPLICATION_CONTENT.eyebrow,
        titleLead: OHM_OS_APPLICATION_CONTENT.titleLead,
        titleAccent: OHM_OS_APPLICATION_CONTENT.titleAccent,
        description: OHM_OS_APPLICATION_CONTENT.description,
        image: mediaId(media, 'ohm-os.svg'),
        alt: '',
        items: OHM_OS_APPLICATIONS.map((item) => ({
          title: item.title,
          description: item.description,
        })),
      },

      layerSection: {
        eyebrow: layer.eyebrow,
        titleLead: layer.titleLead,
        titleAccent: layer.titleAccent,
        // Seeded verbatim, including the stray "|" that currently renders as a
        // literal pipe on the live page — this is published copy, so it is the
        // team's call to fix, and they can now do it without a developer.
        description: layer.description,
        // The select only accepts the known design tokens, which is the point —
        // it stops an editor typing an arbitrary colour.
        accent: layer.accent as 'var(--terra500)',
        cards: layer.cards.map((card) => ({
          eyebrow: card.eyebrow,
          title: card.title,
          description: card.description,
        })),
      },

      licenseeSection: {
        title: OHM_OS_LICENSEE_CONTENT.title,
        description: OHM_OS_LICENSEE_CONTENT.description,
        logos: OHM_OS_LICENSEE_CONTENT.logos.map((logo) => ({
          label: logo.label,
          image: mediaId(media, LOGO_FILE[logo.id]),
          slug: logo.id,
        })),
      },

      seo: {
        title: 'Ohm OS',
        description:
          'Ohm OS is the intelligence layer behind modern electrical systems, turning ' +
          'high-frequency electrical signals into appliance insights, safety alerts and decisions.',
        noindex: false,
      },

      _status: 'published',
    },
  })

  console.log(
    `  ohm-os: hero, ecosystem (${OHM_OS_APPLICATIONS.length} items), ` +
      `${layer.cards.length} layer cards, ${OHM_OS_LICENSEE_CONTENT.logos.length} logos`,
  )
}
