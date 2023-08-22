import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { CommonModule } from './common/common.module';
import { MedicoModule } from './medico/medico.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [PessoaModule,CommonModule, MedicoModule, RoleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
