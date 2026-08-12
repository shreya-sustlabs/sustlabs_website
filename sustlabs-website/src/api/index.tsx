export type SmartDbLeadPayload = {
  comment: string
  email: string
  name: string
  phone: string
  propertyType?: string
  source: string
  utmAdgroup?: string
  utmCampaign?: string
  utmCreative?: string
  utmDevice?: string
  utmKeyword?: string
  utmMedium?: string
  utmPlacement?: string
  utmSource?: string
}

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx8ZRNo9fRi4VX2FpPwwbk5DNJTDQ7sdH8MzSJYeE___bmyI3ly66App308aLeuHX0/exec'

export async function submitSmartDbLead(payload: SmartDbLeadPayload) {
  await fetch(GOOGLE_SHEETS_LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      comment: payload.comment ?? '',
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      property_type: payload.propertyType ?? '',
      source: payload.source,
      utm_adgroup: payload.utmAdgroup ?? '',
      utm_campaign: payload.utmCampaign ?? '',
      utm_creative: payload.utmCreative ?? '',
      utm_device: payload.utmDevice ?? '',
      utm_keyword: payload.utmKeyword ?? '',
      utm_medium: payload.utmMedium ?? '',
      utm_placement: payload.utmPlacement ?? '',
      utm_source: payload.utmSource ?? ''
    }),
  })
}
