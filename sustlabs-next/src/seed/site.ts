import type { Payload } from 'payload'

import { ADD_ON_PRODUCTS, FOOTER_CONTENT, MONITORING_PRODUCTS, NAV_LINKS } from './legacy/constants'
import { mediaId, type MediaMap } from './media'

/** The demo link the old content repeated in five separate places. */
const CALENDLY_URL = 'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo'
const SETUP_GUIDE_URL =
  'https://drive.google.com/file/d/1FR4I9CKqep2agWU8V33sGO5tf72UaxY_/view?ts=6a041b55'

export const seedSettings = async (payload: Payload, media: MediaMap) => {
  await payload.updateGlobal({
    slug: 'settings',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      demoBookingUrl: CALENDLY_URL,
      storeUrl: 'https://www.miraielifestyle.com',
      setupGuideUrl: SETUP_GUIDE_URL,
      overviewVideoUrl: 'https://youtu.be/Ofdv8quyXf4?si=8RBGLIi3MMBDYV7A',
      supportEmail: 'support@sustlabs.com',
      salesEmail: 'support@sustlabs.com',
      // Both were hardcoded in the footer component.
      officeAddress: 'Aspire Research Park, IIT Bombay, Mumbai (India)',
      legalEntityName: 'Sustainable Reference Analytics Pvt. Ltd',
      logo: mediaId(media, 'logo.png'),
      defaultSeoTitle: 'SustLabs',
      defaultSeoDescription:
        'SustLabs builds electrical intelligence for homes and buildings. Understand ' +
        'electricity in real time, detect risks early and make better energy decisions.',
      canonicalOrigin: 'https://www.sustlabs.com',
    },
  })

  console.log('  settings: shared links, office and SEO defaults seeded')
}

/**
 * Reproduces the header exactly as the old component derived it — the label
 * to-URL if-chain, the two hardcoded dropdowns, and the rule that hid o5 —
 * but as data the team can now edit.
 */
const HEADER_URL: Record<string, string> = {
  'Ohm OS': '/ohm-os',
  'Smart DB': '/smart-db',
  FMS: '/fms',
  Solutions: '/solutions',
  Support: '/support',
}

const DROPDOWN_PREFIX: Record<string, string> = {
  Products: '/products',
  'Add-ons': '/add-ons',
}

export const seedNavigation = async (payload: Payload) => {
  const header = NAV_LINKS.map((label) => {
    if (label === 'Products') {
      return {
        label,
        activePathPrefix: DROPDOWN_PREFIX[label],
        children: MONITORING_PRODUCTS.filter(
          // o5 was excluded by a `navLabel.includes('o5')` check in the component.
          (product) => !product.navLabel.includes('o5'),
        ).map((product) => ({ label: product.navLabel, url: product.path })),
      }
    }

    if (label === 'Add-ons') {
      return {
        label,
        activePathPrefix: DROPDOWN_PREFIX[label],
        children: ADD_ON_PRODUCTS.map((product) => ({
          label: product.navLabel,
          url: product.path,
        })),
      }
    }

    // The old fallback slugified the label into a homepage anchor.
    const url = HEADER_URL[label] ?? `/#${label.toLowerCase().replaceAll(' ', '-')}`

    return { label, url, children: [] }
  })

  await payload.updateGlobal({
    slug: 'navigation',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      header,
      footer: {
        tagline: FOOTER_CONTENT.tagline,
        columns: FOOTER_CONTENT.columns.map((column) => ({
          title: column.title,
          links: column.links.map((link) => ({
            label: link.label,
            url: link.path,
            newTab: link.path.startsWith('http'),
          })),
        })),
        legalLinks: FOOTER_CONTENT.legalLinks.map((link) => ({
          label: link.label,
          url: link.path,
        })),
        // Was hardcoded in the footer component.
        copyright: 'Copyright © 2026 Sustlabs. All rights reserved.',
      },
    },
  })

  const dropdowns = header.filter((item) => (item.children?.length ?? 0) > 0).length
  console.log(
    `  navigation: ${header.length} header items (${dropdowns} dropdowns), ` +
      `${FOOTER_CONTENT.columns.length} footer columns`,
  )
}
