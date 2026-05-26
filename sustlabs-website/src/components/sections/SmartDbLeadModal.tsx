import { type FormEvent, memo, useEffect, useRef, useState } from 'react'
import { submitSmartDbLead } from '../../api'

type SmartDbLeadModalProps = {
  onClose: () => void
}

const initialFormState = {
  comment: '',
  email: '',
  name: '',
  phone: '',
}

function SmartDbLeadModalComponent({ onClose }: SmartDbLeadModalProps) {
  const [formState, setFormState] = useState(initialFormState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const closeTimerRef = useRef<number | null>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)

      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const closeAfterResponse = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = window.setTimeout(() => {
      onCloseRef.current()
    }, 3000)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      await submitSmartDbLead(formState)
      setFormState(initialFormState)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      closeAfterResponse()
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="smart-db-lead-modal" role="presentation" onMouseDown={onClose}>
      <div
        aria-labelledby="smart-db-lead-title"
        aria-modal="true"
        className="smart-db-lead-modal__dialog"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="smart-db-lead-modal__close" type="button" aria-label="Close form" onClick={onClose}>
          x
        </button>

        <form className="smart-db-lead-form" id="leadForm" onSubmit={handleSubmit}>
          <h2 id="smart-db-lead-title">Explore interest</h2>
          <h3>Our team would be happy to assist you further.</h3>

          <div className="smart-db-lead-form__grid">
            <label>
              <span>Name</span>
              <input
                autoComplete="name"
                id="name"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={(event) => setFormState((current) => ({ ...current, name: event.target.value }))}
              />
            </label>

            <label>
              <span>Email *</span>
              <input
                autoComplete="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
                type="email"
                value={formState.email}
                onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              />
            </label>

            <label className="smart-db-lead-form__wide">
              <span>Phone number *</span>
              <input
                autoComplete="tel"
                id="phone"
                inputMode="tel"
                name="phone"
                placeholder="Phone number *"
                required
                value={formState.phone}
                onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
              />
            </label>

            <label className="smart-db-lead-form__wide">
              <span>Comment</span>
              <textarea
                id="comment"
                name="comment"
                placeholder="Comment"
                value={formState.comment}
                onChange={(event) => setFormState((current) => ({ ...current, comment: event.target.value }))}
              />
            </label>
          </div>

          <button className="smart-db-lead-form__submit" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>

          {status === 'success' ? <p className="smart-db-lead-form__message">Thank you for reaching out. We've received your request and our team will contact you shortly.</p> : null}
          {status === 'error' ? <p className="smart-db-lead-form__message smart-db-lead-form__message--error">Something went wrong. Please try again.</p> : null}
        </form>
      </div>
    </div>
  )
}

export const SmartDbLeadModal = memo(SmartDbLeadModalComponent)
