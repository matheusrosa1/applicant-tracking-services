import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Question } from 'src/questions/entities/question.entity';
import { Application } from 'src/applications/entities/application.entity';

@Entity({ name: 'exam' })
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  // Um exame tem muitas questões
  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];

  // Um exame tem muitas aplicações
  @OneToMany(() => Application, (application) => application.exam)
  applications: Application[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
