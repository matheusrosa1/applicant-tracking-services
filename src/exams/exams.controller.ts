import { Controller, Get, Param } from '@nestjs/common';
import { ExamsService } from './exams.service';
/* import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto'; */

@Controller('exams')
export class ExamsController {
  constructor(private readonly examsService: ExamsService) {}

  /*   @Post()
  create(@Body() createExamDto: CreateExamDto) {
    return this.examsService.create(createExamDto);
  } */

  @Get()
  findAll() {
    try {
      return this.examsService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.examsService.findOne(+id);
    } catch (error) {
      console.log(error);
    }
  }

  /*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
    return this.examsService.update(+id, updateExamDto);
  } */

  /*   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examsService.remove(+id);
  } */
}
