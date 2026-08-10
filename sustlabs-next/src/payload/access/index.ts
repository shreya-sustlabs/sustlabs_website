import type { Access } from 'payload'

/** Public read. Used for anything the website itself renders. */
export const anyone: Access = () => true

export const authenticated: Access = ({ req }) => Boolean(req.user)

/**
 * Public visitors see published documents only; logged-in editors also see
 * drafts, which is what makes preview work.
 */
export const authenticatedOrPublished: Access = ({ req }) => {
  if (req.user) {
    return true
  }

  return { _status: { equals: 'published' } }
}

/** Nobody may write over the API. Used by `leads`, which is written by a server action. */
export const nobody: Access = () => false
