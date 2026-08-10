import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { buttonActions } from '../fields/actions'
import { basicCards, numberedCards } from '../fields/cards'
import { imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { toneField } from '../fields/tokens'
import { revalidateGlobalPath } from '../hooks/revalidate'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Page — Home',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on the sustlabs.com homepage.',
    livePreview: { url: '/?draft=true' },
    preview: () => '/',
  },
  hooks: { afterChange: [revalidateGlobalPath('/')] },
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
                  description: true,
                  middle: {
                    name: 'titleMiddle',
                    label: 'Heading — middle word',
                    description:
                      'The word between the two halves, in the normal colour. Include a ' +
                      'trailing space. This used to be fixed in the code.',
                  },
                }),
                buttonActions({ min: 1, max: 2 }),
              ],
            },
          ],
        },
        {
          label: 'Core promise',
          fields: [
            {
              name: 'intelligenceSection',
              type: 'group',
              label: 'No blind spots',
              fields: [
                headingField({ description: true }),
                basicCards({
                  name: 'features',
                  label: 'Feature cards',
                  singular: 'Feature',
                  min: 1,
                  description:
                    'Each card has its own picture. Previously the picture was matched to ' +
                    'the card by its title, so renaming a card silently lost its image.',
                  extra: imageField({
                    description: 'The picture shown on this card.',
                    required: true,
                  }),
                }),
              ],
            },
            {
              name: 'signalLayerSection',
              type: 'group',
              label: 'Intelligence layer',
              fields: [
                headingField({ description: true, multilineLead: true }),
                numberedCards({
                  name: 'steps',
                  label: 'Process steps',
                  singular: 'Step',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Safety',
          fields: [
            {
              name: 'safetySection',
              type: 'group',
              label: false,
              fields: [
                headingField({ rest: true, accentRequired: false, description: true }),
                ...imageField({
                  description: 'The diagram of safety detections around Ohm intelligence.',
                  required: true,
                }),
              ],
            },
          ],
        },
        {
          label: 'Setup',
          fields: [
            {
              name: 'setupSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                numberedCards({
                  name: 'points',
                  label: 'Setup points',
                  singular: 'Point',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Layers',
          fields: [
            {
              name: 'layersSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                basicCards({
                  name: 'layers',
                  label: 'Layer cards',
                  singular: 'Layer',
                  min: 1,
                  extra: [
                    ...imageField({
                      description: 'The screenshot shown on this card.',
                      required: true,
                    }),
                    toneField({
                      values: ['light', 'dark'],
                      enumName: 'enum_home_layer_tone',
                      description: 'Whether this card uses the light or dark treatment.',
                    }),
                  ],
                }),
              ],
            },
          ],
        },
        {
          label: 'Smart DB teaser',
          fields: [
            {
              name: 'smartDbSection',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'eyebrow',
                  type: 'text',
                  required: true,
                },
                { name: 'title', type: 'text', required: true },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  admin: { rows: 3 },
                },
                basicCards({
                  name: 'features',
                  label: 'Feature cards',
                  singular: 'Feature',
                  min: 1,
                  extra: [
                    toneField({
                      name: 'accent',
                      values: ['mint', 'lavender', 'cream', 'blush', 'ice'],
                      enumName: 'enum_smartdb_feature_accent',
                      label: 'Card colour',
                      description:
                        'The pastel background for this card. Pick from the list — these ' +
                        'are fixed design colours.',
                    }),
                  ],
                }),
              ],
            },
          ],
        },
        {
          label: 'Sovereignty',
          fields: [
            {
              name: 'sovereigntySection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                basicCards({
                  min: 1,
                  // Several of these cards are deliberately title-only.
                  descriptionRequired: false,
                  extra: [
                    {
                      name: 'eyebrow',
                      type: 'text',
                      required: true,
                      admin: { description: 'The small label at the top of the card.' },
                    },
                    toneField({
                      values: ['teal', 'violet', 'amber', 'coral', 'blue'],
                      enumName: 'enum_sovereignty_tone',
                    }),
                    toneField({
                      name: 'size',
                      values: ['large', 'regular'],
                      enumName: 'enum_sovereignty_size',
                      label: 'Card size',
                      description:
                        'Large cards span more of the grid. Changing this changes the layout.',
                    }),
                  ],
                }),
              ],
            },
          ],
        },
        {
          label: 'Enterprise',
          fields: [
            {
              name: 'enterpriseSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                numberedCards({
                  name: 'audiences',
                  label: 'Audiences',
                  singular: 'Audience',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Impact',
          fields: [
            {
              name: 'impactSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                {
                  name: 'metrics',
                  type: 'array',
                  label: 'Impact figures',
                  labels: { singular: 'Figure', plural: 'Figures' },
                  minRows: 1,
                  admin: {
                    description:
                      'The proof numbers. These are the most frequently updated content on ' +
                      'the site.',
                    components: { RowLabel: '@/payload/components/RowLabel#LabelValueRowLabel' },
                  },
                  fields: [
                    {
                      name: 'value',
                      type: 'text',
                      required: true,
                      admin: { description: 'The figure shown large, e.g. "12k+".' },
                    },
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: { description: 'The caption, e.g. "Deployments".' },
                    },
                    toneField({
                      name: 'variant',
                      values: ['primary', 'secondary'],
                      enumName: 'enum_impact_variant',
                      label: 'Emphasis',
                      description: 'Primary figures are shown larger.',
                    }),
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
