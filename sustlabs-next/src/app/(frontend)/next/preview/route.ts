import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Turns on draft mode so an editor can see unpublished changes, then sends them
 * to the page. Payload's Live Preview loads this inside its iframe.
 *
 * Guarded twice: a shared secret proves the link came from our admin panel, and
 * a real Payload session proves the person is signed in. Without the second
 * check, anyone who ever saw the secret could read unpublished content.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path')
  const secret = searchParams.get('previewSecret')

  if (!process.env.PREVIEW_SECRET || secret !== process.env.PREVIEW_SECRET) {
    return new Response('Forbidden', { status: 403 })
  }

  // Only same-site paths, so this cannot be used as an open redirect.
  if (!path?.startsWith('/') || path.startsWith('//')) {
    return new Response('Invalid path', { status: 400 })
  }

  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })

  if (!user) {
    return new Response('Unauthorised', { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path)
}
