import type { Metadata } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getSiteChrome } from '@/lib/cms/navigation'
import '@/styles/base.css'
import '@/styles/app.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

const SITE_ORIGIN = 'https://www.sustlabs.com'

/**
 * No webfont is loaded, on purpose. The stylesheet declares
 * `--sans: system-ui, 'Inter Tight'`, and because `system-ui` always resolves the
 * site has in practice always rendered in the operating system font. Adding
 * `next/font` here would silently change the typography of every page.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'SustLabs',
    template: '%s | SustLabs',
  },
  description:
    'SustLabs builds electrical intelligence for homes and buildings. Understand ' +
    'electricity in real time, detect risks early and make better energy decisions.',
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'SustLabs',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image' },
}

export default async function FrontendLayout({ children }: { children: ReactNode }) {
  // Fetched once here rather than per page — the header and footer render on
  // every route.
  const chrome = await getSiteChrome()

  return (
    <html lang="en">
      <body>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}

        <div className="app-shell">
          <Header items={chrome.header} logo={chrome.logo} />
          {children}
          <Footer content={chrome.footer} logo={chrome.logo} />
        </div>

        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}`}
            </Script>
          </>
        ) : null}

        {GTM_ID ? (
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        ) : null}
      </body>
    </html>
  )
}
