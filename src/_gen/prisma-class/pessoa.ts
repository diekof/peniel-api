import { agendamento } from './agendamento';
import { consulta } from './consulta';
import { medico } from './medico';
import { pessoaContato } from './pessoa_contato';
import { usuario } from './usuario';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class pessoa {
  @ApiProperty({ type: String })
  id: string;

  @ApiPropertyOptional({ type: String })
  nome?: string;

  @ApiProperty({ type: String })
  cpf: string;

  @ApiProperty({ type: Date })
  dataNascimento: Date;

  @ApiProperty({ type: String })
  cartaoSus: string;

  @ApiProperty({ type: String })
  endRua: string;

  @ApiProperty({ type: String })
  endBairro: string;

  @ApiProperty({ type: String })
  endNumero: string;

  @ApiProperty({ type: String })
  endCidade: string;

  @ApiProperty({ type: String })
  endEstado: string;

  @ApiProperty({ type: String })
  endCep: string;

  @ApiProperty({ type: Date })
  createAt: Date;

  @ApiProperty({ isArray: true, type: () => agendamento })
  agendamento: agendamento[];

  @ApiProperty({ isArray: true, type: () => consulta })
  consulta: consulta[];

  @ApiPropertyOptional({ type: () => medico })
  medico?: medico;

  @ApiProperty({ isArray: true, type: () => pessoaContato })
  pessoaContato: pessoaContato[];

  @ApiProperty({ isArray: true, type: () => usuario })
  usuario: usuario[];
}
