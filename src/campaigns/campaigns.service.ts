import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThanOrEqual, MoreThan, Repository } from 'typeorm';
import { CreateCampaignInput } from './dto/create-campaign.input'; 
import { Campaign } from './entities/campaign.entity';
@Injectable()
export class CampaignService {
  upload(id: String) {
    throw new Error('Method not implemented.');
  }

  constructor(@InjectRepository(Campaign)
    private readonly campaignRepository: Repository<Campaign>, 
  ) {}

  async getCampaignsStartingInNext24Hours(): Promise<Campaign[]> {
    const now = new Date(1);
    const tomorrow = new Date(1);
    tomorrow.setHours(now.getHours() + 24);
    return this.campaignRepository.find({
      where: {
      startDate: Between(now, tomorrow),
      },
      relations: ['users'], 
    });
  }
 
  async getCampaignsStartingNow(): Promise<Campaign[]> {
    const now = new Date();
    return this.campaignRepository.find({
        where: {
        startDate: LessThanOrEqual(now),
        endDate: MoreThan(now),
      },
      relations: ['users'],
    });
  }

 async findAll():Promise<Campaign[]>{
  return this.campaignRepository.find();
 }

 async findOne(id: string): Promise<Campaign> {
  return this.campaignRepository.findOne({where:{id}}); 
}

async create(createCampaignInput: CreateCampaignInput): Promise<Campaign> {
  const campaign = this.campaignRepository.create(createCampaignInput); 
  return this.campaignRepository.save(campaign); 
}

  async update(id: string, updateCampaignInput: CreateCampaignInput): Promise<Campaign> {
    await this.campaignRepository.update(id, updateCampaignInput); 
    return this.findOne(id); 
  }

  
  async remove (id:string):Promise<void>{
    await this.campaignRepository.delete(id)
  }
  
  }
