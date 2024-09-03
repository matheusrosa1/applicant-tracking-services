import { Injectable } from '@nestjs/common';
import { CreateInterviewScheduleDto } from './dto/create-interview-schedule.dto';
import { UpdateInterviewScheduleDto } from './dto/update-interview-schedule.dto';

@Injectable()
export class InterviewSchedulesService {
  create(createInterviewScheduleDto: CreateInterviewScheduleDto) {
    return 'This action adds a new interviewSchedule';
  }

  findAll() {
    return `This action returns all interviewSchedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interviewSchedule`;
  }

  update(id: number, updateInterviewScheduleDto: UpdateInterviewScheduleDto) {
    return `This action updates a #${id} interviewSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} interviewSchedule`;
  }
}
