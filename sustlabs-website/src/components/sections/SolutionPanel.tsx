import { memo } from 'react'
import type { SolutionPanelProps } from '../../types'

function splitSolutionTitle(title: string) {
  const [lead, ...rest] = title.split(' ')

  return {
    accent: rest.join(' '),
    lead,
  }
}

function SolutionPanelComponent({ index, panel }: SolutionPanelProps) {
  const title = splitSolutionTitle(panel.eyebrow)
  const panelNumber = `${String(index + 1).padStart(2, '0')}.`

  return (
    <section className="solution-panel">
      <div className="solution-panel__hero">
        <div className="solution-panel__heading">
          <p className="solution-panel__number">{panelNumber}</p>
          <h2>
            <span className="solution-panel__lead">{title.lead}</span>
            {title.accent ? <span className="solution-panel__accent"> {title.accent}</span> : null}
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
