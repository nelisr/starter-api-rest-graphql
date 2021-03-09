import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableProfilesFunctinalities1615249355771 implements MigrationInterface {
    name = 'CreateTableProfilesFunctinalities1615249355771'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_profiles_tb_functionalities" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer NOT NULL, "functionality_id" integer NOT NULL, CONSTRAINT "PK_fbb2b4ae8d94f9c071a623ed4d2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_profiles_tb_functionalities" ADD CONSTRAINT "FK_85e914b4bcb7999bb8a8524b723" FOREIGN KEY ("profile_id") REFERENCES "manager"."tb_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_profiles_tb_functionalities" ADD CONSTRAINT "FK_af9b74c61cb15c3ce2ca7f64494" FOREIGN KEY ("functionality_id") REFERENCES "manager"."tb_functionalities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_profiles_tb_functionalities" DROP CONSTRAINT "FK_af9b74c61cb15c3ce2ca7f64494"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_profiles_tb_functionalities" DROP CONSTRAINT "FK_85e914b4bcb7999bb8a8524b723"`);
        await queryRunner.query(`DROP TABLE "manager"."tb_profiles_tb_functionalities"`);
    }

}
