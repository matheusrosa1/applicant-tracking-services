import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Alternative } from 'src/alternatives/entities/alternative.entity';
import { Exam } from 'src/exams/entities/exam.entity'; // Supondo que você tenha uma entidade Exam

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => Exam, (exam) => exam.questions)
  exam: Exam;

  @OneToMany(() => Alternative, (alternative) => alternative.question, {
    cascade: true,
  })
  alternatives: Alternative[];
}
