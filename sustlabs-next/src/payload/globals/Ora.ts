import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { basicCards } from '../fields/cards'
import { enabledField, imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { buttonVariantField } from '../fields/tokens'
import { revalidateGlobalPath } from '../hooks/revalidate'

export const Ora: GlobalConfig = {
  slug: 'ora',
  label: 'Page — Ora',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on sustlabs.com/add-ons/ora.',
    livePreview: { url: '/add-ons/ora?draft=true' },
    preview: () => '/add-ons/ora',
  },
  hooks: { afterChange: [revalidateGlobalPath('/add-ons/ora')] },
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
                headingField({ eyebrow: false, description: true }),
                ...imageField({
                  description: 'The large photograph of Ora on a wall.',
                  required: true,
                }),
                {
                  name: 'callout',
                  type: 'group',
                  label: 'Callout over the photo',
                  admin: {
                    description:
                      'The small panel laid over the photograph. Previously fixed in code.',
                  },
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
                      admin: { rows: 2 },
                    },
                  ],
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
                          'Start with "/" for a page on this site, or a full https:// address.',
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
          label: 'What it enables',
          fields: [
            {
              name: 'enablesSection',
              type: 'group',
              label: false,
              fields: [
                ...imageField({
                  description:
                    'The image showing Ora’s display states. This is the only part of ' +
                    'this section currently shown on the site.',
                  required: true,
                }),
                {
                  type: 'collapsible',
                  label: 'Hidden heading and cards',
                  admin: { initCollapsed: true },
                  fields: [
                    enabledField('the heading and cards above the image'),
                    headingField({ eyebrow: false, description: true, initCollapsed: true }),
                    basicCards({ label: 'Cards', singular: 'Card' }),
                  ],
                },
              ],
            },
          ],
        },
        { label: 'Search & sharing', fields: [seoFields()] },
      ],
    },
  ],
}
