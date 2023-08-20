import { consulta } from './consulta';
import { pessoa } from './pessoa';
import { ApiProperty } from '@nestjs/swagger';

export class medico {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  crm: string;

  @ApiProperty({ isArray: true, type: () => consulta })
  consulta: consulta[];

  @ApiProperty({ type: () => pessoa })
  pessoa: pessoa;
}
