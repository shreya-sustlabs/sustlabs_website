import { memo } from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/logo.png'
import { FOOTER_CONTENT } from '../../utils/constants'

function FooterComponent() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" to="/" aria-label="SustLabs home">
          <img alt="SustLabs" src={footerLogo} />
        </Link>
        <p className="site-footer__tagline">{FOOTER_CONTENT.tagline}</p>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {FOOTER_CONTENT.columns.map((column) => (
            <div className="site-footer__column" key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <p>Copyright &copy; 2026 Sustlabs. All rights reserved.</p>
          <nav aria-label="Legal links">
            {FOOTER_CONTENT.legalLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
          <p>India</p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
