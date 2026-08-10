import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { buttonActions } from '../fields/actions'
import { basicCards, stringList } from '../fields/cards'
import { seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { accentTargetField, accentTokenField, breakAfterLeadField } from '../fields/tokens'
import { revalidateGlobalPath } from '../hooks/revalidate'

export const Solutions: GlobalConfig = {
  slug: 'solutions',
  label: 'Page — Solutions',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on sustlabs.com/solutions.',
    livePreview: { url: '/solutions?draft=true' },
    preview: () => '/solutions',
  },
  hooks: { afterChange: [revalidateGlobalPath('/solutions')] },
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
                headingField({ eyebrow: false, rest: true, description: true }),
                {
                  name: 'note',
                  type: 'textarea',
                  required: true,
                  admin: {
                    rows: 2,
                    description: 'The line under the buttons.',
                  },
                },
                buttonActions({ min: 1, max: 2 }),
              ],
            },
          ],
        },
        {
          label: 'Verticals',
          fields: [
            {
              name: 'panels',
              type: 'array',
              label: 'Solution panels',
              labels: { singular: 'Panel', plural: 'Panels' },
              minRows: 1,
              admin: {
                description:
                  'One panel per vertical, in order. They are numbered automatically, ' +
                  'so adding or reordering panels renumbers them for you.',
                initCollapsed: true,
                components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
              },
              fields: [
                {
                  name: 'eyebrow',
                  type: 'text',
                  admin: { description: 'The small label above the panel heading.' },
                },
                {
                  name: 'titlePrefix',
                  type: 'text',
                  admin: { description: 'Optional word before the heading.' },
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Heading — first half',
                  admin: {
                    description:
                      'Renders in the normal colour. End with a space if the two halves ' +
                      'sit on one line.',
                  },
                },
                {
                  name: 'titleAccent',
                  type: 'text',
                  label: 'Heading — highlighted half',
                },
                {
                  name: 'description',
                  type: 'textarea',
                  admin: { rows: 3 },
                },
                stringList({
                  name: 'capabilities',
                  label: 'Capabilities',
                  singular: 'Capability',
                  description: 'The bullet list shown in this panel.',
                  dbName: 'sol_panel_caps',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Partners',
          fields: [
            {
              name: 'partnerSection',
              type: 'group',
              label: false,
              admin: {
                description:
                  'The final band. It is numbered after the panels above, automatically.',
              },
              fields: [
                headingField({ description: true }),
                accentTokenField(),
                accentTargetField,
                breakAfterLeadField,
                basicCards({
                  name: 'items',
                  label: 'Partner offerings',
                  singular: 'Offering',
                  min: 1,
                }),
              ],
            },
          ],
        },
        { label: 'Search & sharing', fields: [seoFields()] },
      ],
    },
  ],
}
