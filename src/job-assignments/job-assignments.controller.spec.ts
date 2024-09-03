import { Test, TestingModule } from '@nestjs/testing';
import { JobAssignmentsController } from './job-assignments.controller';
import { JobAssignmentsService } from './job-assignments.service';

describe('JobAssignmentsController', () => {
  let controller: JobAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobAssignmentsController],
      providers: [JobAssignmentsService],
    }).compile();

    controller = module.get<JobAssignmentsController>(JobAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
