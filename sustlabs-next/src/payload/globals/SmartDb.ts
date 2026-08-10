import type { GlobalConfig, Validate } from 'payload'

import { anyone, authenticated } from '../access'
import { buttonActions, textLinkAction } from '../fields/actions'
import { basicCards, labelValueList, numberedCards, stringList } from '../fields/cards'
import { enabledField, imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { revalidateGlobalPath } from '../hooks/revalidate'

/**
 * Every row of the comparison table has to have exactly as many cells as there
 * are columns, or the table renders ragged. Blocking it with an explanation is
 * worth more than any amount of help text.
 */
const validateTableRows: Validate = (value, { siblingData }) => {
  const columns = (siblingData as { columns?: unknown[] } | undefined)?.columns
  const expected = Array.isArray(columns) ? columns.length : 0

  if (!expected || !Array.isArray(value)) {
    return true
  }

  const badRow = value.findIndex(
    (row) => (row as { cells?: unknown[] } | undefined)?.cells?.length !== expected,
  )

  if (badRow === -1) {
    return true
  }

  return (
    `Row ${badRow + 1} has the wrong number of cells. Every row needs exactly ` +
    `${expected}, to match the columns above.`
  )
}

export const SmartDb: GlobalConfig = {
  slug: 'smart-db',
  label: 'Page — Smart DB',
  dbName: 'smart_db',
  access: { read: anyone, update: authenticated },
  versions: { drafts: true, max: 30 },
  admin: {
    group: 'Pages',
    description:
      'Everything on sustlabs.com/smart-db. The sections appear on the page in the order of ' +
      'the tabs below. To move or remove a section, ask a developer.',
    livePreview: { url: '/smart-db?draft=true' },
    preview: () => '/smart-db',
  },
  hooks: { afterChange: [revalidateGlobalPath('/smart-db')] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          description: 'The first screen, and the exploded-panel image beneath it.',
          fields: [
            {
              name: 'heroSection',
              type: 'group',
              label: 'Hero',
              fields: [headingField({ description: true }), buttonActions({ min: 1, max: 2 })],
            },
            {
              name: 'layersSection',
              type: 'group',
              label: 'Exploded panel view',
              admin: {
                description:
                  'The "Intelligence Layer" and "Conventional Layer" callouts are drawn into ' +
                  'the image itself, so there is no text to edit for them here.',
              },
              fields: [
                { name: 'title', type: 'text', required: true },
                ...imageField({
                  description: 'The exploded view of the Smart DB enclosure.',
                  required: true,
                }),
              ],
            },
          ],
        },
        {
          label: 'The product',
          fields: [
            {
              name: 'knowsSection',
              type: 'group',
              label: 'The panel that knows',
              fields: [
                headingField({ descriptions: true }),
                labelValueList({
                  name: 'stats',
                  label: 'Stat pairs',
                  singular: 'Stat',
                  description: 'Shown as a row of figures under the paragraphs.',
                  labelHelp: 'The caption, e.g. "Circuit-level sensing".',
                  valueHelp: 'The word or figure shown large, e.g. "Live".',
                  min: 1,
                }),
                textLinkAction({ label: 'Brochure link' }),
              ],
            },
            {
              name: 'unchangedSection',
              type: 'group',
              label: 'The gap',
              fields: [
                headingField({ description: true }),
                basicCards({
                  min: 1,
                  description: 'The shortcomings of a conventional distribution board.',
                }),
              ],
            },
          ],
        },
        {
          label: 'How it works',
          fields: [
            {
              name: 'loopSection',
              type: 'group',
              label: 'Sense, understand, alert, act',
              fields: [
                headingField({ description: true }),
                numberedCards({
                  name: 'steps',
                  label: 'Steps',
                  singular: 'Step',
                  min: 1,
                  description: 'The continuous loop, in order.',
                }),
                textLinkAction({ label: 'Video link' }),
              ],
            },
            {
              name: 'capabilitiesSection',
              type: 'group',
              label: 'Kinds of intelligence',
              fields: [
                headingField(),
                basicCards({
                  name: 'items',
                  label: 'Capabilities',
                  singular: 'Capability',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'App & platform',
          fields: [
            {
              name: 'pocketSection',
              type: 'group',
              label: 'In your pocket',
              fields: [
                headingField({ description: true }),
                {
                  name: 'highlight',
                  type: 'group',
                  label: 'Highlight card',
                  admin: {
                    description:
                      'The first card in the row. Its eyebrow is reused as the caption under ' +
                      'the card, so it is only typed once.',
                  },
                  fields: [
                    { name: 'eyebrow', type: 'text', required: true },
                    { name: 'title', type: 'text', required: true },
                    {
                      name: 'description',
                      type: 'textarea',
                      required: true,
                      admin: { rows: 3 },
                    },
                  ],
                },
                {
                  name: 'screens',
                  type: 'array',
                  label: 'App screenshots',
                  labels: { singular: 'Screenshot', plural: 'Screenshots' },
                  minRows: 1,
                  maxRows: 4,
                  admin: {
                    description: 'The phone screenshots in the scrolling row, left to right.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#CaptionRowLabel' },
                  },
                  fields: [
                    ...imageField({
                      description:
                        'The phone screenshot. Use the same shape and size for all of them, ' +
                        'or the row will look uneven.',
                      required: true,
                    }),
                    {
                      name: 'caption',
                      type: 'text',
                      required: true,
                      admin: { description: 'The short label under the phone, e.g. "Home overview".' },
                    },
                  ],
                },
              ],
            },
            {
              name: 'platformSection',
              type: 'group',
              label: 'One platform',
              fields: [
                headingField(),
                {
                  name: 'tiles',
                  type: 'array',
                  label: 'Platform tiles',
                  labels: { singular: 'Tile', plural: 'Tiles' },
                  minRows: 1,
                  maxRows: 3,
                  admin: {
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#NameRowLabel' },
                  },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: { description: 'e.g. "Web App / Dashboard".' },
                    },
                    {
                      name: 'kicker',
                      type: 'text',
                      required: true,
                      admin: {
                        description:
                          'The short line under the name describing where it runs, ' +
                          'e.g. "Mobile · On the go".',
                      },
                    },
                    { name: 'description', type: 'textarea', required: true, admin: { rows: 3 } },
                    ...imageField({
                      description: 'The picture shown inside this tile.',
                      required: true,
                    }),
                    {
                      name: 'variant',
                      type: 'select',
                      required: true,
                      enumName: 'enum_smartdb_platform_variant',
                      options: [
                        { label: 'App (phone frame)', value: 'app' },
                        { label: 'Dashboard (wide frame)', value: 'dashboard' },
                        { label: 'Clock (square frame)', value: 'clock' },
                      ],
                      label: 'Frame shape',
                      admin: {
                        description:
                          'Controls the shape of the frame drawn around the picture, not the ' +
                          'picture itself. Changing this changes the tile layout.',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Comparison',
          fields: [
            {
              name: 'comparisonSection',
              type: 'group',
              label: 'Conventional board vs Smart DB',
              fields: [
                headingField(),
                {
                  name: 'columns',
                  type: 'array',
                  label: 'Table columns',
                  labels: { singular: 'Column', plural: 'Columns' },
                  minRows: 2,
                  maxRows: 4,
                  admin: {
                    description:
                      'The header row, left to right. Every row below must have exactly this ' +
                      'many cells, in the same order.',
                    components: { RowLabel: '@/payload/components/RowLabel#TextRowLabel' },
                  },
                  fields: [{ name: 'text', type: 'text', required: true }],
                },
                {
                  name: 'rows',
                  type: 'array',
                  label: 'Table rows',
                  labels: { singular: 'Row', plural: 'Rows' },
                  minRows: 1,
                  dbName: 'sdb_cmp_rows',
                  validate: validateTableRows,
                  admin: {
                    description:
                      'One row per capability. The first cell becomes the row heading.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#CellsRowLabel' },
                  },
                  fields: [
                    {
                      name: 'cells',
                      type: 'array',
                      labels: { singular: 'Cell', plural: 'Cells' },
                      minRows: 2,
                      dbName: 'sdb_cmp_cells',
                      admin: {
                        description: 'In the same order as the columns above.',
                        components: { RowLabel: '@/payload/components/RowLabel#TextRowLabel' },
                      },
                      fields: [{ name: 'text', type: 'text', required: true }],
                    },
                  ],
                },
                textLinkAction({ label: 'Link under the table' }),
              ],
            },
          ],
        },
        {
          label: 'Applications & trust',
          fields: [
            {
              name: 'segmentsSection',
              type: 'group',
              label: 'Where it is used',
              fields: [
                headingField({ description: true }),
                {
                  name: 'segments',
                  type: 'array',
                  label: 'Segments',
                  labels: { singular: 'Segment', plural: 'Segments' },
                  minRows: 1,
                  admin: {
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#NameRowLabel' },
                  },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      admin: { description: 'e.g. "New apartments".' },
                    },
                    { name: 'description', type: 'textarea', required: true, admin: { rows: 2 } },
                    ...imageField({
                      description: 'A photograph of this kind of building or site.',
                      required: true,
                    }),
                  ],
                },
              ],
            },
            {
              name: 'fireSection',
              type: 'group',
              label: 'Fire prevention & trust',
              fields: [
                headingField({ description: true }),
                stringList({
                  name: 'tags',
                  label: 'Trust tags',
                  singular: 'Tag',
                  description:
                    'The short pills under the paragraph, e.g. "Certified electrical installation".',
                  min: 1,
                }),
              ],
            },
          ],
        },
        {
          label: 'Hidden sections',
          description:
            'Written but not currently shown on the site. Tick "Show this section" to publish one.',
          fields: [
            {
              name: 'specsSection',
              type: 'group',
              label: 'Specifications table',
              fields: [
                enabledField('the specifications table'),
                { name: 'title', type: 'text' },
                labelValueList({
                  name: 'specs',
                  label: 'Specifications',
                  singular: 'Specification',
                  description: 'One row per specification.',
                  labelHelp: 'What is being specified, e.g. "Rated voltage".',
                  valueHelp: 'The value, e.g. "240V AC, 50Hz".',
                }),
                {
                  name: 'note',
                  type: 'textarea',
                  admin: { rows: 4, description: 'Small print under the table.' },
                },
              ],
            },
          ],
        },
        {
          label: 'Search & sharing',
          fields: [seoFields()],
        },
      ],
    },
  ],
}
