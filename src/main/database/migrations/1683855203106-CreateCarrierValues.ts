import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateCarrierValues1683855203106 implements MigrationInterface {
    name = 'CreateCarrierValues1683855203106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "values" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "value" double precision NOT NULL, "carrierId" uuid, CONSTRAINT "PK_1e73144298df42d52380eff872b" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "carrier" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_active" boolean NOT NULL DEFAULT true, "name" character varying NOT NULL, "ddd" character varying NOT NULL, "logo" character varying NOT NULL, CONSTRAINT "PK_f615ebd1906f0270d41b3a5a8b0" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `ALTER TABLE "values" ADD CONSTRAINT "FK_3849767d8523ad0fa559b46d023" FOREIGN KEY ("carrierId") REFERENCES "carrier"("id") ON DELETE SET NULL ON UPDATE NO ACTION`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "values" DROP CONSTRAINT "FK_3849767d8523ad0fa559b46d023"`
        )
        await queryRunner.query(`DROP TABLE "carrier"`)
        await queryRunner.query(`DROP TABLE "values"`)
    }
}
