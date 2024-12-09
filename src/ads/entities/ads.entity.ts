import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, DropDatabaseOptions, } from "typeorm";
import { Campaign } from "src/campaigns/entities/campaign.entity";

@Entity()
@ObjectType()
export class Ad {

  [x: string]: any;
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  campaigned: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column() 
  status: string;

  @ManyToMany(() => Campaign, (campaign) => campaign.ads)
  campaigns: Campaign[];
  

  campaignId: string;



}
