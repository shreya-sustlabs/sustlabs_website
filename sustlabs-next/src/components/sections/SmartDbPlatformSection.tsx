import { memo } from 'react'
import type { SmartDbPlatformSectionData } from '@/types'

type SmartDbPlatformSectionProps = {
  section: SmartDbPlatformSectionData
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
            <article className={`sdb-platform__tile sdb-platform__tile--${tile.variant}`} key={tile.name}>
              <div className="sdb-platform__media">
                <img
                  alt={tile.image.alt || `Smart DB on ${tile.name}`}
                  height={tile.image.height}
                  loading="lazy"
                  src={tile.image.src}
                  width={tile.image.width}
                />
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
