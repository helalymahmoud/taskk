import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateTicketInput {
  
  
  @Field()
  @IsString()
  @IsNotEmpty()
  userId: string;  

  
  @IsNotEmpty()
  @Field()  
  @IsString()
  campaignId: string;  

  @IsNotEmpty()
  @IsString()
  @Field()
  expirationDate: string;  
}