import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { CreateTicketInput } from './dto/create-ticket.input';
import { Ticket } from './entities/tickets.entity';

@Resolver(

  () => Ticket)
export class TicketResolver {

  constructor(private ticketService: TicketService) {}

  @Query(() => [Ticket])async Tickets() {
    return this.ticketService.findAll();   
  }

  @Query(()=>[Ticket])
  async Ticket(
    @Args('id')id:string):Promise<Ticket>{
      return this.ticketService.findOne(id)
    }

  @Mutation(() => Ticket)
  async CreateTicket(@Args('input') input: CreateTicketInput) {
    return this.ticketService.create(input);     
 
  }
  @Mutation(()=>Ticket)
  async updateTicket(
    @Args('id')id:string,
    @Args('updateTicketInput')updateTicketInput:CreateTicketInput):Promise<Ticket>{
      return this.ticketService.update(id,updateTicketInput)
    }
}