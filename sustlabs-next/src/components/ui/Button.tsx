'use client'

import Link from 'next/link'
import type { ButtonProps } from '@/types'
import { trackGaEvent } from '@/lib/analytics'

function getButtonLabel(children: ButtonProps['children'], ariaLabel?: string) {
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children)
  }

  return ariaLabel ?? 'Button'
}

function getEventName(type?: string) {
  return type ?? 'button_click'
}


export function Button({ children, className = '', href, onClick, variant = 'primary', ...props }: ButtonProps) {
  const classNames = ['button', `button--${variant}`, className].filter(Boolean).join(' ')
  const handleClick: ButtonProps['onClick'] = (event) => {
    trackGaEvent(getEventName(props['type']), {
      button_href: href,
      button_label: getButtonLabel(children, props['aria-label']),
      button_variant: variant,
    })

    onClick?.(event)
  }

  if (href?.startsWith('/')) {
    return (
      <Link className={classNames} href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classNames} href={href} onClick={handleClick} {...props} target="_blank">
      {children}
    </a>
  )
}
