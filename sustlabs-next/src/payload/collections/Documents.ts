import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../access'

/**
 * Brochures and video. Deliberately has no `imageSizes`, so Sharp is never
 * invoked — the two brochures are 19MB and 7MB.
 */
export const Documents: CollectionConfig = {
  slug: 'documents',
  labels: { singular: 'File', plural: 'Files' },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: 'Library',
    useAsTitle: 'title',
    defaultColumns: ['title', 'filename', 'updatedAt'],
    description: 'Brochures, PDFs and video offered for download or played on a page.',
  },
  upload: {
    mimeTypes: ['application/pdf', 'video/mp4'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'How this file is listed here in the admin, e.g. "ACMS Brochure 2026".',
      },
    },
    {
      name: 'downloadFileName',
      type: 'text',
      admin: {
        description:
          'The name a visitor sees when they save the file, e.g. ' +
          'SustLabs-ACMS-Brochure-2026.pdf. Leave empty to use the uploaded filename.',
      },
    },
  ],
}
