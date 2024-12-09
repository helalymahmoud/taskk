import { Ad } from 'src/ads/entities/ads.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class AdInteraction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.adInteractions, { eager: true })
  user: User;

  @ManyToOne(() => Ad, (ad) => ad.interactions, { eager: true })
  ad: Ad;

  @Column()
  interactionType: string; 

  @CreateDateColumn({ type: 'timestamp' })
  timestamp: Date; 
}