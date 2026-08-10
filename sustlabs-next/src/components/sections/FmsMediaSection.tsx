'use client'

import { Fragment, memo } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { FmsMediaSectionProps } from '@/types'
import { trackGaEvent } from '@/lib/analytics'

function FmsMediaSectionComponent({ headingId, section, variant = 'dashboard' }: FmsMediaSectionProps) {
  return (
    <section className={`fms-media fms-media--${variant}`} aria-labelledby={headingId}>
      <div className="fms-media__inner">
        <p className="fms-section-eyebrow">{section.eyebrow}</p>

        <h2 className="fms-section-title" id={headingId}>
          <span>{section.titleLead}</span>{' '}
          <span className="fms-section-title__accent">
            {section.titleAccent.split(/\r?\n/).map((line, index) => (
              <Fragment key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </Fragment>
            ))}
          </span>
        </h2>

        {section.description ? <p className="fms-section-description">{section.description}</p> : null}

        {section.downloadAction ? (
          <a
            className="fms-media__download"
            download={section.downloadAction.fileName ?? true}
            href={section.downloadAction.href}
            rel="noopener noreferrer"
            target="_blank"
            onClick={() =>
              trackGaEvent('brochure_download', {
                download_label: section.downloadAction?.label,
                download_section: headingId,
              })
            }
          >
            <span>{section.downloadAction.label}</span>
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        ) : null}

        <figure className="fms-media__frame">
          <img
            alt={section.image.alt}
            height={section.image.height}
            loading="lazy"
            src={section.image.src}
            width={section.image.width}
          />
          {section.mediaCaption ? <figcaption>{section.mediaCaption}</figcaption> : null}
        </figure>
      </div>
    </section>
  )
}

export const FmsMediaSection = memo(FmsMediaSectionComponent)
