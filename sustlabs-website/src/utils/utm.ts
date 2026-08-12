export type UtmParams = {
  utmCampaign: string
  utmMedium: string
  utmSource: string
}

const EMPTY: UtmParams = { utmCampaign: '', utmMedium: '', utmSource: '' }

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

  const params = new URLSearchParams(window.location.search)
  const fromUrl: UtmParams = {
    utmCampaign: params.get('utm_campaign')?.trim() ?? '',
    utmMedium: params.get('utm_medium')?.trim() ?? '',
    utmSource: params.get('utm_source')?.trim() ?? '',
  }
  console.log('utm params', fromUrl)

  if (fromUrl.utmSource || fromUrl.utmMedium || fromUrl.utmCampaign) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl))
    } catch {
      // Storage blocked (private browsing): the URL values still work for this page.
    }

    return fromUrl
  }

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY)

    return stored ? { ...EMPTY, ...(JSON.parse(stored) as Partial<UtmParams>) } : EMPTY
  } catch {
    return EMPTY
  }
}
