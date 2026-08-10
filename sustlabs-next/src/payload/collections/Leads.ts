import type { CollectionConfig } from 'payload'

import { authenticated, nobody } from '../access'

/**
 * Form submissions from the website.
 *
 * `create` is closed to the API on purpose. Submissions arrive through a server
 * action that uses `overrideAccess`, so there is no open write endpoint on the
 * production database.
 *
 * The forward to the sales Google Sheet happens in that action, NOT in an
 * afterChange hook — a hook would re-send the lead every time somebody opened
 * and saved it here in the admin.
 */
export const Leads: CollectionConfig = {
  slug: 'leads',
  labels: { singular: 'Enquiry', plural: 'Enquiries' },
  access: {
    create: nobody,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    group: 'Enquiries',
    useAsTitle: 'email',
    defaultColumns: ['email', 'name', 'phone', 'source', 'forwardStatus', 'createdAt'],
    description:
      'Every enquiry submitted through the website. These are also forwarded to the sales ' +
      'Google Sheet — the "Sheet delivery" column shows whether that succeeded.',
    pagination: { defaultLimit: 50 },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'source',
      type: 'select',
      required: true,
      index: true,
      enumName: 'enum_lead_source',
      options: [
        { label: 'Smart DB page', value: 'smartdb' },
        { label: 'FMS page', value: 'fms' },
        { label: 'Solutions page', value: 'solution' },
        { label: 'Support page', value: 'support' },
        { label: 'Other', value: 'other' },
      ],
      admin: { description: 'Which page the enquiry came from.' },
    },
    {
      name: 'propertyType',
      type: 'select',
      enumName: 'enum_lead_property_type',
      options: [
        { label: 'Residential', value: 'Residential' },
        { label: 'Commercial', value: 'Commercial' },
        { label: 'Industrial', value: 'Industrial' },
        { label: 'Others', value: 'Others' },
      ],
    },
    {
      name: 'comment',
      type: 'textarea',
      admin: { rows: 4, description: "Anything the visitor typed in the message box." },
    },
    {
      type: 'collapsible',
      label: 'Delivery & context',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'forwardStatus',
          type: 'select',
          label: 'Sheet delivery',
          defaultValue: 'pending',
          enumName: 'enum_lead_forward_status',
          options: [
            { label: 'Not sent yet', value: 'pending' },
            { label: 'Sent to the Google Sheet', value: 'sent' },
            { label: 'Failed to send', value: 'failed' },
          ],
          admin: {
            readOnly: true,
            description:
              'The enquiry is safely stored here regardless. This only reports whether the ' +
              'copy to the Google Sheet went through.',
          },
        },
        { name: 'forwardedAt', type: 'date', admin: { readOnly: true } },
        { name: 'forwardError', type: 'text', admin: { readOnly: true } },
        {
          name: 'pagePath',
          type: 'text',
          admin: { readOnly: true, description: 'The page the visitor was on when they submitted.' },
        },
        { name: 'userAgent', type: 'text', admin: { readOnly: true } },
      ],
    },
  ],
}
