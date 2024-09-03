import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesModule } from './candidates/candidates.module';
import { JobsModule } from './jobs/jobs.module';
import { ApplicationsModule } from './applications/applications.module';
import { InterviewSchedulesModule } from './interview-schedules/interview-schedules.module';
import { JobAssignmentsModule } from './job-assignments/job-assignments.module';

@Module({
  imports: [
    CandidatesModule,
    JobsModule,
    ApplicationsModule,
    InterviewSchedulesModule,
    JobAssignmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
