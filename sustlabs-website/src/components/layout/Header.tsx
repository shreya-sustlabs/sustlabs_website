import { memo, useEffect, useRef, useState } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MONITORING_PRODUCTS, NAV_LINKS } from '../../utils/constants'

function getNavTarget(link: string) {
  if (link === 'Ohm OS') {
    return '/'
  }

  if (link === 'Smart DB') {
    return '/smart-db'
  }

  const hash = link.toLowerCase().replaceAll(' ', '-')

  return `/#${hash}`
}

function HeaderComponent() {
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement>(null)
  const [isMonitoringOpen, setIsMonitoringOpen] = useState(false)

  useEffect(() => {
    setIsMonitoringOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isMonitoringOpen) {
      return undefined
    }

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMonitoringOpen(false)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMonitoringOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMonitoringOpen])

  return (
    <header className="site-header" aria-label="Primary navigation">
      <Link className="site-header__brand" to="/" aria-label="Sustlabs home">
        SUSTLABS
      </Link>

      <nav className="site-header__nav" aria-label="Main menu">
        {NAV_LINKS.map((link) =>
          link === 'Monitoring' ? (
            <div className="site-header__menu" key={link} ref={menuRef}>
              <button
                className="site-header__menu-trigger"
                type="button"
                aria-expanded={isMonitoringOpen}
                aria-haspopup="true"
                onClick={() => setIsMonitoringOpen((isOpen) => !isOpen)}
              >
                {link}
              </button>
              <div
                className="site-header__dropdown"
                aria-label="Monitoring products"
                data-open={isMonitoringOpen}
              >
                {MONITORING_PRODUCTS.map((product) => (
                  <NavLink to={product.path} key={product.path} onClick={() => setIsMonitoringOpen(false)}>
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
