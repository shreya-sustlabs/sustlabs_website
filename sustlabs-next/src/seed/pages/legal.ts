import type { Payload, RequiredDataFromCollectionSlug } from 'payload'

import {
  PRIVACY_APP_TERMS_SECTIONS,
  PRIVACY_INTRO,
  PRIVACY_SECTIONS,
  TERMS_INTRO,
  TERMS_SECTIONS,
  type LegalSection,
} from '../legacy/legal'

/**
 * Builds a Lexical editor state from plain paragraphs.
 *
 * The legal copy is plain prose today, but it goes into a rich-text field so the
 * team can add links, lists and emphasis afterwards — which they cannot do while
 * it lives as an array of strings in a component.
 */
const richText = (paragraphs: readonly string[]) => ({
  root: {
    type: 'root',
    format: '' as const,
    indent: 0,
    version: 1,
    direction: 'ltr' as const,
    children: paragraphs
      .filter((text) => text.trim() !== '')
      .map((text) => ({
        type: 'paragraph',
        format: '' as const,
        indent: 0,
        version: 1,
        direction: 'ltr' as const,
        textFormat: 0,
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text: text.trim(),
            version: 1,
          },
        ],
      })),
  },
})

const toSections = (sections: readonly LegalSection[]) =>
  sections.map((section) => ({
    title: section.title,
    body: richText(section.body),
  }))

const upsert = async (
  payload: Payload,
  slug: string,
  data: RequiredDataFromCollectionSlug<'legal-pages'>,
) => {
  const existing = await payload.find({
    collection: 'legal-pages',
    where: { slug: { equals: slug } },
    limit: 1,
    pagination: false,
    overrideAccess: true,
  })

  const context = { disableRevalidate: true }

  if (existing.docs[0]) {
    await payload.update({
      collection: 'legal-pages',
      id: existing.docs[0].id,
      data,
      overrideAccess: true,
      context,
    })
    return false
  }

  await payload.create({
    collection: 'legal-pages',
    data,
    overrideAccess: true,
    context,
  })
  return true
}

export const seedLegalPages = async (payload: Payload) => {
  await upsert(payload, 'privacy-policy', {
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    intro: richText(PRIVACY_INTRO),
    // Migrated exactly as published: this page currently carries the app terms
    // of service after the privacy sections.
    sections: [...toSections(PRIVACY_SECTIONS), ...toSections(PRIVACY_APP_TERMS_SECTIONS)],
    seo: {
      title: 'Privacy Policy',
      description: 'How SustLabs collects, uses and protects your data.',
      noindex: false,
    },
    _status: 'published',
  })

  await upsert(payload, 'terms-and-conditions', {
    title: 'Terms & Conditions',
    slug: 'terms-and-conditions',
    intro: richText(TERMS_INTRO),
    sections: toSections(TERMS_SECTIONS),
    seo: {
      title: 'Terms & Conditions',
      description:
        'The terms that apply to SustLabs products, the Ohm Assistant app and related services.',
      noindex: false,
    },
    _status: 'published',
  })

  const privacyCount = PRIVACY_SECTIONS.length + PRIVACY_APP_TERMS_SECTIONS.length

  console.log(
    `  legal: privacy (${privacyCount} sections), terms (${TERMS_SECTIONS.length} sections)`,
  )
}
