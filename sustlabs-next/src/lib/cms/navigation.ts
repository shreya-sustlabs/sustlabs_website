import { getPayload } from 'payload'
import config from '@payload-config'

import type { Setting } from '@/payload-types'
import { req, resolveUrl, uploadUrlOpt } from './helpers'

export type NavLink = {
  label: string
  newTab: boolean
  url: string
}

export type NavItem = NavLink & {
  /** Highlights the item anywhere under this path, e.g. /products. */
  activePathPrefix?: string
  children: NavLink[]
}

export type FooterColumn = {
  links: NavLink[]
  title: string
}

export type SiteChrome = {
  footer: {
    address: string
    columns: FooterColumn[]
    copyright: string
    legalLinks: NavLink[]
    tagline: string
  }
  header: NavItem[]
  logo?: string
}

const link = (
  row: { label?: string | null; newTab?: boolean | null; url?: string | null },
  settings: Setting,
  at: string,
): NavLink => ({
  label: req(row.label, `${at}.label`),
  newTab: Boolean(row.newTab),
  url: resolveUrl(req(row.url, `${at}.url`), settings),
})

/**
 * The header and footer render on every route, so this is fetched once in the
 * layout rather than by each page.
 */
export async function getSiteChrome(): Promise<SiteChrome> {
  const payload = await getPayload({ config })
  const [nav, settings] = await Promise.all([
    payload.findGlobal({ slug: 'navigation', depth: 1 }),
    payload.findGlobal({ slug: 'settings', depth: 1 }),
  ])

  const footer = req(nav.footer, 'footer')

  return {
    header: (nav.header ?? []).map((item, index) => ({
      activePathPrefix: item.activePathPrefix ?? undefined,
      children: (item.children ?? []).map((child, childIndex) =>
        link(child, settings, `header[${index}].children[${childIndex}]`),
      ),
      label: req(item.label, `header[${index}].label`),
      newTab: Boolean(item.newTab),
      // A dropdown parent has no destination of its own.
      url: item.url ? resolveUrl(item.url, settings) : '',
    })),
    footer: {
      address: req(settings.officeAddress, 'settings.officeAddress'),
      columns: (footer.columns ?? []).map((column, index) => ({
        links: (column.links ?? []).map((row, rowIndex) =>
          link(row, settings, `footer.columns[${index}].links[${rowIndex}]`),
        ),
        title: req(column.title, `footer.columns[${index}].title`),
      })),
      copyright: req(footer.copyright, 'footer.copyright'),
      legalLinks: (footer.legalLinks ?? []).map((row, index) =>
        link(row, settings, `footer.legalLinks[${index}]`),
      ),
      tagline: req(footer.tagline, 'footer.tagline'),
    },
    logo: uploadUrlOpt(settings.logo),
  }
}
