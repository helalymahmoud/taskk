import { Injectable } from '@nestjs/common';
import * as admin from  'firebase-admin';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()

export class NotificationService {
  [x: string]: any;
  constructor() {
    
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_CLIENT_EMAIL,
        clientEmail: process.env.FIREBASE_PRIVATE_KEY,
      }),
    });
  }

  async sendPushNotification(token: string, title: string, body: string): Promise<void> {
    try {
      const message = {
        token: token, 
        notification: {
          title: title,
          body: body,

        },
      };
      
   
      await admin.messaging().send(message); 
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  }

  
  @Cron(CronExpression.EVERY_DAY_AT_2AM)
  async sendDailyNotifications() {
    const userTokens = await this.getUserTokens(); 
    userTokens.forEach(async (token) => {
      await this.sendPushNotification(token, 'Campaign Reminder', 'Your campaign starts tomorrow!');
    });
  }

  private async getUserTokens(): Promise<string[]> {
    return ['user-token-1', 'user-token-2', 'user-token-3'];
  }
  
}

  