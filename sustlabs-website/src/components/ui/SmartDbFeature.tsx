import { memo } from 'react'
import type { SmartDbFeatureProps } from '../../types'

function SmartDbFeatureComponent({ description, title }: SmartDbFeatureProps) {
    return (
        <article className={`smart-db-feature smart-db-feature`}>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export const SmartDbFeature = memo(SmartDbFeatureComponent)