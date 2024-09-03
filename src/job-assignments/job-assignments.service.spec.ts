import { Test, TestingModule } from '@nestjs/testing';
import { JobAssignmentsService } from './job-assignments.service';

describe('JobAssignmentsService', () => {
  let service: JobAssignmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobAssignmentsService],
    }).compile();

    service = module.get<JobAssignmentsService>(JobAssignmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
