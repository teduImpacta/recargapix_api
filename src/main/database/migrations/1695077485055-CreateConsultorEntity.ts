import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateConsultorEntity1695077485055 implements MigrationInterface {
    name = 'CreateConsultorEntity1695077485055'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "consultor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "postal_code" character varying NOT NULL, "phone" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_c79e141bd8ca728a277a2cf1dd7" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "consultor"`)
    }
}
