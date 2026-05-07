import type { ButtonProps } from '../../types'

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  const classNames = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a className={classNames} {...props}>
      {children}
    </a>
  )
}
