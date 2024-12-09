import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePartnerInput } from './dto/create-partner.input';
import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { Partner } from './entites/Partner.entity';

@Injectable()
export class PartnerService {constructor(@InjectRepository(Partner)
    private partnerRepository:Repository<Partner>,
    @InjectRepository(Campaign)
    private campaignRepository:Repository<Campaign>, 
  ) {}

  async findAll(): Promise<Partner[]> {
    return this.partnerRepository.find({ relations: ['campaigns'] });   
  }

  async findOne(id:string):Promise<Partner>{
    return this.partnerRepository.findOne({where:{id}})
  }

  
  async update(id:string,updatePartnerInput):Promise<Partner>{
    await this.partnerRepository.update(id,updatePartnerInput);
    return this.findOne(id)
  }
   
  async create(
    input: CreatePartnerInput): Promise<Partner> {
    const partner = this.partnerRepository.create(input);     
    partner.campaigns = await this.campaignRepository.findByIds(input.campaignIds);
    return this.partnerRepository.save(partner);        
  }

} 