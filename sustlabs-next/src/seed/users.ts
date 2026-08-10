import type { Payload } from 'payload'

/**
 * Creates the default admin accounts so a fresh deployment has someone who can
 * sign in, instead of depending on whoever reaches `/admin` first.
 *
 * Existing accounts are left completely alone — matched by email and skipped.
 * That matters on re-runs: overwriting would silently reset a password the
 * person had already changed, and lock them out of a working site.
 *
 * Passwords come from the environment when set, so production never has to use
 * the committed defaults. See `DEFAULT_USERS` below.
 */

type SeedUser = {
  name: string
  email: string
  /** Environment variable that overrides the default password. */
  passwordEnv: string
  defaultPassword: string
}

const DEFAULT_USERS: SeedUser[] = [
  {
    name: 'Ashish Taldeokar',
    email: 'ashish.taldeokar@sustlabs.com',
    passwordEnv: 'SEED_PASSWORD_ASHISH',
    defaultPassword: 'Ashish@123',
  },
  {
    name: 'Shreya Tiwari',
    email: 'shreya.tiwari@sustlabs.com',
    passwordEnv: 'SEED_PASSWORD_SHREYA',
    defaultPassword: 'Shreya@123',
  },
]

export const seedUsers = async (payload: Payload) => {
  let created = 0
  let existing = 0
  let usedADefault = false

  for (const user of DEFAULT_USERS) {
    const found = await payload.find({
      collection: 'users',
      where: { email: { equals: user.email } },
      limit: 1,
      overrideAccess: true,
    })

    if (found.totalDocs > 0) {
      existing += 1
      continue
    }

    const fromEnv = process.env[user.passwordEnv]
    if (!fromEnv) usedADefault = true

    await payload.create({
      collection: 'users',
      overrideAccess: true,
      data: {
        name: user.name,
        email: user.email,
        password: fromEnv || user.defaultPassword,
      },
    })

    created += 1
  }

  console.log(`  users: ${created} created, ${existing} already present`)

  // The defaults are in git, so anyone with repository access knows them.
  if (usedADefault && process.env.NODE_ENV === 'production') {
    console.log(
      '\n  ⚠  A default password was used on a production build.\n' +
        '     Change it at /admin now, or re-seed with SEED_PASSWORD_* set.\n',
    )
  }
}
