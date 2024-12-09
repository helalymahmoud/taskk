import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignResolver } from './campaigns.resolver';
import { CampaignService } from './campaigns.service';
import { Campaign } from './entities/campaign.entity';
import { NotificationScheduler } from 'src/notification/notification.scheduler';
import { DataloaderService } from 'src/dataloader/dataloader.service';
import { AdService } from 'src/ads/ads.service';
import { Ad } from 'src/ads/entities/ads.entity';
 


@Module({
  imports: [TypeOrmModule.forFeature([Campaign,Ad,]),],  
  providers: [CampaignService, CampaignResolver,DataloaderService,AdService,],
  exports:[DataloaderService]
  
})
export class CampaignModule {} 