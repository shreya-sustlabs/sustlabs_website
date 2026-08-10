/**
 * Loads the site's content into Payload.
 *
 * Deliberately imports the real `src/lib/constants.ts` rather than a
 * hand-transcribed copy, so every transform is type-checked against both the
 * original content shape and the generated Payload types. Rename a field in a
 * global and this stops compiling.
 *
 * Safe to re-run: uploads are matched by filename and globals are overwritten.
 *
 * Uses top-level await on purpose — `payload run` exits before a floating
 * promise chain resolves.
 */
import config from '@payload-config'
import { getPayload } from 'payload'

import { seedMedia } from './media'
import { seedFms } from './pages/fms'
import { seedHome } from './pages/home'
import { seedLegalPages } from './pages/legal'
import { seedProducts } from './pages/products'
import { seedSolutions } from './pages/solutions'
import { seedOhmOs } from './pages/ohm-os'
import { seedOra, seedSupport } from './pages/ora-support'
import { seedSmartDb } from './pages/smart-db'
import { seedNavigation, seedSettings } from './site'
import { seedUsers } from './users'

const started = Date.now()
const payload = await getPayload({ config })

console.log('\nSeeding sustlabs.com content\n')

// Order matters: everything downstream needs the upload ids, and the settings
// document has to exist before pages reference it with {{settings.*}} tokens.
console.log('1/5  admin users')
await seedUsers(payload)

console.log('2/5  media & documents')
const media = await seedMedia(payload)

console.log('3/5  site settings')
await seedSettings(payload, media)

console.log('4/5  navigation')
await seedNavigation(payload)

console.log('5/5  pages')
await seedHome(payload, media)
await seedSmartDb(payload, media)
await seedOra(payload, media)
await seedSupport(payload, media)
await seedOhmOs(payload, media)
await seedFms(payload, media)
await seedSolutions(payload)
await seedProducts(payload, media)
await seedLegalPages(payload)

console.log(`\nDone in ${((Date.now() - started) / 1000).toFixed(1)}s\n`)

process.exit(0)
