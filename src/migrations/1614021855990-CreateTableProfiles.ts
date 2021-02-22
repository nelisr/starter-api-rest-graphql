import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableProfiles1614021855990 implements MigrationInterface {
    name = 'CreateTableProfiles1614021855990'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "security"."tb_profiles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "key" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_732f09f1f0b0e1702ba662c1b7c" UNIQUE ("name"), CONSTRAINT "UQ_ac05263b76c512ec9d17ada72d3" UNIQUE ("key"), CONSTRAINT "PK_89799a2c1873885937810ead51b" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "security"."tb_profiles"')
    }
}
