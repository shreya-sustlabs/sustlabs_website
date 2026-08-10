import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { revalidateLayout } from '../hooks/revalidate'

/**
 * Values used in more than one place. The Calendly demo link alone appeared five
 * separate times in the old content file, so changing it meant five edits and a
 * deploy. Section links can reference these with a `{{settings.demoBookingUrl}}`
 * token, resolved when the page is built.
 */
export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site settings',
  access: { read: anyone, update: authenticated },
  admin: {
    group: 'Site',
    description:
      'Links and details used in many places at once. Change them here and they update ' +
      'everywhere on the site.',
  },
  hooks: { afterChange: [revalidateLayout()] },
  fields: [
    {
      type: 'collapsible',
      label: 'Shared links',
      fields: [
        {
          name: 'demoBookingUrl',
          type: 'text',
          required: true,
          label: 'Book a demo link',
          admin: {
            description:
              'The Calendly booking link. Used by the "Book a Demo" button on the homepage, ' +
              'Ohm OS, Smart DB, FMS, Solutions and the footer.',
          },
        },
        {
          name: 'storeUrl',
          type: 'text',
          label: 'Store link',
          admin: { description: 'The MirAIe Lifestyle storefront, where o3 and o4 are sold.' },
        },
        {
          name: 'setupGuideUrl',
          type: 'text',
          label: 'Setup guide link',
          admin: { description: 'The Gen3 setup guide, currently hosted on Google Drive.' },
        },
        {
          name: 'overviewVideoUrl',
          type: 'text',
          label: 'Overview video link',
          admin: { description: 'The short product overview video on YouTube.' },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contact & office',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'salesEmail',
          type: 'email',
          admin: { description: 'Where sales enquiries should be sent.' },
        },
        {
          name: 'supportEmail',
          type: 'email',
          admin: { description: 'Shown in the privacy policy and terms.' },
        },
        {
          name: 'officeAddress',
          type: 'text',
          required: true,
          admin: {
            description:
              'The single line shown at the bottom right of every page, e.g. ' +
              '"Aspire Research Park, IIT Bombay, Mumbai (India)".',
          },
        },
        {
          name: 'legalEntityName',
          type: 'text',
          admin: {
            description:
              'The full registered company name, used in the privacy policy and terms.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Brand',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          admin: { description: 'The logo shown in the header and footer.' },
        },
        {
          name: 'defaultShareImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description:
              'The fallback picture shown when someone shares a link to this site on ' +
              'WhatsApp or LinkedIn. Individual pages can override it.',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Search defaults',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'defaultSeoTitle',
          type: 'text',
          required: true,
          admin: { description: 'Used for any page that has not set its own search title.' },
        },
        {
          name: 'defaultSeoDescription',
          type: 'textarea',
          required: true,
          admin: { rows: 3, description: 'Used for any page without its own search summary.' },
        },
        {
          name: 'canonicalOrigin',
          type: 'text',
          required: true,
          defaultValue: 'https://www.sustlabs.com',
          admin: {
            description:
              'The public address of the site, with no trailing slash. Used to build the ' +
              'canonical URLs and the sitemap. Only change this if the domain changes.',
          },
        },
      ],
    },
  ],
}
