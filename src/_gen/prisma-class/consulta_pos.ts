import { consulta } from './consulta';
import { ApiProperty } from '@nestjs/swagger';

export class consultaPos {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: BigInt })
  consultaId: BigInt;

  @ApiProperty({ type: Boolean })
  isAjuda: boolean;

  @ApiProperty({ type: Boolean })
  isVisita: boolean;

  @ApiProperty({ type: String })
  observacao: string;

  @ApiProperty({ type: () => consulta })
  consulta: consulta;
}
