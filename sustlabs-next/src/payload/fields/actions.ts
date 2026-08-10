import type { ArrayField, Field } from 'payload'

import { buttonVariantField } from './tokens'

const HREF_HELP =
  'Where it goes. Start with "/" for a page on this site (e.g. /support), "/#" for a ' +
  'section of the homepage, or a full https:// address. Links used in many places — the ' +
  'demo booking link, the store — live under Site settings, so change them there once ' +
  'instead of here.'

const hrefField: Field = {
  name: 'href',
  type: 'text',
  required: true,
  label: 'Link',
  admin: { description: HREF_HELP },
}

/**
 * The old code decided whether a button opened the enquiry form by checking
 * either the label text or whether the URL was external. Both broke as soon as
 * copy changed, so it is an explicit flag now.
 */
const opensLeadFormField: Field = {
  name: 'opensLeadForm',
  type: 'checkbox',
  label: 'Opens the enquiry form',
  admin: {
    description:
      'Tick this to open the "Explore interest" pop-up form instead of following the link.',
  },
}

/**
 * Analytics event names used to be built from the button label, so renaming a
 * button silently started a new, separate metric. This field keeps the metric
 * stable no matter how the wording changes.
 */
const analyticsIdField: Field = {
  name: 'analyticsId',
  type: 'text',
  label: 'Analytics name',
  admin: {
    description:
      'Used to group clicks on this button in Google Analytics. Set once and then leave ' +
      'it alone — changing it splits the reporting for this button in two.',
  },
}

/** `PageAction` / `ProductHeroAction` */
export const buttonActions = (
  options: { min?: number; max?: number; label?: string; description?: string } = {},
): ArrayField => ({
  name: 'actions',
  type: 'array',
  label: options.label ?? 'Buttons',
  labels: { singular: 'Button', plural: 'Buttons' },
  minRows: options.min,
  maxRows: options.max ?? 2,
  admin: {
    description: options.description ?? 'The buttons shown in this section, left to right.',
    components: { RowLabel: '@/payload/components/RowLabel#ActionRowLabel' },
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: { description: 'The text on the button.' },
    },
    hrefField,
    buttonVariantField,
    opensLeadFormField,
    analyticsIdField,
  ],
})

/**
 * `SmartDbTextLinkAction` — the underlined "Download the brochure ↗" style link.
 * An empty label hides it, which is how sections opt out.
 */
export const textLinkAction = (
  options: { name?: string; label?: string; description?: string } = {},
): Field => ({
  name: options.name ?? 'action',
  type: 'group',
  label: options.label ?? 'Text link',
  admin: {
    description:
      options.description ??
      'The underlined link with an arrow at the end of this section. Clear the label to hide it.',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      admin: { description: 'The link text. Leave empty to hide the link entirely.' },
    },
    { ...hrefField, required: false },
    {
      name: 'document',
      type: 'upload',
      relationTo: 'documents',
      label: 'Or a file to download',
      admin: {
        description:
          'Pick a file here instead of typing a link, when the link should download ' +
          'something. If set, this wins over the Link field above.',
      },
    },
    opensLeadFormField,
  ],
})
