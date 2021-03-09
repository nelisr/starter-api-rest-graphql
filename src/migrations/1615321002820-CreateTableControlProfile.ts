import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableControlProfile1615321002820 implements MigrationInterface {
    name = 'CreateTableControlProfile1615321002820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manager"."tb_control_profiles" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "profile_id" integer NOT NULL, "application_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_0cad7adf6edbdaea9d7b7afe566" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" ADD CONSTRAINT "FK_aaf649516dffde3a3a04b978860" FOREIGN KEY ("profile_id") REFERENCES "manager"."tb_profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" ADD CONSTRAINT "FK_688bcb25f547630467bb07e23b0" FOREIGN KEY ("application_id") REFERENCES "manager"."tb_applications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" ADD CONSTRAINT "FK_12d88f5a8c2988a27afcf104c2a" FOREIGN KEY ("user_id") REFERENCES "manager"."tb_users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" DROP CONSTRAINT "FK_12d88f5a8c2988a27afcf104c2a"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" DROP CONSTRAINT "FK_688bcb25f547630467bb07e23b0"`);
        await queryRunner.query(`ALTER TABLE "manager"."tb_control_profiles" DROP CONSTRAINT "FK_aaf649516dffde3a3a04b978860"`);
        await queryRunner.query(`DROP TABLE "manager"."tb_control_profiles"`);
    }

}
