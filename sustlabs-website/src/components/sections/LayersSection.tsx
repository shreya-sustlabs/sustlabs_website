import { memo } from 'react'
import { LAYERS_CONTENT, SYSTEM_LAYERS } from '../../utils/constants'
import { LayerCard } from '../ui/LayerCard'

function LayersSectionComponent() {
    return (
        <section className="layers-section" id="add-ons">
            <div className="layers-section__inner">
                <div className="layers-section__heading">
                    <p className="section-pill layers-section__eyebrow">{LAYERS_CONTENT.eyebrow}</p>
                    <h2>
                        {LAYERS_CONTENT.titleLead}{' '}
                        <span>{LAYERS_CONTENT.titleAccent}</span>
                    </h2>
                    <p>{LAYERS_CONTENT.description}</p>
                </div>

                <div className="layers-grid" aria-label="Ohm OS product layers">
                    {SYSTEM_LAYERS.map((layer) => (
                        <LayerCard
                            key={layer.title}
                            title={layer.title}
                            description={layer.description}
                            tone={layer.tone}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const LayersSection = memo(LayersSectionComponent)