import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seeders1726016482473 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Inserindo usuários
    await queryRunner.query(`
          INSERT INTO "users" ("first_name", "last_name", "email", "password", "created_at", "updated_at")
          VALUES
            ('Alice', 'Johnson', 'alice@example.com', 'hashed_password1', NOW(), NOW()),
            ('Bob', 'Smith', 'bob@example.com', 'hashed_password2', NOW(), NOW())
        `);

    // Inserindo exames
    await queryRunner.query(`
          INSERT INTO "exams" ("title", "description", "created_at", "updated_at")
          VALUES
            ('Technical Exam 1', 'Description for Exam 1', NOW(), NOW()),
            ('Technical Exam 2', 'Description for Exam 2', NOW(), NOW())
        `);

    // Inserindo aplicações
    await queryRunner.query(`
          INSERT INTO "applications" ("user_id", "exam_id", "created_at", "updated_at")
          VALUES
            ((SELECT id FROM "users" WHERE email = 'alice@example.com'), (SELECT id FROM "exams" WHERE title = 'Technical Exam 1'), NOW(), NOW()),
            ((SELECT id FROM "users" WHERE email = 'bob@example.com'), (SELECT id FROM "exams" WHERE title = 'Technical Exam 2'), NOW(), NOW())
        `);

    // Inserindo questões
    await queryRunner.query(`
          INSERT INTO "questions" ("content", "exam_id", "created_at", "updated_at")
          VALUES
            ('What is 2 + 2?', (SELECT id FROM "exams" WHERE title = 'Technical Exam 1'), NOW(), NOW()),
            ('What is the capital of France?', (SELECT id FROM "exams" WHERE title = 'Technical Exam 1'), NOW(), NOW())
        `);

    // Inserindo alternativas
    await queryRunner.query(`
          INSERT INTO "alternatives" ("content", "is_correct", "question_id", "created_at", "updated_at")
          VALUES
            ('4', true, (SELECT id FROM "questions" WHERE content = 'What is 2 + 2?'), NOW(), NOW()),
            ('3', false, (SELECT id FROM "questions" WHERE content = 'What is 2 + 2?'), NOW(), NOW()),
            ('Paris', true, (SELECT id FROM "questions" WHERE content = 'What is the capital of France?'), NOW(), NOW()),
            ('London', false, (SELECT id FROM "questions" WHERE content = 'What is the capital of France?'), NOW(), NOW())
        `);

    // Inserindo respostas (answers) com question_id
    await queryRunner.query(`
          INSERT INTO "answers" ("application_id", "alternative_id", "question_id", "created_at", "updated_at")
          VALUES
            ((SELECT id FROM "applications" WHERE user_id = (SELECT id FROM "users" WHERE email = 'alice@example.com')), (SELECT id FROM "alternatives" WHERE content = '4'), (SELECT id FROM "questions" WHERE content = 'What is 2 + 2?'), NOW(), NOW()),
            ((SELECT id FROM "applications" WHERE user_id = (SELECT id FROM "users" WHERE email = 'bob@example.com')), (SELECT id FROM "alternatives" WHERE content = 'Paris'), (SELECT id FROM "questions" WHERE content = 'What is the capital of France?'), NOW(), NOW())
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "answers"`);
    await queryRunner.query(`DELETE FROM "alternatives"`);
    await queryRunner.query(`DELETE FROM "questions"`);
    await queryRunner.query(`DELETE FROM "applications"`);
    await queryRunner.query(`DELETE FROM "exams"`);
    await queryRunner.query(`DELETE FROM "users"`);
  }
}
