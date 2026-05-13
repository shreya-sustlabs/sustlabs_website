import { memo } from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/logo.png'
import { FOOTER_CONTENT } from '../../utils/constants'

function FooterLink({ label, path }: { label: string; path: string }) {
  if (path.startsWith('http')) {
    return (
      <a href={path} rel="noreferrer" target="_blank">
        {label}
      </a>
    )
  }

  return <Link to={path}>{label}</Link>
}

function FooterComponent() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <Link className="site-footer__brand" to="/" aria-label="SustLabs home">
              <img alt="SustLabs" src={footerLogo} />
            </Link>
            <p className="site-footer__tagline">{FOOTER_CONTENT.tagline}</p>
          </div>

          <nav className="site-footer__nav" aria-label="Footer navigation">
            {FOOTER_CONTENT.columns.map((column) => (
              <div className="site-footer__column" key={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.path}>
                      <FooterLink label={link.label} path={link.path} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="site-footer__bottom">
          <p>Copyright &copy; 2026 Sustlabs. All rights reserved.</p>
          <nav aria-label="Legal links">
            {FOOTER_CONTENT.legalLinks.map((link) => (
              <FooterLink key={link.path} label={link.label} path={link.path} />
            ))}
          </nav>
          <p className="site-footer__address">
            Aspire Research Park, IIT Bombay, Mumbai (India)
          </p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
