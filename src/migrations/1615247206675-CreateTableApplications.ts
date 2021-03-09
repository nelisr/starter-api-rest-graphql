import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableApplications1615247206675 implements MigrationInterface {
    name = 'CreateTableApplications1615247206675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_applications" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "initials" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_033f0fa1723aefff05825edad28" UNIQUE ("name"), CONSTRAINT "UQ_f7965a44f0f1c10e529aa14c227" UNIQUE ("initials"), CONSTRAINT "PK_25bbada6a66741b9833d0c3ebf5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "manager"."tb_applications"`);
    }

}
