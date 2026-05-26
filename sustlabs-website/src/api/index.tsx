export type SmartDbLeadPayload = {
  comment: string
  email: string
  name: string
  phone: string
}

const GOOGLE_SHEETS_LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxvsCqXMP1DoR8v187-9GbAGvXAnsE-K1YKxag3Wa8oy9uX07Rbp1MDMZpNurCEMmwt/exec'

export async function submitSmartDbLead(payload: SmartDbLeadPayload) {
  await fetch(GOOGLE_SHEETS_LEAD_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      comment: payload.comment
    }),
  })
}
