import { memo } from 'react'
import type { TechnologyPointProps } from '../../types'

function TechnologyPointComponent({ description, number, title }: TechnologyPointProps) {
    return (
        <article className="technology-point">
            <p className="technology-point__number">{number}</p>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export const TechnologyPoint = memo(TechnologyPointComponent)