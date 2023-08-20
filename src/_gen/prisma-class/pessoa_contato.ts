import { pessoa } from './pessoa';
import { ApiProperty } from '@nestjs/swagger';

export class pessoaContato {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  nome: string;

  @ApiProperty({ type: Boolean })
  isPrincipal: boolean;

  @ApiProperty({ type: BigInt })
  tipo: BigInt;

  @ApiProperty({ type: String })
  pessoaId: string;

  @ApiProperty({ type: () => pessoa })
  pessoa: pessoa;
}
