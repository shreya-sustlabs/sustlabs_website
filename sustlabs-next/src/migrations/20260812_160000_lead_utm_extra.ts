import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads" ADD COLUMN "utm_adgroup" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_creative" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_keyword" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_device" varchar;
  ALTER TABLE "leads" ADD COLUMN "utm_placement" varchar;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "leads" DROP COLUMN "utm_adgroup";
  ALTER TABLE "leads" DROP COLUMN "utm_creative";
  ALTER TABLE "leads" DROP COLUMN "utm_keyword";
  ALTER TABLE "leads" DROP COLUMN "utm_device";
  ALTER TABLE "leads" DROP COLUMN "utm_placement";`)
}
