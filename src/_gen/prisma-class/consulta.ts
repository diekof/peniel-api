import { agendamento } from './agendamento';
import { medico } from './medico';
import { pessoa } from './pessoa';
import { tipoExame } from './tipo_exame';
import { consultaPos } from './consulta_pos';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class consulta {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: Date })
  data: Date;

  @ApiProperty({ type: String })
  pessoaId: string;

  @ApiProperty({ type: String })
  situacao: string;

  @ApiProperty({ type: Boolean })
  isRetorno: boolean;

  @ApiProperty({ type: String })
  obervacao: string;

  @ApiProperty({ type: String })
  tipoExame: string;

  @ApiProperty({ type: String })
  medicoId: string;

  @ApiProperty({ type: String })
  agendamentoId: string;

  @ApiProperty({ type: () => agendamento })
  agendamento: agendamento;

  @ApiProperty({ type: () => medico })
  medico: medico;

  @ApiProperty({ type: () => pessoa })
  pessoa: pessoa;

  @ApiProperty({ type: () => tipoExame })
  tipoExame_consulta_tipoExameTotipoExame: tipoExame;

  @ApiPropertyOptional({ type: () => consultaPos })
  consultaPos?: consultaPos;
}
