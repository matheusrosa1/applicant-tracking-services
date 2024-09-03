import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterviewSchedulesService } from './interview-schedules.service';
import { CreateInterviewScheduleDto } from './dto/create-interview-schedule.dto';
import { UpdateInterviewScheduleDto } from './dto/update-interview-schedule.dto';

@Controller('interview-schedules')
export class InterviewSchedulesController {
  constructor(private readonly interviewSchedulesService: InterviewSchedulesService) {}

  @Post()
  create(@Body() createInterviewScheduleDto: CreateInterviewScheduleDto) {
    return this.interviewSchedulesService.create(createInterviewScheduleDto);
  }

  @Get()
  findAll() {
    return this.interviewSchedulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interviewSchedulesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterviewScheduleDto: UpdateInterviewScheduleDto) {
    return this.interviewSchedulesService.update(+id, updateInterviewScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interviewSchedulesService.remove(+id);
  }
}
