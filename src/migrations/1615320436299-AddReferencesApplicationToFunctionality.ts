import {MigrationInterface, QueryRunner} from "typeorm";

export class AddReferencesApplicationToFunctionality1615320436299 implements MigrationInterface {
    name = 'AddReferencesApplicationToFunctionality1615320436299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_functionalities" ADD "application_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_functionalities" ADD CONSTRAINT "FK_0884fea6cb490a0f5b423b723ca" FOREIGN KEY ("application_id") REFERENCES "manager"."tb_applications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_functionalities" DROP CONSTRAINT "FK_0884fea6cb490a0f5b423b723ca"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_functionalities" DROP COLUMN "application_id"`);
    }

}
