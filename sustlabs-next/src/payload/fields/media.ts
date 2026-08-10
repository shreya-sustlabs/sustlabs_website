import type { Field } from 'payload'

/**
 * Replaces the original key-into-a-hardcoded-map pattern, where content said
 * `image: 'live'` and the component looked that up in a `SCREEN_IMAGES` object.
 * Uploads also carry width/height, which is how the intrinsic sizes that
 * prevent layout shift now reach the components.
 */
export const imageField = (options: {
  name?: string
  label?: string
  description: string
  required?: boolean
  /** Name of the companion alt-override field. */
  altName?: string
  altDescription?: string
}): Field[] => [
  {
    name: options.name ?? 'image',
    type: 'upload',
    relationTo: 'media',
    required: options.required ?? true,
    label: options.label ?? 'Image',
    admin: { description: options.description },
  },
  {
    name: options.altName ?? 'alt',
    type: 'text',
    label: 'Image description (alt text)',
    admin: {
      description:
        options.altDescription ??
        'Describes the image for screen readers. Leave empty to use the description ' +
        'saved on the image itself in the Images library.',
    },
  },
]

/**
 * A "Show this section" toggle. Several sections on the live site are fully
 * written but commented out of the code; this brings them under editor control
 * instead of throwing the copy away.
 */
export const enabledField = (what: string): Field => ({
  name: 'enabled',
  type: 'checkbox',
  label: 'Show this section',
  defaultValue: false,
  admin: {
    description:
      `Turns ${what} on or off on the live site. The wording is kept either way, so you ` +
      `can switch it back on later without retyping anything.`,
  },
})

/** Per-page search/social metadata. Replaces the old react-helmet tags. */
export const seoFields = (): Field => ({
  type: 'collapsible',
  label: 'Search & sharing',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'seo',
      type: 'group',
      label: false,
      admin: {
        description:
          'What Google and link previews show. None of this appears on the page itself.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description:
              'The browser tab title and the blue headline in Google results. ' +
              'Aim for under 60 characters.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            rows: 3,
            description:
              'The grey summary under the Google result. Aim for 120–155 characters.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Sharing image',
          admin: {
            description:
              'The picture shown when someone shares a link to this page on WhatsApp or ' +
              'LinkedIn. Leave empty to use the site-wide default from Site settings.',
          },
        },
        {
          name: 'noindex',
          type: 'checkbox',
          label: 'Hide from search engines',
          admin: {
            description:
              'Leave unticked. Only tick this to keep a page out of Google entirely.',
          },
        },
      ],
    },
  ],
})
