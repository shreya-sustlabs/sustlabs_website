import { memo } from 'react'
import type { SmartDbFeatureProps } from '../../types'

function SmartDbFeatureComponent({ accent, description, title }: SmartDbFeatureProps) {
  return (
    <article className={`smart-db-feature smart-db-feature--${accent}`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export const SmartDbFeature = memo(SmartDbFeatureComponent)
