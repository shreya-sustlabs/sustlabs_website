import { memo } from 'react'
import type { OraDeveloperSectionProps } from '../../types'

function OraDeveloperSectionComponent({ section }: OraDeveloperSectionProps) {
  return (
    <section className="ora-add-on-developers" aria-labelledby="ora-developers-title">
      <div className="ora-add-on-developers__inner">
        <div className="ora-add-on-developers__heading">
          <h2 id="ora-developers-title">
            <span>{section.titleLead}</span>
            <span>{section.titleAccent}</span>
          </h2>
          <p>{section.description}</p>
        </div>

        <div className="ora-add-on-developers__benefits" aria-label="Ora benefits for developers">
          {section.benefits.map((benefit) => (
            <article className="ora-add-on-benefit" key={benefit.number}>
              <p className="ora-add-on-benefit__number">{benefit.number}</p>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const OraDeveloperSection = memo(OraDeveloperSectionComponent)
