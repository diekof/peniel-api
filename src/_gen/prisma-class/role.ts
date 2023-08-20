import { usuarioRole } from './usuario_role';
import { ApiProperty } from '@nestjs/swagger';

export class role {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  nome: string;

  @ApiProperty({ type: Boolean })
  isAtivo: boolean;

  @ApiProperty({ isArray: true, type: () => usuarioRole })
  usuarioRole: usuarioRole[];
}
