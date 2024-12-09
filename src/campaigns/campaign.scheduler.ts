import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CampaignService } from './campaigns.service';
import { NotificationService } from 'src/notification/notification.service';


@Injectable()
export class CampaignSchedulerService {
    constructor(
    private readonly campaignService: CampaignService,
    private readonly notificationService: NotificationService,
    ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) 
     notifyCampaigns () {
        console.log ("******************")
     }
}
  