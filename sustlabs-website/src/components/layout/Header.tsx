import { memo } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { MONITORING_PRODUCTS, NAV_LINKS } from '../../utils/constants'

const NAV_HASHES: Partial<Record<(typeof NAV_LINKS)[number], string>> = {
  'Smart DB': 'smart-db-details',
}

function getNavTarget(link: string) {
  if (link === 'Ohm OS') {
    return '/'
  }

  const hash = NAV_HASHES[link as (typeof NAV_LINKS)[number]] ?? link.toLowerCase().replaceAll(' ', '-')

  return `/#${hash}`
}

function HeaderComponent() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link className="site-header__brand" to="/" aria-label="Sustlabs home">
        SUSTLABS
      </Link>

      <nav className="site-header__nav" aria-label="Main menu">
        {NAV_LINKS.map((link) =>
          link === 'Monitoring' ? (
            <div className="site-header__menu" key={link}>
              <button className="site-header__menu-trigger" type="button" aria-expanded="false">
                {link}
              </button>
              <div className="site-header__dropdown" aria-label="Monitoring products">
                {MONITORING_PRODUCTS.map((product) => (
                  <NavLink to={product.path} key={product.path}>
                    {product.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <Link to={getNavTarget(link)} key={link}>
              {link}
            </Link>
          ),
        )}
      </nav>

      <div className="site-header__actions" aria-label="Quick actions">
        <button className="icon-button" type="button" aria-label="Search">
          <Search aria-hidden="true" size={22} strokeWidth={1.75} />
        </button>
        <button className="icon-button" type="button" aria-label="Open bag">
          <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.75} />
        </button>
      </div>
    </header>
  )
}

export const Header = memo(HeaderComponent)
