import { memo } from 'react'
import type { SmartDbPocketSectionData } from '@/types'

type SmartDbPocketSectionProps = {
  section: SmartDbPocketSectionData
}

function SmartDbPocketSectionComponent({ section }: SmartDbPocketSectionProps) {
  return (
    <section className="sdb-pocket" aria-labelledby="sdb-pocket-title">
      <div className="sdb-pocket__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        <h2 className="sdb-title" id="sdb-pocket-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <p className="sdb-description">{section.description}</p>

        <div className="sdb-pocket__rail">
          {/* The eyebrow doubles as this card's caption — uppercased in the pill,
              sentence case below the card, so the string is only stored once. */}
          <figure className="sdb-pocket__item">
            <div className="sdb-pocket__card sdb-pocket__card--highlight">
              <p className="sdb-pocket__pill">{section.highlight.eyebrow}</p>
              <h3>{section.highlight.title}</h3>
              <p>{section.highlight.description}</p>
            </div>
            <figcaption>{section.highlight.eyebrow}</figcaption>
          </figure>

          {section.screens.map((screen) => (
            <figure className="sdb-pocket__item" key={screen.caption}>
              <div className="sdb-pocket__card sdb-pocket__card--screen">
                <img
                  alt={screen.image.alt}
                  height={screen.image.height}
                  loading="lazy"
                  src={screen.image.src}
                  width={screen.image.width}
                />
              </div>
              <figcaption>{screen.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbPocketSection = memo(SmartDbPocketSectionComponent)
