import type { Field } from 'payload'

/**
 * Design tokens that leaked into the original content (`tone: 'teal'`,
 * `accent: 'var(--terra500)'`, and so on). They stay in the CMS because the
 * components genuinely read them, but they are constrained selects so an editor
 * cannot type a colour and break a layout.
 *
 * `enumName` is set explicitly and SHARED between fields with identical option
 * sets. Postgres turns each select into an enum type, and adding an option later
 * is a migration — so a handful of shared enums beats ~25 near-identical ones.
 * Payload errors loudly if two fields share a name with different options.
 */

const asOptions = (values: readonly string[]) =>
  values.map((value) => ({ label: value, value }))

const TOKEN_HELP =
  'One of the fixed design colours. Pick from the list — do not type a colour code.'

/** `LayerCardTone` and friends. */
export const toneField = (options: {
  values: readonly string[]
  enumName: string
  name?: string
  label?: string
  description?: string
  required?: boolean
  defaultValue?: string
}): Field => ({
  name: options.name ?? 'tone',
  type: 'select',
  required: options.required ?? true,
  enumName: options.enumName,
  defaultValue: options.defaultValue,
  options: asOptions(options.values),
  label: options.label ?? 'Colour theme',
  admin: {
    description:
      options.description ??
      'Which colour theme this card uses. These are fixed design colours — pick from the list.',
  },
})

/**
 * The raw CSS values the product pages pass as `accent`. Kept verbatim so the
 * rendered output is unchanged, but presented with readable labels.
 */
export const accentTokenField = (options: {
  name?: string
  label?: string
  description?: string
  required?: boolean
} = {}): Field => ({
  name: options.name ?? 'accent',
  type: 'select',
  required: options.required ?? true,
  enumName: 'enum_accent_token',
  defaultValue: 'var(--terra500)',
  options: [
    { label: 'Terracotta (brand)', value: 'var(--terra500)' },
    { label: 'Teal', value: 'var(--teal500)' },
    { label: 'Green (success)', value: 'var(--success500)' },
    { label: 'Grey — light', value: 'var(--black300)' },
    { label: 'Grey — mid', value: 'var(--black400)' },
    { label: 'Near black', value: 'var(--black500)' },
    { label: 'White', value: 'var(--white)' },
    // Two product pages use these raw values rather than a CSS variable.
    { label: 'Blue', value: '#145599' },
    { label: 'Bright green', value: '#4CAF53' },
  ],
  label: options.label ?? 'Highlight colour',
  admin: { description: options.description ?? TOKEN_HELP },
})

/** Which half of a split heading receives the highlight colour. */
export const accentTargetField: Field = {
  name: 'accentTarget',
  type: 'select',
  enumName: 'enum_accent_target',
  defaultValue: 'accent',
  options: [
    { label: 'Colour the highlighted half', value: 'accent' },
    { label: 'Colour the first half instead', value: 'lead' },
  ],
  label: 'Which half is coloured',
  admin: { description: 'Which half of the heading gets the highlight colour above.' },
}

/**
 * Replaces the old `titleAccent.includes('for partners')` check that decided
 * whether to emit a line break between the two heading halves.
 */
export const breakAfterLeadField: Field = {
  name: 'breakAfterLead',
  type: 'checkbox',
  defaultValue: true,
  label: 'Put the two halves on separate lines',
  admin: {
    description:
      'On by default. Turn it off to keep the whole heading on one line. ' +
      'This changes the layout, not the wording.',
  },
}

export const buttonVariantField: Field = {
  name: 'variant',
  type: 'select',
  required: true,
  enumName: 'enum_button_variant',
  defaultValue: 'primary',
  options: [
    { label: 'Primary (filled)', value: 'primary' },
    { label: 'Secondary (outlined)', value: 'secondary' },
  ],
  admin: { description: 'Primary is the filled button. Use it once per section.' },
}
