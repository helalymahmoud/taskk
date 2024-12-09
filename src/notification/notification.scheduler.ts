import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NotificationService } from './notification.service';
import { CampaignService } from 'src/campaigns/campaigns.service';

@Injectable()
export class NotificationScheduler {
  private readonly logger = new Logger(NotificationScheduler.name);

  constructor(
    private readonly notificationService: NotificationService, 
    private readonly campaignService: CampaignService,
  ) {}
 
  @Cron(CronExpression.EVERY_DAY_AT_NOON)
  async notifyBeforeCampaignStart() {
    this.logger.log('Checking for campaigns starting in 24 hours...');
    const campaigns = await this.campaignService.getCampaignsStartingInNext24Hours();

    for (const campaign of campaigns) {
      for (const userId of campaign.users) { 
         await this.notificationService.sendNotification(
          userId,
          `Upcoming Campaign: ${campaign.name}`,
          `The campaign "${campaign.name}" will start in less than 24 hours.`,
        );
      }
    }      
  }

}
