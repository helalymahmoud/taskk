import { Test, TestingModule } from '@nestjs/testing';
import { CampaignResolver } from './campaigns.resolver';
import { CampaignService } from './campaigns.service';

describe('CampaignsResolver', () => {
  let resolver: CampaignResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignResolver, CampaignService],
    }).compile();

    resolver = module.get<CampaignResolver>(CampaignResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
