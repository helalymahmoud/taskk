import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAdInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string; 
  @Field()
  @IsString()
  @IsNotEmpty()
  content: string; 

  @Field()
  @IsString()
  @IsNotEmpty()
  type: string;   

  @Field() 
  @IsString()
  @IsNotEmpty()
  status: string;  

  @Field()
  @IsString()
  @IsNotEmpty()
  campaignId: string;     
}