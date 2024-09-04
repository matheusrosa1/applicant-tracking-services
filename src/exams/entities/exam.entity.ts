import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { Question } from 'src/questions/entities/question.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  // Um exame tem muitas questões
  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];
}
