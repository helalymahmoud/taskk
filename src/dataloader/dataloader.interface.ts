import DataLoader from 'dataloader';
import { Ad } from 'src/ads/entities/ads.entity';

export interface IDataloaders {
  adsLoader: DataLoader<string, Ad>;
}  