import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExamTables1719365581655 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO "users" ("first_name", "last_name", "email", "password")
          VALUES
            ('Alice', 'Johnson', 'alice@example.com', 'hashed_password1'),
            ('Bob', 'Smith', 'bob@example.com', 'hashed_password2')
        `);

    await queryRunner.query(`
          INSERT INTO "exams" ("title", "description")
          VALUES
            ('Technical Exam 1', 'Description for Exam 1'),
            ('Technical Exam 2', 'Description for Exam 2')
        `);

    await queryRunner.query(`
          INSERT INTO "applications" ("user_id", "exam_id", "created_at", "updated_at")
          VALUES
            ((SELECT id FROM "users" WHERE email = 'alice@example.com'), (SELECT id FROM "exams" WHERE title = 'Technical Exam 1'), NOW(), NOW()),
            ((SELECT id FROM "users" WHERE email = 'bob@example.com'), (SELECT id FROM "exams" WHERE title = 'Technical Exam 2'), NOW(), NOW())
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "applications"`);
    await queryRunner.query(`DELETE FROM "exams"`);
    await queryRunner.query(`DELETE FROM "users"`);
  }
}
