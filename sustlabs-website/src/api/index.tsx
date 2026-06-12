export type SmartDbLeadPayload = {
  comment: string
  email: string
  name: string
  phone: string
  source: String
}

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwBXPM1WCUvHqN3OCfgvCZRMcXFCtW9LObhuUixiYkqebr01ykmNGtUX7xWu-95Eh6E/exec'

export async function submitSmartDbLead(payload: SmartDbLeadPayload) {
  await fetch(GOOGLE_SHEETS_LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      comment: payload.comment,
      source: payload.source
    }),
  })
}
