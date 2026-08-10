import type { Payload } from 'payload'

import {
  ORA_ADD_ON_PAGE_CONTENT,
  ORA_ENABLES_SECTION,
  SUPPORT_PAGE_CONTENT,
} from '../legacy/constants'
import { mediaId, type MediaMap } from '../media'
import { withSettingsToken } from '../helpers'

export const seedOra = async (payload: Payload, media: MediaMap) => {
  const content = ORA_ADD_ON_PAGE_CONTENT

  await payload.updateGlobal({
    slug: 'ora',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        titleLead: content.titleLead,
        titleAccent: content.titleAccent,
        description: content.description,
        image: mediaId(media, 'ora1.webp'),
        alt: '',
        // Lifted out of the component, where it was fixed in the markup.
        callout: {
          title: 'Ambient by Default',
          description: 'A familiar object that earns wall space without explanation.',
        },
        action: {
          label: content.action.label,
          href: withSettingsToken(content.action.href),
          variant: content.action.variant,
        },
      },
      enablesSection: {
        image: mediaId(media, 'ora2.webp'),
        alt:
          'Ora wall display states showing safety alerts, energy clarity, appliance ' +
          'insights, and ambient clock views',
        // Written but commented out of the page, so it is carried over behind the
        // toggle rather than thrown away — the team can switch it on themselves.
        enabled: false,
        titleLead: ORA_ENABLES_SECTION.titleLead,
        titleAccent: ORA_ENABLES_SECTION.titleAccent,
        description: ORA_ENABLES_SECTION.description,
        cards: ORA_ENABLES_SECTION.cards.map((card) => ({
          title: card.title,
          description: card.description,
        })),
      },
      seo: {
        title: 'Ora',
        description:
          'Ora is an ambient wall display that turns everyday electrical activity into ' +
          'passive safety and energy awareness for residents.',
        noindex: false,
      },
      _status: 'published',
    },
  })

  console.log('  ora: hero + enables seeded')
}

export const seedSupport = async (payload: Payload, media: MediaMap) => {
  const hero = SUPPORT_PAGE_CONTENT.hero

  await payload.updateGlobal({
    slug: 'support',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      heroSection: {
        title: hero.title,
        description: hero.description,
        action: {
          label: hero.action.label,
          href: withSettingsToken(hero.action.href),
          variant: hero.action.variant,
        },
      },
      // Previously hardcoded in the component, so changing a support number
      // needed a developer.
      qrCards: [
        {
          label: 'Scan to Chat',
          description: 'Scan the QR code to start chatting with Ohm Support on WhatsApp.',
          qrImage: mediaId(media, 'whatsapp.svg'),
          icon: mediaId(media, 'waIcon.svg'),
        },
        {
          label: 'Scan to Call',
          description: 'Scan to call support agent directly from your phone.',
          qrImage: mediaId(media, 'call.svg'),
          icon: mediaId(media, 'callIcon.svg'),
        },
      ],
      contactSection: {
        enabled: false,
        title: SUPPORT_PAGE_CONTENT.contact.title,
      },
      seo: {
        title: 'Support',
        description:
          'Talk to the SustLabs team. Reach Ohm Support on WhatsApp or by phone, or ' +
          'book a product demo.',
        noindex: false,
      },
      _status: 'published',
    },
  })

  console.log('  support: hero + 2 QR cards seeded')
}
