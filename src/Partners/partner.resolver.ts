import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PartnerService } from './partner.service';
import { CreatePartnerInput } from './dto/create-partner.input';
import { Partner } from './entites/Partner.entity';


@Resolver(
  () => Partner)
export class PartnerResolver {

  constructor(private partnerService: PartnerService) {}

  @Query(()=>[Partner])async Partners() {
    return this.partnerService.findAll();  
  
  }

 
  @Query(()=>Partner)
  async Partner(
    @Args('id')id:string):Promise<Partner>{
      return this.partnerService.findOne(id)
    }

    @Mutation(()=>Partner)
    async updatePartner(
      @Args('id')id:string,
      @Args('UpdatePartnerInput')updatePartnerInput:CreatePartnerInput):Promise<Partner>{
        return this.partnerService.update(id,updatePartnerInput)
      }



  @Mutation(() => Partner)
  async CreatePartner(@Args('input') input: CreatePartnerInput) {
    return this.partnerService.create(input);   
 
}
 }