import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__inner">
        <p className="not-found-page__code">404</p>

        <h1>This page does not exist.</h1>

        <p className="not-found-page__description">
          The link may be out of date, or the page may have moved.
        </p>

        <Link className="button button--primary" href="/">
          Back to home
        </Link>
      </div>
    </main>
  )
}
