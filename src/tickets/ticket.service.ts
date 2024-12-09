
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTicketInput } from './dto/create-ticket.input';
import { Ticket } from './entities/tickets.entity';


@Injectable()
export class TicketService {
  update(id: string, updateTicketInput: CreateTicketInput): Ticket | PromiseLike<Ticket> {
    throw new Error('Method not implemented.');
  }constructor(@InjectRepository(Ticket)

private ticketRepository: Repository<Ticket>,

@InjectRepository 
(User)private userRepository: Repository<User>,  

@InjectRepository
(Campaign)private campaignRepository: Repository<Campaign>,   
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketRepository.find({ relations: ['user', 'campaign'] });       
  }

  async findOne(id:string):Promise<Ticket>{
    return this.ticketRepository.findOne({where:{id}})
  }

  

  async create(
    input: CreateTicketInput): Promise<Ticket> {
    const user = await this.userRepository.findOne({
        where:{userId:input.userId}
    })  
    const campaign = await this.campaignRepository.findOne({
        where:{id: (input.campaignId)}
    })


    const ticket = this.ticketRepository.create({ 
      user,
      campaign,
      expirationDate: new Date(input.expirationDate),
    });
    return this.ticketRepository.save(ticket);     
     
  }
}
