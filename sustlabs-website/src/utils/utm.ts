export type UtmParams = {
  utmAdgroup: string
  utmCampaign: string
  utmCreative: string
  utmDevice: string
  utmKeyword: string
  utmMedium: string
  utmPlacement: string
  utmSource: string
}

/**
 * The URL parameter each field is read from. Driving the read off this table
 * rather than eight hand-written lines means adding a tag is a one-line change
 * here instead of three edits that have to stay in sync.
 */
const PARAMS: Record<keyof UtmParams, string> = {
  utmAdgroup: 'utm_adgroup',
  utmCampaign: 'utm_campaign',
  utmCreative: 'utm_creative',
  utmDevice: 'utm_device',
  utmKeyword: 'utm_keyword',
  utmMedium: 'utm_medium',
  utmPlacement: 'utm_placement',
  utmSource: 'utm_source',
}

const KEYS = Object.keys(PARAMS) as (keyof UtmParams)[]

const EMPTY: UtmParams = {
  utmAdgroup: '',
  utmCampaign: '',
  utmCreative: '',
  utmDevice: '',
  utmKeyword: '',
  utmMedium: '',
  utmPlacement: '',
  utmSource: '',
}

const STORAGE_KEY = 'sustlabs:utm'

/**
 * Campaign tags only ever appear on the URL the visitor first landed on. By the
 * time they open a lead form they have usually navigated a page or two away, so
 * the first set we see is stashed for the rest of the session and reused —
 * reading `window.location.search` at submit time alone would attribute most
 * campaign traffic to nothing.
 */
export function getUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return EMPTY
  }

  const search = new URLSearchParams(window.location.search)
  const fromUrl = { ...EMPTY }
  let tagged = false

  for (const key of KEYS) {
    const value = search.get(PARAMS[key])?.trim() ?? ''

    fromUrl[key] = value
    tagged = tagged || value !== ''
  }

  if (tagged) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
    } catch {
      // Storage blocked (private browsing): the URL values still work for this page.
    }

    return fromUrl
  }

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)

    // Spread over EMPTY so a session stashed before a new tag existed still
    // returns a complete object rather than undefined for the new field.
    return stored ? { ...EMPTY, ...(JSON.parse(stored) as Partial<UtmParams>) } : EMPTY
  } catch {
    return EMPTY
  }
}
