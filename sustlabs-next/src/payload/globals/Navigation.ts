import type { Field, GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { revalidateLayout } from '../hooks/revalidate'

const URL_HELP =
  'Start with "/" for a page on this site (e.g. /smart-db), "/#" for a section of the ' +
  'homepage (e.g. /#products), or a full https:// address for another website.'

const linkFields: Field[] = [
  {
    name: 'label',
    type: 'text',
    required: true,
    admin: { description: 'The words a visitor sees.' },
  },
  {
    name: 'url',
    type: 'text',
    required: true,
    label: 'Link',
    admin: { description: URL_HELP },
  },
  {
    name: 'newTab',
    type: 'checkbox',
    label: 'Open in a new tab',
    admin: { description: 'Tick this for links to other websites.' },
  },
]

/**
 * The old header derived each link's URL from its label through a chain of
 * if-statements, special-cased two labels into dropdowns, and hid one product by
 * checking whether its name contained "o5". All of that becomes editable data here.
 */
export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Menus (header & footer)',
  access: { read: anyone, update: authenticated },
  admin: {
    group: 'Site',
    description:
      'The navigation bar at the top of every page, and the footer at the bottom. Drag rows ' +
      'to reorder them. Removing a row removes the link from the site.',
  },
  hooks: { afterChange: [revalidateLayout()] },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Header',
          fields: [
            {
              name: 'header',
              type: 'array',
              label: 'Top navigation',
              labels: { singular: 'Menu item', plural: 'Menu items' },
              minRows: 1,
              admin: {
                description:
                  'Shown left to right across the top of every page. Add rows under ' +
                  '"Dropdown items" to turn an entry into a dropdown menu.',
                initCollapsed: true,
                components: { RowLabel: '@/payload/components/RowLabel#NavRowLabel' },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  admin: { description: 'The words a visitor sees.' },
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Link',
                  admin: {
                    description: `Leave empty if this entry only opens a dropdown. ${URL_HELP}`,
                  },
                },
                {
                  name: 'activePathPrefix',
                  type: 'text',
                  label: 'Highlight when under',
                  admin: {
                    description:
                      'Optional. Highlights this entry whenever the visitor is anywhere ' +
                      'under this path, e.g. /products. Leave empty to highlight only on ' +
                      'an exact match.',
                  },
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  label: 'Open in a new tab',
                },
                {
                  name: 'children',
                  type: 'array',
                  label: 'Dropdown items',
                  labels: { singular: 'Dropdown item', plural: 'Dropdown items' },
                  dbName: 'nav_header_children',
                  admin: {
                    description:
                      'Leave empty for a plain link. Add rows to make this a dropdown — ' +
                      'this is where the Products and Add-ons menus are listed, so a new ' +
                      'product can be added to the menu here without a developer.',
                    components: { RowLabel: '@/payload/components/RowLabel#NavRowLabel' },
                  },
                  fields: linkFields,
                },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footer',
              type: 'group',
              label: false,
              fields: [
                {
                  name: 'tagline',
                  type: 'text',
                  required: true,
                  admin: {
                    description:
                      'The line under the logo, e.g. "Rewiring the Future of Homes".',
                  },
                },
                {
                  name: 'columns',
                  type: 'array',
                  label: 'Link columns',
                  labels: { singular: 'Column', plural: 'Columns' },
                  maxRows: 5,
                  admin: {
                    description: 'The columns of links, left to right.',
                    initCollapsed: true,
                    components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                      admin: { description: 'The column heading, e.g. "Explore".' },
                    },
                    {
                      name: 'links',
                      type: 'array',
                      labels: { singular: 'Link', plural: 'Links' },
                      dbName: 'nav_footer_links',
                      admin: {
                        components: { RowLabel: '@/payload/components/RowLabel#NavRowLabel' },
                      },
                      fields: linkFields,
                    },
                  ],
                },
                {
                  name: 'legalLinks',
                  type: 'array',
                  label: 'Legal links',
                  labels: { singular: 'Link', plural: 'Links' },
                  dbName: 'nav_footer_legal',
                  admin: {
                    description: 'The small links along the bottom, beside the copyright line.',
                    components: { RowLabel: '@/payload/components/RowLabel#NavRowLabel' },
                  },
                  fields: linkFields,
                },
                {
                  name: 'copyright',
                  type: 'text',
                  required: true,
                  admin: {
                    description:
                      'The copyright line at the very bottom, e.g. ' +
                      '"Copyright © 2026 Sustlabs. All rights reserved."',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
