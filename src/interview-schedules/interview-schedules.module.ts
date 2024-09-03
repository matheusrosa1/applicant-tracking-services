import { Module } from '@nestjs/common';
import { InterviewSchedulesService } from './interview-schedules.service';
import { InterviewSchedulesController } from './interview-schedules.controller';

@Module({
  controllers: [InterviewSchedulesController],
  providers: [InterviewSchedulesService],
})
export class InterviewSchedulesModule {}
