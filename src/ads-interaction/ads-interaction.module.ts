import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ad } from 'src/ads/entities/ads.entity';
import { User } from 'src/users/entities/user.entity';
import { AdInteractionResolver } from './ads-interaction.resolver';
import { AdInteractionService } from './ads-interaction.service';
import { AdInteraction } from './ads-interaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdInteraction, User, Ad])],     
  providers: [AdInteractionService, AdInteractionResolver],      
  exports: [AdInteractionService],   
})
export class AdInteractionModule {}