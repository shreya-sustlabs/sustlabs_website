export type SmartDbLeadPayload = {
  comment: string
  email: string
  name: string
  phone: string
  propertyType?: string
  source: string
  utmCampaign?: string
  utmMedium?: string
  utmSource?: string
}

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyreaDJRyNYB1gnPGkhc4ht2Ylb7f_cG7wA507IMjuQ-wz1MW4oOvZWy0JugSErGqFK/exec'

export async function submitSmartDbLead(payload: SmartDbLeadPayload) {
  await fetch(GOOGLE_SHEETS_LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      property_type: payload.propertyType ?? '',
      source: payload.source,
      utm_campaign: payload.utmCampaign ?? '',
      utm_medium: payload.utmMedium ?? '',
      utm_source: payload.utmSource ?? ''
    }),
  })
}
