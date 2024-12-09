import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import {  CampaignModule} from './campaigns/campaigns.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  typeOrmConfigAsync } from './config/typeorm.config';
import { UsersModule } from './users/users.module';
import { Ad } from './ads/entities/ads.entity';
import { Campaign } from './campaigns/entities/campaign.entity';
import { Partner } from './Partners/entites/Partner.entity';
import { User } from './users/entities/user.entity';
import { Ticket } from './tickets/entities/tickets.entity';
import { NotificationModule } from './notification/notification.module';
import { AuthModule } from './auth/auth.module';
import { AdModule } from './ads/ads.module';
import { PartnerModule } from './Partners/partner.module';
import { TicketModule } from './tickets/ticket.module';
import { AdInteraction } from './ads-interaction/ads-interaction.entity';
import { DataloaderModule } from './dataloader/dataloader.module';
import { DataloaderService } from './dataloader/dataloader.service';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLExceptisonFilter } from './Exception/graphql-exception.filter';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from './queue/queue.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
     imports:[DataloaderModule,
      BullModule.forRoot({
        connection: {
          host: 'localhost',
          port: 6379,
        },
      }),
     ],
     useFactory: (DataloaderService: DataloaderService) => {
      return {

        
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug:true,
      playground: true,
      context: async({req,res,}) =>{ 
        return {
        loaders: DataloaderService.getLoaders(),
        req,
        res
        
      }
    },
      

      formatError: (err) => ({ 
        message: err.message,
        status: err.extensions.code,
        timestamp:new Date().toISOString(), 
         
      }
    )
    };

  },
  inject:[DataloaderService]
      
    }),
    
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    CampaignModule,
    UsersModule,
    TypeOrmModule.forFeature([
      Campaign,
       Ad,
       Partner,
       User,
       Ticket,
       AdInteraction,]),
       NotificationModule,
       AuthModule,
       AdModule,
       PartnerModule,
       TicketModule,
       DataloaderModule,
       QueueModule,
  ],
  providers:[AppService, 
     {
    provide: APP_FILTER,
    useClass: GraphQLExceptisonFilter,   
  },]
})
export class AppModule {}
function v4() {
  throw new Error('Function not implemented.');
}

