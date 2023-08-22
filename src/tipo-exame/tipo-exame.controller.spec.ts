import { Test, TestingModule } from '@nestjs/testing';
import { TipoExameController } from './tipo-exame.controller';
import { TipoExameService } from './tipo-exame.service';

describe('TipoExameController', () => {
  let controller: TipoExameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoExameController],
      providers: [TipoExameService],
    }).compile();

    controller = module.get<TipoExameController>(TipoExameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
