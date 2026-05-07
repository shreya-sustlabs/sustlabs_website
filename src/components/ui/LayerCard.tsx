import { memo } from 'react'
import type { LayerCardProps } from '../../types'

function LayerCardComponent({ description, title, tone }: LayerCardProps) {
  return (
    <article className={`layer-card layer-card--${tone}`}>
      <div className="layer-card__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}

export const LayerCard = memo(LayerCardComponent)
