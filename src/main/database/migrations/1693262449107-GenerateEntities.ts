import { MigrationInterface, QueryRunner } from 'typeorm'

export class GenerateEntities1693262449107 implements MigrationInterface {
    name = 'GenerateEntities1693262449107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "statement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "value" integer NOT NULL, "txid" character varying NOT NULL, CONSTRAINT "PK_d2ef88cb44b99f3332a1eebb96f" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "payment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "time_to_expire_in_seconds" integer NOT NULL, "time_to_check_payment_in_seconds" integer NOT NULL, "value" integer NOT NULL, "receiver_company_name" character varying, "receiver_document" character varying, "receiver_bank_name" character varying, "receiver_agency" character varying, "receiver_account" character varying, "receiver_account_digit" character varying, "tx_id" character varying NOT NULL, "qr_code_emv_co" character varying NOT NULL, "qr_code" character varying NOT NULL, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TYPE "public"."recharge_status_enum" AS ENUM('Pending', 'Paid', 'Canceled')`
        )
        await queryRunner.query(
            `CREATE TYPE "public"."recharge_product_enum" AS ENUM('Transport', 'Cellphone', 'Store', 'Internet')`
        )
        await queryRunner.query(
            `CREATE TABLE "recharge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "status" "public"."recharge_status_enum" NOT NULL, "phone" character varying NOT NULL, "product" "public"."recharge_product_enum" NOT NULL, "value" integer NOT NULL, CONSTRAINT "PK_5cc2dad79b630f05df9d7c0df82" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `ALTER TYPE "public"."product_type_enum" RENAME TO "product_type_enum_old"`
        )
        await queryRunner.query(
            `CREATE TYPE "public"."product_type_enum" AS ENUM('Transport', 'Cellphone', 'Store', 'Internet')`
        )
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "type" TYPE "public"."product_type_enum" USING "type"::"text"::"public"."product_type_enum"`
        )
        await queryRunner.query(`DROP TYPE "public"."product_type_enum_old"`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TYPE "public"."product_type_enum_old" AS ENUM('Transport', 'Cellphone', 'Store')`
        )
        await queryRunner.query(
            `ALTER TABLE "product" ALTER COLUMN "type" TYPE "public"."product_type_enum_old" USING "type"::"text"::"public"."product_type_enum_old"`
        )
        await queryRunner.query(`DROP TYPE "public"."product_type_enum"`)
        await queryRunner.query(
            `ALTER TYPE "public"."product_type_enum_old" RENAME TO "product_type_enum"`
        )
        await queryRunner.query(`DROP TABLE "recharge"`)
        await queryRunner.query(`DROP TYPE "public"."recharge_product_enum"`)
        await queryRunner.query(`DROP TYPE "public"."recharge_status_enum"`)
        await queryRunner.query(`DROP TABLE "payment"`)
        await queryRunner.query(`DROP TABLE "statement"`)
    }
}
