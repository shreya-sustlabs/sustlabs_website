// import { memo } from 'react'
// import type { SupportHeroSectionProps } from '../../types'
// import { Button } from '../ui/Button'

// function SupportHeroSectionComponent({ section }: SupportHeroSectionProps) {
//   return (
//     <section className="support-hero">
//       <div className="support-hero__inner">
//         <h1>{section.title}</h1>
//         <p>{section.description}</p>
//         <Button className="support-hero__button" href={'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo'} variant={section.action.variant}>
//           {section.action.label}
//         </Button>
//       </div>
//     </section>
//   )
// }

// export const SupportHeroSection = memo(SupportHeroSectionComponent)


import { memo } from 'react'
import type { SupportHeroSectionProps } from '../../types'
import { Button } from '../ui/Button'

function SupportHeroSectionComponent({ section }: SupportHeroSectionProps) {
  return (
    <section className="support-hero">
      <div className="support-hero__inner">
        <h1>{section.title}</h1>

        <p>{section.description}</p>
        <p style={{ color: 'var(--black400)' }}>Write to us at: bd@sustlabs.com / support@sustlabs.com</p>
        <p style={{ color: 'var(--black400)' }}>Call us at: 7738257811</p>
        <div className="support-hero__actions">
          <Button
            className="support-hero__button"
            href={'https://calendly.com/kedarnath-cc4/ohm-assistant_product-demo'}
            variant={section.action.variant}
          >
            {section.action.label}
          </Button>

          <Button
            className="support-hero__button"
            href="https://wa.me/917738880011?text=Hi%20SustLabs%2C%20I%20need%20support"
            target="_blank"
            rel="noopener noreferrer"
            variant={section.action.variant}
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section >
  )
}

export const SupportHeroSection = memo(SupportHeroSectionComponent)