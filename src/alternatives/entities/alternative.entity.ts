import { Question } from 'src/questions/entities/question.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

// Alternativas de Questões
@Entity({ name: 'alternative' })
export class Alternative {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column({ name: 'is_correct', default: false })
  isCorrect: boolean;
  // Muitas alternativas pertencem a uma questão
  @ManyToOne(() => Question, (question) => question.alternatives, {
    onDelete: 'CASCADE',
  })
  question: Question;
}
