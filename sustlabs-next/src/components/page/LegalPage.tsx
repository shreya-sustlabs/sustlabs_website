import { memo } from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'
import type { LegalPage as LegalPageDoc } from '@/payload-types'

type LegalPageProps = {
  page: LegalPageDoc
}

/**
 * Renders both legal pages. They were two near-identical components with their
 * copy written inline; the structure is the same, so one component serves both.
 */
function LegalPageComponent({ page }: LegalPageProps) {
  return (
    <main className="policy-page">
      <article className="policy-page__inner">
        <header className="policy-page__header">
          <h1>{page.title}</h1>
        </header>

        <div className="policy-page__content">
          {page.intro ? <RichText data={page.intro} /> : null}

          {(page.sections ?? []).map((section) => (
            <section className="policy-page__section" key={section.id ?? section.title}>
              <h2>{section.title}</h2>
              <RichText data={section.body} />
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}

export const LegalPage = memo(LegalPageComponent)
