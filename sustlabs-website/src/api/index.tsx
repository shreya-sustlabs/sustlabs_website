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

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx8ZRNo9fRi4VX2FpPwwbk5DNJTDQ7sdH8MzSJYeE___bmyI3ly66App308aLeuHX0/exec'

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
