import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateApplicationsTable1725584733755
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO "applications" ("user_id", "exam_id")
          VALUES
            ('c9f500c3-7115-4b97-9d2b-7128002dfdfd', '891d8157-127f-46b3-b1ed-d77fe731e706'),
            ('f21f30a3-6d9b-4b56-982a-35cf21d8c11b', 'a12f45e7-89bc-49c2-8c2e-b567fd4a18bb')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "applications"`);
  }
}
