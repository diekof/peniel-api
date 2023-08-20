import { pessoa } from './pessoa';
import { tipoConsulta } from './tipo_consulta';
import { consulta } from './consulta';
import { ApiProperty } from '@nestjs/swagger';

export class agendamento {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: BigInt })
  data: BigInt;

  @ApiProperty({ type: String })
  pessoaId: string;

  @ApiProperty({ type: String })
  tipoConsulta: string;

  @ApiProperty({ type: Boolean })
  isCompareceu: boolean;

  @ApiProperty({ type: () => pessoa })
  pessoa: pessoa;

  @ApiProperty({ type: () => tipoConsulta })
  tipoConsulta_agendamento_tipoConsultaTotipoConsulta: tipoConsulta;

  @ApiProperty({ isArray: true, type: () => consulta })
  consulta: consulta[];
}
