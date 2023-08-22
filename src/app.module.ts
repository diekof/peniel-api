import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { CommonModule } from './common/common.module';
import { MedicoModule } from './medico/medico.module';
import { RoleModule } from './role/role.module';
import { TipoConsultaModule } from './tipo-consulta/tipo-consulta.module';
import { TipoExameModule } from './tipo-exame/tipo-exame.module';

@Module({
  imports: [PessoaModule,CommonModule, MedicoModule, RoleModule, TipoConsultaModule, TipoExameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
