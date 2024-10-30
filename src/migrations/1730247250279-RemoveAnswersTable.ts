import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveAnswersTable1730247250279 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS answers`);
  }

  public async down(): Promise<void> {
    // Se necessário, recrie a tabela aqui
  }
}
