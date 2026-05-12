import { memo } from 'react'
import type { SolutionPanelProps } from '../../types'

function SolutionPanelComponent({ index, panel }: SolutionPanelProps) {
  const panelNumber = `${String(index + 1).padStart(2, '0')}.`

  return (
    <section className="solution-panel">
      <div className="solution-panel__hero">
        <div className="solution-panel__heading">
          <p className="solution-panel__number">{panelNumber}</p>
          <h2>
            <span className="solution-panel__lead">{panel.titleLead}</span>
            {panel.titleAccent ? <span className="solution-panel__accent"> {panel.titleAccent}</span> : null}
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
