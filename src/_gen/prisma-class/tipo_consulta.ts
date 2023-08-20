import { agendamento } from './agendamento';
import { ApiProperty } from '@nestjs/swagger';

export class tipoConsulta {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  nome: string;

  @ApiProperty({ type: Boolean })
  isAtivo: boolean;

  @ApiProperty({ isArray: true, type: () => agendamento })
  agendamento_agendamento_tipoConsultaTotipoConsulta: agendamento[];
}
