import { PartialType } from '@nestjs/mapped-types';
import { CreateInterviewScheduleDto } from './create-interview-schedule.dto';

export class UpdateInterviewScheduleDto extends PartialType(CreateInterviewScheduleDto) {}
