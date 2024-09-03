import { Test, TestingModule } from '@nestjs/testing';
import { InterviewSchedulesController } from './interview-schedules.controller';
import { InterviewSchedulesService } from './interview-schedules.service';

describe('InterviewSchedulesController', () => {
  let controller: InterviewSchedulesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterviewSchedulesController],
      providers: [InterviewSchedulesService],
    }).compile();

    controller = module.get<InterviewSchedulesController>(InterviewSchedulesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
