import { memo } from 'react'
import type { SupportHeroSectionProps } from '../../types'
import callIcon from '../../assets/callIcon.svg'
import whatsappIcon from '../../assets/waIcon.svg'
import callQR from '../../assets/call.svg'
import whatsappQR from '../../assets/whatsapp.svg'

const supportQrCards = [
  {
    description: 'Scan the QR code to start chatting with Ohm Support on WhatsApp.',
    icon: whatsappIcon,
    qrImage: whatsappQR,
    label: 'Scan to Chat',
  },
  {
    description: 'Scan to call support agent directly from your phone.',
    icon: callIcon,
    qrImage: callQR,
    label: 'Scan to Call',
  },
] as const

function SupportHeroSectionComponent({ section }: SupportHeroSectionProps) {
  return (
    <section className="support-hero">
      <div className="support-hero__inner">
        <h1>{section.title}</h1>

        <p>{section.description}</p>

        <div className="support-hero__qr-grid" aria-label="Support QR codes">
          {supportQrCards.map((card) => (
            <article className="support-qr-card" key={card.label}>
              <img className="support-qr-card__code" src={card.qrImage} />
              <span className="support-qr-card__icon" aria-hidden="true">
                <img src={card.icon} alt="" />
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
