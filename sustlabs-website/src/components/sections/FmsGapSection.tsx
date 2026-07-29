import { memo } from 'react'
import { Check, X } from 'lucide-react'
import type { FmsGapSectionProps } from '../../types'

function FmsGapSectionComponent({ section }: FmsGapSectionProps) {
  return (
    <section className="fms-gap" aria-labelledby="fms-gap-title">
      <div className="fms-gap__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id="fms-gap-title">
          <span>{section.titleLead}</span>{' '}
          {section.titleHighlight ? (
            <>
              <span className="fms-section-title__highlight">{section.titleHighlight}</span>{' '}
            </>
          ) : null}
          <span className="fms-section-title__accent">{section.titleAccent}</span>
        </h2>

        {section.description ? <p className="fms-section-description">{section.description}</p> : null}

        <div className="fms-gap__columns">
          {section.columns.map((column) => (
            <article className={`fms-gap__card fms-gap__card--${column.tone}`} key={column.title}>
              <p className="fms-gap__card-eyebrow">{column.eyebrow}</p>
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>
                    {column.tone === 'readiness' ? (
                      <Check aria-hidden="true" size={16} strokeWidth={2} />
                    ) : (
                      <X aria-hidden="true" size={16} strokeWidth={2} />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const FmsGapSection = memo(FmsGapSectionComponent)
