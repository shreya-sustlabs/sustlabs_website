import { memo } from 'react'
import type { SupportHeroSectionProps } from '@/types'

function SupportHeroSectionComponent({ section }: SupportHeroSectionProps) {
  return (
    <section className="support-hero">
      <div className="support-hero__inner">
        <h1>{section.title}</h1>

        <p>{section.description}</p>

        <div className="support-hero__qr-grid" aria-label="Support QR codes">
          {section.qrCards.map((card) => (
            <article className="support-qr-card" key={card.label}>
              <img alt={card.qrImage.alt} className="support-qr-card__code" src={card.qrImage.src} />
              <span className="support-qr-card__icon" aria-hidden="true">
                <img alt="" src={card.icon.src} />
              </span>
              <h2>{card.label}</h2>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const SupportHeroSection = memo(SupportHeroSectionComponent)
