import { memo } from 'react'
import type { FormEvent } from 'react'
import type { SupportContactSectionProps } from '../../types'
import { trackGaEvent } from '../../utils/analytics'

function handleSupportSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

function SupportContactSectionComponent({ section }: SupportContactSectionProps) {
  return (
    <section className="support-contact" id="contact-sales">
      <div className="support-contact__inner">
        <h2>{section.title}</h2>

        <form className="support-contact__form" onSubmit={handleSupportSubmit}>
          {section.fields.map((field) => (
            <label className={`support-contact__field support-contact__field--${field.id}`} key={field.id}>
              <span>{field.label}</span>
              {field.variant === 'textarea' ? (
                <textarea name={field.id} placeholder={field.placeholder} rows={6} />
              ) : (
                <input name={field.id} placeholder={field.placeholder} type={field.type ?? 'text'} />
              )}
            </label>
          ))}

          <button
            className="support-contact__submit"
            type="submit"
            onClick={() =>
              trackGaEvent('button_click', {
                button_label: 'Submit',
                button_location: 'support_contact',
                button_type: 'submit',
              })
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export const SupportContactSection = memo(SupportContactSectionComponent)
