import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async Register(@Args('data') registerDto: RegisterDto): Promise<string> {
    return this.authService.register(registerDto);
  }

  
  @Mutation(() => String)
  async Login(@Args('data') loginDto: LoginDto): Promise<string> {
    return this.authService.login(loginDto);
 
  }
}
