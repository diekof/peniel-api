import { pessoa } from './pessoa';
import { usuarioRole } from './usuario_role';
import { ApiProperty } from '@nestjs/swagger';

export class usuario {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  login: string;

  @ApiProperty({ type: String })
  senha: string;

  @ApiProperty({ type: String })
  token: string;

  @ApiProperty({ type: Boolean })
  isAtivo: boolean;

  @ApiProperty({ type: String })
  pessoaId: string;

  @ApiProperty({ type: () => pessoa })
  pessoa: pessoa;

  @ApiProperty({ isArray: true, type: () => usuarioRole })
  usuarioRole: usuarioRole[];
}
