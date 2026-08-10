type GaEventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, params?: GaEventParams) => void
  }
}

export function trackGaEvent(eventName: string, params: GaEventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, params)
}
