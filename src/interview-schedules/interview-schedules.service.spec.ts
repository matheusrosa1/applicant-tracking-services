import { Test, TestingModule } from '@nestjs/testing';
import { InterviewSchedulesService } from './interview-schedules.service';

describe('InterviewSchedulesService', () => {
  let service: InterviewSchedulesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewSchedulesService],
    }).compile();

    service = module.get<InterviewSchedulesService>(InterviewSchedulesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
