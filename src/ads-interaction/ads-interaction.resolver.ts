import { Resolver, Query, Args } from '@nestjs/graphql';
import { AdInteractionService } from './ads-interaction.service';

@Resolver()
export class AdInteractionResolver {
  constructor(private readonly adInteractionService: AdInteractionService) {}


  @Query(() => String)
  async getAdStatistics(
    @Args('adId') adId: string) {
    const stats = await this.adInteractionService.getAdStatistics(adId);
    return `Views: ${stats.views}, Clicks: ${stats.clicks}, Likes: ${stats.likes}, Score: ${stats.score}`;
    }
}