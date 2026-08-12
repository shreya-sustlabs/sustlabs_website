/**
 * Google Apps Script web app that records website enquiries in the sales sheet.
 *
 * Both front ends post here: the Vite app (`sustlabs-website`) straight from the
 * browser, and the Next.js app (`sustlabs-next`) from its `submitLead` server
 * action after the enquiry has already been stored in Payload.
 *
 * Deploy: Extensions -> Apps Script -> Deploy -> New deployment -> Web app,
 * "Execute as: Me", "Who has access: Anyone". Redeploying issues a new /exec URL
 * unless you edit the existing deployment, so edit rather than create — the URL
 * is baked into `src/api/index.tsx` and the `LEAD_FORWARD_ENDPOINT` env var.
 */

var SHEET_NAME = 'Leads'

/**
 * Column order for a fresh sheet. On a sheet that already has data, existing
 * headers keep their positions and only the missing ones are appended — which is
 * how `utm_source` lands at the end of a sheet that predates campaign tracking,
 * without disturbing the columns the sales team already filters on.
 */
var COLUMNS = [
  'timestamp',
  'name',
  'email',
  'phone',
  'property_type',
  'comment',
  'source',
  'utm_campaign',
  'utm_medium',
  'utm_source',
  'utm_adgroup',
  'utm_creative',
  'utm_keyword',
  'utm_device',
  'utm_placement'
]

/**
 * Header text the sheet may already use for a payload field. Matching is done on
 * the normalised text ("Property Type" -> property_type), so only genuinely
 * different wording needs an entry here.
 */
var HEADER_ALIASES = {
  date: 'timestamp',
  date_time: 'timestamp',
  contact_number: 'phone',
  mobile: 'phone',
  phone_number: 'phone',
  full_name: 'name',
  type_of_property: 'property_type',
  page: 'source',
  utm: 'utm_source',
  campaign_source: 'utm_source',
  // "UTM Ad Group" normalises to utm_ad_group, which would otherwise be read as
  // a column the payload knows nothing about and a second one appended beside it.
  utm_ad_group: 'utm_adgroup',
  ad_group: 'utm_adgroup',
  adgroup: 'utm_adgroup'
}

function doPost(e) {
  var lock = LockService.getScriptLock()

  // Two enquiries landing together would otherwise read the same last row and
  // one would overwrite the other.
  try {
    lock.waitLock(30000)
  } catch (err) {
    return respond({ ok: false, error: 'busy' })
  }

  try {
    var lead = parseBody(e)
    var sheet = getSheet()
    var headers = syncHeaders(sheet)

    sheet.appendRow(
      headers.map(function (key) {
        if (key === 'timestamp') {
          return new Date()
        }

        var value = lead[key]

        return value === undefined || value === null ? '' : String(value)
      })
    )

    return respond({ ok: true })
  } catch (err) {
    return respond({ ok: false, error: String(err) })
  } finally {
    lock.releaseLock()
  }
}

/** Lets you confirm a deployment is live by opening the /exec URL in a browser. */
function doGet() {
  return respond({ ok: true, service: 'sustlabs-lead-sheet' })
}

function getSheet() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet()

  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0]
}

/**
 * Reads row 1, appends any column in COLUMNS the sheet does not have yet, and
 * returns the payload key for every column in sheet order. Columns the sheet has
 * but the payload does not know about come back as '' and are left untouched.
 */
function syncHeaders(sheet) {
  var width = Math.max(sheet.getLastColumn(), 1)
  var raw = sheet.getRange(1, 1, 1, width).getValues()[0]
  var keys = raw.map(toKey)
  var hasHeaderRow = keys.some(function (key) {
    return key !== ''
  })

  if (!hasHeaderRow) {
    sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS])
    sheet.setFrozenRows(1)

    return COLUMNS.slice()
  }

  var missing = COLUMNS.filter(function (column) {
    return keys.indexOf(column) === -1
  })

  if (missing.length) {
    sheet.getRange(1, keys.length + 1, 1, missing.length).setValues([missing])
    keys = keys.concat(missing)
  }

  return keys
}

/** "Property Type" / "utm_source " / "UTM Source" all collapse to property_type / utm_source. */
function toKey(header) {
  var key = String(header || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')

  return HEADER_ALIASES[key] || key
}

/**
 * The Vite app posts with `mode: 'no-cors'`, which forces the body to text/plain
 * and puts the JSON in postData; the Next.js action posts application/json. A
 * plain form post would arrive in e.parameter instead, so all three are handled.
 */
function parseBody(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents)
    } catch (err) {
      // Not JSON — fall through to the form parameters below.
    }
  }

  return (e && e.parameter) || {}
}

function respond(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  )
}
