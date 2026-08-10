'use client'

import { memo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FmsFaqSectionProps } from '@/types'
import { trackGaEvent } from '@/lib/analytics'
import { useLeadModal } from '../lead/LeadModalProvider'

function FmsFaqSectionComponent({ section }: FmsFaqSectionProps) {
  const { open } = useLeadModal()
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <section className="fms-faq" aria-labelledby="fms-faq-title">
      <div className="fms-faq__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id="fms-faq-title">
          <span>{section.titleLead}</span>{' '}
          <span className="fms-section-title__accent">{section.titleAccent}</span>
        </h2>

        <div className="fms-faq__list">
          {section.items.map((item, index) => {
            const isOpen = openQuestion === item.question
            const answerId = `fms-faq-answer-${index}`

            return (
              <article className="fms-faq__item" data-open={isOpen} key={item.question}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="fms-faq__question"
                    type="button"
                    onClick={() =>
                      setOpenQuestion((currentQuestion) => {
                        const willOpen = currentQuestion !== item.question

                        if (willOpen) {
                          trackGaEvent('faq_open', { faq_question: item.question, faq_section: 'fms' })
                        }

                        return willOpen ? item.question : null
                      })
                    }
                  >
                    <span>{item.question}</span>
                    <ChevronDown aria-hidden="true" size={20} strokeWidth={1.8} />
                  </button>
                </h3>

                <div className="fms-faq__answer" id={answerId} hidden={!isOpen} role="region">
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>

        {/* <div className="fms-faq__footer">
          <p>{section.note}</p>
          <Button
            href={section.action.href}
            onClick={(event) => open(event)}
            type={`${section.action.analyticsId ?? section.action.label}-fms-faq`}
            variant={section.action.variant}
          >
            {section.action.label}
          </Button>
        </div> */}
      </div>
    </section>
  )
}

export const FmsFaqSection = memo(FmsFaqSectionComponent)
