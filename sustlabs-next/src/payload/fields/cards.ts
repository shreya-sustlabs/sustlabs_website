import type { ArrayField, Field } from 'payload'

/**
 * The site repeats three card shapes over and over: a plain title+description
 * card, one with an ordinal, and one with a small eyebrow label. These
 * factories keep the ~30 places that use them identical.
 */
export type CardArrayOptions = {
  name?: string
  label?: string
  singular?: string
  description?: string
  min?: number
  max?: number
  /**
   * Pin the Postgres table name. Needed for arrays nested two or more levels
   * deep, because Postgres truncates identifiers at 63 bytes and truncated
   * names can collide.
   */
  dbName?: string
  /** Some card sets genuinely carry a title only. */
  descriptionRequired?: boolean
  /** Extra fields appended after title/description. */
  extra?: Field[]
}

const titleField: Field = {
  name: 'title',
  type: 'text',
  required: true,
  admin: { description: 'The card heading.' },
}

const describe = (required: boolean): Field => ({
  name: 'description',
  type: 'textarea',
  required,
  admin: {
    rows: 3,
    description: required
      ? 'One or two sentences under the card heading.'
      : 'Optional. Leave empty for a title-only card.',
  },
})

const base = (options: CardArrayOptions, fields: Field[]): ArrayField => {
  const singular = options.singular ?? 'Card'

  return {
    name: options.name ?? 'cards',
    type: 'array',
    label: options.label ?? 'Cards',
    labels: { singular, plural: `${singular}s` },
    minRows: options.min,
    maxRows: options.max,
    dbName: options.dbName,
    admin: {
      description: options.description,
      initCollapsed: true,
      components: { RowLabel: '@/payload/components/RowLabel#TitleRowLabel' },
    },
    fields,
  }
}

/** `BasicCardProps` — { title, description } */
export const basicCards = (options: CardArrayOptions = {}): ArrayField =>
  base(options, [
    titleField,
    describe(options.descriptionRequired ?? true),
    ...(options.extra ?? []),
  ])

/** `NumberedCardProps` — { number, title, description } */
export const numberedCards = (options: CardArrayOptions = {}): ArrayField =>
  base({ ...options, singular: options.singular ?? 'Step' }, [
    {
      name: 'number',
      type: 'text',
      required: true,
      label: 'Number',
      admin: {
        description:
          'Shown as the card ordinal. Usually "01." — type it exactly as it should ' +
          'appear, including the full stop.',
      },
    },
    titleField,
    describe(options.descriptionRequired ?? true),
    ...(options.extra ?? []),
  ])

/** `ProductFeatureCardProps` / `SmartDbEyebrowCard` — { eyebrow, title, description } */
export const eyebrowCards = (options: CardArrayOptions = {}): ArrayField =>
  base(options, [
    {
      name: 'eyebrow',
      type: 'text',
      required: true,
      admin: { description: 'The small label above the card heading, e.g. "Live Usage".' },
    },
    titleField,
    describe(options.descriptionRequired ?? true),
    ...(options.extra ?? []),
  ])

/**
 * Payload has no primitive-array field type, so every `string[]` in the
 * original content becomes an array of one-field rows and has to be flattened
 * again on the way out. See `flatten()` in `src/lib/cms/media.ts`.
 */
export const stringList = (options: {
  name: string
  label: string
  singular: string
  description: string
  min?: number
  max?: number
  dbName?: string
  /** Use a textarea when entries are sentence-length rather than short labels. */
  multiline?: boolean
}): ArrayField => ({
  name: options.name,
  type: 'array',
  label: options.label,
  labels: { singular: options.singular, plural: `${options.singular}s` },
  minRows: options.min,
  maxRows: options.max,
  dbName: options.dbName,
  admin: {
    description: options.description,
    components: { RowLabel: '@/payload/components/RowLabel#TextRowLabel' },
  },
  fields: [
    options.multiline
      ? { name: 'text', type: 'textarea', required: true, admin: { rows: 3 } }
      : { name: 'text', type: 'text', required: true },
  ],
})

/** A label/value pair, used for stats and specification rows. */
export const labelValueList = (options: {
  name: string
  label: string
  singular: string
  description: string
  labelHelp?: string
  valueHelp?: string
  min?: number
  dbName?: string
}): ArrayField => ({
  name: options.name,
  type: 'array',
  label: options.label,
  labels: { singular: options.singular, plural: `${options.singular}s` },
  minRows: options.min,
  dbName: options.dbName,
  admin: {
    description: options.description,
    components: { RowLabel: '@/payload/components/RowLabel#LabelValueRowLabel' },
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: { description: options.labelHelp ?? 'The caption, e.g. "Parameters monitored live".' },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: { description: options.valueHelp ?? 'The figure shown large, e.g. "20+".' },
    },
  ],
})
