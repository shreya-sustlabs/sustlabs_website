export type SmartDbLeadPayload = {
  comment: string
  email: string
  name: string
  phone: string
  propertyType?: string
  source: string
}

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzSShEWexeN-WbHf3zNR3jj0dL9VSlAZy1ab5zuwzIeHJMOoGJEYhLBGJqtXZNBDg8J/exec'

export async function submitSmartDbLead(payload: SmartDbLeadPayload) {
  await fetch(GOOGLE_SHEETS_LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      property_type: payload.propertyType ?? '',
      source: payload.source
    }),
  })
}
