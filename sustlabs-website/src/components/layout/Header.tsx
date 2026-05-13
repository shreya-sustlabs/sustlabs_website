import { memo, useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ADD_ON_PRODUCTS, MONITORING_PRODUCTS, NAV_LINKS } from '../../utils/constants'

type OpenMenu = 'monitoring' | 'add-ons' | null

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

function HeaderComponent() {
  const navRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null)
  const isMonitoringActive = pathname.startsWith('/monitoring')
  const isAddOnsActive = pathname.startsWith('/add-ons')

  useEffect(() => {
    if (!openMenu) {
      return undefined
    }

    function handlePointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenMenu(null)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [openMenu])

  return (
    <header className="site-header" aria-label="Primary navigation">
      {/* <Link className="site-header__brand" to="/" aria-label="Sustlabs home" onClick={() => setOpenMenu(null)}>
        SUSTLABS
      </Link> */}
      <section className="logo-outer" aria-label="sustlab logo">
        <Link to="/" aria-label="Sustlabs home" onClick={() => setOpenMenu(null)}>
          <div className="logo-outer-div">
            <img src={logo} alt="sustlabs" />
          </div>
        </Link>
      </section>


      <nav className="site-header__nav" aria-label="Main menu" ref={navRef}>
        {NAV_LINKS.map((link) =>
          link === 'Products' ? (
            <div className="site-header__menu" key={link}>
              <button
                className={`site-header__menu-trigger${isMonitoringActive ? ' active' : ''}`}
                type="button"
                aria-expanded={openMenu === 'monitoring'}
                aria-haspopup="true"
                onClick={() => setOpenMenu((currentMenu) => (currentMenu === 'monitoring' ? null : 'monitoring'))}
              >
                {link}
              </button>
              <div
                className="site-header__dropdown"
                aria-label="Monitoring products"
                data-open={openMenu === 'monitoring'}
              >
                {MONITORING_PRODUCTS.filter((product) => !product?.navLabel.includes('o5')).map((product) => (
                  <NavLink to={product.path} key={product.path} onClick={() => setOpenMenu(null)}>
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
                onClick={() => setOpenMenu((currentMenu) => (currentMenu === 'add-ons' ? null : 'add-ons'))}
              >
                {link}
              </button>
              <div className="site-header__dropdown" aria-label="Add-on products" data-open={openMenu === 'add-ons'}>
                {ADD_ON_PRODUCTS.map((product) => (
                  <NavLink to={product.path} key={product.path} onClick={() => setOpenMenu(null)}>
                    {product.navLabel}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink to={getNavTarget(link)} key={link} onClick={() => setOpenMenu(null)}>
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
