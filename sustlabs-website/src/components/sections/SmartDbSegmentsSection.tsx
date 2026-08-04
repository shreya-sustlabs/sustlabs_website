import { memo } from 'react'
import segmentFacilityImage from '../../assets/smartdb-segment-facility.webp'
import segmentResidentialImage from '../../assets/smartdb-segment-residential.webp'
import segmentRetrofitImage from '../../assets/smartdb-segment-retrofit.webp'
import segmentVillaImage from '../../assets/smartdb-segment-villa.webp'
import type { SmartDbSegment, SmartDbSegmentsSectionData } from '../../types'

type SmartDbSegmentsSectionProps = {
  section: SmartDbSegmentsSectionData
}

const SEGMENT_IMAGES: Record<SmartDbSegment['image'], string> = {
  facility: segmentFacilityImage,
  residential: segmentResidentialImage,
  retrofit: segmentRetrofitImage,
  villa: segmentVillaImage,
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
                <img alt={segment.alt} loading="lazy" src={SEGMENT_IMAGES[segment.image]} />
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
