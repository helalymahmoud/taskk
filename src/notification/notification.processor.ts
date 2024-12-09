import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import * as admin from 'firebase-admin';

@Processor('notifications')
export class NotificationProcessor {
  @Process('send')
  async handleSendNotification(job: Job) {
    const { token, message } = job.data;

    try {
      await admin.messaging().send({
        token,
        notification: {
          title: message.title,
          body: message.body,
        },
      });
      console.log(`Notification sent successfully to ${token}`);
    } catch (error) {
      console.error(`Failed to send notification: ${error.message}`);
    }
  }
}
