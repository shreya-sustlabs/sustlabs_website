import { memo } from 'react'
import appImage from '../../assets/smartdb-app.webp'
import clockImage from '../../assets/smartdb-ora.webp'
import dashboardImage from '../../assets/smartdb-dashboard.webp'
import type { SmartDbPlatformSectionData, SmartDbPlatformTile } from '../../types'

type SmartDbPlatformSectionProps = {
  section: SmartDbPlatformSectionData
}

const TILE_IMAGES: Record<SmartDbPlatformTile['image'], string> = {
  app: appImage,
  clock: clockImage,
  dashboard: dashboardImage,
}

function SmartDbPlatformSectionComponent({ section }: SmartDbPlatformSectionProps) {
  return (
    <section className="sdb-platform" aria-labelledby="sdb-platform-title">
      <div className="sdb-platform__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        {/* Both halves sit on one line here, so the spans need a real space. */}
        <h2 className="sdb-title" id="sdb-platform-title">
          <span>{section.titleLead}</span>{' '}
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <div className="sdb-platform__grid">
          {section.tiles.map((tile) => (
            <article className={`sdb-platform__tile sdb-platform__tile--${tile.image}`} key={tile.name}>
              <div className="sdb-platform__media">
                <img alt={`Smart DB on ${tile.name}`} loading="lazy" src={TILE_IMAGES[tile.image]} />
              </div>
              <h3>{tile.name}</h3>
              <p className="sdb-platform__kicker">{tile.kicker}</p>
              <p>{tile.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbPlatformSection = memo(SmartDbPlatformSectionComponent)
