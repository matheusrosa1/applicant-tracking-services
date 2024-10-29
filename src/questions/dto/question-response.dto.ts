// src/questions/dto/question-response.dto.ts

import { AlternativeResponseDto } from 'src/alternatives/dto/alternative-response.dto';

export class QuestionResponseDto {
  id: string;
  content: string;
  alternatives: AlternativeResponseDto[]; // Caso tenha um DTO para as alternativas
}
