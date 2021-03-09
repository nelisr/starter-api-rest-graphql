import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableAuthLog1615322211520 implements MigrationInterface {
    name = 'CreateTableAuthLog1615322211520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_auth_logs" ("id" SERIAL NOT NULL, "dateAccess" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "application_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_1822d07733f2d6dff2ae75054bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_auth_logs" ADD CONSTRAINT "FK_fb55a3f6bb8f4b8ee072b4a7a01" FOREIGN KEY ("application_id") REFERENCES "manager"."tb_applications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_auth_logs" ADD CONSTRAINT "FK_13bbdc054aa7062506f9b008198" FOREIGN KEY ("user_id") REFERENCES "manager"."tb_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_auth_logs" DROP CONSTRAINT "FK_13bbdc054aa7062506f9b008198"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_auth_logs" DROP CONSTRAINT "FK_fb55a3f6bb8f4b8ee072b4a7a01"`);
        await queryRunner.query(`DROP TABLE "manager"."tb_auth_logs"`);
    }

}
