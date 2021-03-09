import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUsers1614865118028 implements MigrationInterface {
    name = 'CreateTableUsers1614865118028'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_731ff9c3401ccbbb3581aeffadb" UNIQUE ("email"), CONSTRAINT "UQ_edbd07b0bd05de5b55840a873cd" UNIQUE ("username"), CONSTRAINT "PK_4e4570f64a813d7b1650ade792a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manager"."tb_users"`);
    }

}
