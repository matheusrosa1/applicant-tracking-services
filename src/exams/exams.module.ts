import { Module } from '@nestjs/common';
import { ExamsService } from './exams.service';
import { ExamsController } from './exams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';

@Module({
  controllers: [ExamsController],
  providers: [ExamsService],
  imports: [TypeOrmModule.forFeature([Exam])],
})
export class ExamsModule {}
