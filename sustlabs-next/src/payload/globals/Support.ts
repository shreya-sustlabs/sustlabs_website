import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { enabledField, seoFields } from '../fields/media'
import { buttonVariantField } from '../fields/tokens'
import { revalidateGlobalPath } from '../hooks/revalidate'

export const Support: GlobalConfig = {
  slug: 'support',
  label: 'Page — Support',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on sustlabs.com/support.',
    livePreview: { url: '/support?draft=true' },
    preview: () => '/support',
  },
  hooks: { afterChange: [revalidateGlobalPath('/support')] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroSection',
              type: 'group',
              label: false,
              fields: [
                { name: 'title', type: 'text', required: true },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: { rows: 4 },
                },
                {
                  name: 'action',
                  type: 'group',
                  label: 'Button',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    {
                      name: 'href',
                      type: 'text',
                      required: true,
                      label: 'Link',
                      admin: {
                        description:
                          'Shared links such as the demo booking URL live under Site settings.',
                      },
                    },
                    buttonVariantField,
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Contact cards',
          fields: [
            {
              name: 'qrCards',
              type: 'array',
              label: 'QR cards',
              labels: { singular: 'Card', plural: 'Cards' },
              maxRows: 4,
              admin: {
                description:
                  'The scannable cards under the heading. These used to be fixed in code, ' +
                  'so changing a support number meant a developer and a deploy.',
                initCollapsed: true,
                components: { RowLabel: '@/payload/components/RowLabel#NameRowLabel' },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: { description: 'The card heading, e.g. "Scan to Chat".' },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: { rows: 2 },
                },
                {
                  name: 'qrImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: 'QR code',
                  admin: {
                    description:
                      'The scannable code itself. Replace this to point at a different ' +
                      'number or WhatsApp account.',
                  },
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  admin: { description: 'The small badge shown on the card.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Hidden sections',
          description: 'Written but not shown on the site.',
          fields: [
            {
              name: 'contactSection',
              type: 'group',
              label: 'Contact form',
              fields: [
                enabledField('the contact form'),
                { name: 'title', type: 'text' },
              ],
            },
          ],
        },
        { label: 'Search & sharing', fields: [seoFields()] },
      ],
    },
  ],
}
