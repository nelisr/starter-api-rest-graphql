import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateTableUsers1614021705445 implements MigrationInterface {
    name = 'CreateTableUsers1614021705445'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE "security"."tb_users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_2d301a0ba73645efb14f586e29d" UNIQUE ("email"), CONSTRAINT "UQ_1cd2b03b8f3da430fe2ed72e26b" UNIQUE ("username"), CONSTRAINT "PK_beb5a9ac998af93b950d0588e3e" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "security"."tb_users"')
    }
}
