/**
 * Default alt text for the images going into the media library.
 *
 * Most sections carry their own alt text in the page content, which overrides
 * this — these are the fallbacks used when a page does not supply one, and what
 * an editor sees in the Images library. Anything omitted here is decorative and
 * seeds with an empty alt on purpose.
 *
 * Files are read from `public/assets`, which already contains only the 38 assets
 * the site actually references.
 */
export const IMAGE_ALT: Record<string, string> = {
  'logo.png': 'SustLabs',
  'ohm-os.svg':
    'Ohm OS at the centre of homes, buildings, partners and infrastructure',

  'logo-panasonic.png': 'Panasonic',
  'logo-schneider.png': 'Schneider Electric',
  'logo-inepro.png': 'inepro',

  'home1.webp': 'Live electricity tracking in the Ohm app',
  'home2.webp': 'Appliance-level usage breakdown in the Ohm app',
  'home3.webp': 'Electrical safety alerts in the Ohm app',
  'home4.webp': 'Electrical safety detections around Ohm intelligence',
  'home5.webp': 'The Ohm Assistant app',
  'home6.webp': 'The Ohm Native dashboard',

  'o3.webp': 'o3 energy monitoring device',
  'o4.webp': 'o4 electrical safety device',

  'smartdb-layers.webp':
    'Exploded view of the Smart DB enclosure showing the intelligence layer stacked behind the conventional MCB layer',
  'smartdb-app-live.webp': 'Smart DB app home screen showing live household load in watts',
  'smartdb-app-alerts.webp':
    'Smart DB app notifications screen listing arcing, surge and high-load alerts',
  'smartdb-app-energy.webp':
    'Smart DB app energy screen showing consumption split by appliance',
  'smartdb-app.webp': 'Smart DB on a phone',
  'smartdb-dashboard.webp': 'The Smart DB web dashboard',
  'smartdb-ora.webp': 'An Ora wall clock showing live consumption',
  'smartdb-banner.webp': 'Smart DB installed in a home distribution board',
  'smartdb-segment-residential.webp':
    'Modern apartment development with landscaped walkways',
  'smartdb-segment-villa.webp': 'Contemporary villa with a swimming pool and open terrace',
  'smartdb-segment-retrofit.webp':
    'Interior of a home stripped back to studs during renovation',
  'smartdb-segment-facility.webp':
    'Light industrial building with a clear parking forecourt',

  'ora1.webp': 'Ora ambient wall display in a living room',
  'ora2.webp':
    'Ora wall display states showing safety alerts, energy clarity, appliance insights, and ambient clock views',

  'fmsdashboard.png':
    'FMS overview dashboard showing readiness scores and buildings that require attention',
  'fmsoptions.png':
    'FMS deployed across apartment societies, townships, commercial buildings, business parks, plants and mixed-use developments',
  'fms.png':
    'FMS console showing asset score, communication, fire readiness and water availability for a live site',
  'fmsbanner.png': 'Fire pump room instrumented with FMS sensors',

  'qr-whatsapp.svg': 'QR code to chat with Ohm Support on WhatsApp',
  'whatsapp.svg': 'QR code to chat with Ohm Support on WhatsApp',
  'call.svg': 'QR code to call Ohm Support',
}

/** Titles and download names for the files that live in `documents`. */
export const DOCUMENT_META: Record<string, { title: string; downloadFileName?: string }> = {
  'sustlabs-acms-brochure-2026.pdf': {
    title: 'ACMS / FMS Brochure 2026',
    downloadFileName: 'SustLabs-ACMS-Brochure-2026.pdf',
  },
  'sustlabs-smart-db-brochure.pdf': {
    title: 'Smart DB Product Brochure',
    downloadFileName: 'SustLabs-Smart-DB-Brochure.pdf',
  },
  'fms-chain.mp4': {
    title: 'FMS pump room animation',
  },
}

export const MIME_BY_EXTENSION: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
}

/** Extensions that belong in `documents` rather than `media`. */
export const DOCUMENT_EXTENSIONS = new Set(['.pdf', '.mp4'])
