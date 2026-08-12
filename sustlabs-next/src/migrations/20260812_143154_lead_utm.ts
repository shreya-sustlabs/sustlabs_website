import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads" ADD COLUMN "utm_source" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_medium" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_campaign" varchar;
  CREATE INDEX "leads_utm_source_idx" ON "leads" USING btree ("utm_source");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "leads_utm_source_idx";
  ALTER TABLE "leads" DROP COLUMN "utm_source";
  ALTER TABLE "leads" DROP COLUMN "utm_medium";
  ALTER TABLE "leads" DROP COLUMN "utm_campaign";`)
}
