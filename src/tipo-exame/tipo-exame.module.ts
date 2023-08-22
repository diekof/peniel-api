import { Module } from '@nestjs/common';
import { TipoExameService } from './tipo-exame.service';
import { TipoExameController } from './tipo-exame.controller';

@Module({
  controllers: [TipoExameController],
  providers: [TipoExameService],
})
export class TipoExameModule {}
