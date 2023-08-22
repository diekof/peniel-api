import { Test, TestingModule } from '@nestjs/testing';
import { TipoExameService } from './tipo-exame.service';

describe('TipoExameService', () => {
  let service: TipoExameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoExameService],
    }).compile();

    service = module.get<TipoExameService>(TipoExameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
