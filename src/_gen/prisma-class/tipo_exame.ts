import { consulta } from './consulta';
import { ApiProperty } from '@nestjs/swagger';

export class tipoExame {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  nome: string;

  @ApiProperty({ type: String })
  descricao: string;

  @ApiProperty({ type: Boolean })
  isAtivo: boolean;

  @ApiProperty({ isArray: true, type: () => consulta })
  consulta_consulta_tipoExameTotipoExame: consulta[];
}
