import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('task-queue')
export class QueueProcessor {
  @Process('process-task')
  async handleTask(job: Job) {
    console.log('Processing task:', job.data);
  }
}
