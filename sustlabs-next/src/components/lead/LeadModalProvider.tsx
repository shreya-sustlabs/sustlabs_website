'use client'

import { createContext, memo, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { SmartDbLeadModal } from '../sections/SmartDbLeadModal'

/**
 * The enquiry modal is opened from four different places on three pages, and the
 * old code threaded an `onActionClick` callback down from each page component to
 * do it. Function props cannot cross from a server component into a client one,
 * so the state lives here instead and the trigger components read it through a
 * hook. That keeps the page components themselves on the server.
 */

type Openable = { preventDefault: () => void }

type LeadModalContextValue = {
  /** Open the form unconditionally. */
  open: (event: Openable) => void
  /** Open it only if the action is marked as opening the form. */
  openForAction: (action: { opensLeadForm?: boolean | null }, event: Openable) => void
}

const noop: LeadModalContextValue = {
  open: () => {},
  openForAction: () => {},
}

const LeadModalContext = createContext<LeadModalContextValue>(noop)

/**
 * Safe to call from a component that is not inside a provider — it becomes a
 * no-op rather than throwing, so a section can be reused on a page that has no
 * enquiry form.
 */
export const useLeadModal = () => useContext(LeadModalContext)

type LeadModalProviderProps = {
  children: ReactNode
  /** Tags the submission so sales know which page it came from. */
  source: string
}

function LeadModalProviderComponent({ children, source }: LeadModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((event: Openable) => {
    event.preventDefault()
    setIsOpen(true)
  }, [])

  const openForAction = useCallback(
    (action: { opensLeadForm?: boolean | null }, event: Openable) => {
      if (action.opensLeadForm) {
        open(event)
      }
    },
    [open],
  )

  const value = useMemo(() => ({ open, openForAction }), [open, openForAction])

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      {isOpen ? <SmartDbLeadModal source={source} onClose={() => setIsOpen(false)} /> : null}
    </LeadModalContext.Provider>
  )
}

export const LeadModalProvider = memo(LeadModalProviderComponent)
