import { memo } from 'react'
import type { SmartDbSegmentsSectionData } from '@/types'

type SmartDbSegmentsSectionProps = {
  section: SmartDbSegmentsSectionData
}

function SmartDbSegmentsSectionComponent({ section }: SmartDbSegmentsSectionProps) {
  return (
    <section className="sdb-segments" aria-labelledby="sdb-segments-title">
      <div className="sdb-segments__inner">
        <p className="sdb-eyebrow">{section.eyebrow}</p>

        <h2 className="sdb-title" id="sdb-segments-title">
          <span>{section.titleLead}</span>
          <span className="sdb-title__accent">{section.titleAccent}</span>
        </h2>

        <p className="sdb-description">{section.description}</p>

        <div className="sdb-segments__grid">
          {section.segments.map((segment) => (
            <article className="sdb-segments__card" key={segment.name}>
              <div className="sdb-segments__media">
                <img
                  alt={segment.image.alt}
                  height={segment.image.height}
                  loading="lazy"
                  src={segment.image.src}
                  width={segment.image.width}
                />
              </div>
              <h3>{segment.name}</h3>
              <p>{segment.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SmartDbSegmentsSection = memo(SmartDbSegmentsSectionComponent)
