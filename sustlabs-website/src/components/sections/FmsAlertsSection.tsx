import { Fragment, memo } from 'react'
import type { FmsAlertsSectionProps } from '../../types'

function FmsAlertsSectionComponent({ section }: FmsAlertsSectionProps) {
  return (
    <section className="fms-alerts" aria-labelledby="fms-alerts-title">
      <div className="fms-alerts__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id="fms-alerts-title">
          <span>
            {section.titleLead.split('\n').map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </span>{' '}
          <span className="fms-section-title__accent">{section.titleAccent}</span>
        </h2>

        {section.description ? <p className="fms-section-description">{section.description}</p> : null}

        <ul className="fms-alerts__grid">
          {section.cards.map((card) => (
            <li className={`fms-alerts__card fms-alerts__card--${card.tone}`} key={card.body}>
              <p className="fms-alerts__meta">{card.meta}</p>
              <p className="fms-alerts__body">{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export const FmsAlertsSection = memo(FmsAlertsSectionComponent)
