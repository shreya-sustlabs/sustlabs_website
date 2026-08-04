import { memo } from 'react'
import appAlertsImage from '../../assets/smartdb-app-alerts.webp'
import appEnergyImage from '../../assets/smartdb-app-energy.webp'
import appLiveImage from '../../assets/smartdb-app-live.webp'
import type { SmartDbAppScreen, SmartDbPocketSectionData } from '../../types'

type SmartDbPocketSectionProps = {
  section: SmartDbPocketSectionData
}

/** Intrinsic sizes reserve each frame so the lazy loads shift nothing below them. */
const SCREEN_IMAGES: Record<SmartDbAppScreen['image'], { height: number; src: string; width: number }> = {
  alerts: { height: 1362, src: appAlertsImage, width: 820 },
  energy: { height: 1365, src: appEnergyImage, width: 820 },
  live: { height: 1372, src: appLiveImage, width: 820 },
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

          {section.screens.map((screen) => {
            const image = SCREEN_IMAGES[screen.image]

            return (
              <figure className="sdb-pocket__item" key={screen.caption}>
                <div className="sdb-pocket__card sdb-pocket__card--screen">
                  <img
                    alt={screen.alt}
                    height={image.height}
                    loading="lazy"
                    src={image.src}
                    width={image.width}
                  />
                </div>
                <figcaption>{screen.caption}</figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export const SmartDbPocketSection = memo(SmartDbPocketSectionComponent)
