import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1726014810550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Tabela Users
    await queryRunner.query(`
          CREATE TABLE "users" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "first_name" VARCHAR(255) NOT NULL,
            "last_name" VARCHAR(255) NOT NULL,
            "email" VARCHAR(255) NOT NULL UNIQUE,
            "password" VARCHAR(255) NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_users" PRIMARY KEY ("id")
          );
        `);

    // Tabela Exams
    await queryRunner.query(`
          CREATE TABLE "exams" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "title" VARCHAR(255) NOT NULL,
            "description" TEXT,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_exams" PRIMARY KEY ("id")
          );
        `);

    // Tabela Questions
    await queryRunner.query(`
          CREATE TABLE "questions" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "content" TEXT NOT NULL,
            "exam_id" uuid,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_questions" PRIMARY KEY ("id"),
            CONSTRAINT "FK_questions_exams" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE CASCADE
          );
        `);

    // Tabela Alternatives
    await queryRunner.query(`
          CREATE TABLE "alternatives" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "content" TEXT NOT NULL,
            "is_correct" BOOLEAN NOT NULL DEFAULT false,
            "question_id" uuid,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_alternatives" PRIMARY KEY ("id"),
            CONSTRAINT "FK_alternatives_questions" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE
          );
        `);

    // Tabela Applications
    await queryRunner.query(`
          CREATE TABLE "applications" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "user_id" uuid,
            "exam_id" uuid,
            "status" VARCHAR(50) NOT NULL DEFAULT 'pending',
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_applications" PRIMARY KEY ("id"),
            CONSTRAINT "FK_applications_users" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_applications_exams" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE CASCADE
          );
        `);

    // Tabela Answers
    await queryRunner.query(`
          CREATE TABLE "answers" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "application_id" uuid,
            "question_id" uuid,
            "alternative_id" uuid,
            "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updated_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT "PK_answers" PRIMARY KEY ("id"),
            CONSTRAINT "FK_answers_applications" FOREIGN KEY ("application_id") REFERENCES "applications"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_answers_questions" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_answers_alternatives" FOREIGN KEY ("alternative_id") REFERENCES "alternatives"("id") ON DELETE CASCADE
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "answers"`);
    await queryRunner.query(`DROP TABLE "applications"`);
    await queryRunner.query(`DROP TABLE "alternatives"`);
    await queryRunner.query(`DROP TABLE "questions"`);
    await queryRunner.query(`DROP TABLE "exams"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
