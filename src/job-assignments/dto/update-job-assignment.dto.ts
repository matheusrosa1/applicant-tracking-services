import { PartialType } from '@nestjs/mapped-types';
import { CreateJobAssignmentDto } from './create-job-assignment.dto';

export class UpdateJobAssignmentDto extends PartialType(CreateJobAssignmentDto) {}
