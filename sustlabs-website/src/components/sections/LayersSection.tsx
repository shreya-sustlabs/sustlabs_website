import { memo } from 'react'
import assistantLayerImage from '../../assets/Group 1.png'
import nativeLayerImage from '../../assets/Group.png'
import { LAYERS_CONTENT } from '../../utils/constants'

const LAYER_SHOWCASE = [
    {
        title: 'Ohm Assistant',
        description:
            'The consumer-facing app for energy visibility, safety alerts, appliance intelligence, and bill clarity.',
        image: assistantLayerImage,
        tone: 'light',
    },
    {
        title: 'Ohm Native',
        description:
            'The core intelligence and data exchange layer for dashboards, APIs, utilities, and enterprise workflows.',
        image: nativeLayerImage,
        tone: 'dark',
    },
] as const

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
                    {LAYER_SHOWCASE.map((layer) => (
                        <article
                            className={`layer-card layer-card--${layer.tone}`}
                            key={layer.title}
                        >
                            <div className="layer-card__copy">
                                <h3>{layer.title}</h3>
                                <p>{layer.description}</p>
                            </div>
                            <img src={layer.image} alt="" className="layer-card__image" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const LayersSection = memo(LayersSectionComponent)
