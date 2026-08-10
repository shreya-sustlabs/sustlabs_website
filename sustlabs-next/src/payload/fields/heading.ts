import type { Field } from 'payload'

/**
 * Almost every section on the site renders its heading as two spans — a plain
 * "lead" half and an accented half the CSS colours differently. A few add a
 * third fragment or a middle word. These are kept as separate text fields
 * rather than one rich-text field because the split is structural: the markup
 * and the stylesheet both depend on it.
 *
 * The confusion that causes for editors is solved by presentation instead —
 * a live preview field, and description copy on every part.
 */
export type HeadingOptions = {
  /** The small line above the heading. Default true. */
  eyebrow?: boolean
  /** A third fragment after the accent, in the normal colour. */
  rest?: boolean
  /** A fragment between lead and accent (the home hero puts a word here). */
  middle?: { name: string; label: string; description: string }
  /** A single body paragraph under the heading. */
  description?: boolean
  /** Some sections genuinely have no body paragraph. */
  descriptionRequired?: boolean
  /** Several body paragraphs, each rendered as its own <p>. */
  descriptions?: boolean
  /** Allow Enter to create a line break inside the lead / accent. */
  multilineLead?: boolean
  multilineAccent?: boolean
  /** Some sections legitimately have no accent half. */
  accentRequired?: boolean
  /**
   * Makes the whole heading optional. Used by sections that sit behind a
   * visibility toggle and may be entirely empty while switched off.
   */
  optional?: boolean
  label?: string
  initCollapsed?: boolean
}

const LEAD_HELP =
  'The first half of the heading. Shown in the normal text colour. ' +
  'If both halves need to sit on the same line, end this field with a space.'

const ACCENT_HELP =
  'The second half of the heading. Shown in the highlight colour. ' +
  'Leave empty if this heading has no highlighted half.'

const BREAK_HELP = 'Press Enter to force a line break.'

/**
 * `Field` is a discriminated union, so `type: flag ? 'textarea' : 'text'` will not
 * type-check. Branching here keeps the call sites tidy.
 */
const textOrTextarea = (args: {
  name: string
  label?: string
  required?: boolean
  description: string
  multiline: boolean
  rows?: number
}): Field =>
  args.multiline
    ? {
        name: args.name,
        type: 'textarea',
        label: args.label,
        required: args.required,
        admin: { rows: args.rows ?? 3, description: args.description },
      }
    : {
        name: args.name,
        type: 'text',
        label: args.label,
        required: args.required,
        admin: { description: args.description },
      }


export const headingField = (options: HeadingOptions = {}): Field => {
  const {
    eyebrow = true,
    rest = false,
    middle,
    description = false,
    descriptionRequired = true,
    descriptions = false,
    multilineLead = false,
    multilineAccent = false,
    accentRequired = true,
    optional = false,
    label = 'Heading',
    initCollapsed = false,
  } = options

  const fields: Field[] = [
    {
      name: 'headingPreview',
      type: 'ui',
      admin: {
        components: {
          Field: '@/payload/components/HeadingPreview#HeadingPreview',
        },
      },
    },
  ]

  if (eyebrow) {
    fields.push({
      name: 'eyebrow',
      type: 'text',
      required: !optional,
      label: 'Eyebrow',
      admin: {
        description:
          'The small line above the heading, e.g. "THE PRODUCT". Type it in the case you ' +
          'want to see — some sections show it in capitals, others exactly as typed.',
      },
    })
  }

  fields.push(
    textOrTextarea({
      name: 'titleLead',
      label: 'Heading — first half',
      required: !optional,
      multiline: multilineLead,
      description: multilineLead ? `${LEAD_HELP} ${BREAK_HELP}` : LEAD_HELP,
    }),
  )

  if (middle) {
    fields.push({
      name: middle.name,
      type: 'text',
      label: middle.label,
      admin: { description: middle.description },
    })
  }

  fields.push(
    textOrTextarea({
      name: 'titleAccent',
      label: 'Heading — highlighted half',
      required: accentRequired && !optional,
      multiline: multilineAccent,
      description: multilineAccent ? `${ACCENT_HELP} ${BREAK_HELP}` : ACCENT_HELP,
    }),
  )

  if (rest) {
    fields.push({
      name: 'titleRest',
      type: 'text',
      label: 'Heading — final part',
      admin: {
        description:
          'Optional last fragment, shown after the highlighted half in the normal colour.',
      },
    })
  }

  if (description) {
    fields.push({
      name: 'description',
      type: 'textarea',
      required: descriptionRequired && !optional,
      label: 'Body paragraph',
      admin: {
        rows: 4,
        description: descriptionRequired
          ? 'The paragraph shown under the heading.'
          : 'Optional paragraph under the heading. Leave empty to show none.',
      },
    })
  }

  if (descriptions) {
    fields.push({
      name: 'descriptions',
      type: 'array',
      minRows: 1,
      label: 'Body paragraphs',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      admin: {
        description: 'Each row becomes its own paragraph, in this order.',
        components: { RowLabel: '@/payload/components/RowLabel#TextRowLabel' },
      },
      fields: [{ name: 'text', type: 'textarea', required: true, admin: { rows: 4 } }],
    })
  }

  return { type: 'collapsible', label, admin: { initCollapsed }, fields }
}
