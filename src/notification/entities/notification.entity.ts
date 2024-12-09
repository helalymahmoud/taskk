import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity() 
@ObjectType()
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  message: string; 

  @Field()
  @Column()
  timestamp: Date;   
  @ManyToOne(() => User, (user) => user.notifications)
  user: User;




}
