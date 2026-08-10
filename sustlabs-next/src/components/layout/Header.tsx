'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackGaEvent } from '@/lib/analytics'
import type { NavItem } from '@/lib/cms/navigation'

type HeaderProps = {
  items: NavItem[]
  logo?: string
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

/**
 * The old header derived each link's URL from its label through a chain of
 * if-statements, hardcoded which two labels opened dropdowns, and hid one
 * product by testing whether its name contained "o5". All of that is editable
 * data now, so this is one uniform loop.
 */
function HeaderComponent({ items, logo }: HeaderProps) {
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // react-router's NavLink applied `.active` for us, and App.css styles it in
  // five places, so it has to be computed by hand here.
  const isActive = (item: { activePathPrefix?: string; url: string }) =>
    item.activePathPrefix ? pathname.startsWith(item.activePathPrefix) : pathname === item.url

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

  const closeAll = () => {
    setOpenMenu(null)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="site-header" aria-label="Primary navigation">
      <section className="logo-outer" aria-label="sustlab logo">
        <Link
          href="/"
          aria-label="Sustlabs home"
          onClick={() => {
            trackNavClick('Sustlabs home', '/')
            setOpenMenu(null)
          }}
        >
          <div className="logo-outer-div">{logo ? <img src={logo} alt="sustlabs" /> : null}</div>
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
        {items.map((item) =>
          item.children.length > 0 ? (
            <div className="site-header__menu" key={item.label}>
              <button
                className={`site-header__menu-trigger${isActive(item) ? ' active' : ''}`}
                type="button"
                aria-expanded={openMenu === item.label}
                aria-haspopup="true"
                onClick={() =>
                  setOpenMenu((currentMenu) => {
                    const willOpen = currentMenu !== item.label

                    trackNavMenuToggle(item.label, willOpen)

                    return willOpen ? item.label : null
                  })
                }
              >
                {item.label}
              </button>
              <div
                className="site-header__dropdown"
                aria-label={item.label}
                data-open={openMenu === item.label}
              >
                {item.children.map((child) => (
                  <Link
                    className={pathname === child.url ? 'active' : undefined}
                    href={child.url}
                    key={child.url}
                    rel={child.newTab ? 'noreferrer' : undefined}
                    target={child.newTab ? '_blank' : undefined}
                    onClick={() => {
                      trackNavClick(child.label, child.url)
                      closeAll()
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className={isActive(item) ? 'active' : undefined}
              href={item.url}
              key={item.label}
              rel={item.newTab ? 'noreferrer' : undefined}
              target={item.newTab ? '_blank' : undefined}
              onClick={() => {
                trackNavClick(item.label, item.url)
                closeAll()
              }}
            >
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  )
}

export const Header = memo(HeaderComponent)
