import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableFunctionlities1615045030089 implements MigrationInterface {
    name = 'CreateTableFunctionlities1615045030089'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_functionalities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "key" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b448a1e2c87317739a421d8de47" UNIQUE ("name"), CONSTRAINT "UQ_bbdd835825f1183c35d09615a3a" UNIQUE ("key"), CONSTRAINT "PK_88ecadfcda58eaff63366db4188" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manager"."tb_functionalities"`);
    }

}
