'use server'

import { headers } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Receives an enquiry, stores it, then forwards a copy to the sales Google Sheet.
 *
 * A server action rather than a route handler because Payload already owns
 * `/api/[...slug]`, and because it keeps the Apps Script URL out of the browser
 * bundle — it used to be hardcoded in the client.
 *
 * The old client-side version posted straight to Apps Script with
 * `mode: 'no-cors'`, which made the response unreadable: a server error looked
 * exactly like success, so visitors were thanked either way and the lead was
 * lost. Storing it here first means the sheet is a copy, not the record.
 */

export type LeadInput = {
  comment?: string
  email: string
  /** Anti-spam trap. Real people leave it empty. */
  honeypot?: string
  name?: string
  phone?: string
  propertyType?: string
  source: string
  /** Campaign tags from the URL the visitor landed on. See `lib/utm`. */
  utmAdgroup?: string
  utmCampaign?: string
  utmCreative?: string
  utmDevice?: string
  utmKeyword?: string
  utmMedium?: string
  utmPlacement?: string
  utmSource?: string
}

export type LeadResult = { ok: boolean }

const SOURCES = ['smartdb', 'fms', 'solution', 'support', 'other'] as const
type Source = (typeof SOURCES)[number]

const PROPERTY_TYPES = ['Residential', 'Commercial', 'Industrial', 'Others'] as const
type PropertyType = (typeof PROPERTY_TYPES)[number]

const asSource = (value: string): Source =>
  (SOURCES as readonly string[]).includes(value) ? (value as Source) : 'other'

const asPropertyType = (value: string | undefined): PropertyType | undefined =>
  value && (PROPERTY_TYPES as readonly string[]).includes(value)
    ? (value as PropertyType)
    : undefined

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitLead(input: LeadInput): Promise<LeadResult> {
  // Silently accept and discard: telling a bot it failed just teaches it.
  if (input.honeypot) {
    return { ok: true }
  }

  const email = input.email?.trim()

  if (!email || !EMAIL.test(email)) {
    return { ok: false }
  }

  const payload = await getPayload({ config })
  const requestHeaders = await headers()

  const lead = await payload.create({
    collection: 'leads',
    overrideAccess: true,
    context: { disableRevalidate: true },
    data: {
      comment: input.comment?.trim() || undefined,
      email,
      forwardStatus: 'pending',
      name: input.name?.trim() || undefined,
      pagePath: requestHeaders.get('referer') ?? undefined,
      phone: input.phone?.trim() || undefined,
      propertyType: asPropertyType(input.propertyType),
      source: asSource(input.source),
      userAgent: requestHeaders.get('user-agent') ?? undefined,
      utmAdgroup: input.utmAdgroup?.trim() || undefined,
      utmCampaign: input.utmCampaign?.trim() || undefined,
      utmCreative: input.utmCreative?.trim() || undefined,
      utmDevice: input.utmDevice?.trim() || undefined,
      utmKeyword: input.utmKeyword?.trim() || undefined,
      utmMedium: input.utmMedium?.trim() || undefined,
      utmPlacement: input.utmPlacement?.trim() || undefined,
      utmSource: input.utmSource?.trim() || undefined,
    },
  })

  const endpoint = process.env.LEAD_FORWARD_ENDPOINT

  if (!endpoint) {
    return { ok: true }
  }

  try {
    const response = await fetch(endpoint, {
      body: JSON.stringify({
        // `comment` was collected by the form but never sent, so every enquiry
        // from the Solutions page arrived with its message missing.
        comment: input.comment ?? '',
        email,
        name: input.name ?? '',
        phone: input.phone ?? '',
        property_type: input.propertyType ?? '',
        source: input.source,
        utm_adgroup: input.utmAdgroup ?? '',
        utm_campaign: input.utmCampaign ?? '',
        utm_creative: input.utmCreative ?? '',
        utm_device: input.utmDevice ?? '',
        utm_keyword: input.utmKeyword ?? '',
        utm_medium: input.utmMedium ?? '',
        utm_placement: input.utmPlacement ?? '',
        utm_source: input.utmSource ?? '',
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      signal: AbortSignal.timeout(8000),
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    await payload.update({
      collection: 'leads',
      id: lead.id,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: { forwardStatus: 'sent', forwardedAt: new Date().toISOString() },
    })
  } catch (error) {
    await payload.update({
      collection: 'leads',
      id: lead.id,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data: {
        forwardError: (error as Error).message.slice(0, 250),
        forwardStatus: 'failed',
      },
    })
    // Not rethrown: the enquiry is safely stored, so the visitor should still be
    // thanked. The failure is visible to the team in the Enquiries list.
  }

  return { ok: true }
}
