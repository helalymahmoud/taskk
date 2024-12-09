import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateNotificationInput {


  @IsString()
  @IsNotEmpty()
  @Field()
  userId: string;



  @IsString()
  @IsNotEmpty()
  @Field()
  message: string;


  @IsNotEmpty()
  @Field()
  timestamp: Date;
}