import { memo } from 'react'
import type { FmsChainSectionProps } from '@/types'

function FmsChainSectionComponent({ section }: FmsChainSectionProps) {
  return (
    <section className="fms-chain" aria-labelledby="fms-chain-title">
      <div className="fms-chain__inner">
        <p className="fms-section-eyebrow fms-section-eyebrow--dark">{section.eyebrow}</p>

        <h2 className="fms-chain__title" id="fms-chain-title">
          <span className="fms-chain__title-line">{section.titleLead}</span>
          {section.titleAccent.split(/\r?\n/).map((line) => (
            <span className="fms-chain__title-line" key={line}>
              {line}
            </span>
          ))}
        </h2>

        {section.description ? <p className="fms-chain__description">{section.description}</p> : null}

        <figure className="fms-chain__frame">
          <video aria-label={section.mediaAlt} autoPlay loop muted playsInline preload="metadata" src={section.videoSrc} />
        </figure>

        <dl className="fms-chain__items">
          {section.items.map((item) => (
            <div className="fms-chain__item" key={item.title}>
              <dt>{item.title}</dt>
              <dd>{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export const FmsChainSection = memo(FmsChainSectionComponent)
