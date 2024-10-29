import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveAnswersTable implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "answers"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "answers" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        /* recrie as colunas da tabela aqui */
      );
    `);
  }
}
