
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserDto {


  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  
  @Field()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true }) 
  @IsString()
  @IsOptional()
  role: string = 'user';
}

