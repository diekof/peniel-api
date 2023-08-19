import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PessoaModule,CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
