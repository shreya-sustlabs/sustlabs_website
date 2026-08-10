import fs from 'node:fs/promises'
import path from 'node:path'
import type { Payload } from 'payload'

import {
  DOCUMENT_EXTENSIONS,
  DOCUMENT_META,
  IMAGE_ALT,
  MIME_BY_EXTENSION,
} from './media-manifest'

/**
 * Filename to database id, for both upload collections. Seed transforms look
 * images up by their stored filename, which keeps the vocabulary obvious:
 * `media['smartdb-app-live.webp']`.
 */
export type MediaMap = Record<string, number>

const ASSET_DIR = path.resolve(process.cwd(), 'public/assets')

/**
 * Uploads every asset in `public/assets`, skipping any already present so the
 * seed can be re-run. Images and documents are kept apart because the media
 * collection resizes with Sharp and the brochures are 19MB and 7MB.
 */
export const seedMedia = async (payload: Payload): Promise<MediaMap> => {
  const filenames = (await fs.readdir(ASSET_DIR))
    .filter((name) => !name.startsWith('.'))
    .sort()

  const map: MediaMap = {}
  let created = 0
  let reused = 0

  for (const filename of filenames) {
    const extension = path.extname(filename).toLowerCase()
    const mimetype = MIME_BY_EXTENSION[extension]

    if (!mimetype) {
      console.warn(`  ? skipping ${filename} — unrecognised extension`)
      continue
    }

    const collection = DOCUMENT_EXTENSIONS.has(extension) ? 'documents' : 'media'

    const existing = await payload.find({
      collection,
      where: { filename: { equals: filename } },
      limit: 1,
      pagination: false,
      overrideAccess: true,
    })

    if (existing.docs[0]) {
      map[filename] = existing.docs[0].id as number
      reused += 1
      continue
    }

    const data = await fs.readFile(path.join(ASSET_DIR, filename))

    const doc = await payload.create({
      collection,
      overrideAccess: true,
      context: { disableRevalidate: true },
      data:
        collection === 'documents'
          ? {
              title: DOCUMENT_META[filename]?.title ?? filename,
              downloadFileName: DOCUMENT_META[filename]?.downloadFileName,
            }
          : { alt: IMAGE_ALT[filename] ?? '' },
      file: {
        data,
        name: filename,
        mimetype,
        size: data.byteLength,
      },
    })

    map[filename] = doc.id as number
    created += 1
  }

  console.log(`  media: ${created} uploaded, ${reused} already present`)

  return map
}

/**
 * Looks up an upload id, failing loudly rather than silently writing a document
 * with a missing image.
 */
export const mediaId = (map: MediaMap, filename: string): number => {
  const id = map[filename]

  if (!id) {
    throw new Error(
      `[seed] No upload found for "${filename}". Check that it exists in public/assets.`,
    )
  }

  return id
}
