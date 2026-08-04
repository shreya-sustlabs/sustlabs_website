import { memo } from 'react'
import layersImage from '../../assets/smartdb-layers.webp'
import type { SmartDbLayersSectionData } from '../../types'

type SmartDbLayersSectionProps = {
  section: SmartDbLayersSectionData
}

function SmartDbLayersSectionComponent({ section }: SmartDbLayersSectionProps) {
  return (
    <section className="sdb-layers" aria-labelledby="sdb-layers-title">
      <div className="sdb-layers__inner">
        <h2 className="sdb-layers__title" id="sdb-layers-title">
          {section.title}
        </h2>

        <figure className="sdb-layers__figure">
          {/* Intrinsic size reserves the box so the lazy load shifts nothing below it.
              The render already carries its own "Intelligence Layer" / "Conventional
              Layer" callouts, so the section adds no legend of its own. */}
          <img alt={section.imageAlt} height={1002} loading="lazy" src={layersImage} width={2000} />
        </figure>
      </div>
    </section>
  )
}

export const SmartDbLayersSection = memo(SmartDbLayersSectionComponent)
