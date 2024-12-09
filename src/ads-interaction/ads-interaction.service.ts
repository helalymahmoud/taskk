import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ad } from 'src/ads/entities/ads.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AdInteraction } from './ads-interaction.entity';


@Injectable()
export class AdInteractionService {constructor(@InjectRepository(AdInteraction)
    private adInteractionRepository: Repository<AdInteraction>,
  ) {}

  async trackInteraction(
    user: User, ad: Ad, interactionType: string) {
    const interaction = new AdInteraction();
    interaction.user = user;
    interaction.ad = ad;
    interaction.interactionType = interactionType;
    interaction.timestamp = new Date();
    
    await this.adInteractionRepository.save(interaction);
  }

  async getAdStatistics(
    adId: string) {
    const interactions = await this.adInteractionRepository.find({ where: { ad: { id: adId } } });
    
    const views = interactions.filter(i => i.interactionType === 'view').length;
    const clicks = interactions.filter(i => i.interactionType === 'click').length;
    const likes = interactions.filter(i => i.interactionType === 'like').length;
    const score = views > 0 ? (clicks / views) : 0;

    return{views ,clicks,likes,score};
  }
}