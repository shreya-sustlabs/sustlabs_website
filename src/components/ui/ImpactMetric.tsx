import { memo } from 'react'
import type { ImpactMetricProps } from '../../types'

function ImpactMetricComponent({ label, value, variant }: ImpactMetricProps) {
  return (
    <article className={`impact-metric impact-metric--${variant}`}>
      <p className="impact-metric__value">{value}</p>
      <p className="impact-metric__label">{label}</p>
    </article>
  )
}

export const ImpactMetric = memo(ImpactMetricComponent)
