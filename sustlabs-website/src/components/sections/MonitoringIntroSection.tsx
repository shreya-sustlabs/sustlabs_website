import { memo } from 'react'
import type { MonitoringIntroSectionProps } from '../../types'

function MonitoringIntroSectionComponent({ section }: MonitoringIntroSectionProps) {
  return (
    <section className="monitoring-intro" aria-labelledby="monitoring-page-title">
      <div className="monitoring-intro__inner">
        <h1 id="monitoring-page-title">
          {section.titleLead} <span style={{ color: section.accent }}>{section.titleAccent}</span>
        </h1>
        <div className="monitoring-intro__descriptions">
          {section.descriptions.map((description) => (
            <p key={description}>{description}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export const MonitoringIntroSection = memo(MonitoringIntroSectionComponent)
