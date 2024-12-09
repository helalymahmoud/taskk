import { Injectable } from '@nestjs/common';
import { campaigns,  } from '../data';
import { Campaign } from './entities/campaign.entity';

@Injectable()
export class CampaignRepository {
  public async getAll(): Promise<Campaign[]> {
    console.log('SELECT * FROM campaigns');
    return campaigns;
  }
}