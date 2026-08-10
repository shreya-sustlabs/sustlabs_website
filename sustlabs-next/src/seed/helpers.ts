/** Token that stands in for a link held once in Site settings. */
export const CALENDLY_TOKEN = '{{settings.demoBookingUrl}}'

const SHARED_LINKS: Array<{ match: (href: string) => boolean; token: string }> = [
  {
    match: (href) => href.includes('calendly.com'),
    token: CALENDLY_TOKEN,
  },
  {
    match: (href) => href.includes('miraielifestyle.com') && /\/?$/.test(href) === false,
    token: '{{settings.storeUrl}}',
  },
  {
    match: (href) => href.includes('drive.google.com'),
    token: '{{settings.setupGuideUrl}}',
  },
  {
    match: (href) => href.includes('youtu.be') || href.includes('youtube.com'),
    token: '{{settings.overviewVideoUrl}}',
  },
]

/**
 * Replaces a link that appears in several places with a token resolved from Site
 * settings, so the team changes it once. The Calendly demo link alone was copied
 * into five different places in the original content.
 */
export const withSettingsToken = (href: string): string => {
  const shared = SHARED_LINKS.find((candidate) => candidate.match(href))

  return shared ? shared.token : href
}

/**
 * Payload has no primitive-array field, so every `string[]` in the original
 * content is stored as rows of `{ text }`.
 */
export const toList = (values: readonly string[]) => values.map((text) => ({ text }))
