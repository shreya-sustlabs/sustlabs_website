import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { basicCards, eyebrowCards } from '../fields/cards'
import { buttonActions } from '../fields/actions'
import { imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { accentTokenField } from '../fields/tokens'
import { revalidateGlobalPath } from '../hooks/revalidate'

export const OhmOs: GlobalConfig = {
  slug: 'ohm-os',
  label: 'Page — Ohm OS',
  dbName: 'ohm_os',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on sustlabs.com/ohm-os.',
    livePreview: { url: '/ohm-os?draft=true' },
    preview: () => '/ohm-os',
  },
  hooks: { afterChange: [revalidateGlobalPath('/ohm-os')] },
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
                headingField({
                  eyebrow: false,
                  rest: true,
                  description: true,
                  multilineLead: false,
                }),
                buttonActions({ min: 1, max: 2 }),
              ],
            },
          ],
        },
        {
          label: 'Ecosystem',
          fields: [
            {
              name: 'applicationsSection',
              type: 'group',
              label: false,
              admin: {
                description:
                  'The "Our Ecosystem" band, with the diagram and the list of applications.',
              },
              fields: [
                headingField({ description: true, accentRequired: false }),
                ...imageField({
                  description: 'The Ohm OS ecosystem diagram.',
                  required: true,
                }),
                basicCards({
                  name: 'items',
                  label: 'Applications',
                  singular: 'Application',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Product layers',
          description:
            'The o3 / o4 / o5 cards. These are authored here because this is the only ' +
            'page that shows them.',
          fields: [
            {
              name: 'layerSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                accentTokenField({ description: 'The highlight colour for this heading.' }),
                eyebrowCards({
                  label: 'Layer cards',
                  singular: 'Layer',
                  min: 1,
                  description:
                    'One card per product tier. The small label is the product code, e.g. "o3".',
                }),
              ],
            },
          ],
        },
        {
          label: 'Licensees',
          fields: [
            {
              name: 'licenseeSection',
              type: 'group',
              label: false,
              fields: [
                { name: 'title', type: 'text', required: true },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: { rows: 3 },
                },
                {
                  name: 'logos',
                  type: 'array',
                  label: 'Partner logos',
                  labels: { singular: 'Logo', plural: 'Logos' },
                  admin: {
                    description: 'Shown left to right. Drag to reorder.',
                    components: { RowLabel: '@/payload/components/RowLabel#NameRowLabel' },
                  },
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: { description: 'The partner name, also used as the image alt text.' },
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      required: true,
                    },
                    {
                      name: 'slug',
                      type: 'select',
                      required: true,
                      enumName: 'enum_licensee_slug',
                      options: [
                        { label: 'Panasonic', value: 'panasonic' },
                        { label: 'Schneider Electric', value: 'schneider' },
                        { label: 'inepro', value: 'inepro' },
                        { label: 'Legrand', value: 'legrand' },
                      ],
                      label: 'Sizing preset',
                      admin: {
                        description:
                          'Each partner logo has its own size and spacing in the design. ' +
                          'Pick the preset that matches this logo. Adding a brand that is ' +
                          'not on this list needs a developer.',
                      },
                    },
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
