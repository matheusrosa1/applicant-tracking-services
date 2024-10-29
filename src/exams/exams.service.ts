import { Injectable } from '@nestjs/common';
/* import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto'; */
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';
import { ExamResponseDto } from './dto/exam-response.dto';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(Exam)
    private examRepository: Repository<Exam>,
  ) {}

  /*   create(createExamDto: CreateExamDto) {
    return 'This action adds a new exam';
  }
 */
  async findAll(): Promise<ExamResponseDto[]> {
    const exams = await this.examRepository.find({
      relations: ['questions', 'questions.alternatives'],
    });

    return exams.map((exam) => ({
      id: exam.id,
      title: exam.title,
      questions: exam.questions.map((question) => ({
        id: question.id,
        content: question.content,
        alternatives: question.alternatives.map((alternative) => ({
          id: alternative.id,
          content: alternative.content,
          isCorrect: alternative.isCorrect,
        })),
      })),
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} exam`;
  }

  /*   update(id: number, updateExamDto: UpdateExamDto) {
    return `This action updates a #${id} exam`;
  } */

  /*   remove(id: number) {
    return `This action removes a #${id} exam`;
  } */
}
