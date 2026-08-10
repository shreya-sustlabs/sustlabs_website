import type { CollectionConfig } from 'payload'

import { authenticated, authenticatedOrPublished } from '../access'
import { seoFields } from '../fields/media'
import { revalidateLegalPage } from '../hooks/revalidate'

/**
 * Privacy policy and terms. These are the one place rich text is worth having —
 * the content is genuinely prose with lists and links, and unlike the marketing
 * sections no component renders it as a bare string.
 *
 * Deliberately has no autosave: the terms carry real commercial figures (GST,
 * the monthly subscription price, warranty windows) and an accidental keystroke
 * quietly saving into a draft someone later publishes is a real risk.
 */
export const LegalPages: CollectionConfig = {
  slug: 'legal-pages',
  labels: { singular: 'Legal page', plural: 'Legal pages' },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: { drafts: true, maxPerDoc: 50 },
  admin: {
    group: 'Pages',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
    description:
      'The privacy policy and terms. These contain commercial terms, so changes here are ' +
      'published deliberately rather than saved automatically.',
    livePreview: { url: ({ data }) => `/${data?.slug}?draft=true` },
    preview: (doc) => `/${doc?.slug}`,
  },
  hooks: { afterChange: [revalidateLegalPage] },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: { description: 'The page heading, e.g. "Privacy Policy".' },
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
          'The last part of the page address, with no slash — "privacy-policy" makes the ' +
          'page live at sustlabs.com/privacy-policy. Changing this breaks any existing links.',
      },
    },
    {
      name: 'intro',
      type: 'richText',
      admin: {
        description: 'The opening paragraphs, before the numbered sections.',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      labels: { singular: 'Section', plural: 'Sections' },
      admin: {
        description: 'Each row is one titled section, shown in this order.',
        initCollapsed: true,
        components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: { description: 'The section heading.' },
        },
        {
          name: 'body',
          type: 'richText',
          required: true,
          admin: { description: 'The section text. Lists, links and bold are all available.' },
        },
      ],
    },
    seoFields(),
  ],
}
