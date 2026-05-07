import type { CardRailProps } from '../../types'

export function CardRail({ children, className = '', label }: CardRailProps) {
  const classNames = ['card-rail', className].filter(Boolean).join(' ')

  return (
    <div className={classNames} aria-label={label}>
      {children}
    </div>
  )
}
