// src/exams/dto/exam-response.dto.ts

import { QuestionResponseDto } from 'src/questions/dto/question-response.dto';

export class ExamResponseDto {
  id: string;
  title: string;
  questions: QuestionResponseDto[]; // Caso tenha um DTO para as perguntas
}
