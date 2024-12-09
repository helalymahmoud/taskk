import { InputType, Field,  } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCampaignInput {
  
  @IsString()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  description: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  startDate: Date;

  @IsString()
  @IsNotEmpty()
  @Field()
  endDate: Date;

  @IsString()
  @IsNotEmpty()
  @Field()
  status: string;


  @IsString()
  @IsNotEmpty()
  @Field()
  login:string  
} 