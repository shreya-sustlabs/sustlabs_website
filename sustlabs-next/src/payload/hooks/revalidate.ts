import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
} from 'payload'

/**
 * `revalidatePath` throws when called outside a Next request scope, and the seed
 * script writes through these same hooks. Without this wrapper `pnpm seed` dies
 * on the first document it writes.
 */
const safely = (req: PayloadRequest, run: () => void) => {
  if (req.context?.disableRevalidate) {
    return
  }

  try {
    run()
  } catch {
    // Not inside a Next request — a seed run or a CLI migration. Nothing to revalidate.
  }
}

/**
 * Nav, footer and settings render inside the root layout on every route, so
 * revalidating a single path would leave every other page stale.
 */
export const revalidateLayout = (): GlobalAfterChangeHook => ({ doc, req }) => {
  safely(req, () => {
    revalidatePath('/', 'layout')
  })

  return doc
}

export const revalidateGlobalPath =
  (path: string): GlobalAfterChangeHook =>
  ({ doc, req }) => {
    safely(req, () => {
      revalidatePath(path)
    })

    return doc
  }

export const revalidateProduct: CollectionAfterChangeHook = ({ doc, previousDoc, req }) => {
  safely(req, () => {
    revalidatePath(`/products/${doc.slug}`)

    // A renamed slug leaves the old URL cached and still serving.
    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`/products/${previousDoc.slug}`)
    }

    // navLabel and slug both feed the header dropdown, which is in the layout.
    revalidatePath('/', 'layout')
  })

  return doc
}

export const revalidateProductAfterDelete: CollectionAfterDeleteHook = ({ doc, req }) => {
  safely(req, () => {
    revalidatePath(`/products/${doc?.slug}`)
    revalidatePath('/', 'layout')
  })

  return doc
}

export const revalidateLegalPage: CollectionAfterChangeHook = ({ doc, previousDoc, req }) => {
  safely(req, () => {
    revalidatePath(`/${doc.slug}`)

    if (previousDoc?.slug && previousDoc.slug !== doc.slug) {
      revalidatePath(`/${previousDoc.slug}`)
    }
  })

  return doc
}
