import { role } from './role';
import { usuario } from './usuario';
import { ApiProperty } from '@nestjs/swagger';

export class usuarioRole {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  roleId: string;

  @ApiProperty({ type: String })
  usuarioId: string;

  @ApiProperty({ type: () => role })
  role: role;

  @ApiProperty({ type: () => usuario })
  usuario: usuario;
}
