import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


export class Alternative {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @Column({ name: 'is_correct', default: false })
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.alternatives, onDelete: 'CASCADE')
}
