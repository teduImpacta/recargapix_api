import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateEntities1698017282412 implements MigrationInterface {
    name = 'CreateEntities1698017282412'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TYPE "public"."product_type_enum" AS ENUM('Transport', 'Cellphone', 'Store', 'Internet')`
        )
        await queryRunner.query(
            `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "type" "public"."product_type_enum" NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "carrier_value" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "value" double precision NOT NULL, "carrierId" uuid, CONSTRAINT "PK_c4bad8d8e5195513ffe2602c945" PRIMARY KEY ("id"))`
        )
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
            `CREATE TABLE "recharge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "status" "public"."recharge_status_enum" NOT NULL, "phone" character varying, "product" "public"."recharge_product_enum" NOT NULL, "value" integer NOT NULL, "reference_id" character varying NOT NULL, "email" character varying, CONSTRAINT "PK_5cc2dad79b630f05df9d7c0df82" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "carrier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "ddd" character varying NOT NULL, "logo" character varying NOT NULL, CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "consultor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "postal_code" character varying NOT NULL, "phone" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_c79e141bd8ca728a277a2cf1dd7" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "giftcard_values" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "value" double precision NOT NULL, "description" character varying NOT NULL, "giftcardId" uuid, CONSTRAINT "PK_cdc17eeae0d2036e9a21b900d53" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TYPE "public"."gift_card_category_enum" AS ENUM('Loja de aplicativos', 'TV, Som e Vídeo', 'Serviços de Conveniência', 'Software', 'Jogos e Diversão')`
        )
        await queryRunner.query(
            `CREATE TABLE "gift_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "logo" character varying NOT NULL, "category" "public"."gift_card_category_enum" NOT NULL, CONSTRAINT "PK_af4e338d2d41035042843ad641f" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `ALTER TABLE "carrier_value" ADD CONSTRAINT "FK_403ecaa4ee642ff2d288d994ac6" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        )
        await queryRunner.query(
            `ALTER TABLE "giftcard_values" ADD CONSTRAINT "FK_76bc011a6ebf7db2104e3badc1b" FOREIGN KEY ("giftcardId") REFERENCES "gift_card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "giftcard_values" DROP CONSTRAINT "FK_76bc011a6ebf7db2104e3badc1b"`
        )
        await queryRunner.query(
            `ALTER TABLE "carrier_value" DROP CONSTRAINT "FK_403ecaa4ee642ff2d288d994ac6"`
        )
        await queryRunner.query(`DROP TABLE "gift_card"`)
        await queryRunner.query(`DROP TYPE "public"."gift_card_category_enum"`)
        await queryRunner.query(`DROP TABLE "giftcard_values"`)
        await queryRunner.query(`DROP TABLE "consultor"`)
        await queryRunner.query(`DROP TABLE "carrier"`)
        await queryRunner.query(`DROP TABLE "recharge"`)
        await queryRunner.query(`DROP TYPE "public"."recharge_product_enum"`)
        await queryRunner.query(`DROP TYPE "public"."recharge_status_enum"`)
        await queryRunner.query(`DROP TABLE "payment"`)
        await queryRunner.query(`DROP TABLE "statement"`)
        await queryRunner.query(`DROP TABLE "carrier_value"`)
        await queryRunner.query(`DROP TABLE "product"`)
        await queryRunner.query(`DROP TYPE "public"."product_type_enum"`)
    }
}
