import { ads } from "src/data";
import { Ad } from "./entities/ads.entity";

export class adRepository {
    
    public async AdsByCampaignIds(
      campaignId: readonly string[],
    ): Promise<Ad[]> {
      console.log(
        `SELECT * FROM ads WHERE campaignId IN (${campaignId.join(',')})`,
      );
      return ads.filter((ad) => campaignId.includes(ad.campaignId));
    }
  }