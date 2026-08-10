import { memo } from 'react'

type SmartDbPillProps = {
  children: string
  variant?: 'dark' | 'light'
}

function SmartDbPillComponent({ children, variant = 'light' }: SmartDbPillProps) {
  const className = variant === 'dark' ? 'smart-db-page__dark-pill' : 'smart-db-page__pill'

  return <p className={className}>{children}</p>
}

export const SmartDbPill = memo(SmartDbPillComponent)
