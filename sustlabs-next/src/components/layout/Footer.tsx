import { memo } from 'react'
import Link from 'next/link'
import type { SiteChrome } from '@/lib/cms/navigation'

type FooterProps = {
  content: SiteChrome['footer']
  logo?: string
}

function FooterLink({ label, newTab, url }: { label: string; newTab: boolean; url: string }) {
  if (newTab || url.startsWith('http')) {
    return (
      <a href={url} rel="noreferrer" target="_blank">
        {label}
      </a>
    )
  }

  return <Link href={url}>{label}</Link>
}

function FooterComponent({ content, logo }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link className="site-footer__brand" href="/" aria-label="SustLabs home">
              {logo ? <img alt="SustLabs" src={logo} /> : null}
            </Link>
            <p className="site-footer__tagline">{content.tagline}</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {content.columns.map((column) => (
              <div className="site-footer__column" key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.url}>
                      <FooterLink label={link.label} newTab={link.newTab} url={link.url} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>{content.copyright}</p>
          <nav aria-label="Legal links">
            {content.legalLinks.map((link) => (
              <FooterLink key={link.url} label={link.label} newTab={link.newTab} url={link.url} />
            ))}
          </nav>
          <p className="site-footer__address">{content.address}</p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
