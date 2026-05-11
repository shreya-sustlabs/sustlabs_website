import { memo } from 'react'
import { SIGNAL_LAYER_CONTENT, SIGNAL_STEPS } from '../../utils/constants'
import { SignalStep } from '../ui/SignalStep'

function SignalLayerSectionComponent() {
  return (
    <section className="signal-layer" id="ohm-os">
      <div className="signal-layer__inner">
        <div className="signal-layer__heading">
          <p className="signal-layer__eyebrow">{SIGNAL_LAYER_CONTENT.eyebrow}</p>
          <h2>
            {SIGNAL_LAYER_CONTENT.titleLead}
            <span>{SIGNAL_LAYER_CONTENT.titleAccent}</span>
          </h2>
          <p>{SIGNAL_LAYER_CONTENT.description}</p>
        </div>

        <div className="signal-layer__steps" aria-label="Signal intelligence process">
          {SIGNAL_STEPS.map((step) => (
            <SignalStep
              description={step.description}
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export const SignalLayerSection = memo(SignalLayerSectionComponent)
