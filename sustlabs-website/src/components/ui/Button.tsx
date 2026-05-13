import { Link } from 'react-router-dom'
import type { ButtonProps } from '../../types'

export function Button({ children, className = '', href, variant = 'primary', ...props }: ButtonProps) {
  const classNames = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (href?.startsWith('/')) {
    return (
      <Link className={classNames} to={href} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classNames} href={href} {...props} target="_blank">
      {children}
    </a>
  )
}
