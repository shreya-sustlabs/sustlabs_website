import { memo } from 'react'
import type { SolutionPanelProps } from '../../types'

function SolutionPanelComponent({ panel }: SolutionPanelProps) {
  return (
    <section className={`solution-panel solution-panel--${panel.tone}`}>
      <div className="solution-panel__hero">
        <div className="solution-panel__heading">
          <h2>
            <span className="solution-panel__lead">{panel.titleLead}</span>
            {panel.titlePrefix ? <> {panel.titlePrefix}</> : null}
            <span className="solution-panel__accent"> {panel.titleAccent}</span>
          </h2>
          {panel.description ? <p>{panel.description}</p> : null}
        </div>
      </div>

      <div className="solution-panel__capabilities">
        <ul>
          {panel.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const SolutionPanel = memo(SolutionPanelComponent)
