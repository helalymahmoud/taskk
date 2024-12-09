import { ObjectType, Field } from "@nestjs/graphql";
import { Campaign } from "src/campaigns/entities/campaign.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";

@Entity()
@ObjectType()
export class User {
  [x: string]: any;
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id:string

  @Field()
  name: string;

  @Field()
  @Column()
  email: string;


  @Column()
  password: string;

  @Field(() => [Campaign])
  @ManyToMany(() => Campaign, (campaign) => campaign.users)
  joinedCampaigns: Campaign[];
    tickets: any;


  @Column({ default: 'user' })
  role: string; 

    
  @Column({ nullable: true })
  fcmToken: string; 
}



