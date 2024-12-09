import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { IDataloaders } from './dataloader.interface';
import { AdService } from 'src/ads/ads.service';
import { Ad } from 'src/ads/entities/ads.entity';

@Injectable()
export class DataloaderService {
  constructor(private readonly adsLoader: AdService) {}

  getLoaders(): IDataloaders {
    const adsLoader = this._createAdsLoader();
    return {
    adsLoader
    };
  }

  private _createAdsLoader() {
    return new DataLoader<string, Ad>(
      async (keys: readonly string[]) =>
        await this.adsLoader.CampaignAdsByBatch(keys as string[]),
    );
  }
}