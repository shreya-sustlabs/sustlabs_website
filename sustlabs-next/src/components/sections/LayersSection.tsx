import { memo } from 'react'
import type { HomeLayersSectionData } from '@/types'

type LayersSectionProps = {
  section: HomeLayersSectionData
}

function LayersSectionComponent({ section }: LayersSectionProps) {
    return (
        <section className="layers-section" id="add-ons">
            <div className="layers-section__inner">
                <div className="layers-section__heading">
                    <p className="section-pill layers-section__eyebrow">{section.eyebrow}</p>
                    <h2>
                        {section.titleLead}{' '}
                        <span>{section.titleAccent}</span>
                    </h2>
                    <p>{section.description}</p>
                </div>

                <div className="layers-grid" aria-label="Ohm OS product layers">
                    {section.layers.map((layer) => (
                        <article
                            className={`layer-card layer-card--${layer.tone}`}
                            key={layer.title}
                        >
                            <div className="layer-card__copy">
                                <h3>{layer.title}</h3>
                                <p>{layer.description}</p>
                            </div>
                            <img alt={layer.image.alt} className="layer-card__image" height={layer.image.height} src={layer.image.src} width={layer.image.width} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const LayersSection = memo(LayersSectionComponent)
