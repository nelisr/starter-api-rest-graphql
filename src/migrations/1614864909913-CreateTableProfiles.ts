import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableProfiles1614864909913 implements MigrationInterface {
    name = 'CreateTableProfiles1614864909913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_profiles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "key" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a6a8f162ce5132504e806337de3" UNIQUE ("name"), CONSTRAINT "UQ_81d356cd58817321da9b5f4746a" UNIQUE ("key"), CONSTRAINT "PK_91e1ad5fe8724949db876149417" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manager"."tb_profiles"`);
    }

}
