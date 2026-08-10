import type { CollectionConfig } from 'payload'

import { authenticated, authenticatedOrPublished } from '../access'
import { buttonActions } from '../fields/actions'
import { eyebrowCards, numberedCards, stringList } from '../fields/cards'
import { enabledField, imageField, seoFields } from '../fields/media'
import { headingField } from '../fields/heading'
import { accentTargetField, accentTokenField, breakAfterLeadField } from '../fields/tokens'
import { revalidateProduct, revalidateProductAfterDelete } from '../hooks/revalidate'

/**
 * The hardware product pages, served at /products/<address>.
 *
 * A collection rather than a global because these are genuinely repeatable —
 * adding an o6 should not need a developer.
 */
export const Products: CollectionConfig = {
  slug: 'products',
  labels: { singular: 'Product page', plural: 'Product pages' },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true, maxPerDoc: 30 },
  defaultPopulate: { navLabel: true, slug: true, order: true },
  admin: {
    group: 'Pages',
    useAsTitle: 'navLabel',
    defaultColumns: ['navLabel', 'slug', 'order', '_status', 'updatedAt'],
    description: 'One page per hardware product.',
    livePreview: { url: ({ data }) => `/products/${data?.slug}?draft=true` },
    preview: (doc) => `/products/${doc?.slug}`,
  },
  hooks: {
    afterChange: [revalidateProduct],
    afterDelete: [revalidateProductAfterDelete],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basics',
          fields: [
            {
              name: 'navLabel',
              type: 'text',
              required: true,
              label: 'Menu name',
              admin: {
                description: 'How this product appears in the Products menu, e.g. "o3 - Energy Visibility".',
              },
            },
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              index: true,
              label: 'Web address',
              admin: {
                description:
                  'The last part of the address, with no slashes — "o3-energy-visibility" ' +
                  'puts the page at sustlabs.com/products/o3-energy-visibility. Changing ' +
                  'this breaks any existing links to the page.',
              },
            },
            {
              name: 'order',
              type: 'number',
              required: true,
              defaultValue: 0,
              admin: { description: 'Lower numbers appear first in the menu.' },
            },
            {
              name: 'eyebrow',
              type: 'text',
              required: true,
              admin: { description: 'The small label used across the page, e.g. "O3 MONITORING".' },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              admin: { description: 'The plain-language product statement.' },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              admin: { rows: 3 },
            },
          ],
        },
        {
          label: 'Intro',
          fields: [
            {
              name: 'introSection',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'titleKicker',
                  type: 'text',
                  admin: { description: 'The product name line above the heading.' },
                },
                headingField({ eyebrow: false, descriptions: true }),
                accentTokenField(),
              ],
            },
          ],
        },
        {
          label: 'Hero',
          fields: [
            {
              name: 'heroSection',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'kicker',
                  type: 'text',
                  required: true,
                  admin: { description: 'The small line above the hero heading.' },
                },
                headingField({ eyebrow: false, rest: true, description: true }),
                accentTokenField({
                  name: 'accentColor',
                  description: 'Colour of the highlighted words in the hero heading.',
                }),
                buttonActions({ min: 1, max: 2 }),
                ...imageField({
                  description: 'The product photograph beside the hero text.',
                  required: false,
                }),
                {
                  name: 'imageVariant',
                  type: 'select',
                  enumName: 'enum_product_hero_variant',
                  options: [
                    { label: 'o3 framing', value: 'o3' },
                    { label: 'o4 framing', value: 'o4' },
                    { label: 'Smart DB framing', value: 'smart-db' },
                  ],
                  label: 'Photo framing',
                  admin: {
                    description:
                      'Controls how the photo is cropped and positioned. This changes the ' +
                      'layout, not the photo.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Features',
          fields: [
            {
              name: 'featureSection',
              type: 'group',
              label: false,
              fields: [
                headingField(),
                accentTokenField(),
                accentTargetField,
                breakAfterLeadField,
                eyebrowCards({ min: 1 }),
              ],
            },
          ],
        },
        {
          label: 'Use cases',
          fields: [
            {
              name: 'useCaseSection',
              type: 'group',
              label: 'Use cases',
              fields: [
                enabledField('the use-case section'),
                headingField({
                  accentRequired: false,
                  description: true,
                  descriptionRequired: false,
                  optional: true,
                }),
                accentTokenField(),
                accentTargetField,
                breakAfterLeadField,
                numberedCards({ min: 1, dbName: 'prod_uc_cards' }),
              ],
            },
            {
              name: 'postDetailUseCaseSection',
              type: 'group',
              label: 'Second use-case block',
              admin: { description: 'A second block lower down the page. Only o4 uses this today.' },
              fields: [
                enabledField('the second use-case block'),
                headingField({ accentRequired: false, optional: true }),
                accentTokenField(),
                accentTargetField,
                breakAfterLeadField,
                numberedCards({ min: 1, dbName: 'prod_post_uc_cards' }),
              ],
            },
          ],
        },
        {
          label: 'Closing CTA',
          fields: [
            {
              name: 'ctaSection',
              type: 'group',
              label: false,
              fields: [
                headingField({ description: true }),
                accentTokenField(),
                accentTargetField,
                stringList({
                  name: 'items',
                  label: 'Covered faults',
                  singular: 'Fault',
                  description: 'The pills listed in this section, in order.',
                  dbName: 'prod_cta_items',
                  min: 1,
                }),
                {
                  name: 'itemsAccent',
                  type: 'text',
                  label: 'Pill background (advanced)',
                  admin: {
                    description:
                      'A CSS gradient for the pill list. Leave empty unless a developer asked ' +
                      'you to set it.',
                  },
                },
                {
                  name: 'footer',
                  type: 'text',
                  admin: { description: 'Optional small print under the list.' },
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
