import { memo, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { trackGaEvent } from '../../utils/analytics'
import { ADD_ON_PRODUCTS, MONITORING_PRODUCTS, NAV_LINKS } from '../../utils/constants'

type OpenMenu = 'products' | 'add-ons' | null

function getNavTarget(link: string) {
  if (link === 'Ohm OS') {
    return '/ohm-os'
  }

  if (link === 'Smart DB') {
    return '/smart-db'
  }

  if (link === 'Solutions') {
    return '/solutions'
  }

  if (link === 'Support') {
    return '/support'
  }

  const hash = link.toLowerCase().replaceAll(' ', '-')

  return `/#${hash}`
}

function trackNavClick(label: string, destination: string, placement = 'header') {
  trackGaEvent('nav_click', {
    nav_destination: destination,
    nav_label: label,
    nav_placement: placement,
  })
}

function trackNavMenuToggle(label: string, willOpen: boolean) {
  trackGaEvent('nav_menu_toggle', {
    menu_label: label,
    menu_state: willOpen ? 'open' : 'closed',
    nav_placement: 'header',
  })
}

function HeaderComponent() {
  const navRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMonitoringActive = pathname.startsWith('/monitoring')
  const isAddOnsActive = pathname.startsWith('/add-ons')

  useEffect(() => {
    if (!openMenu && !isMobileMenuOpen) {
      return undefined
    }

    function handlePointerDown(event: PointerEvent) {
      if (openMenu && !navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen, openMenu])

  return (
    <header className="site-header" aria-label="Primary navigation">
      {/* <Link className="site-header__brand" to="/" aria-label="Sustlabs home" onClick={() => setOpenMenu(null)}>
        SUSTLABS
      </Link> */}
      <section className="logo-outer" aria-label="sustlab logo">
        <Link
          to="/"
          aria-label="Sustlabs home"
          onClick={() => {
            trackNavClick('Sustlabs home', '/')
            setOpenMenu(null)
          }}
        >
          <div className="logo-outer-div">
            <img src={logo} alt="sustlabs" />
          </div>
        </Link>
      </section>

      <button
        className="site-header__toggle"
        type="button"
        aria-controls="site-header-menu"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => {
          setIsMobileMenuOpen((currentValue) => !currentValue)
          setOpenMenu(null)
        }}
      >
        {isMobileMenuOpen ? <X aria-hidden="true" size={24} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={24} strokeWidth={1.8} />}
      </button>

      <nav
        className="site-header__nav"
        aria-label="Main menu"
        data-open={isMobileMenuOpen}
        id="site-header-menu"
        ref={navRef}
      >
        {NAV_LINKS.map((link) =>
          link === 'Products' ? (
            <div className="site-header__menu" key={link}>
              <button
                className={`site-header__menu-trigger${isMonitoringActive ? ' active' : ''}`}
                type="button"
                aria-expanded={openMenu === 'products'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenMenu((currentMenu) => {
                    const willOpen = currentMenu !== 'products'

                    trackNavMenuToggle(link, willOpen)

                    return willOpen ? 'products' : null
                  })
                }
              >
                {link}
              </button>
              <div
                className="site-header__dropdown"
                aria-label="Products"
                data-open={openMenu === 'products'}
              >
                {MONITORING_PRODUCTS.filter((product) => !product?.navLabel.includes('o5')).map((product) => (
                  <NavLink
                    to={product.path}
                    key={product.path}
                    onClick={() => {
                      trackNavClick(product.navLabel, product.path)
                      setOpenMenu(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {product.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : link === 'Add-ons' ? (
            <div className="site-header__menu" key={link}>
              <button
                className={`site-header__menu-trigger${isAddOnsActive ? ' active' : ''}`}
                type="button"
                aria-expanded={openMenu === 'add-ons'}
                aria-haspopup="true"
                onClick={() =>
                  setOpenMenu((currentMenu) => {
                    const willOpen = currentMenu !== 'add-ons'

                    trackNavMenuToggle(link, willOpen)

                    return willOpen ? 'add-ons' : null
                  })
                }
              >
                {link}
              </button>
              <div className="site-header__dropdown" aria-label="Add-on products" data-open={openMenu === 'add-ons'}>
                {ADD_ON_PRODUCTS.map((product) => (
                  <NavLink
                    to={product.path}
                    key={product.path}
                    onClick={() => {
                      trackNavClick(product.navLabel, product.path)
                      setOpenMenu(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {product.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              to={getNavTarget(link)}
              key={link}
              onClick={() => {
                trackNavClick(link, getNavTarget(link))
                setOpenMenu(null)
                setIsMobileMenuOpen(false)
              }}
            >
              {link}
            </NavLink>
          ),
        )}
      </nav>

      {/* <div className="site-header__actions" aria-label="Quick actions">
        <button className="icon-button" type="button" aria-label="Search">
          <Search aria-hidden="true" size={22} strokeWidth={1.75} />
        </button>
        <button className="icon-button" type="button" aria-label="Open bag">
          <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.75} />
        </button>
      </div> */}
    </header>
  )
}

export const Header = memo(HeaderComponent)
