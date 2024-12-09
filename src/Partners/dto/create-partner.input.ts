import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreatePartnerInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;  

  @Field()
  @IsString()
  @IsNotEmpty()
  contactInfo: string;    

  @Field(() => [String])
  @IsString()
  @IsNotEmpty() 
  campaignIds: string[];  
  
}