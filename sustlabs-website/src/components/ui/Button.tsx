import { Link } from 'react-router-dom'
import type { ButtonProps } from '../../types'
import { trackGaEvent } from '../../utils/analytics'

function getButtonLabel(children: ButtonProps['children'], ariaLabel?: string) {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }

  return ariaLabel ?? 'Button'
}

export function Button({ children, className = '', href, onClick, variant = 'primary', ...props }: ButtonProps) {
  const classNames = ['button', `button--${variant}`, className].filter(Boolean).join(' ')
  const handleClick: ButtonProps['onClick'] = (event) => {
    trackGaEvent('button_click', {
      button_href: href,
      button_label: getButtonLabel(children, props['aria-label']),
      button_variant: variant,
    })

    onClick?.(event)
  }

  if (href?.startsWith('/')) {
    return (
      <Link className={classNames} to={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
<<<<<<< Updated upstream
    <a className={classNames} href={href} {...props} target="_blank">
=======
    <a className={classNames} href={href} onClick={handleClick} {...props}>
>>>>>>> Stashed changes
      {children}
    </a>
  )
}
