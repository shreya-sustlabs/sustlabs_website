import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../access'

/**
 * Images only. PDFs and video live in `documents`, because this collection runs
 * Sharp over every upload and a 19MB PDF has no business going through it.
 * Payload skips resizing for image/svg+xml, so SVG logos are safe here.
 */
export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Image', plural: 'Images' },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: 'Library',
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'alt', 'width', 'height', 'updatedAt'],
    description: 'Photos, screenshots, logos and diagrams used across the site.',
  },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'image/gif'],
    adminThumbnail: 'thumbnail',
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 320 },
      { name: 'card', width: 768 },
      { name: 'wide', width: 1440 },
      { name: 'hero', width: 2048 },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description:
          'Describe what is in the image, for people using a screen reader and for when the ' +
          'image fails to load. Say what matters — no need to start with "image of". ' +
          'Leave empty for decorative images that carry no information.',
      },
    },
    {
      name: 'credit',
      type: 'text',
      admin: { description: 'Optional photographer or source, for your own records.' },
    },
  ],
}
