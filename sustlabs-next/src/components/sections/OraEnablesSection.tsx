import { memo } from 'react'
import type { OraEnablesSectionProps } from '@/types'

function OraEnablesSectionComponent({ section }: OraEnablesSectionProps) {
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
        alt={section.image.alt}
        className="ora-add-on-enables__visual"
        height={section.image.height}
        src={section.image.src}
        width={section.image.width}
      />
    </section>
  )
}

export const OraEnablesSection = memo(OraEnablesSectionComponent)
