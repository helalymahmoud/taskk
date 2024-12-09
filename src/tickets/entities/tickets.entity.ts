import { Field, ObjectType } from '@nestjs/graphql';
import { Campaign } from 'src/campaigns/entities/campaign.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, ManyToMany } from 'typeorm';
@ObjectType()
@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @ManyToOne(() => User, (user) => user.tickets)
  user: User;

  @Field(() => String)
  @ManyToOne(() => Campaign, (campaign) => campaign.users)
  campaign: Campaign;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
  
  @Field(() => Date)
  @Column('timestamp')
  expirationDate: Date;

  @Field(() => String)
  @Column()
  status: string;



}
 