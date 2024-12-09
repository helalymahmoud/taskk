import { ObjectType, Field } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Campaign } from "src/campaigns/entities/campaign.entity";

@Entity()
@ObjectType()
export class Partner {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string; 

  @Field()
  @Column()
  contactInfo: string;

  @Field(() => [String])
  @ManyToMany(() => Campaign, (campaign) => campaign.partners)
  campaigns: Campaign[];
}












