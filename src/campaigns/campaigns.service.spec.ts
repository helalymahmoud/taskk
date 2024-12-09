import { Test, TestingModule } from '@nestjs/testing';
import { CampaignService } from './campaigns.service';

describe('CampaignsService', () => {
  let service: CampaignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignService],
    }).compile();

    service = module.get<CampaignService>(CampaignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
