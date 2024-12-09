
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationScheduler } from './notification.scheduler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/Notification/entities/Notification.entity';
import { NotificationResolver } from './notification.resolver';
import { CampaignModule } from 'src/campaigns/campaigns.module';
import { Campaign } from 'src/campaigns/entities/campaign.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Notification,Campaign]),CampaignModule],
  providers: [
    NotificationService,
    NotificationScheduler,
    NotificationResolver,
    
    
  ],
})
export class NotificationModule {}
