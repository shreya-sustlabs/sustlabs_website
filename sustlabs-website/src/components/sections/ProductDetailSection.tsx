import { memo } from 'react'
import type { ProductDetailSection as ProductDetailSectionData } from '../../types'

type ProductDetailSectionProps = {
  section: ProductDetailSectionData
}

function ProductDetailSectionComponent({ section }: ProductDetailSectionProps) {
  return (
    <section className="product-detail-section">
      <div
        className="product-detail-section__visual"
        style={{ backgroundColor: section.visualColor }}
        aria-hidden="true"
      />

      <div className="product-detail-section__inner">
        <div className="product-detail-list" aria-label="Product capabilities">
          {section.items.map((item) => (
            <article className="product-detail-item" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {section.body ? <p className="product-detail-section__body">{section.body}</p> : null}
      </div>
    </section>
  )
}

export const ProductDetailSection = memo(ProductDetailSectionComponent)
