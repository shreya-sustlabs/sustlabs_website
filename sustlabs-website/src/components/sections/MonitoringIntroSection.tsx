import { memo } from 'react'
import type { MonitoringIntroSectionProps } from '../../types'

function MonitoringIntroSectionComponent({ accent, description, title }: MonitoringIntroSectionProps) {
  const titleWords = title.split(' ')
  const titleAccent = titleWords.at(-1)
  const titleLead = titleWords.slice(0, -1).join(' ')

  return (
    <section className="monitoring-intro" aria-labelledby="monitoring-page-title">
      <div className="monitoring-intro__inner">
        <h1 id="monitoring-page-title">
          {titleLead} <span style={{ color: accent }}>{titleAccent}</span>
        </h1>
        <p>{description}</p>
      </div>
    </section>
  )
}

export const MonitoringIntroSection = memo(MonitoringIntroSectionComponent)
