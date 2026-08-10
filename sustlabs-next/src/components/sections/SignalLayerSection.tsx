import { Fragment, memo } from 'react'
import type { HomeSignalLayerSectionData } from '@/types'
import { SignalStep } from '../ui/SignalStep'

type SignalLayerSectionProps = {
  section: HomeSignalLayerSectionData
}

function SignalLayerSectionComponent({ section }: SignalLayerSectionProps) {
  return (
    <section className="signal-layer" id="ohm-os">
      <div className="signal-layer__inner">
        <div className="signal-layer__heading">
          <p className="signal-layer__eyebrow">{section.eyebrow}</p>
          <h2>
            {section.titleLead.split(/\r?\n/).map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
            <span>{section.titleAccent}</span>
          </h2>
          <p>
            {section.description.split(/\r?\n/).map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </p>
        </div>

        <div className="signal-layer__steps" aria-label="Signal intelligence process">
          {section.steps.map((step) => (
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
