import { memo } from 'react'
import { Search, ShoppingBag } from 'lucide-react'
import { NAV_LINKS } from '../../utils/constants'

function HeaderComponent() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="site-header__brand" href="/" aria-label="Sustlabs home">
        SUSTLABS
      </a>

      <nav className="site-header__nav" aria-label="Main menu">
        {NAV_LINKS.map((link) => (
          <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
            {link}
          </a>
        ))}
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
