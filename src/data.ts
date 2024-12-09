import { Ad } from './ads/entities/ads.entity';
import { Campaign } from './campaigns/entities/campaign.entity';


export const campaigns: Campaign[] = [
  {
      id: "1", name: 'John', description: "fref",
      startDate: undefined,
      endDate: undefined,
      status: 'd',
      ads: [],
      partners: [],
      users: []
  },

];

export const ads: Ad[] = [
  {
      id: "1", name: 'Sam', studentId: 1,
      campaigned: 'gh',
      title: 'gf',
      content: 'fh',
      type: 'fh',
      status: 'fh',
      campaigns: [],
      campaignId: "0"
  },

];