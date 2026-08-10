import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_button_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_accent_token" AS ENUM('var(--terra500)', 'var(--teal500)', 'var(--success500)', 'var(--black300)', 'var(--black400)', 'var(--black500)', 'var(--white)', '#145599', '#4CAF53');
  CREATE TYPE "public"."enum_product_hero_variant" AS ENUM('o3', 'o4', 'smart-db');
  CREATE TYPE "public"."enum_accent_target" AS ENUM('accent', 'lead');
  CREATE TYPE "public"."enum_products_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__products_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_legal_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__legal_pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_lead_source" AS ENUM('smartdb', 'fms', 'solution', 'support', 'other');
  CREATE TYPE "public"."enum_lead_property_type" AS ENUM('Residential', 'Commercial', 'Industrial', 'Others');
  CREATE TYPE "public"."enum_lead_forward_status" AS ENUM('pending', 'sent', 'failed');
  CREATE TYPE "public"."enum_home_layer_tone" AS ENUM('light', 'dark');
  CREATE TYPE "public"."enum_smartdb_feature_accent" AS ENUM('mint', 'lavender', 'cream', 'blush', 'ice');
  CREATE TYPE "public"."enum_sovereignty_tone" AS ENUM('teal', 'violet', 'amber', 'coral', 'blue');
  CREATE TYPE "public"."enum_sovereignty_size" AS ENUM('large', 'regular');
  CREATE TYPE "public"."enum_impact_variant" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_home_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_smartdb_platform_variant" AS ENUM('app', 'dashboard', 'clock');
  CREATE TYPE "public"."enum_smart_db_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__smart_db_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_fms_gap_tone" AS ENUM('inspection', 'readiness');
  CREATE TYPE "public"."enum_fms_alert_tone" AS ENUM('critical', 'advisory', 'summary');
  CREATE TYPE "public"."enum_fms_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__fms_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_licensee_slug" AS ENUM('panasonic', 'schneider', 'inepro', 'legrand');
  CREATE TYPE "public"."enum_ohm_os_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__ohm_os_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_ora_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__ora_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_support_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__support_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE "products_intro_section_descriptions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "products_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "products_feature_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "prod_uc_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "prod_post_uc_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "prod_cta_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"nav_label" varchar,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"intro_section_title_kicker" varchar,
  	"intro_section_title_lead" varchar,
  	"intro_section_title_accent" varchar,
  	"intro_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"hero_section_kicker" varchar,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_title_rest" varchar,
  	"hero_section_description" varchar,
  	"hero_section_accent_color" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"hero_section_image_id" integer,
  	"hero_section_alt" varchar,
  	"hero_section_image_variant" "enum_product_hero_variant",
  	"feature_section_eyebrow" varchar,
  	"feature_section_title_lead" varchar,
  	"feature_section_title_accent" varchar,
  	"feature_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"feature_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"feature_section_break_after_lead" boolean DEFAULT true,
  	"use_case_section_enabled" boolean DEFAULT false,
  	"use_case_section_eyebrow" varchar,
  	"use_case_section_title_lead" varchar,
  	"use_case_section_title_accent" varchar,
  	"use_case_section_description" varchar,
  	"use_case_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"use_case_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"use_case_section_break_after_lead" boolean DEFAULT true,
  	"post_detail_use_case_section_enabled" boolean DEFAULT false,
  	"post_detail_use_case_section_eyebrow" varchar,
  	"post_detail_use_case_section_title_lead" varchar,
  	"post_detail_use_case_section_title_accent" varchar,
  	"post_detail_use_case_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"post_detail_use_case_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"post_detail_use_case_section_break_after_lead" boolean DEFAULT true,
  	"cta_section_eyebrow" varchar,
  	"cta_section_title_lead" varchar,
  	"cta_section_title_accent" varchar,
  	"cta_section_description" varchar,
  	"cta_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"cta_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"cta_section_items_accent" varchar,
  	"cta_section_footer" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_products_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_products_v_version_intro_section_descriptions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_products_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_products_v_version_feature_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prod_uc_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prod_post_uc_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_prod_cta_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_products_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_nav_label" varchar,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_eyebrow" varchar,
  	"version_title" varchar,
  	"version_description" varchar,
  	"version_intro_section_title_kicker" varchar,
  	"version_intro_section_title_lead" varchar,
  	"version_intro_section_title_accent" varchar,
  	"version_intro_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_hero_section_kicker" varchar,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_title_rest" varchar,
  	"version_hero_section_description" varchar,
  	"version_hero_section_accent_color" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_hero_section_image_id" integer,
  	"version_hero_section_alt" varchar,
  	"version_hero_section_image_variant" "enum_product_hero_variant",
  	"version_feature_section_eyebrow" varchar,
  	"version_feature_section_title_lead" varchar,
  	"version_feature_section_title_accent" varchar,
  	"version_feature_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_feature_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"version_feature_section_break_after_lead" boolean DEFAULT true,
  	"version_use_case_section_enabled" boolean DEFAULT false,
  	"version_use_case_section_eyebrow" varchar,
  	"version_use_case_section_title_lead" varchar,
  	"version_use_case_section_title_accent" varchar,
  	"version_use_case_section_description" varchar,
  	"version_use_case_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_use_case_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"version_use_case_section_break_after_lead" boolean DEFAULT true,
  	"version_post_detail_use_case_section_enabled" boolean DEFAULT false,
  	"version_post_detail_use_case_section_eyebrow" varchar,
  	"version_post_detail_use_case_section_title_lead" varchar,
  	"version_post_detail_use_case_section_title_accent" varchar,
  	"version_post_detail_use_case_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_post_detail_use_case_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"version_post_detail_use_case_section_break_after_lead" boolean DEFAULT true,
  	"version_cta_section_eyebrow" varchar,
  	"version_cta_section_title_lead" varchar,
  	"version_cta_section_title_accent" varchar,
  	"version_cta_section_description" varchar,
  	"version_cta_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_cta_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"version_cta_section_items_accent" varchar,
  	"version_cta_section_footer" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__products_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "legal_pages_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" jsonb
  );
  
  CREATE TABLE "legal_pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"intro" jsonb,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_legal_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_legal_pages_v_version_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"body" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_legal_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_intro" jsonb,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__legal_pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "leads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"source" "enum_lead_source" NOT NULL,
  	"property_type" "enum_lead_property_type",
  	"comment" varchar,
  	"forward_status" "enum_lead_forward_status" DEFAULT 'pending',
  	"forwarded_at" timestamp(3) with time zone,
  	"forward_error" varchar,
  	"page_path" varchar,
  	"user_agent" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"credit" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_wide_url" varchar,
  	"sizes_wide_width" numeric,
  	"sizes_wide_height" numeric,
  	"sizes_wide_mime_type" varchar,
  	"sizes_wide_filesize" numeric,
  	"sizes_wide_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"download_file_name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"products_id" integer,
  	"legal_pages_id" integer,
  	"leads_id" integer,
  	"media_id" integer,
  	"documents_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "home_intelligence_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "home_signal_layer_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_setup_section_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_layers_section_layers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"tone" "enum_home_layer_tone"
  );
  
  CREATE TABLE "home_smart_db_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"accent" "enum_smartdb_feature_accent"
  );
  
  CREATE TABLE "home_sovereignty_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"eyebrow" varchar,
  	"tone" "enum_sovereignty_tone",
  	"size" "enum_sovereignty_size"
  );
  
  CREATE TABLE "home_enterprise_section_audiences" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "home_impact_section_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"variant" "enum_impact_variant"
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_eyebrow" varchar,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_middle" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_description" varchar,
  	"intelligence_section_eyebrow" varchar,
  	"intelligence_section_title_lead" varchar,
  	"intelligence_section_title_accent" varchar,
  	"intelligence_section_description" varchar,
  	"signal_layer_section_eyebrow" varchar,
  	"signal_layer_section_title_lead" varchar,
  	"signal_layer_section_title_accent" varchar,
  	"signal_layer_section_description" varchar,
  	"safety_section_eyebrow" varchar,
  	"safety_section_title_lead" varchar,
  	"safety_section_title_accent" varchar,
  	"safety_section_title_rest" varchar,
  	"safety_section_description" varchar,
  	"safety_section_image_id" integer,
  	"safety_section_alt" varchar,
  	"setup_section_eyebrow" varchar,
  	"setup_section_title_lead" varchar,
  	"setup_section_title_accent" varchar,
  	"setup_section_description" varchar,
  	"layers_section_eyebrow" varchar,
  	"layers_section_title_lead" varchar,
  	"layers_section_title_accent" varchar,
  	"layers_section_description" varchar,
  	"smart_db_section_eyebrow" varchar,
  	"smart_db_section_title" varchar,
  	"smart_db_section_description" varchar,
  	"sovereignty_section_eyebrow" varchar,
  	"sovereignty_section_title_lead" varchar,
  	"sovereignty_section_title_accent" varchar,
  	"sovereignty_section_description" varchar,
  	"enterprise_section_eyebrow" varchar,
  	"enterprise_section_title_lead" varchar,
  	"enterprise_section_title_accent" varchar,
  	"enterprise_section_description" varchar,
  	"impact_section_eyebrow" varchar,
  	"impact_section_title_lead" varchar,
  	"impact_section_title_accent" varchar,
  	"impact_section_description" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_home_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_home_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_intelligence_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_signal_layer_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_setup_section_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_layers_section_layers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"tone" "enum_home_layer_tone",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_smart_db_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"accent" "enum_smartdb_feature_accent",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_sovereignty_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"eyebrow" varchar,
  	"tone" "enum_sovereignty_tone",
  	"size" "enum_sovereignty_size",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_enterprise_section_audiences" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v_version_impact_section_metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"variant" "enum_impact_variant",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_eyebrow" varchar,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_middle" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_description" varchar,
  	"version_intelligence_section_eyebrow" varchar,
  	"version_intelligence_section_title_lead" varchar,
  	"version_intelligence_section_title_accent" varchar,
  	"version_intelligence_section_description" varchar,
  	"version_signal_layer_section_eyebrow" varchar,
  	"version_signal_layer_section_title_lead" varchar,
  	"version_signal_layer_section_title_accent" varchar,
  	"version_signal_layer_section_description" varchar,
  	"version_safety_section_eyebrow" varchar,
  	"version_safety_section_title_lead" varchar,
  	"version_safety_section_title_accent" varchar,
  	"version_safety_section_title_rest" varchar,
  	"version_safety_section_description" varchar,
  	"version_safety_section_image_id" integer,
  	"version_safety_section_alt" varchar,
  	"version_setup_section_eyebrow" varchar,
  	"version_setup_section_title_lead" varchar,
  	"version_setup_section_title_accent" varchar,
  	"version_setup_section_description" varchar,
  	"version_layers_section_eyebrow" varchar,
  	"version_layers_section_title_lead" varchar,
  	"version_layers_section_title_accent" varchar,
  	"version_layers_section_description" varchar,
  	"version_smart_db_section_eyebrow" varchar,
  	"version_smart_db_section_title" varchar,
  	"version_smart_db_section_description" varchar,
  	"version_sovereignty_section_eyebrow" varchar,
  	"version_sovereignty_section_title_lead" varchar,
  	"version_sovereignty_section_title_accent" varchar,
  	"version_sovereignty_section_description" varchar,
  	"version_enterprise_section_eyebrow" varchar,
  	"version_enterprise_section_title_lead" varchar,
  	"version_enterprise_section_title_accent" varchar,
  	"version_enterprise_section_description" varchar,
  	"version_impact_section_eyebrow" varchar,
  	"version_impact_section_title_lead" varchar,
  	"version_impact_section_title_accent" varchar,
  	"version_impact_section_description" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__home_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "smart_db_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "smart_db_knows_section_descriptions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "smart_db_knows_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "smart_db_unchanged_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "smart_db_loop_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "smart_db_capabilities_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "smart_db_pocket_section_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE "smart_db_platform_section_tiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"kicker" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"variant" "enum_smartdb_platform_variant"
  );
  
  CREATE TABLE "smart_db_comparison_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "sdb_cmp_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "sdb_cmp_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "smart_db_segments_section_segments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar
  );
  
  CREATE TABLE "smart_db_fire_section_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "smart_db_specs_section_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "smart_db" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_eyebrow" varchar,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_description" varchar,
  	"layers_section_title" varchar,
  	"layers_section_image_id" integer,
  	"layers_section_alt" varchar,
  	"knows_section_eyebrow" varchar,
  	"knows_section_title_lead" varchar,
  	"knows_section_title_accent" varchar,
  	"knows_section_action_label" varchar,
  	"knows_section_action_href" varchar,
  	"knows_section_action_document_id" integer,
  	"knows_section_action_opens_lead_form" boolean,
  	"unchanged_section_eyebrow" varchar,
  	"unchanged_section_title_lead" varchar,
  	"unchanged_section_title_accent" varchar,
  	"unchanged_section_description" varchar,
  	"loop_section_eyebrow" varchar,
  	"loop_section_title_lead" varchar,
  	"loop_section_title_accent" varchar,
  	"loop_section_description" varchar,
  	"loop_section_action_label" varchar,
  	"loop_section_action_href" varchar,
  	"loop_section_action_document_id" integer,
  	"loop_section_action_opens_lead_form" boolean,
  	"capabilities_section_eyebrow" varchar,
  	"capabilities_section_title_lead" varchar,
  	"capabilities_section_title_accent" varchar,
  	"pocket_section_eyebrow" varchar,
  	"pocket_section_title_lead" varchar,
  	"pocket_section_title_accent" varchar,
  	"pocket_section_description" varchar,
  	"pocket_section_highlight_eyebrow" varchar,
  	"pocket_section_highlight_title" varchar,
  	"pocket_section_highlight_description" varchar,
  	"platform_section_eyebrow" varchar,
  	"platform_section_title_lead" varchar,
  	"platform_section_title_accent" varchar,
  	"comparison_section_eyebrow" varchar,
  	"comparison_section_title_lead" varchar,
  	"comparison_section_title_accent" varchar,
  	"comparison_section_action_label" varchar,
  	"comparison_section_action_href" varchar,
  	"comparison_section_action_document_id" integer,
  	"comparison_section_action_opens_lead_form" boolean,
  	"segments_section_eyebrow" varchar,
  	"segments_section_title_lead" varchar,
  	"segments_section_title_accent" varchar,
  	"segments_section_description" varchar,
  	"fire_section_eyebrow" varchar,
  	"fire_section_title_lead" varchar,
  	"fire_section_title_accent" varchar,
  	"fire_section_description" varchar,
  	"specs_section_enabled" boolean DEFAULT false,
  	"specs_section_title" varchar,
  	"specs_section_note" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_smart_db_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_smart_db_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_knows_section_descriptions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_knows_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_unchanged_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_loop_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_capabilities_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_pocket_section_screens" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_platform_section_tiles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"kicker" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"variant" "enum_smartdb_platform_variant",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_comparison_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_sdb_cmp_cells_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_sdb_cmp_rows_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_segments_section_segments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_fire_section_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v_version_specs_section_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_smart_db_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_eyebrow" varchar,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_description" varchar,
  	"version_layers_section_title" varchar,
  	"version_layers_section_image_id" integer,
  	"version_layers_section_alt" varchar,
  	"version_knows_section_eyebrow" varchar,
  	"version_knows_section_title_lead" varchar,
  	"version_knows_section_title_accent" varchar,
  	"version_knows_section_action_label" varchar,
  	"version_knows_section_action_href" varchar,
  	"version_knows_section_action_document_id" integer,
  	"version_knows_section_action_opens_lead_form" boolean,
  	"version_unchanged_section_eyebrow" varchar,
  	"version_unchanged_section_title_lead" varchar,
  	"version_unchanged_section_title_accent" varchar,
  	"version_unchanged_section_description" varchar,
  	"version_loop_section_eyebrow" varchar,
  	"version_loop_section_title_lead" varchar,
  	"version_loop_section_title_accent" varchar,
  	"version_loop_section_description" varchar,
  	"version_loop_section_action_label" varchar,
  	"version_loop_section_action_href" varchar,
  	"version_loop_section_action_document_id" integer,
  	"version_loop_section_action_opens_lead_form" boolean,
  	"version_capabilities_section_eyebrow" varchar,
  	"version_capabilities_section_title_lead" varchar,
  	"version_capabilities_section_title_accent" varchar,
  	"version_pocket_section_eyebrow" varchar,
  	"version_pocket_section_title_lead" varchar,
  	"version_pocket_section_title_accent" varchar,
  	"version_pocket_section_description" varchar,
  	"version_pocket_section_highlight_eyebrow" varchar,
  	"version_pocket_section_highlight_title" varchar,
  	"version_pocket_section_highlight_description" varchar,
  	"version_platform_section_eyebrow" varchar,
  	"version_platform_section_title_lead" varchar,
  	"version_platform_section_title_accent" varchar,
  	"version_comparison_section_eyebrow" varchar,
  	"version_comparison_section_title_lead" varchar,
  	"version_comparison_section_title_accent" varchar,
  	"version_comparison_section_action_label" varchar,
  	"version_comparison_section_action_href" varchar,
  	"version_comparison_section_action_document_id" integer,
  	"version_comparison_section_action_opens_lead_form" boolean,
  	"version_segments_section_eyebrow" varchar,
  	"version_segments_section_title_lead" varchar,
  	"version_segments_section_title_accent" varchar,
  	"version_segments_section_description" varchar,
  	"version_fire_section_eyebrow" varchar,
  	"version_fire_section_title_lead" varchar,
  	"version_fire_section_title_accent" varchar,
  	"version_fire_section_description" varchar,
  	"version_specs_section_enabled" boolean DEFAULT false,
  	"version_specs_section_title" varchar,
  	"version_specs_section_note" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__smart_db_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "fms_hero_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE "fms_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "fms_gap_col_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "fms_gap_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"tone" "enum_fms_gap_tone"
  );
  
  CREATE TABLE "fms_chain_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "fms_steps_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "fms_cov_params" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "fms_coverage_section_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "fms_alerts_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"meta" varchar,
  	"tone" "enum_fms_alert_tone",
  	"text" varchar
  );
  
  CREATE TABLE "fms_assurance_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "fms_faq_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE "fms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_eyebrow" varchar,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_badge" varchar,
  	"problem_section_eyebrow" varchar,
  	"problem_section_title_lead" varchar,
  	"problem_section_title_accent" varchar,
  	"problem_section_description" varchar,
  	"problem_section_image_id" integer,
  	"problem_section_alt" varchar,
  	"problem_section_media_caption" varchar,
  	"problem_section_download_action_label" varchar,
  	"problem_section_download_action_document_id" integer,
  	"audience_section_eyebrow" varchar,
  	"audience_section_title_lead" varchar,
  	"audience_section_title_accent" varchar,
  	"audience_section_description" varchar,
  	"audience_section_image_id" integer,
  	"audience_section_alt" varchar,
  	"audience_section_media_caption" varchar,
  	"gap_section_eyebrow" varchar,
  	"gap_section_title_lead" varchar,
  	"gap_section_title_accent" varchar,
  	"gap_section_description" varchar,
  	"gap_section_title_highlight" varchar,
  	"chain_section_eyebrow" varchar,
  	"chain_section_title_lead" varchar,
  	"chain_section_title_accent" varchar,
  	"chain_section_description" varchar,
  	"chain_section_video_id" integer,
  	"chain_section_media_alt" varchar,
  	"steps_section_eyebrow" varchar,
  	"steps_section_title_lead" varchar,
  	"steps_section_title_accent" varchar,
  	"steps_section_description" varchar,
  	"coverage_section_eyebrow" varchar,
  	"coverage_section_title_lead" varchar,
  	"coverage_section_title_accent" varchar,
  	"coverage_section_description" varchar,
  	"visibility_section_eyebrow" varchar,
  	"visibility_section_title_lead" varchar,
  	"visibility_section_title_accent" varchar,
  	"visibility_section_description" varchar,
  	"visibility_section_image_id" integer,
  	"visibility_section_alt" varchar,
  	"visibility_section_media_caption" varchar,
  	"alerts_section_eyebrow" varchar,
  	"alerts_section_title_lead" varchar,
  	"alerts_section_title_accent" varchar,
  	"alerts_section_description" varchar,
  	"assurance_section_eyebrow" varchar,
  	"assurance_section_title_lead" varchar,
  	"assurance_section_title_accent" varchar,
  	"assurance_section_description" varchar,
  	"faq_section_enabled" boolean DEFAULT false,
  	"faq_section_eyebrow" varchar,
  	"faq_section_title_lead" varchar,
  	"faq_section_title_accent" varchar,
  	"faq_section_description" varchar,
  	"faq_section_note" varchar,
  	"faq_section_action_label" varchar,
  	"faq_section_action_href" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_fms_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_fms_v_version_hero_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_gap_col_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_gap_section_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"tone" "enum_fms_gap_tone",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_chain_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_steps_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"number" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_cov_params_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_coverage_section_groups" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_alerts_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta" varchar,
  	"tone" "enum_fms_alert_tone",
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_assurance_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v_version_faq_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fms_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_eyebrow" varchar,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_badge" varchar,
  	"version_problem_section_eyebrow" varchar,
  	"version_problem_section_title_lead" varchar,
  	"version_problem_section_title_accent" varchar,
  	"version_problem_section_description" varchar,
  	"version_problem_section_image_id" integer,
  	"version_problem_section_alt" varchar,
  	"version_problem_section_media_caption" varchar,
  	"version_problem_section_download_action_label" varchar,
  	"version_problem_section_download_action_document_id" integer,
  	"version_audience_section_eyebrow" varchar,
  	"version_audience_section_title_lead" varchar,
  	"version_audience_section_title_accent" varchar,
  	"version_audience_section_description" varchar,
  	"version_audience_section_image_id" integer,
  	"version_audience_section_alt" varchar,
  	"version_audience_section_media_caption" varchar,
  	"version_gap_section_eyebrow" varchar,
  	"version_gap_section_title_lead" varchar,
  	"version_gap_section_title_accent" varchar,
  	"version_gap_section_description" varchar,
  	"version_gap_section_title_highlight" varchar,
  	"version_chain_section_eyebrow" varchar,
  	"version_chain_section_title_lead" varchar,
  	"version_chain_section_title_accent" varchar,
  	"version_chain_section_description" varchar,
  	"version_chain_section_video_id" integer,
  	"version_chain_section_media_alt" varchar,
  	"version_steps_section_eyebrow" varchar,
  	"version_steps_section_title_lead" varchar,
  	"version_steps_section_title_accent" varchar,
  	"version_steps_section_description" varchar,
  	"version_coverage_section_eyebrow" varchar,
  	"version_coverage_section_title_lead" varchar,
  	"version_coverage_section_title_accent" varchar,
  	"version_coverage_section_description" varchar,
  	"version_visibility_section_eyebrow" varchar,
  	"version_visibility_section_title_lead" varchar,
  	"version_visibility_section_title_accent" varchar,
  	"version_visibility_section_description" varchar,
  	"version_visibility_section_image_id" integer,
  	"version_visibility_section_alt" varchar,
  	"version_visibility_section_media_caption" varchar,
  	"version_alerts_section_eyebrow" varchar,
  	"version_alerts_section_title_lead" varchar,
  	"version_alerts_section_title_accent" varchar,
  	"version_alerts_section_description" varchar,
  	"version_assurance_section_eyebrow" varchar,
  	"version_assurance_section_title_lead" varchar,
  	"version_assurance_section_title_accent" varchar,
  	"version_assurance_section_description" varchar,
  	"version_faq_section_enabled" boolean DEFAULT false,
  	"version_faq_section_eyebrow" varchar,
  	"version_faq_section_title_lead" varchar,
  	"version_faq_section_title_accent" varchar,
  	"version_faq_section_description" varchar,
  	"version_faq_section_note" varchar,
  	"version_faq_section_action_label" varchar,
  	"version_faq_section_action_href" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__fms_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "ohm_os_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "ohm_os_applications_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "ohm_os_layer_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "ohm_os_licensee_section_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"image_id" integer,
  	"slug" "enum_licensee_slug"
  );
  
  CREATE TABLE "ohm_os" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_title_rest" varchar,
  	"hero_section_description" varchar,
  	"applications_section_eyebrow" varchar,
  	"applications_section_title_lead" varchar,
  	"applications_section_title_accent" varchar,
  	"applications_section_description" varchar,
  	"applications_section_image_id" integer,
  	"applications_section_alt" varchar,
  	"layer_section_eyebrow" varchar,
  	"layer_section_title_lead" varchar,
  	"layer_section_title_accent" varchar,
  	"layer_section_description" varchar,
  	"layer_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"licensee_section_title" varchar,
  	"licensee_section_description" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_ohm_os_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_ohm_os_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ohm_os_v_version_applications_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ohm_os_v_version_layer_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ohm_os_v_version_licensee_section_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"image_id" integer,
  	"slug" "enum_licensee_slug",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ohm_os_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_title_rest" varchar,
  	"version_hero_section_description" varchar,
  	"version_applications_section_eyebrow" varchar,
  	"version_applications_section_title_lead" varchar,
  	"version_applications_section_title_accent" varchar,
  	"version_applications_section_description" varchar,
  	"version_applications_section_image_id" integer,
  	"version_applications_section_alt" varchar,
  	"version_layer_section_eyebrow" varchar,
  	"version_layer_section_title_lead" varchar,
  	"version_layer_section_title_accent" varchar,
  	"version_layer_section_description" varchar,
  	"version_layer_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_licensee_section_title" varchar,
  	"version_licensee_section_description" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__ohm_os_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "ora_enables_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "ora" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_description" varchar,
  	"hero_section_image_id" integer,
  	"hero_section_alt" varchar,
  	"hero_section_callout_title" varchar,
  	"hero_section_callout_description" varchar,
  	"hero_section_action_label" varchar,
  	"hero_section_action_href" varchar,
  	"hero_section_action_variant" "enum_button_variant" DEFAULT 'primary',
  	"enables_section_image_id" integer,
  	"enables_section_alt" varchar,
  	"enables_section_enabled" boolean DEFAULT false,
  	"enables_section_title_lead" varchar,
  	"enables_section_title_accent" varchar,
  	"enables_section_description" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_ora_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_ora_v_version_enables_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_ora_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_description" varchar,
  	"version_hero_section_image_id" integer,
  	"version_hero_section_alt" varchar,
  	"version_hero_section_callout_title" varchar,
  	"version_hero_section_callout_description" varchar,
  	"version_hero_section_action_label" varchar,
  	"version_hero_section_action_href" varchar,
  	"version_hero_section_action_variant" "enum_button_variant" DEFAULT 'primary',
  	"version_enables_section_image_id" integer,
  	"version_enables_section_alt" varchar,
  	"version_enables_section_enabled" boolean DEFAULT false,
  	"version_enables_section_title_lead" varchar,
  	"version_enables_section_title_accent" varchar,
  	"version_enables_section_description" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__ora_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "solutions_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar
  );
  
  CREATE TABLE "sol_panel_caps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "solutions_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title_prefix" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "solutions_partner_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_title_lead" varchar,
  	"hero_section_title_accent" varchar,
  	"hero_section_title_rest" varchar,
  	"hero_section_description" varchar,
  	"hero_section_note" varchar,
  	"partner_section_eyebrow" varchar,
  	"partner_section_title_lead" varchar,
  	"partner_section_title_accent" varchar,
  	"partner_section_description" varchar,
  	"partner_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"partner_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"partner_section_break_after_lead" boolean DEFAULT true,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_solutions_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_solutions_v_version_hero_section_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"href" varchar,
  	"variant" "enum_button_variant" DEFAULT 'primary',
  	"opens_lead_form" boolean,
  	"analytics_id" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_sol_panel_caps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v_version_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title_prefix" varchar,
  	"title" varchar,
  	"title_accent" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v_version_partner_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_solutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_title_lead" varchar,
  	"version_hero_section_title_accent" varchar,
  	"version_hero_section_title_rest" varchar,
  	"version_hero_section_description" varchar,
  	"version_hero_section_note" varchar,
  	"version_partner_section_eyebrow" varchar,
  	"version_partner_section_title_lead" varchar,
  	"version_partner_section_title_accent" varchar,
  	"version_partner_section_description" varchar,
  	"version_partner_section_accent" "enum_accent_token" DEFAULT 'var(--terra500)',
  	"version_partner_section_accent_target" "enum_accent_target" DEFAULT 'accent',
  	"version_partner_section_break_after_lead" boolean DEFAULT true,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "support_qr_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"qr_image_id" integer,
  	"icon_id" integer
  );
  
  CREATE TABLE "support" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_section_title" varchar,
  	"hero_section_description" varchar,
  	"hero_section_action_label" varchar,
  	"hero_section_action_href" varchar,
  	"hero_section_action_variant" "enum_button_variant" DEFAULT 'primary',
  	"contact_section_enabled" boolean DEFAULT false,
  	"contact_section_title" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_image_id" integer,
  	"seo_noindex" boolean,
  	"_status" "enum_support_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "_support_v_version_qr_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"qr_image_id" integer,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_support_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_hero_section_title" varchar,
  	"version_hero_section_description" varchar,
  	"version_hero_section_action_label" varchar,
  	"version_hero_section_action_href" varchar,
  	"version_hero_section_action_variant" "enum_button_variant" DEFAULT 'primary',
  	"version_contact_section_enabled" boolean DEFAULT false,
  	"version_contact_section_title" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_image_id" integer,
  	"version_seo_noindex" boolean,
  	"version__status" "enum__support_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "nav_header_children" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"new_tab" boolean
  );
  
  CREATE TABLE "navigation_header" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar,
  	"active_path_prefix" varchar,
  	"new_tab" boolean
  );
  
  CREATE TABLE "nav_footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"new_tab" boolean
  );
  
  CREATE TABLE "navigation_footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "nav_footer_legal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"new_tab" boolean
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"footer_tagline" varchar NOT NULL,
  	"footer_copyright" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"demo_booking_url" varchar NOT NULL,
  	"store_url" varchar,
  	"setup_guide_url" varchar,
  	"overview_video_url" varchar,
  	"sales_email" varchar,
  	"support_email" varchar,
  	"office_address" varchar NOT NULL,
  	"legal_entity_name" varchar,
  	"logo_id" integer,
  	"default_share_image_id" integer,
  	"default_seo_title" varchar NOT NULL,
  	"default_seo_description" varchar NOT NULL,
  	"canonical_origin" varchar DEFAULT 'https://www.sustlabs.com' NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "products_intro_section_descriptions" ADD CONSTRAINT "products_intro_section_descriptions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_hero_section_actions" ADD CONSTRAINT "products_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products_feature_section_cards" ADD CONSTRAINT "products_feature_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prod_uc_cards" ADD CONSTRAINT "prod_uc_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prod_post_uc_cards" ADD CONSTRAINT "prod_post_uc_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "prod_cta_items" ADD CONSTRAINT "prod_cta_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "products" ADD CONSTRAINT "products_hero_section_image_id_media_id_fk" FOREIGN KEY ("hero_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "products" ADD CONSTRAINT "products_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_products_v_version_intro_section_descriptions" ADD CONSTRAINT "_products_v_version_intro_section_descriptions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_products_v_version_hero_section_actions" ADD CONSTRAINT "_products_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_products_v_version_feature_section_cards" ADD CONSTRAINT "_products_v_version_feature_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prod_uc_cards_v" ADD CONSTRAINT "_prod_uc_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prod_post_uc_cards_v" ADD CONSTRAINT "_prod_post_uc_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_prod_cta_items_v" ADD CONSTRAINT "_prod_cta_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_products_v" ADD CONSTRAINT "_products_v_parent_id_products_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_products_v" ADD CONSTRAINT "_products_v_version_hero_section_image_id_media_id_fk" FOREIGN KEY ("version_hero_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_products_v" ADD CONSTRAINT "_products_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "legal_pages_sections" ADD CONSTRAINT "legal_pages_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."legal_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "legal_pages" ADD CONSTRAINT "legal_pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_pages_v_version_sections" ADD CONSTRAINT "_legal_pages_v_version_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_legal_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_legal_pages_v" ADD CONSTRAINT "_legal_pages_v_parent_id_legal_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."legal_pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_legal_pages_v" ADD CONSTRAINT "_legal_pages_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_products_fk" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_legal_pages_fk" FOREIGN KEY ("legal_pages_id") REFERENCES "public"."legal_pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_fk" FOREIGN KEY ("leads_id") REFERENCES "public"."leads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_documents_fk" FOREIGN KEY ("documents_id") REFERENCES "public"."documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_hero_section_actions" ADD CONSTRAINT "home_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_intelligence_section_features" ADD CONSTRAINT "home_intelligence_section_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_intelligence_section_features" ADD CONSTRAINT "home_intelligence_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_signal_layer_section_steps" ADD CONSTRAINT "home_signal_layer_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_setup_section_points" ADD CONSTRAINT "home_setup_section_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_layers_section_layers" ADD CONSTRAINT "home_layers_section_layers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_layers_section_layers" ADD CONSTRAINT "home_layers_section_layers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_smart_db_section_features" ADD CONSTRAINT "home_smart_db_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_sovereignty_section_cards" ADD CONSTRAINT "home_sovereignty_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_enterprise_section_audiences" ADD CONSTRAINT "home_enterprise_section_audiences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_impact_section_metrics" ADD CONSTRAINT "home_impact_section_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_safety_section_image_id_media_id_fk" FOREIGN KEY ("safety_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_hero_section_actions" ADD CONSTRAINT "_home_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_intelligence_section_features" ADD CONSTRAINT "_home_v_version_intelligence_section_features_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_intelligence_section_features" ADD CONSTRAINT "_home_v_version_intelligence_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_signal_layer_section_steps" ADD CONSTRAINT "_home_v_version_signal_layer_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_setup_section_points" ADD CONSTRAINT "_home_v_version_setup_section_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_layers_section_layers" ADD CONSTRAINT "_home_v_version_layers_section_layers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_version_layers_section_layers" ADD CONSTRAINT "_home_v_version_layers_section_layers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_smart_db_section_features" ADD CONSTRAINT "_home_v_version_smart_db_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_sovereignty_section_cards" ADD CONSTRAINT "_home_v_version_sovereignty_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_enterprise_section_audiences" ADD CONSTRAINT "_home_v_version_enterprise_section_audiences_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_version_impact_section_metrics" ADD CONSTRAINT "_home_v_version_impact_section_metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_safety_section_image_id_media_id_fk" FOREIGN KEY ("version_safety_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db_hero_section_actions" ADD CONSTRAINT "smart_db_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_knows_section_descriptions" ADD CONSTRAINT "smart_db_knows_section_descriptions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_knows_section_stats" ADD CONSTRAINT "smart_db_knows_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_unchanged_section_cards" ADD CONSTRAINT "smart_db_unchanged_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_loop_section_steps" ADD CONSTRAINT "smart_db_loop_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_capabilities_section_items" ADD CONSTRAINT "smart_db_capabilities_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_pocket_section_screens" ADD CONSTRAINT "smart_db_pocket_section_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db_pocket_section_screens" ADD CONSTRAINT "smart_db_pocket_section_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_platform_section_tiles" ADD CONSTRAINT "smart_db_platform_section_tiles_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db_platform_section_tiles" ADD CONSTRAINT "smart_db_platform_section_tiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_comparison_section_columns" ADD CONSTRAINT "smart_db_comparison_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sdb_cmp_cells" ADD CONSTRAINT "sdb_cmp_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sdb_cmp_rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sdb_cmp_rows" ADD CONSTRAINT "sdb_cmp_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_segments_section_segments" ADD CONSTRAINT "smart_db_segments_section_segments_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db_segments_section_segments" ADD CONSTRAINT "smart_db_segments_section_segments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_fire_section_tags" ADD CONSTRAINT "smart_db_fire_section_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db_specs_section_specs" ADD CONSTRAINT "smart_db_specs_section_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."smart_db"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "smart_db" ADD CONSTRAINT "smart_db_layers_section_image_id_media_id_fk" FOREIGN KEY ("layers_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db" ADD CONSTRAINT "smart_db_knows_section_action_document_id_documents_id_fk" FOREIGN KEY ("knows_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db" ADD CONSTRAINT "smart_db_loop_section_action_document_id_documents_id_fk" FOREIGN KEY ("loop_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db" ADD CONSTRAINT "smart_db_comparison_section_action_document_id_documents_id_fk" FOREIGN KEY ("comparison_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "smart_db" ADD CONSTRAINT "smart_db_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_hero_section_actions" ADD CONSTRAINT "_smart_db_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_knows_section_descriptions" ADD CONSTRAINT "_smart_db_v_version_knows_section_descriptions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_knows_section_stats" ADD CONSTRAINT "_smart_db_v_version_knows_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_unchanged_section_cards" ADD CONSTRAINT "_smart_db_v_version_unchanged_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_loop_section_steps" ADD CONSTRAINT "_smart_db_v_version_loop_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_capabilities_section_items" ADD CONSTRAINT "_smart_db_v_version_capabilities_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_pocket_section_screens" ADD CONSTRAINT "_smart_db_v_version_pocket_section_screens_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_pocket_section_screens" ADD CONSTRAINT "_smart_db_v_version_pocket_section_screens_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_platform_section_tiles" ADD CONSTRAINT "_smart_db_v_version_platform_section_tiles_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_platform_section_tiles" ADD CONSTRAINT "_smart_db_v_version_platform_section_tiles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_comparison_section_columns" ADD CONSTRAINT "_smart_db_v_version_comparison_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_sdb_cmp_cells_v" ADD CONSTRAINT "_sdb_cmp_cells_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_sdb_cmp_rows_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_sdb_cmp_rows_v" ADD CONSTRAINT "_sdb_cmp_rows_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_segments_section_segments" ADD CONSTRAINT "_smart_db_v_version_segments_section_segments_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_segments_section_segments" ADD CONSTRAINT "_smart_db_v_version_segments_section_segments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_fire_section_tags" ADD CONSTRAINT "_smart_db_v_version_fire_section_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v_version_specs_section_specs" ADD CONSTRAINT "_smart_db_v_version_specs_section_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_smart_db_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_smart_db_v" ADD CONSTRAINT "_smart_db_v_version_layers_section_image_id_media_id_fk" FOREIGN KEY ("version_layers_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v" ADD CONSTRAINT "_smart_db_v_version_knows_section_action_document_id_documents_id_fk" FOREIGN KEY ("version_knows_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v" ADD CONSTRAINT "_smart_db_v_version_loop_section_action_document_id_documents_id_fk" FOREIGN KEY ("version_loop_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v" ADD CONSTRAINT "_smart_db_v_version_comparison_section_action_document_id_documents_id_fk" FOREIGN KEY ("version_comparison_section_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_smart_db_v" ADD CONSTRAINT "_smart_db_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms_hero_section_stats" ADD CONSTRAINT "fms_hero_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_hero_section_actions" ADD CONSTRAINT "fms_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_gap_col_items" ADD CONSTRAINT "fms_gap_col_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms_gap_section_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_gap_section_columns" ADD CONSTRAINT "fms_gap_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_chain_section_items" ADD CONSTRAINT "fms_chain_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_steps_section_cards" ADD CONSTRAINT "fms_steps_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_cov_params" ADD CONSTRAINT "fms_cov_params_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms_coverage_section_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_coverage_section_groups" ADD CONSTRAINT "fms_coverage_section_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_alerts_section_cards" ADD CONSTRAINT "fms_alerts_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_assurance_section_items" ADD CONSTRAINT "fms_assurance_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms_faq_section_items" ADD CONSTRAINT "fms_faq_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_problem_section_image_id_media_id_fk" FOREIGN KEY ("problem_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_problem_section_download_action_document_id_documents_id_fk" FOREIGN KEY ("problem_section_download_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_audience_section_image_id_media_id_fk" FOREIGN KEY ("audience_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_chain_section_video_id_documents_id_fk" FOREIGN KEY ("chain_section_video_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_visibility_section_image_id_media_id_fk" FOREIGN KEY ("visibility_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fms" ADD CONSTRAINT "fms_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v_version_hero_section_stats" ADD CONSTRAINT "_fms_v_version_hero_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_hero_section_actions" ADD CONSTRAINT "_fms_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_gap_col_items_v" ADD CONSTRAINT "_fms_gap_col_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v_version_gap_section_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_gap_section_columns" ADD CONSTRAINT "_fms_v_version_gap_section_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_chain_section_items" ADD CONSTRAINT "_fms_v_version_chain_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_steps_section_cards" ADD CONSTRAINT "_fms_v_version_steps_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_cov_params_v" ADD CONSTRAINT "_fms_cov_params_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v_version_coverage_section_groups"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_coverage_section_groups" ADD CONSTRAINT "_fms_v_version_coverage_section_groups_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_alerts_section_cards" ADD CONSTRAINT "_fms_v_version_alerts_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_assurance_section_items" ADD CONSTRAINT "_fms_v_version_assurance_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v_version_faq_section_items" ADD CONSTRAINT "_fms_v_version_faq_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fms_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_problem_section_image_id_media_id_fk" FOREIGN KEY ("version_problem_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_problem_section_download_action_document_id_documents_id_fk" FOREIGN KEY ("version_problem_section_download_action_document_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_audience_section_image_id_media_id_fk" FOREIGN KEY ("version_audience_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_chain_section_video_id_documents_id_fk" FOREIGN KEY ("version_chain_section_video_id") REFERENCES "public"."documents"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_visibility_section_image_id_media_id_fk" FOREIGN KEY ("version_visibility_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fms_v" ADD CONSTRAINT "_fms_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ohm_os_hero_section_actions" ADD CONSTRAINT "ohm_os_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ohm_os"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ohm_os_applications_section_items" ADD CONSTRAINT "ohm_os_applications_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ohm_os"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ohm_os_layer_section_cards" ADD CONSTRAINT "ohm_os_layer_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ohm_os"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ohm_os_licensee_section_logos" ADD CONSTRAINT "ohm_os_licensee_section_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ohm_os_licensee_section_logos" ADD CONSTRAINT "ohm_os_licensee_section_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ohm_os"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ohm_os" ADD CONSTRAINT "ohm_os_applications_section_image_id_media_id_fk" FOREIGN KEY ("applications_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ohm_os" ADD CONSTRAINT "ohm_os_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ohm_os_v_version_hero_section_actions" ADD CONSTRAINT "_ohm_os_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ohm_os_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ohm_os_v_version_applications_section_items" ADD CONSTRAINT "_ohm_os_v_version_applications_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ohm_os_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ohm_os_v_version_layer_section_cards" ADD CONSTRAINT "_ohm_os_v_version_layer_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ohm_os_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ohm_os_v_version_licensee_section_logos" ADD CONSTRAINT "_ohm_os_v_version_licensee_section_logos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ohm_os_v_version_licensee_section_logos" ADD CONSTRAINT "_ohm_os_v_version_licensee_section_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ohm_os_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ohm_os_v" ADD CONSTRAINT "_ohm_os_v_version_applications_section_image_id_media_id_fk" FOREIGN KEY ("version_applications_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ohm_os_v" ADD CONSTRAINT "_ohm_os_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ora_enables_section_cards" ADD CONSTRAINT "ora_enables_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ora"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ora" ADD CONSTRAINT "ora_hero_section_image_id_media_id_fk" FOREIGN KEY ("hero_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ora" ADD CONSTRAINT "ora_enables_section_image_id_media_id_fk" FOREIGN KEY ("enables_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "ora" ADD CONSTRAINT "ora_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ora_v_version_enables_section_cards" ADD CONSTRAINT "_ora_v_version_enables_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ora_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_ora_v" ADD CONSTRAINT "_ora_v_version_hero_section_image_id_media_id_fk" FOREIGN KEY ("version_hero_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ora_v" ADD CONSTRAINT "_ora_v_version_enables_section_image_id_media_id_fk" FOREIGN KEY ("version_enables_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_ora_v" ADD CONSTRAINT "_ora_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "solutions_hero_section_actions" ADD CONSTRAINT "solutions_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sol_panel_caps" ADD CONSTRAINT "sol_panel_caps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions_panels"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_panels" ADD CONSTRAINT "solutions_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions_partner_section_items" ADD CONSTRAINT "solutions_partner_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "solutions" ADD CONSTRAINT "solutions_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_hero_section_actions" ADD CONSTRAINT "_solutions_v_version_hero_section_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_sol_panel_caps_v" ADD CONSTRAINT "_sol_panel_caps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v_version_panels"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_panels" ADD CONSTRAINT "_solutions_v_version_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v_version_partner_section_items" ADD CONSTRAINT "_solutions_v_version_partner_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "support_qr_cards" ADD CONSTRAINT "support_qr_cards_qr_image_id_media_id_fk" FOREIGN KEY ("qr_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "support_qr_cards" ADD CONSTRAINT "support_qr_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "support_qr_cards" ADD CONSTRAINT "support_qr_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."support"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "support" ADD CONSTRAINT "support_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_support_v_version_qr_cards" ADD CONSTRAINT "_support_v_version_qr_cards_qr_image_id_media_id_fk" FOREIGN KEY ("qr_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_support_v_version_qr_cards" ADD CONSTRAINT "_support_v_version_qr_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_support_v_version_qr_cards" ADD CONSTRAINT "_support_v_version_qr_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_support_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_support_v" ADD CONSTRAINT "_support_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "nav_header_children" ADD CONSTRAINT "nav_header_children_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header" ADD CONSTRAINT "navigation_header_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_footer_links" ADD CONSTRAINT "nav_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation_footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_columns" ADD CONSTRAINT "navigation_footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_footer_legal" ADD CONSTRAINT "nav_footer_legal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "settings" ADD CONSTRAINT "settings_default_share_image_id_media_id_fk" FOREIGN KEY ("default_share_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "products_intro_section_descriptions_order_idx" ON "products_intro_section_descriptions" USING btree ("_order");
  CREATE INDEX "products_intro_section_descriptions_parent_id_idx" ON "products_intro_section_descriptions" USING btree ("_parent_id");
  CREATE INDEX "products_hero_section_actions_order_idx" ON "products_hero_section_actions" USING btree ("_order");
  CREATE INDEX "products_hero_section_actions_parent_id_idx" ON "products_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "products_feature_section_cards_order_idx" ON "products_feature_section_cards" USING btree ("_order");
  CREATE INDEX "products_feature_section_cards_parent_id_idx" ON "products_feature_section_cards" USING btree ("_parent_id");
  CREATE INDEX "prod_uc_cards_order_idx" ON "prod_uc_cards" USING btree ("_order");
  CREATE INDEX "prod_uc_cards_parent_id_idx" ON "prod_uc_cards" USING btree ("_parent_id");
  CREATE INDEX "prod_post_uc_cards_order_idx" ON "prod_post_uc_cards" USING btree ("_order");
  CREATE INDEX "prod_post_uc_cards_parent_id_idx" ON "prod_post_uc_cards" USING btree ("_parent_id");
  CREATE INDEX "prod_cta_items_order_idx" ON "prod_cta_items" USING btree ("_order");
  CREATE INDEX "prod_cta_items_parent_id_idx" ON "prod_cta_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "products_slug_idx" ON "products" USING btree ("slug");
  CREATE INDEX "products_hero_section_hero_section_image_idx" ON "products" USING btree ("hero_section_image_id");
  CREATE INDEX "products_seo_seo_image_idx" ON "products" USING btree ("seo_image_id");
  CREATE INDEX "products_updated_at_idx" ON "products" USING btree ("updated_at");
  CREATE INDEX "products_created_at_idx" ON "products" USING btree ("created_at");
  CREATE INDEX "products__status_idx" ON "products" USING btree ("_status");
  CREATE INDEX "_products_v_version_intro_section_descriptions_order_idx" ON "_products_v_version_intro_section_descriptions" USING btree ("_order");
  CREATE INDEX "_products_v_version_intro_section_descriptions_parent_id_idx" ON "_products_v_version_intro_section_descriptions" USING btree ("_parent_id");
  CREATE INDEX "_products_v_version_hero_section_actions_order_idx" ON "_products_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_products_v_version_hero_section_actions_parent_id_idx" ON "_products_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_products_v_version_feature_section_cards_order_idx" ON "_products_v_version_feature_section_cards" USING btree ("_order");
  CREATE INDEX "_products_v_version_feature_section_cards_parent_id_idx" ON "_products_v_version_feature_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_prod_uc_cards_v_order_idx" ON "_prod_uc_cards_v" USING btree ("_order");
  CREATE INDEX "_prod_uc_cards_v_parent_id_idx" ON "_prod_uc_cards_v" USING btree ("_parent_id");
  CREATE INDEX "_prod_post_uc_cards_v_order_idx" ON "_prod_post_uc_cards_v" USING btree ("_order");
  CREATE INDEX "_prod_post_uc_cards_v_parent_id_idx" ON "_prod_post_uc_cards_v" USING btree ("_parent_id");
  CREATE INDEX "_prod_cta_items_v_order_idx" ON "_prod_cta_items_v" USING btree ("_order");
  CREATE INDEX "_prod_cta_items_v_parent_id_idx" ON "_prod_cta_items_v" USING btree ("_parent_id");
  CREATE INDEX "_products_v_parent_idx" ON "_products_v" USING btree ("parent_id");
  CREATE INDEX "_products_v_version_version_slug_idx" ON "_products_v" USING btree ("version_slug");
  CREATE INDEX "_products_v_version_hero_section_version_hero_section_im_idx" ON "_products_v" USING btree ("version_hero_section_image_id");
  CREATE INDEX "_products_v_version_seo_version_seo_image_idx" ON "_products_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_products_v_version_version_updated_at_idx" ON "_products_v" USING btree ("version_updated_at");
  CREATE INDEX "_products_v_version_version_created_at_idx" ON "_products_v" USING btree ("version_created_at");
  CREATE INDEX "_products_v_version_version__status_idx" ON "_products_v" USING btree ("version__status");
  CREATE INDEX "_products_v_created_at_idx" ON "_products_v" USING btree ("created_at");
  CREATE INDEX "_products_v_updated_at_idx" ON "_products_v" USING btree ("updated_at");
  CREATE INDEX "_products_v_latest_idx" ON "_products_v" USING btree ("latest");
  CREATE INDEX "legal_pages_sections_order_idx" ON "legal_pages_sections" USING btree ("_order");
  CREATE INDEX "legal_pages_sections_parent_id_idx" ON "legal_pages_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "legal_pages_slug_idx" ON "legal_pages" USING btree ("slug");
  CREATE INDEX "legal_pages_seo_seo_image_idx" ON "legal_pages" USING btree ("seo_image_id");
  CREATE INDEX "legal_pages_updated_at_idx" ON "legal_pages" USING btree ("updated_at");
  CREATE INDEX "legal_pages_created_at_idx" ON "legal_pages" USING btree ("created_at");
  CREATE INDEX "legal_pages__status_idx" ON "legal_pages" USING btree ("_status");
  CREATE INDEX "_legal_pages_v_version_sections_order_idx" ON "_legal_pages_v_version_sections" USING btree ("_order");
  CREATE INDEX "_legal_pages_v_version_sections_parent_id_idx" ON "_legal_pages_v_version_sections" USING btree ("_parent_id");
  CREATE INDEX "_legal_pages_v_parent_idx" ON "_legal_pages_v" USING btree ("parent_id");
  CREATE INDEX "_legal_pages_v_version_version_slug_idx" ON "_legal_pages_v" USING btree ("version_slug");
  CREATE INDEX "_legal_pages_v_version_seo_version_seo_image_idx" ON "_legal_pages_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_legal_pages_v_version_version_updated_at_idx" ON "_legal_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_legal_pages_v_version_version_created_at_idx" ON "_legal_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_legal_pages_v_version_version__status_idx" ON "_legal_pages_v" USING btree ("version__status");
  CREATE INDEX "_legal_pages_v_created_at_idx" ON "_legal_pages_v" USING btree ("created_at");
  CREATE INDEX "_legal_pages_v_updated_at_idx" ON "_legal_pages_v" USING btree ("updated_at");
  CREATE INDEX "_legal_pages_v_latest_idx" ON "_legal_pages_v" USING btree ("latest");
  CREATE INDEX "leads_email_idx" ON "leads" USING btree ("email");
  CREATE INDEX "leads_source_idx" ON "leads" USING btree ("source");
  CREATE INDEX "leads_updated_at_idx" ON "leads" USING btree ("updated_at");
  CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_wide_sizes_wide_filename_idx" ON "media" USING btree ("sizes_wide_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "documents_updated_at_idx" ON "documents" USING btree ("updated_at");
  CREATE INDEX "documents_created_at_idx" ON "documents" USING btree ("created_at");
  CREATE UNIQUE INDEX "documents_filename_idx" ON "documents" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_products_id_idx" ON "payload_locked_documents_rels" USING btree ("products_id");
  CREATE INDEX "payload_locked_documents_rels_legal_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("legal_pages_id");
  CREATE INDEX "payload_locked_documents_rels_leads_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_documents_id_idx" ON "payload_locked_documents_rels" USING btree ("documents_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_hero_section_actions_order_idx" ON "home_hero_section_actions" USING btree ("_order");
  CREATE INDEX "home_hero_section_actions_parent_id_idx" ON "home_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "home_intelligence_section_features_order_idx" ON "home_intelligence_section_features" USING btree ("_order");
  CREATE INDEX "home_intelligence_section_features_parent_id_idx" ON "home_intelligence_section_features" USING btree ("_parent_id");
  CREATE INDEX "home_intelligence_section_features_image_idx" ON "home_intelligence_section_features" USING btree ("image_id");
  CREATE INDEX "home_signal_layer_section_steps_order_idx" ON "home_signal_layer_section_steps" USING btree ("_order");
  CREATE INDEX "home_signal_layer_section_steps_parent_id_idx" ON "home_signal_layer_section_steps" USING btree ("_parent_id");
  CREATE INDEX "home_setup_section_points_order_idx" ON "home_setup_section_points" USING btree ("_order");
  CREATE INDEX "home_setup_section_points_parent_id_idx" ON "home_setup_section_points" USING btree ("_parent_id");
  CREATE INDEX "home_layers_section_layers_order_idx" ON "home_layers_section_layers" USING btree ("_order");
  CREATE INDEX "home_layers_section_layers_parent_id_idx" ON "home_layers_section_layers" USING btree ("_parent_id");
  CREATE INDEX "home_layers_section_layers_image_idx" ON "home_layers_section_layers" USING btree ("image_id");
  CREATE INDEX "home_smart_db_section_features_order_idx" ON "home_smart_db_section_features" USING btree ("_order");
  CREATE INDEX "home_smart_db_section_features_parent_id_idx" ON "home_smart_db_section_features" USING btree ("_parent_id");
  CREATE INDEX "home_sovereignty_section_cards_order_idx" ON "home_sovereignty_section_cards" USING btree ("_order");
  CREATE INDEX "home_sovereignty_section_cards_parent_id_idx" ON "home_sovereignty_section_cards" USING btree ("_parent_id");
  CREATE INDEX "home_enterprise_section_audiences_order_idx" ON "home_enterprise_section_audiences" USING btree ("_order");
  CREATE INDEX "home_enterprise_section_audiences_parent_id_idx" ON "home_enterprise_section_audiences" USING btree ("_parent_id");
  CREATE INDEX "home_impact_section_metrics_order_idx" ON "home_impact_section_metrics" USING btree ("_order");
  CREATE INDEX "home_impact_section_metrics_parent_id_idx" ON "home_impact_section_metrics" USING btree ("_parent_id");
  CREATE INDEX "home_safety_section_safety_section_image_idx" ON "home" USING btree ("safety_section_image_id");
  CREATE INDEX "home_seo_seo_image_idx" ON "home" USING btree ("seo_image_id");
  CREATE INDEX "home__status_idx" ON "home" USING btree ("_status");
  CREATE INDEX "_home_v_version_hero_section_actions_order_idx" ON "_home_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_home_v_version_hero_section_actions_parent_id_idx" ON "_home_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_intelligence_section_features_order_idx" ON "_home_v_version_intelligence_section_features" USING btree ("_order");
  CREATE INDEX "_home_v_version_intelligence_section_features_parent_id_idx" ON "_home_v_version_intelligence_section_features" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_intelligence_section_features_image_idx" ON "_home_v_version_intelligence_section_features" USING btree ("image_id");
  CREATE INDEX "_home_v_version_signal_layer_section_steps_order_idx" ON "_home_v_version_signal_layer_section_steps" USING btree ("_order");
  CREATE INDEX "_home_v_version_signal_layer_section_steps_parent_id_idx" ON "_home_v_version_signal_layer_section_steps" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_setup_section_points_order_idx" ON "_home_v_version_setup_section_points" USING btree ("_order");
  CREATE INDEX "_home_v_version_setup_section_points_parent_id_idx" ON "_home_v_version_setup_section_points" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_layers_section_layers_order_idx" ON "_home_v_version_layers_section_layers" USING btree ("_order");
  CREATE INDEX "_home_v_version_layers_section_layers_parent_id_idx" ON "_home_v_version_layers_section_layers" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_layers_section_layers_image_idx" ON "_home_v_version_layers_section_layers" USING btree ("image_id");
  CREATE INDEX "_home_v_version_smart_db_section_features_order_idx" ON "_home_v_version_smart_db_section_features" USING btree ("_order");
  CREATE INDEX "_home_v_version_smart_db_section_features_parent_id_idx" ON "_home_v_version_smart_db_section_features" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_sovereignty_section_cards_order_idx" ON "_home_v_version_sovereignty_section_cards" USING btree ("_order");
  CREATE INDEX "_home_v_version_sovereignty_section_cards_parent_id_idx" ON "_home_v_version_sovereignty_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_enterprise_section_audiences_order_idx" ON "_home_v_version_enterprise_section_audiences" USING btree ("_order");
  CREATE INDEX "_home_v_version_enterprise_section_audiences_parent_id_idx" ON "_home_v_version_enterprise_section_audiences" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_impact_section_metrics_order_idx" ON "_home_v_version_impact_section_metrics" USING btree ("_order");
  CREATE INDEX "_home_v_version_impact_section_metrics_parent_id_idx" ON "_home_v_version_impact_section_metrics" USING btree ("_parent_id");
  CREATE INDEX "_home_v_version_safety_section_version_safety_section_im_idx" ON "_home_v" USING btree ("version_safety_section_image_id");
  CREATE INDEX "_home_v_version_seo_version_seo_image_idx" ON "_home_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_home_v_version_version__status_idx" ON "_home_v" USING btree ("version__status");
  CREATE INDEX "_home_v_created_at_idx" ON "_home_v" USING btree ("created_at");
  CREATE INDEX "_home_v_updated_at_idx" ON "_home_v" USING btree ("updated_at");
  CREATE INDEX "_home_v_latest_idx" ON "_home_v" USING btree ("latest");
  CREATE INDEX "smart_db_hero_section_actions_order_idx" ON "smart_db_hero_section_actions" USING btree ("_order");
  CREATE INDEX "smart_db_hero_section_actions_parent_id_idx" ON "smart_db_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "smart_db_knows_section_descriptions_order_idx" ON "smart_db_knows_section_descriptions" USING btree ("_order");
  CREATE INDEX "smart_db_knows_section_descriptions_parent_id_idx" ON "smart_db_knows_section_descriptions" USING btree ("_parent_id");
  CREATE INDEX "smart_db_knows_section_stats_order_idx" ON "smart_db_knows_section_stats" USING btree ("_order");
  CREATE INDEX "smart_db_knows_section_stats_parent_id_idx" ON "smart_db_knows_section_stats" USING btree ("_parent_id");
  CREATE INDEX "smart_db_unchanged_section_cards_order_idx" ON "smart_db_unchanged_section_cards" USING btree ("_order");
  CREATE INDEX "smart_db_unchanged_section_cards_parent_id_idx" ON "smart_db_unchanged_section_cards" USING btree ("_parent_id");
  CREATE INDEX "smart_db_loop_section_steps_order_idx" ON "smart_db_loop_section_steps" USING btree ("_order");
  CREATE INDEX "smart_db_loop_section_steps_parent_id_idx" ON "smart_db_loop_section_steps" USING btree ("_parent_id");
  CREATE INDEX "smart_db_capabilities_section_items_order_idx" ON "smart_db_capabilities_section_items" USING btree ("_order");
  CREATE INDEX "smart_db_capabilities_section_items_parent_id_idx" ON "smart_db_capabilities_section_items" USING btree ("_parent_id");
  CREATE INDEX "smart_db_pocket_section_screens_order_idx" ON "smart_db_pocket_section_screens" USING btree ("_order");
  CREATE INDEX "smart_db_pocket_section_screens_parent_id_idx" ON "smart_db_pocket_section_screens" USING btree ("_parent_id");
  CREATE INDEX "smart_db_pocket_section_screens_image_idx" ON "smart_db_pocket_section_screens" USING btree ("image_id");
  CREATE INDEX "smart_db_platform_section_tiles_order_idx" ON "smart_db_platform_section_tiles" USING btree ("_order");
  CREATE INDEX "smart_db_platform_section_tiles_parent_id_idx" ON "smart_db_platform_section_tiles" USING btree ("_parent_id");
  CREATE INDEX "smart_db_platform_section_tiles_image_idx" ON "smart_db_platform_section_tiles" USING btree ("image_id");
  CREATE INDEX "smart_db_comparison_section_columns_order_idx" ON "smart_db_comparison_section_columns" USING btree ("_order");
  CREATE INDEX "smart_db_comparison_section_columns_parent_id_idx" ON "smart_db_comparison_section_columns" USING btree ("_parent_id");
  CREATE INDEX "sdb_cmp_cells_order_idx" ON "sdb_cmp_cells" USING btree ("_order");
  CREATE INDEX "sdb_cmp_cells_parent_id_idx" ON "sdb_cmp_cells" USING btree ("_parent_id");
  CREATE INDEX "sdb_cmp_rows_order_idx" ON "sdb_cmp_rows" USING btree ("_order");
  CREATE INDEX "sdb_cmp_rows_parent_id_idx" ON "sdb_cmp_rows" USING btree ("_parent_id");
  CREATE INDEX "smart_db_segments_section_segments_order_idx" ON "smart_db_segments_section_segments" USING btree ("_order");
  CREATE INDEX "smart_db_segments_section_segments_parent_id_idx" ON "smart_db_segments_section_segments" USING btree ("_parent_id");
  CREATE INDEX "smart_db_segments_section_segments_image_idx" ON "smart_db_segments_section_segments" USING btree ("image_id");
  CREATE INDEX "smart_db_fire_section_tags_order_idx" ON "smart_db_fire_section_tags" USING btree ("_order");
  CREATE INDEX "smart_db_fire_section_tags_parent_id_idx" ON "smart_db_fire_section_tags" USING btree ("_parent_id");
  CREATE INDEX "smart_db_specs_section_specs_order_idx" ON "smart_db_specs_section_specs" USING btree ("_order");
  CREATE INDEX "smart_db_specs_section_specs_parent_id_idx" ON "smart_db_specs_section_specs" USING btree ("_parent_id");
  CREATE INDEX "smart_db_layers_section_layers_section_image_idx" ON "smart_db" USING btree ("layers_section_image_id");
  CREATE INDEX "smart_db_knows_section_action_knows_section_action_docum_idx" ON "smart_db" USING btree ("knows_section_action_document_id");
  CREATE INDEX "smart_db_loop_section_action_loop_section_action_documen_idx" ON "smart_db" USING btree ("loop_section_action_document_id");
  CREATE INDEX "smart_db_comparison_section_action_comparison_section_ac_idx" ON "smart_db" USING btree ("comparison_section_action_document_id");
  CREATE INDEX "smart_db_seo_seo_image_idx" ON "smart_db" USING btree ("seo_image_id");
  CREATE INDEX "smart_db__status_idx" ON "smart_db" USING btree ("_status");
  CREATE INDEX "_smart_db_v_version_hero_section_actions_order_idx" ON "_smart_db_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_hero_section_actions_parent_id_idx" ON "_smart_db_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_knows_section_descriptions_order_idx" ON "_smart_db_v_version_knows_section_descriptions" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_knows_section_descriptions_parent_id_idx" ON "_smart_db_v_version_knows_section_descriptions" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_knows_section_stats_order_idx" ON "_smart_db_v_version_knows_section_stats" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_knows_section_stats_parent_id_idx" ON "_smart_db_v_version_knows_section_stats" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_unchanged_section_cards_order_idx" ON "_smart_db_v_version_unchanged_section_cards" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_unchanged_section_cards_parent_id_idx" ON "_smart_db_v_version_unchanged_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_loop_section_steps_order_idx" ON "_smart_db_v_version_loop_section_steps" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_loop_section_steps_parent_id_idx" ON "_smart_db_v_version_loop_section_steps" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_capabilities_section_items_order_idx" ON "_smart_db_v_version_capabilities_section_items" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_capabilities_section_items_parent_id_idx" ON "_smart_db_v_version_capabilities_section_items" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_pocket_section_screens_order_idx" ON "_smart_db_v_version_pocket_section_screens" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_pocket_section_screens_parent_id_idx" ON "_smart_db_v_version_pocket_section_screens" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_pocket_section_screens_image_idx" ON "_smart_db_v_version_pocket_section_screens" USING btree ("image_id");
  CREATE INDEX "_smart_db_v_version_platform_section_tiles_order_idx" ON "_smart_db_v_version_platform_section_tiles" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_platform_section_tiles_parent_id_idx" ON "_smart_db_v_version_platform_section_tiles" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_platform_section_tiles_image_idx" ON "_smart_db_v_version_platform_section_tiles" USING btree ("image_id");
  CREATE INDEX "_smart_db_v_version_comparison_section_columns_order_idx" ON "_smart_db_v_version_comparison_section_columns" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_comparison_section_columns_parent_id_idx" ON "_smart_db_v_version_comparison_section_columns" USING btree ("_parent_id");
  CREATE INDEX "_sdb_cmp_cells_v_order_idx" ON "_sdb_cmp_cells_v" USING btree ("_order");
  CREATE INDEX "_sdb_cmp_cells_v_parent_id_idx" ON "_sdb_cmp_cells_v" USING btree ("_parent_id");
  CREATE INDEX "_sdb_cmp_rows_v_order_idx" ON "_sdb_cmp_rows_v" USING btree ("_order");
  CREATE INDEX "_sdb_cmp_rows_v_parent_id_idx" ON "_sdb_cmp_rows_v" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_segments_section_segments_order_idx" ON "_smart_db_v_version_segments_section_segments" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_segments_section_segments_parent_id_idx" ON "_smart_db_v_version_segments_section_segments" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_segments_section_segments_image_idx" ON "_smart_db_v_version_segments_section_segments" USING btree ("image_id");
  CREATE INDEX "_smart_db_v_version_fire_section_tags_order_idx" ON "_smart_db_v_version_fire_section_tags" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_fire_section_tags_parent_id_idx" ON "_smart_db_v_version_fire_section_tags" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_specs_section_specs_order_idx" ON "_smart_db_v_version_specs_section_specs" USING btree ("_order");
  CREATE INDEX "_smart_db_v_version_specs_section_specs_parent_id_idx" ON "_smart_db_v_version_specs_section_specs" USING btree ("_parent_id");
  CREATE INDEX "_smart_db_v_version_layers_section_version_layers_sectio_idx" ON "_smart_db_v" USING btree ("version_layers_section_image_id");
  CREATE INDEX "_smart_db_v_version_knows_section_action_version_knows_s_idx" ON "_smart_db_v" USING btree ("version_knows_section_action_document_id");
  CREATE INDEX "_smart_db_v_version_loop_section_action_version_loop_sec_idx" ON "_smart_db_v" USING btree ("version_loop_section_action_document_id");
  CREATE INDEX "_smart_db_v_version_comparison_section_action_version_co_idx" ON "_smart_db_v" USING btree ("version_comparison_section_action_document_id");
  CREATE INDEX "_smart_db_v_version_seo_version_seo_image_idx" ON "_smart_db_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_smart_db_v_version_version__status_idx" ON "_smart_db_v" USING btree ("version__status");
  CREATE INDEX "_smart_db_v_created_at_idx" ON "_smart_db_v" USING btree ("created_at");
  CREATE INDEX "_smart_db_v_updated_at_idx" ON "_smart_db_v" USING btree ("updated_at");
  CREATE INDEX "_smart_db_v_latest_idx" ON "_smart_db_v" USING btree ("latest");
  CREATE INDEX "fms_hero_section_stats_order_idx" ON "fms_hero_section_stats" USING btree ("_order");
  CREATE INDEX "fms_hero_section_stats_parent_id_idx" ON "fms_hero_section_stats" USING btree ("_parent_id");
  CREATE INDEX "fms_hero_section_actions_order_idx" ON "fms_hero_section_actions" USING btree ("_order");
  CREATE INDEX "fms_hero_section_actions_parent_id_idx" ON "fms_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "fms_gap_col_items_order_idx" ON "fms_gap_col_items" USING btree ("_order");
  CREATE INDEX "fms_gap_col_items_parent_id_idx" ON "fms_gap_col_items" USING btree ("_parent_id");
  CREATE INDEX "fms_gap_section_columns_order_idx" ON "fms_gap_section_columns" USING btree ("_order");
  CREATE INDEX "fms_gap_section_columns_parent_id_idx" ON "fms_gap_section_columns" USING btree ("_parent_id");
  CREATE INDEX "fms_chain_section_items_order_idx" ON "fms_chain_section_items" USING btree ("_order");
  CREATE INDEX "fms_chain_section_items_parent_id_idx" ON "fms_chain_section_items" USING btree ("_parent_id");
  CREATE INDEX "fms_steps_section_cards_order_idx" ON "fms_steps_section_cards" USING btree ("_order");
  CREATE INDEX "fms_steps_section_cards_parent_id_idx" ON "fms_steps_section_cards" USING btree ("_parent_id");
  CREATE INDEX "fms_cov_params_order_idx" ON "fms_cov_params" USING btree ("_order");
  CREATE INDEX "fms_cov_params_parent_id_idx" ON "fms_cov_params" USING btree ("_parent_id");
  CREATE INDEX "fms_coverage_section_groups_order_idx" ON "fms_coverage_section_groups" USING btree ("_order");
  CREATE INDEX "fms_coverage_section_groups_parent_id_idx" ON "fms_coverage_section_groups" USING btree ("_parent_id");
  CREATE INDEX "fms_alerts_section_cards_order_idx" ON "fms_alerts_section_cards" USING btree ("_order");
  CREATE INDEX "fms_alerts_section_cards_parent_id_idx" ON "fms_alerts_section_cards" USING btree ("_parent_id");
  CREATE INDEX "fms_assurance_section_items_order_idx" ON "fms_assurance_section_items" USING btree ("_order");
  CREATE INDEX "fms_assurance_section_items_parent_id_idx" ON "fms_assurance_section_items" USING btree ("_parent_id");
  CREATE INDEX "fms_faq_section_items_order_idx" ON "fms_faq_section_items" USING btree ("_order");
  CREATE INDEX "fms_faq_section_items_parent_id_idx" ON "fms_faq_section_items" USING btree ("_parent_id");
  CREATE INDEX "fms_problem_section_problem_section_image_idx" ON "fms" USING btree ("problem_section_image_id");
  CREATE INDEX "fms_problem_section_download_action_problem_section_down_idx" ON "fms" USING btree ("problem_section_download_action_document_id");
  CREATE INDEX "fms_audience_section_audience_section_image_idx" ON "fms" USING btree ("audience_section_image_id");
  CREATE INDEX "fms_chain_section_chain_section_video_idx" ON "fms" USING btree ("chain_section_video_id");
  CREATE INDEX "fms_visibility_section_visibility_section_image_idx" ON "fms" USING btree ("visibility_section_image_id");
  CREATE INDEX "fms_seo_seo_image_idx" ON "fms" USING btree ("seo_image_id");
  CREATE INDEX "fms__status_idx" ON "fms" USING btree ("_status");
  CREATE INDEX "_fms_v_version_hero_section_stats_order_idx" ON "_fms_v_version_hero_section_stats" USING btree ("_order");
  CREATE INDEX "_fms_v_version_hero_section_stats_parent_id_idx" ON "_fms_v_version_hero_section_stats" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_hero_section_actions_order_idx" ON "_fms_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_fms_v_version_hero_section_actions_parent_id_idx" ON "_fms_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_fms_gap_col_items_v_order_idx" ON "_fms_gap_col_items_v" USING btree ("_order");
  CREATE INDEX "_fms_gap_col_items_v_parent_id_idx" ON "_fms_gap_col_items_v" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_gap_section_columns_order_idx" ON "_fms_v_version_gap_section_columns" USING btree ("_order");
  CREATE INDEX "_fms_v_version_gap_section_columns_parent_id_idx" ON "_fms_v_version_gap_section_columns" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_chain_section_items_order_idx" ON "_fms_v_version_chain_section_items" USING btree ("_order");
  CREATE INDEX "_fms_v_version_chain_section_items_parent_id_idx" ON "_fms_v_version_chain_section_items" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_steps_section_cards_order_idx" ON "_fms_v_version_steps_section_cards" USING btree ("_order");
  CREATE INDEX "_fms_v_version_steps_section_cards_parent_id_idx" ON "_fms_v_version_steps_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_fms_cov_params_v_order_idx" ON "_fms_cov_params_v" USING btree ("_order");
  CREATE INDEX "_fms_cov_params_v_parent_id_idx" ON "_fms_cov_params_v" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_coverage_section_groups_order_idx" ON "_fms_v_version_coverage_section_groups" USING btree ("_order");
  CREATE INDEX "_fms_v_version_coverage_section_groups_parent_id_idx" ON "_fms_v_version_coverage_section_groups" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_alerts_section_cards_order_idx" ON "_fms_v_version_alerts_section_cards" USING btree ("_order");
  CREATE INDEX "_fms_v_version_alerts_section_cards_parent_id_idx" ON "_fms_v_version_alerts_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_assurance_section_items_order_idx" ON "_fms_v_version_assurance_section_items" USING btree ("_order");
  CREATE INDEX "_fms_v_version_assurance_section_items_parent_id_idx" ON "_fms_v_version_assurance_section_items" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_faq_section_items_order_idx" ON "_fms_v_version_faq_section_items" USING btree ("_order");
  CREATE INDEX "_fms_v_version_faq_section_items_parent_id_idx" ON "_fms_v_version_faq_section_items" USING btree ("_parent_id");
  CREATE INDEX "_fms_v_version_problem_section_version_problem_section_i_idx" ON "_fms_v" USING btree ("version_problem_section_image_id");
  CREATE INDEX "_fms_v_version_problem_section_download_action_version_p_idx" ON "_fms_v" USING btree ("version_problem_section_download_action_document_id");
  CREATE INDEX "_fms_v_version_audience_section_version_audience_section_idx" ON "_fms_v" USING btree ("version_audience_section_image_id");
  CREATE INDEX "_fms_v_version_chain_section_version_chain_section_video_idx" ON "_fms_v" USING btree ("version_chain_section_video_id");
  CREATE INDEX "_fms_v_version_visibility_section_version_visibility_sec_idx" ON "_fms_v" USING btree ("version_visibility_section_image_id");
  CREATE INDEX "_fms_v_version_seo_version_seo_image_idx" ON "_fms_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_fms_v_version_version__status_idx" ON "_fms_v" USING btree ("version__status");
  CREATE INDEX "_fms_v_created_at_idx" ON "_fms_v" USING btree ("created_at");
  CREATE INDEX "_fms_v_updated_at_idx" ON "_fms_v" USING btree ("updated_at");
  CREATE INDEX "_fms_v_latest_idx" ON "_fms_v" USING btree ("latest");
  CREATE INDEX "ohm_os_hero_section_actions_order_idx" ON "ohm_os_hero_section_actions" USING btree ("_order");
  CREATE INDEX "ohm_os_hero_section_actions_parent_id_idx" ON "ohm_os_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "ohm_os_applications_section_items_order_idx" ON "ohm_os_applications_section_items" USING btree ("_order");
  CREATE INDEX "ohm_os_applications_section_items_parent_id_idx" ON "ohm_os_applications_section_items" USING btree ("_parent_id");
  CREATE INDEX "ohm_os_layer_section_cards_order_idx" ON "ohm_os_layer_section_cards" USING btree ("_order");
  CREATE INDEX "ohm_os_layer_section_cards_parent_id_idx" ON "ohm_os_layer_section_cards" USING btree ("_parent_id");
  CREATE INDEX "ohm_os_licensee_section_logos_order_idx" ON "ohm_os_licensee_section_logos" USING btree ("_order");
  CREATE INDEX "ohm_os_licensee_section_logos_parent_id_idx" ON "ohm_os_licensee_section_logos" USING btree ("_parent_id");
  CREATE INDEX "ohm_os_licensee_section_logos_image_idx" ON "ohm_os_licensee_section_logos" USING btree ("image_id");
  CREATE INDEX "ohm_os_applications_section_applications_section_image_idx" ON "ohm_os" USING btree ("applications_section_image_id");
  CREATE INDEX "ohm_os_seo_seo_image_idx" ON "ohm_os" USING btree ("seo_image_id");
  CREATE INDEX "ohm_os__status_idx" ON "ohm_os" USING btree ("_status");
  CREATE INDEX "_ohm_os_v_version_hero_section_actions_order_idx" ON "_ohm_os_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_ohm_os_v_version_hero_section_actions_parent_id_idx" ON "_ohm_os_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_ohm_os_v_version_applications_section_items_order_idx" ON "_ohm_os_v_version_applications_section_items" USING btree ("_order");
  CREATE INDEX "_ohm_os_v_version_applications_section_items_parent_id_idx" ON "_ohm_os_v_version_applications_section_items" USING btree ("_parent_id");
  CREATE INDEX "_ohm_os_v_version_layer_section_cards_order_idx" ON "_ohm_os_v_version_layer_section_cards" USING btree ("_order");
  CREATE INDEX "_ohm_os_v_version_layer_section_cards_parent_id_idx" ON "_ohm_os_v_version_layer_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_ohm_os_v_version_licensee_section_logos_order_idx" ON "_ohm_os_v_version_licensee_section_logos" USING btree ("_order");
  CREATE INDEX "_ohm_os_v_version_licensee_section_logos_parent_id_idx" ON "_ohm_os_v_version_licensee_section_logos" USING btree ("_parent_id");
  CREATE INDEX "_ohm_os_v_version_licensee_section_logos_image_idx" ON "_ohm_os_v_version_licensee_section_logos" USING btree ("image_id");
  CREATE INDEX "_ohm_os_v_version_applications_section_version_applicati_idx" ON "_ohm_os_v" USING btree ("version_applications_section_image_id");
  CREATE INDEX "_ohm_os_v_version_seo_version_seo_image_idx" ON "_ohm_os_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_ohm_os_v_version_version__status_idx" ON "_ohm_os_v" USING btree ("version__status");
  CREATE INDEX "_ohm_os_v_created_at_idx" ON "_ohm_os_v" USING btree ("created_at");
  CREATE INDEX "_ohm_os_v_updated_at_idx" ON "_ohm_os_v" USING btree ("updated_at");
  CREATE INDEX "_ohm_os_v_latest_idx" ON "_ohm_os_v" USING btree ("latest");
  CREATE INDEX "ora_enables_section_cards_order_idx" ON "ora_enables_section_cards" USING btree ("_order");
  CREATE INDEX "ora_enables_section_cards_parent_id_idx" ON "ora_enables_section_cards" USING btree ("_parent_id");
  CREATE INDEX "ora_hero_section_hero_section_image_idx" ON "ora" USING btree ("hero_section_image_id");
  CREATE INDEX "ora_enables_section_enables_section_image_idx" ON "ora" USING btree ("enables_section_image_id");
  CREATE INDEX "ora_seo_seo_image_idx" ON "ora" USING btree ("seo_image_id");
  CREATE INDEX "ora__status_idx" ON "ora" USING btree ("_status");
  CREATE INDEX "_ora_v_version_enables_section_cards_order_idx" ON "_ora_v_version_enables_section_cards" USING btree ("_order");
  CREATE INDEX "_ora_v_version_enables_section_cards_parent_id_idx" ON "_ora_v_version_enables_section_cards" USING btree ("_parent_id");
  CREATE INDEX "_ora_v_version_hero_section_version_hero_section_image_idx" ON "_ora_v" USING btree ("version_hero_section_image_id");
  CREATE INDEX "_ora_v_version_enables_section_version_enables_section_i_idx" ON "_ora_v" USING btree ("version_enables_section_image_id");
  CREATE INDEX "_ora_v_version_seo_version_seo_image_idx" ON "_ora_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_ora_v_version_version__status_idx" ON "_ora_v" USING btree ("version__status");
  CREATE INDEX "_ora_v_created_at_idx" ON "_ora_v" USING btree ("created_at");
  CREATE INDEX "_ora_v_updated_at_idx" ON "_ora_v" USING btree ("updated_at");
  CREATE INDEX "_ora_v_latest_idx" ON "_ora_v" USING btree ("latest");
  CREATE INDEX "solutions_hero_section_actions_order_idx" ON "solutions_hero_section_actions" USING btree ("_order");
  CREATE INDEX "solutions_hero_section_actions_parent_id_idx" ON "solutions_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "sol_panel_caps_order_idx" ON "sol_panel_caps" USING btree ("_order");
  CREATE INDEX "sol_panel_caps_parent_id_idx" ON "sol_panel_caps" USING btree ("_parent_id");
  CREATE INDEX "solutions_panels_order_idx" ON "solutions_panels" USING btree ("_order");
  CREATE INDEX "solutions_panels_parent_id_idx" ON "solutions_panels" USING btree ("_parent_id");
  CREATE INDEX "solutions_partner_section_items_order_idx" ON "solutions_partner_section_items" USING btree ("_order");
  CREATE INDEX "solutions_partner_section_items_parent_id_idx" ON "solutions_partner_section_items" USING btree ("_parent_id");
  CREATE INDEX "solutions_seo_seo_image_idx" ON "solutions" USING btree ("seo_image_id");
  CREATE INDEX "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE INDEX "_solutions_v_version_hero_section_actions_order_idx" ON "_solutions_v_version_hero_section_actions" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_hero_section_actions_parent_id_idx" ON "_solutions_v_version_hero_section_actions" USING btree ("_parent_id");
  CREATE INDEX "_sol_panel_caps_v_order_idx" ON "_sol_panel_caps_v" USING btree ("_order");
  CREATE INDEX "_sol_panel_caps_v_parent_id_idx" ON "_sol_panel_caps_v" USING btree ("_parent_id");
  CREATE INDEX "_solutions_v_version_panels_order_idx" ON "_solutions_v_version_panels" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_panels_parent_id_idx" ON "_solutions_v_version_panels" USING btree ("_parent_id");
  CREATE INDEX "_solutions_v_version_partner_section_items_order_idx" ON "_solutions_v_version_partner_section_items" USING btree ("_order");
  CREATE INDEX "_solutions_v_version_partner_section_items_parent_id_idx" ON "_solutions_v_version_partner_section_items" USING btree ("_parent_id");
  CREATE INDEX "_solutions_v_version_seo_version_seo_image_idx" ON "_solutions_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE INDEX "support_qr_cards_order_idx" ON "support_qr_cards" USING btree ("_order");
  CREATE INDEX "support_qr_cards_parent_id_idx" ON "support_qr_cards" USING btree ("_parent_id");
  CREATE INDEX "support_qr_cards_qr_image_idx" ON "support_qr_cards" USING btree ("qr_image_id");
  CREATE INDEX "support_qr_cards_icon_idx" ON "support_qr_cards" USING btree ("icon_id");
  CREATE INDEX "support_seo_seo_image_idx" ON "support" USING btree ("seo_image_id");
  CREATE INDEX "support__status_idx" ON "support" USING btree ("_status");
  CREATE INDEX "_support_v_version_qr_cards_order_idx" ON "_support_v_version_qr_cards" USING btree ("_order");
  CREATE INDEX "_support_v_version_qr_cards_parent_id_idx" ON "_support_v_version_qr_cards" USING btree ("_parent_id");
  CREATE INDEX "_support_v_version_qr_cards_qr_image_idx" ON "_support_v_version_qr_cards" USING btree ("qr_image_id");
  CREATE INDEX "_support_v_version_qr_cards_icon_idx" ON "_support_v_version_qr_cards" USING btree ("icon_id");
  CREATE INDEX "_support_v_version_seo_version_seo_image_idx" ON "_support_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_support_v_version_version__status_idx" ON "_support_v" USING btree ("version__status");
  CREATE INDEX "_support_v_created_at_idx" ON "_support_v" USING btree ("created_at");
  CREATE INDEX "_support_v_updated_at_idx" ON "_support_v" USING btree ("updated_at");
  CREATE INDEX "_support_v_latest_idx" ON "_support_v" USING btree ("latest");
  CREATE INDEX "nav_header_children_order_idx" ON "nav_header_children" USING btree ("_order");
  CREATE INDEX "nav_header_children_parent_id_idx" ON "nav_header_children" USING btree ("_parent_id");
  CREATE INDEX "navigation_header_order_idx" ON "navigation_header" USING btree ("_order");
  CREATE INDEX "navigation_header_parent_id_idx" ON "navigation_header" USING btree ("_parent_id");
  CREATE INDEX "nav_footer_links_order_idx" ON "nav_footer_links" USING btree ("_order");
  CREATE INDEX "nav_footer_links_parent_id_idx" ON "nav_footer_links" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_columns_order_idx" ON "navigation_footer_columns" USING btree ("_order");
  CREATE INDEX "navigation_footer_columns_parent_id_idx" ON "navigation_footer_columns" USING btree ("_parent_id");
  CREATE INDEX "nav_footer_legal_order_idx" ON "nav_footer_legal" USING btree ("_order");
  CREATE INDEX "nav_footer_legal_parent_id_idx" ON "nav_footer_legal" USING btree ("_parent_id");
  CREATE INDEX "settings_logo_idx" ON "settings" USING btree ("logo_id");
  CREATE INDEX "settings_default_share_image_idx" ON "settings" USING btree ("default_share_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "products_intro_section_descriptions" CASCADE;
  DROP TABLE "products_hero_section_actions" CASCADE;
  DROP TABLE "products_feature_section_cards" CASCADE;
  DROP TABLE "prod_uc_cards" CASCADE;
  DROP TABLE "prod_post_uc_cards" CASCADE;
  DROP TABLE "prod_cta_items" CASCADE;
  DROP TABLE "products" CASCADE;
  DROP TABLE "_products_v_version_intro_section_descriptions" CASCADE;
  DROP TABLE "_products_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_products_v_version_feature_section_cards" CASCADE;
  DROP TABLE "_prod_uc_cards_v" CASCADE;
  DROP TABLE "_prod_post_uc_cards_v" CASCADE;
  DROP TABLE "_prod_cta_items_v" CASCADE;
  DROP TABLE "_products_v" CASCADE;
  DROP TABLE "legal_pages_sections" CASCADE;
  DROP TABLE "legal_pages" CASCADE;
  DROP TABLE "_legal_pages_v_version_sections" CASCADE;
  DROP TABLE "_legal_pages_v" CASCADE;
  DROP TABLE "leads" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "documents" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_hero_section_actions" CASCADE;
  DROP TABLE "home_intelligence_section_features" CASCADE;
  DROP TABLE "home_signal_layer_section_steps" CASCADE;
  DROP TABLE "home_setup_section_points" CASCADE;
  DROP TABLE "home_layers_section_layers" CASCADE;
  DROP TABLE "home_smart_db_section_features" CASCADE;
  DROP TABLE "home_sovereignty_section_cards" CASCADE;
  DROP TABLE "home_enterprise_section_audiences" CASCADE;
  DROP TABLE "home_impact_section_metrics" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "_home_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_home_v_version_intelligence_section_features" CASCADE;
  DROP TABLE "_home_v_version_signal_layer_section_steps" CASCADE;
  DROP TABLE "_home_v_version_setup_section_points" CASCADE;
  DROP TABLE "_home_v_version_layers_section_layers" CASCADE;
  DROP TABLE "_home_v_version_smart_db_section_features" CASCADE;
  DROP TABLE "_home_v_version_sovereignty_section_cards" CASCADE;
  DROP TABLE "_home_v_version_enterprise_section_audiences" CASCADE;
  DROP TABLE "_home_v_version_impact_section_metrics" CASCADE;
  DROP TABLE "_home_v" CASCADE;
  DROP TABLE "smart_db_hero_section_actions" CASCADE;
  DROP TABLE "smart_db_knows_section_descriptions" CASCADE;
  DROP TABLE "smart_db_knows_section_stats" CASCADE;
  DROP TABLE "smart_db_unchanged_section_cards" CASCADE;
  DROP TABLE "smart_db_loop_section_steps" CASCADE;
  DROP TABLE "smart_db_capabilities_section_items" CASCADE;
  DROP TABLE "smart_db_pocket_section_screens" CASCADE;
  DROP TABLE "smart_db_platform_section_tiles" CASCADE;
  DROP TABLE "smart_db_comparison_section_columns" CASCADE;
  DROP TABLE "sdb_cmp_cells" CASCADE;
  DROP TABLE "sdb_cmp_rows" CASCADE;
  DROP TABLE "smart_db_segments_section_segments" CASCADE;
  DROP TABLE "smart_db_fire_section_tags" CASCADE;
  DROP TABLE "smart_db_specs_section_specs" CASCADE;
  DROP TABLE "smart_db" CASCADE;
  DROP TABLE "_smart_db_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_smart_db_v_version_knows_section_descriptions" CASCADE;
  DROP TABLE "_smart_db_v_version_knows_section_stats" CASCADE;
  DROP TABLE "_smart_db_v_version_unchanged_section_cards" CASCADE;
  DROP TABLE "_smart_db_v_version_loop_section_steps" CASCADE;
  DROP TABLE "_smart_db_v_version_capabilities_section_items" CASCADE;
  DROP TABLE "_smart_db_v_version_pocket_section_screens" CASCADE;
  DROP TABLE "_smart_db_v_version_platform_section_tiles" CASCADE;
  DROP TABLE "_smart_db_v_version_comparison_section_columns" CASCADE;
  DROP TABLE "_sdb_cmp_cells_v" CASCADE;
  DROP TABLE "_sdb_cmp_rows_v" CASCADE;
  DROP TABLE "_smart_db_v_version_segments_section_segments" CASCADE;
  DROP TABLE "_smart_db_v_version_fire_section_tags" CASCADE;
  DROP TABLE "_smart_db_v_version_specs_section_specs" CASCADE;
  DROP TABLE "_smart_db_v" CASCADE;
  DROP TABLE "fms_hero_section_stats" CASCADE;
  DROP TABLE "fms_hero_section_actions" CASCADE;
  DROP TABLE "fms_gap_col_items" CASCADE;
  DROP TABLE "fms_gap_section_columns" CASCADE;
  DROP TABLE "fms_chain_section_items" CASCADE;
  DROP TABLE "fms_steps_section_cards" CASCADE;
  DROP TABLE "fms_cov_params" CASCADE;
  DROP TABLE "fms_coverage_section_groups" CASCADE;
  DROP TABLE "fms_alerts_section_cards" CASCADE;
  DROP TABLE "fms_assurance_section_items" CASCADE;
  DROP TABLE "fms_faq_section_items" CASCADE;
  DROP TABLE "fms" CASCADE;
  DROP TABLE "_fms_v_version_hero_section_stats" CASCADE;
  DROP TABLE "_fms_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_fms_gap_col_items_v" CASCADE;
  DROP TABLE "_fms_v_version_gap_section_columns" CASCADE;
  DROP TABLE "_fms_v_version_chain_section_items" CASCADE;
  DROP TABLE "_fms_v_version_steps_section_cards" CASCADE;
  DROP TABLE "_fms_cov_params_v" CASCADE;
  DROP TABLE "_fms_v_version_coverage_section_groups" CASCADE;
  DROP TABLE "_fms_v_version_alerts_section_cards" CASCADE;
  DROP TABLE "_fms_v_version_assurance_section_items" CASCADE;
  DROP TABLE "_fms_v_version_faq_section_items" CASCADE;
  DROP TABLE "_fms_v" CASCADE;
  DROP TABLE "ohm_os_hero_section_actions" CASCADE;
  DROP TABLE "ohm_os_applications_section_items" CASCADE;
  DROP TABLE "ohm_os_layer_section_cards" CASCADE;
  DROP TABLE "ohm_os_licensee_section_logos" CASCADE;
  DROP TABLE "ohm_os" CASCADE;
  DROP TABLE "_ohm_os_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_ohm_os_v_version_applications_section_items" CASCADE;
  DROP TABLE "_ohm_os_v_version_layer_section_cards" CASCADE;
  DROP TABLE "_ohm_os_v_version_licensee_section_logos" CASCADE;
  DROP TABLE "_ohm_os_v" CASCADE;
  DROP TABLE "ora_enables_section_cards" CASCADE;
  DROP TABLE "ora" CASCADE;
  DROP TABLE "_ora_v_version_enables_section_cards" CASCADE;
  DROP TABLE "_ora_v" CASCADE;
  DROP TABLE "solutions_hero_section_actions" CASCADE;
  DROP TABLE "sol_panel_caps" CASCADE;
  DROP TABLE "solutions_panels" CASCADE;
  DROP TABLE "solutions_partner_section_items" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "_solutions_v_version_hero_section_actions" CASCADE;
  DROP TABLE "_sol_panel_caps_v" CASCADE;
  DROP TABLE "_solutions_v_version_panels" CASCADE;
  DROP TABLE "_solutions_v_version_partner_section_items" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "support_qr_cards" CASCADE;
  DROP TABLE "support" CASCADE;
  DROP TABLE "_support_v_version_qr_cards" CASCADE;
  DROP TABLE "_support_v" CASCADE;
  DROP TABLE "nav_header_children" CASCADE;
  DROP TABLE "navigation_header" CASCADE;
  DROP TABLE "nav_footer_links" CASCADE;
  DROP TABLE "navigation_footer_columns" CASCADE;
  DROP TABLE "nav_footer_legal" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TYPE "public"."enum_button_variant";
  DROP TYPE "public"."enum_accent_token";
  DROP TYPE "public"."enum_product_hero_variant";
  DROP TYPE "public"."enum_accent_target";
  DROP TYPE "public"."enum_products_status";
  DROP TYPE "public"."enum__products_v_version_status";
  DROP TYPE "public"."enum_legal_pages_status";
  DROP TYPE "public"."enum__legal_pages_v_version_status";
  DROP TYPE "public"."enum_lead_source";
  DROP TYPE "public"."enum_lead_property_type";
  DROP TYPE "public"."enum_lead_forward_status";
  DROP TYPE "public"."enum_home_layer_tone";
  DROP TYPE "public"."enum_smartdb_feature_accent";
  DROP TYPE "public"."enum_sovereignty_tone";
  DROP TYPE "public"."enum_sovereignty_size";
  DROP TYPE "public"."enum_impact_variant";
  DROP TYPE "public"."enum_home_status";
  DROP TYPE "public"."enum__home_v_version_status";
  DROP TYPE "public"."enum_smartdb_platform_variant";
  DROP TYPE "public"."enum_smart_db_status";
  DROP TYPE "public"."enum__smart_db_v_version_status";
  DROP TYPE "public"."enum_fms_gap_tone";
  DROP TYPE "public"."enum_fms_alert_tone";
  DROP TYPE "public"."enum_fms_status";
  DROP TYPE "public"."enum__fms_v_version_status";
  DROP TYPE "public"."enum_licensee_slug";
  DROP TYPE "public"."enum_ohm_os_status";
  DROP TYPE "public"."enum__ohm_os_v_version_status";
  DROP TYPE "public"."enum_ora_status";
  DROP TYPE "public"."enum__ora_v_version_status";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_status";
  DROP TYPE "public"."enum_support_status";
  DROP TYPE "public"."enum__support_v_version_status";`)
}
