import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignModule } from 'src/campaigns/campaigns.module';
import { Ticket } from './entities/tickets.entity';
import { TicketService } from './ticket.service';
import { UsersModule } from 'src/users/users.module';
import { TicketResolver } from './ticket.resolver';
import { User } from 'src/users/entities/user.entity';
import { Campaign } from 'src/campaigns/entities/campaign.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Ticket,User,Campaign ]), UsersModule, CampaignModule],
  providers: [TicketService,TicketResolver],

})
export class TicketModule {}