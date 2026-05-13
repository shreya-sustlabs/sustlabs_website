import { memo } from 'react'
import oraEnablesImage from '../../assets/ora2.webp'
import type { OraEnablesSectionProps } from '../../types'

function OraEnablesSectionComponent({ }: OraEnablesSectionProps) {
  return (
    <section className="ora-add-on-enables" aria-labelledby="ora-enables-title">
      {/* <div className="ora-add-on-enables__intro">
        <div className="ora-add-on-enables__heading">
          <h2 id="ora-enables-title">
            <span>{section.titleLead}</span> {section.titleAccent}
          </h2>
          <p>{section.description}</p>
        </div>
        <div className="ora-add-on-enables__cards" aria-label="Ora resident value">
          {section.cards.map((card) => (
            <article className="ora-add-on-enables__card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div> */}
      <img
        alt="Ora wall display states showing safety alerts, energy clarity, appliance insights, and ambient clock views"
        className="ora-add-on-enables__visual"
        src={oraEnablesImage}
      />
    </section>
  )
}

export const OraEnablesSection = memo(OraEnablesSectionComponent)
