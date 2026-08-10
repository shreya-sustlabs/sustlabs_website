import { draftMode } from 'next/headers'

/** Leaves draft mode and goes back to the published site. */
export async function GET() {
  const draft = await draftMode()
  draft.disable()

  return new Response('Draft mode disabled. You are seeing the published site again.')
}
