import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAdInput } from './dto/create-ad.input';
import { AdService } from './ads.service';
import { Ad } from './entities/ads.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { strict } from 'assert';

@Resolver(() => Ad)
export class AdResolver {
  constructor(private adService: AdService) {}

  
  @Query(() => [Ad])
  async Ads() {
    return this.adService.findAll();
  }

  @Query(()=>[Ad])
  async ad(
    @Args ('id')id:string):Promise<Ad>{
      return this.adService.findOne(id)
    }

  @Mutation(() => Ad)
  async CreateAd(@Args('input') input: CreateAdInput) {
    return this.adService.create(input);
  }
}