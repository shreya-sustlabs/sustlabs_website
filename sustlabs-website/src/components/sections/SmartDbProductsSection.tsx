import { memo } from 'react'
import type { SmartDbProductsSectionData } from '../../types'
import { Button } from '../ui/Button'
import { SmartDbPill } from '../ui/SmartDbPill'

type SmartDbProductsSectionProps = {
  section: SmartDbProductsSectionData
}

function SmartDbProductsSectionComponent({ section }: SmartDbProductsSectionProps) {
  return (
    <section className="smart-db-page__products" aria-labelledby="smart-db-products-title">
      <div className="smart-db-page__products-heading">
        <SmartDbPill>{section.eyebrow}</SmartDbPill>
        <h2 id="smart-db-products-title">
          <span style={{ color: section.accent }}>{section.titleLead}</span> <span style={{ color: 'var(--black300)' }}>{section.titleAccent}</span>
        </h2>
        <p>{section.description}</p>
      </div>
      <div className="smart-db-page__product-grid">
        {section.cards.map((product) => (
          <article
            className={`smart-db-page__product-card smart-db-page__product-card--${product.tone}`}
            key={product.eyebrow}
          >
            <p>{product.eyebrow}</p>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Button href={product.action.href} variant={product.action.variant}>
              {product.action.label}
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

export const SmartDbProductsSection = memo(SmartDbProductsSectionComponent)
