import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DataLoader from 'dataloader';
import { AdModule } from 'src/ads/ads.module';
import { CampaignModule } from 'src/campaigns/campaigns.module';
import { DataloaderService } from './dataloader.service';
import { AdService } from 'src/ads/ads.service';
import { Ad } from 'src/ads/entities/ads.entity';

@Module({
    imports:[CampaignModule,AdModule,TypeOrmModule.forFeature([Ad])],
    providers:[DataloaderService,AdService],  
    exports:[DataloaderService] 
})
export class DataloaderModule {}
   