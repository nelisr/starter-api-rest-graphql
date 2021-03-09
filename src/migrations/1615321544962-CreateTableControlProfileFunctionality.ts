import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableControlProfileFunctionality1615321544962 implements MigrationInterface {
    name = 'CreateTableControlProfileFunctionality1615321544962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_control_profiles_tb_functionalities" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "functionality_id" integer NOT NULL, "control_profile_id" integer NOT NULL, CONSTRAINT "PK_434311e78304332f8644ce137a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles_tb_functionalities" ADD CONSTRAINT "FK_8b043a61efcb2b6dffcc8cee828" FOREIGN KEY ("functionality_id") REFERENCES "manager"."tb_functionalities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles_tb_functionalities" ADD CONSTRAINT "FK_9de2483070eac11ed018ce7efa7" FOREIGN KEY ("control_profile_id") REFERENCES "manager"."tb_control_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles_tb_functionalities" DROP CONSTRAINT "FK_9de2483070eac11ed018ce7efa7"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles_tb_functionalities" DROP CONSTRAINT "FK_8b043a61efcb2b6dffcc8cee828"`);
        await queryRunner.query(`DROP TABLE "manager"."tb_control_profiles_tb_functionalities"`);
    }

}
