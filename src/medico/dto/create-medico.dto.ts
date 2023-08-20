import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { PrismaModel } from 'src/_gen/prisma-class';


export class CreateMedicoDto  {
  
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
  
    @ApiProperty({ type: String })
    crm: string;

}
