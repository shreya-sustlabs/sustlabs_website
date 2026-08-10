'use client'

import { useRowLabel } from '@payloadcms/ui'

/**
 * Without these, a collapsed array row reads "Card 03" and an editor has to open
 * every row to find the one they want. The FMS coverage section alone is seven
 * such rows.
 */

const fallback = (rowNumber: number | undefined, noun: string) =>
  `${noun} ${String((rowNumber ?? 0) + 1).padStart(2, '0')}`

const pick = (value: string | null | undefined) => (value?.trim() ? value.trim() : undefined)

/** Cards and steps. Prefixes the ordinal when the row has one. */
export const TitleRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ number?: string; title?: string }>()
  const title = pick(data?.title)
  const number = pick(data?.number)

  if (!title) {
    return <span>{fallback(rowNumber, 'Card')}</span>
  }

  return <span>{number ? `${number} ${title}` : title}</span>
}

/** Single-field string rows. */
export const TextRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ text?: string }>()
  return <span>{pick(data?.text) ?? fallback(rowNumber, 'Item')}</span>
}

/** Rows identified by a `name` (segments, platform tiles) or a `label`. */
export const NameRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string; name?: string }>()
  return <span>{pick(data?.name) ?? pick(data?.label) ?? fallback(rowNumber, 'Item')}</span>
}

/** Buttons — shows the variant too, since only one should be primary. */
export const ActionRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string; variant?: string }>()
  const label = pick(data?.label)

  if (!label) {
    return <span>{fallback(rowNumber, 'Button')}</span>
  }

  return <span>{data?.variant ? `${label} — ${data.variant}` : label}</span>
}

/** Stats and specification rows. */
export const LabelValueRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ label?: string; value?: string }>()
  const label = pick(data?.label)
  const value = pick(data?.value)

  if (!label && !value) {
    return <span>{fallback(rowNumber, 'Row')}</span>
  }

  return <span>{[value, label].filter(Boolean).join(' — ')}</span>
}

/** Navigation rows — shows where the link points. */
export const NavRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{
    children?: unknown[]
    label?: string
    url?: string
  }>()
  const label = pick(data?.label)

  if (!label) {
    return <span>{fallback(rowNumber, 'Menu item')}</span>
  }

  const childCount = Array.isArray(data?.children) ? data.children.length : 0

  if (childCount > 0) {
    return <span>{`${label} (dropdown, ${childCount})`}</span>
  }

  return <span>{data?.url ? `${label} → ${data.url}` : label}</span>
}

/** A comparison-table row, labelled by its first cell. */
export const CellsRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ cells?: { text?: string }[] }>()
  const first = pick(data?.cells?.[0]?.text)
  return <span>{first ?? fallback(rowNumber, 'Row')}</span>
}

/** App screenshots, labelled by caption. */
export const CaptionRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ caption?: string }>()
  return <span>{pick(data?.caption) ?? fallback(rowNumber, 'Screenshot')}</span>
}
