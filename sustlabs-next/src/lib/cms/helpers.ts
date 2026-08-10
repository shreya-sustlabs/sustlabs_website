import type { Document, Media, Setting } from '@/payload-types'

/**
 * Bridges the gap between Payload's generated types and the hand-written prop
 * types the section components use.
 *
 * Payload marks anything not `required: true` as `T | null | undefined`, and
 * returns uploads as `number | Media` depending on the query depth. The section
 * components expect plain, non-null values, so the conversion happens here — in
 * one place per page — rather than loosening 60 component signatures.
 */

/** Asserts a value the components dereference without guarding. */
export function req<T>(value: T | null | undefined, what: string): T {
  if (value === null || value === undefined || value === '') {
    throw new Error(
      `[cms] Missing required content: ${what}. Fill it in the admin panel, or mark the ` +
        `field required in the Payload config so it cannot be saved empty.`,
    )
  }

  return value
}

/** `null` is not assignable to `string | undefined`, so normalise rather than cast. */
export const opt = <T,>(value: T | null | undefined): T | undefined => value ?? undefined

type Upload = Media | Document

/**
 * Document ids are integers under Postgres, so the unpopulated arm of an upload
 * union is `number`. Seeing one means the query depth was too shallow.
 */
function upload(value: number | Upload | null | undefined, what: string): Upload {
  const resolved = req(value, what)

  if (typeof resolved === 'number') {
    throw new Error(`[cms] ${what} was not populated — query it with depth 2 or more.`)
  }

  return resolved
}

export const uploadUrl = (value: number | Upload | null | undefined, what: string): string =>
  req(upload(value, what).url, `${what} url`)

export const uploadUrlOpt = (
  value: number | Upload | null | undefined,
): string | undefined =>
  value && typeof value !== 'number' ? (value.url ?? undefined) : undefined

/**
 * An image with its intrinsic size. This replaces the hand-maintained
 * `SCREEN_IMAGES`-style maps, which existed only to reserve space and stop the
 * page shifting as images loaded — Payload stores width and height for us.
 */
export type ResolvedImage = {
  alt: string
  height?: number
  src: string
  width?: number
}

export function image(
  value: number | Media | null | undefined,
  what: string,
  altOverride?: string | null,
): ResolvedImage {
  const media = upload(value, what) as Media

  return {
    alt: altOverride?.trim() || (media.alt ?? ''),
    height: media.height ?? undefined,
    src: req(media.url, `${what} url`),
    width: media.width ?? undefined,
  }
}

/** Payload has no primitive-array field, so string lists arrive wrapped. */
export const flatten = (
  rows: { text?: string | null }[] | null | undefined,
): string[] => (rows ?? []).map((row) => row.text ?? '').filter((text) => text !== '')

/** `rows[].cells[].text` back into the `string[][]` the comparison table renders. */
export const table = (
  rows: { cells?: { text?: string | null }[] | null }[] | null | undefined,
): string[][] =>
  (rows ?? []).map((row) => (row.cells ?? []).map((cell) => cell.text ?? ''))

const SETTINGS_TOKEN = /\{\{settings\.([a-zA-Z]+)\}\}/g

/**
 * Resolves `{{settings.demoBookingUrl}}` style tokens, which is how a link held
 * once in Site settings reaches the many sections that use it.
 */
export const resolveUrl = (href: string, settings: Setting): string =>
  href.replace(SETTINGS_TOKEN, (_match, key: string) => {
    const value = (settings as unknown as Record<string, unknown>)[key]

    return typeof value === 'string' ? value : ''
  })
