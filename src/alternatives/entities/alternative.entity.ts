import { Answer } from 'src/answers/entities/answer.entity';
import { Question } from 'src/questions/entities/question.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// Alternativas de Questões
@Entity({ name: 'alternatives' })
export class Alternative {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @OneToMany(() => Answer, (answer) => answer.alternative)
  answers: Answer[];

  @Column({ name: 'is_correct', default: false })
  isCorrect: boolean;
  // Muitas alternativas pertencem a uma questão
  @ManyToOne(() => Question, (question) => question.alternatives, {
    onDelete: 'CASCADE',
  })
  question: Question;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
