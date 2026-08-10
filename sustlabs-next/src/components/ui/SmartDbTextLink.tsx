'use client'

import type { MouseEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { SmartDbTextLinkAction } from '@/types'
import { trackGaEvent } from '@/lib/analytics'

type SmartDbTextLinkProps = {
  /** Omit to render nothing — that is how a section hides its link. */
  action?: SmartDbTextLinkAction
  /** Which section fired it — carried into the GA event. */
  eventSection: string
  /** Inverts the colour for the page's dark bands. */
  onDark?: boolean
  /** Required by actions with `opensLeadForm`; should preventDefault. */
  onLeadFormOpen?: (event: MouseEvent<HTMLAnchorElement>) => void
}

/** The underlined "Download the brochure ↗" style link used across the page. */
export function SmartDbTextLink({
  action,
  eventSection,
  onDark = false,
  onLeadFormOpen,
}: SmartDbTextLinkProps) {
  if (!action) {
    return null
  }

  const className = ['sdb-textlink', onDark ? 'sdb-textlink--on-dark' : null].filter(Boolean).join(' ')
  const download = action.fileName ?? action.download
  // Driven by the content, NOT by whether a handler was passed: keying off the
  // handler meant a section that forgot to wire one silently navigated to the
  // href instead of opening the form, and dropped data-lead-modal with it.
  const opensLeadForm = Boolean(action.opensLeadForm)
  const isInternal = action.href.startsWith('/') && !download && !opensLeadForm

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackGaEvent('smartdb_link_click', {
      link_label: action.label,
      link_section: eventSection,
    })

    if (opensLeadForm) {
      onLeadFormOpen?.(event)
    }
  }

  const content = (
    <>
      <span>{action.label}</span>
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </>
  )

  // Internal routes stay in the SPA; everything else opens in a new tab.
  if (isInternal) {
    return (
      <Link className={className} href={action.href} onClick={handleClick}>
        {content}
      </Link>
    )
  }

  return (
    <a
      className={className}
      // main.js reads these two on the static build, where there is no React
      // handler to open the modal or report the GA event.
      data-lead-modal={action.opensLeadForm ? 'smartdb' : undefined}
      data-link-section={eventSection}
      download={download}
      href={action.href}
      rel="noopener noreferrer"
      target={opensLeadForm ? undefined : '_blank'}
      onClick={handleClick}
    >
      {content}
    </a>
  )
}
