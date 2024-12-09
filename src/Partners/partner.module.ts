import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partner } from './entites/Partner.entity';
import { PartnerResolver } from './partner.resolver';
import { Campaign } from 'src/campaigns/entities/campaign.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partner,Campaign]),],
  providers: [PartnerService,PartnerResolver,],
})
export class PartnerModule {}