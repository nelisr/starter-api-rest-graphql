import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveReferencyProfileToUser1615322512616 implements MigrationInterface {
    name = 'RemoveReferencyProfileToUser1615322512616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_users" DROP CONSTRAINT "FK_b6676783f93487f431fb4477bcc"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_users" DROP COLUMN "profile_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_users" ADD "profile_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_users" ADD CONSTRAINT "FK_b6676783f93487f431fb4477bcc" FOREIGN KEY ("profile_id") REFERENCES "manager"."tb_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
