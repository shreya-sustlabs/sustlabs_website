import type { CollectionConfig } from 'payload'

import { authenticated } from '../access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'User', plural: 'Users' },
  access: {
    read: authenticated,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: 'Admin',
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'updatedAt'],
    description: 'People who can sign in and edit the website.',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      admin: { description: 'Shown instead of the email address around the admin panel.' },
    },
  ],
}
