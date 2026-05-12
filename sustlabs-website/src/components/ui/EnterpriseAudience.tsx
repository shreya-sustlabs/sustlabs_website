import { memo } from 'react'
import type { EnterpriseAudienceProps } from '../../types'

function EnterpriseAudienceComponent({ description, number, title }: EnterpriseAudienceProps) {
    return (
        <article className="enterprise-audience">
            {/* <p className="enterprise-audience__number">{number}</p> */}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export const EnterpriseAudience = memo(EnterpriseAudienceComponent)