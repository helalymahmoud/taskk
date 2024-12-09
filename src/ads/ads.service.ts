import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdInput } from './dto/create-ad.input';
import { Ad } from './entities/ads.entity';

@Injectable()
export class AdService {
  [x: string]: any; constructor(
  @InjectRepository(Ad) private readonly adRepository ) {}

  public async getAllAdsByCampaignIds(
    campaignId: readonly string[], 
  ): Promise<Ad[]> {
    return await this.adRepository.getAllAdsByCampaignIds(campaignId);
  }

  public async CampaignAdsByBatch(
    campaignId: readonly string[],
  ): Promise<(Ad | any)[]> {
    const ads = await this.getAllAdsByCampaignIds(campaignId);
    const mappedResults = this._mapResultToIds(campaignId, ads);
    return mappedResults;

  } 

  private _mapResultToIds(campaignId: readonly string[], ads: Ad[]) {
    return campaignId.map(
      (id) =>
        ads.filter((ads: Ad) => ads.campaignId === id) || null,
    );  
  }

  async findAll(): Promise<Ad[]> { 
    return this.adRepository.find();  
  } 
  async findOne(id:string):Promise<Ad>{
    return this.adRepository.findOne(id)
  }

  async create(input: CreateAdInput): Promise<Ad> {
    const ad = this.adRepository.create(input);  
    return this.adRepository.save(ad);   
  }
  

}
