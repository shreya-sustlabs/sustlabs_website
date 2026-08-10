import type { Field, GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { buttonActions } from '../fields/actions'
import { basicCards, labelValueList, numberedCards, stringList } from '../fields/cards'
import { enabledField, imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { revalidateGlobalPath } from '../hooks/revalidate'

/**
 * The three "media" bands (problem, audience, visibility) share a shape: a
 * heading, an image, and optionally a brochure download.
 */
const mediaSection = (options: {
  name: string
  label: string
  imageHelp: string
  multilineAccent?: boolean
  withDownload?: boolean
}): Field => ({
  name: options.name,
  type: 'group',
  label: options.label,
  fields: [
    headingField({
      description: true,
      descriptionRequired: false,
      multilineAccent: options.multilineAccent ?? false,
      accentRequired: false,
    }),
    ...imageField({ description: options.imageHelp, required: true }),
    {
      name: 'mediaCaption',
      type: 'text',
      label: 'Caption under the image',
      admin: { description: 'Optional. Leave empty for no caption.' },
    },
    ...(options.withDownload
      ? [
          {
            name: 'downloadAction',
            type: 'group' as const,
            label: 'Brochure download link',
            admin: {
              description: 'Clear the label to hide the download link.',
            },
            fields: [
              {
                name: 'label',
                type: 'text' as const,
                admin: { description: 'Link text, e.g. "Download the brochure".' },
              },
              {
                name: 'document',
                type: 'upload' as const,
                relationTo: 'documents' as const,
                admin: { description: 'The file offered for download.' },
              },
            ],
          },
        ]
      : []),
  ],
})

export const Fms: GlobalConfig = {
  slug: 'fms',
  label: 'Page — FMS',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description: 'Everything on sustlabs.com/fms — the fire monitoring system page.',
    livePreview: { url: '/fms?draft=true' },
    preview: () => '/fms',
  },
  hooks: { afterChange: [revalidateGlobalPath('/fms')] },
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
                headingField({ multilineAccent: true }),
                {
                  name: 'badge',
                  type: 'text',
                  admin: { description: 'Optional small badge above the heading.' },
                },
                labelValueList({
                  name: 'stats',
                  label: 'Headline figures',
                  singular: 'Figure',
                  description: 'The row of figures under the heading.',
                  valueHelp: 'The figure shown large, e.g. "20+" or "24/7".',
                  labelHelp: 'The caption under it, e.g. "Parameters monitored live".',
                  min: 1,
                }),
                buttonActions({ min: 1, max: 2 }),
              ],
            },
          ],
        },
        {
          label: 'The problem',
          fields: [
            mediaSection({
              name: 'problemSection',
              label: 'Problem',
              imageHelp: 'The dashboard screenshot shown beside this section.',
              multilineAccent: true,
              withDownload: true,
            }),
            mediaSection({
              name: 'audienceSection',
              label: 'Who it is for',
              imageHelp: 'The image showing the kinds of sites FMS is deployed across.',
            }),
          ],
        },
        {
          label: 'The gap',
          fields: [
            {
              name: 'gapSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true, accentRequired: false }),
                {
                  name: 'titleHighlight',
                  type: 'text',
                  admin: { description: 'Optional word in the heading given extra emphasis.' },
                },
                {
                  name: 'columns',
                  type: 'array',
                  label: 'Comparison columns',
                  labels: { singular: 'Column', plural: 'Columns' },
                  minRows: 2,
                  maxRows: 2,
                  admin: {
                    description:
                      'Exactly two columns: the periodic-inspection side and the ' +
                      'continuous-monitoring side.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
                  },
                  fields: [
                    { name: 'eyebrow', type: 'text', required: true },
                    { name: 'title', type: 'text', required: true },
                    {
                      name: 'tone',
                      type: 'select',
                      required: true,
                      enumName: 'enum_fms_gap_tone',
                      options: [
                        { label: 'Periodic inspection (shows crosses)', value: 'inspection' },
                        { label: 'Continuous monitoring (shows ticks)', value: 'readiness' },
                      ],
                      admin: {
                        description:
                          'Controls whether this column shows ticks or crosses beside each ' +
                          'line. Changing it changes the meaning of the column.',
                      },
                    },
                    stringList({
                      name: 'items',
                      label: 'Lines',
                      singular: 'Line',
                      description: 'One line per point, in order.',
                      dbName: 'fms_gap_col_items',
                      multiline: true,
                    }),
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'How it works',
          fields: [
            {
              name: 'chainSection',
              type: 'group',
              label: 'The chain',
              fields: [
                headingField({ description: true, multilineAccent: true }),
                {
                  name: 'video',
                  type: 'upload',
                  relationTo: 'documents',
                  required: true,
                  admin: {
                    description:
                      'The looping animation played behind this section. Muted and ' +
                      'autoplaying, so it must not rely on sound.',
                  },
                },
                {
                  name: 'mediaAlt',
                  type: 'text',
                  required: true,
                  label: 'Animation description',
                  admin: { description: 'Describes the animation for screen readers.' },
                },
                basicCards({ name: 'items', label: 'Chain steps', singular: 'Step', min: 1 }),
              ],
            },
            {
              name: 'stepsSection',
              type: 'group',
              label: 'Getting started',
              fields: [
                headingField({ description: true, accentRequired: false }),
                numberedCards({ min: 1 }),
              ],
            },
          ],
        },
        {
          label: 'Coverage & alerts',
          fields: [
            {
              name: 'coverageSection',
              type: 'group',
              label: 'What is monitored',
              fields: [
                headingField({ description: true, accentRequired: false }),
                {
                  name: 'groups',
                  type: 'array',
                  label: 'Parameter groups',
                  labels: { singular: 'Group', plural: 'Groups' },
                  minRows: 1,
                  admin: {
                    description: 'Each group is one card listing the parameters it covers.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                      admin: { description: 'The group name, e.g. "Pumps".' },
                    },
                    stringList({
                      name: 'parameters',
                      label: 'Parameters',
                      singular: 'Parameter',
                      description: 'One per line, in the order they should appear.',
                      dbName: 'fms_cov_params',
                      min: 1,
                    }),
                  ],
                },
              ],
            },
            mediaSection({
              name: 'visibilitySection',
              label: 'The console',
              imageHelp: 'The console screenshot shown beside this section.',
            }),
            {
              name: 'alertsSection',
              type: 'group',
              label: 'Sample alerts',
              fields: [
                headingField({ description: true, accentRequired: false }),
                {
                  name: 'cards',
                  type: 'array',
                  label: 'Example alerts',
                  labels: { singular: 'Alert', plural: 'Alerts' },
                  minRows: 1,
                  admin: {
                    description:
                      'Realistic examples of the messages the system sends. These are ' +
                      'illustrations shown on the page, not live data.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#TextRowLabel' },
                  },
                  fields: [
                    {
                      name: 'meta',
                      type: 'text',
                      required: true,
                      label: 'Channel',
                      admin: { description: 'How it is delivered, e.g. "SMS" or "EMAIL".' },
                    },
                    {
                      name: 'tone',
                      type: 'select',
                      required: true,
                      enumName: 'enum_fms_alert_tone',
                      options: [
                        { label: 'Critical (red)', value: 'critical' },
                        { label: 'Advisory (amber)', value: 'advisory' },
                        { label: 'Summary (neutral)', value: 'summary' },
                      ],
                      admin: { description: 'Sets the colour of the alert card.' },
                    },
                    {
                      name: 'text',
                      type: 'textarea',
                      required: true,
                      label: 'Message',
                      admin: { rows: 3 },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Assurance',
          fields: [
            {
              name: 'assuranceSection',
              type: 'group',
              label: false,
              fields: [
                headingField({
                  description: true,
                  descriptionRequired: false,
                  accentRequired: false,
                }),
                basicCards({ name: 'items', label: 'Assurances', singular: 'Assurance', min: 1 }),
              ],
            },
          ],
        },
        {
          label: 'FAQ',
          description:
            'Written but not currently shown on the site. Tick "Show this section" to publish it.',
          fields: [
            {
              name: 'faqSection',
              type: 'group',
              label: false,
              fields: [
                enabledField('the FAQ'),
                headingField({
                  description: true,
                  descriptionRequired: false,
                  accentRequired: false,
                }),
                {
                  name: 'items',
                  type: 'array',
                  label: 'Questions',
                  labels: { singular: 'Question', plural: 'Questions' },
                  admin: {
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
                  },
                  fields: [
                    { name: 'title', type: 'text', required: true, label: 'Question' },
                    {
                      name: 'answer',
                      type: 'textarea',
                      required: true,
                      admin: { rows: 4 },
                    },
                  ],
                },
                {
                  name: 'note',
                  type: 'textarea',
                  admin: { rows: 2, description: 'Small print under the questions.' },
                },
                {
                  name: 'action',
                  type: 'group',
                  label: 'Button under the FAQ',
                  fields: [
                    { name: 'label', type: 'text' },
                    { name: 'href', type: 'text', label: 'Link' },
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
