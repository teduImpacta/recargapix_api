import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateProduct1683258049754 implements MigrationInterface {
    name = 'CreateProduct1683258049754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TYPE "public"."product_type_enum" AS ENUM('Transport', 'Cellphone', 'Store')`
        )
        await queryRunner.query(
            `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "type" "public"."product_type_enum" NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`)
        await queryRunner.query(`DROP TYPE "public"."product_type_enum"`)
    }
}
