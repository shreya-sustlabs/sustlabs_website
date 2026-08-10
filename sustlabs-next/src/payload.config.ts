import { postgresAdapter } from '@payloadcms/db-postgres'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Documents } from './payload/collections/Documents'
import { Leads } from './payload/collections/Leads'
import { LegalPages } from './payload/collections/LegalPages'
import { Media } from './payload/collections/Media'
import { Products } from './payload/collections/Products'
import { Users } from './payload/collections/Users'
import { Navigation } from './payload/globals/Navigation'
import { Settings } from './payload/globals/Settings'
import { Fms } from './payload/globals/Fms'
import { Home } from './payload/globals/Home'
import { Solutions } from './payload/globals/Solutions'
import { OhmOs } from './payload/globals/OhmOs'
import { Ora } from './payload/globals/Ora'
import { SmartDb } from './payload/globals/SmartDb'
import { Support } from './payload/globals/Support'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— SustLabs',
    },
  },
  collections: [Products, LegalPages, Leads, Media, Documents, Users],
  globals: [Home, SmartDb, Fms, OhmOs, Ora, Solutions, Support, Navigation, Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    // Drizzle pushes schema changes straight to the database in development, so
    // field iteration does not need a migration per edit. Production always runs
    // committed migrations instead.
    push: process.env.NODE_ENV === 'development',
    migrationDir: path.resolve(dirname, 'migrations'),
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    /**
     * Uploads go to object storage whenever S3 credentials are present.
     *
     * This matters on any serverless host: the local filesystem does not
     * survive a cold start, so without this every uploaded image would vanish.
     * Turn it on BEFORE the first production seed — switching afterwards means
     * re-uploading everything by hand.
     *
     * With no credentials set (local development) it stays off and files are
     * written to disk as usual.
     */
    ...(process.env.S3_BUCKET
      ? [
          s3Storage({
            collections: {
              media: true,
              documents: true,
            },
            bucket: process.env.S3_BUCKET,
            config: {
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
              },
              region: process.env.S3_REGION || 'auto',
              // Cloudflare R2 and other S3-compatible services need this.
              endpoint: process.env.S3_ENDPOINT,
            },
          }),
        ]
      : []),
  ],
})
