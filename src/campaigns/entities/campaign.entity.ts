import { Field, ObjectType } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Ad } from "src/ads/entities/ads.entity";
import { User } from "src/users/entities/user.entity";
import { Partner } from "src/Partners/entites/Partner.entity";

@Entity()
@ObjectType()
export class Campaign {
  @Field(()=>String)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(()=>String)
  @Column()
  name: string;

  @Field(()=>String)
  @Column()
  description: string;

  @Field(()=>Date)
  @Column({ type: "date" })
  startDate: Date;

  @Field(()=>Date)
  @Column({ type: "date" })
  endDate: Date;

  @Field(()=>String)
  @Column()
  status: string;

  @Field(() => [Ad])
  @OneToMany(() => Ad, (ad) => ad.campaigns)
  @JoinTable()
  ads: Ad[];

  @Field(() => [Partner])
  @ManyToMany(() => Partner, (partner) => partner.campaigns)
  @JoinTable()
  partners: Partner[];

  @Field(() => [User])
  @ManyToMany(() => User, (user) => user.joinedCampaigns)
  @JoinTable()
  users: User[]
  
}
