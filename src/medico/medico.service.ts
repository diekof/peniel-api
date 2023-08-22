import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { PrismaService } from '../common/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PaginateOptions, paginator } from 'src/util/paginator';
import { UUID } from 'crypto';

@Injectable()
export class MedicoService {

  constructor(private readonly prisma: PrismaService) { }

  create(createMedicoDto: CreateMedicoDto) {

    let pessoaCreateDto: Prisma.pessoaCreateInput = {
      nome: createMedicoDto.nome,
      cpf: createMedicoDto.cpf,
      dataNascimento: createMedicoDto.dataNascimento,
      cartaoSus: createMedicoDto.cartaoSus,
      endRua: createMedicoDto.endRua,
      endBairro: createMedicoDto.endBairro,
      endNumero: createMedicoDto.endNumero,
      endCidade: createMedicoDto.endCidade,
      endEstado: createMedicoDto.endEstado,
      endCep: createMedicoDto.endCep,
    };


      let medicoCreateDto: Prisma.medicoCreateInput = {
        crm: createMedicoDto.crm,
        pessoa: {
          create: pessoaCreateDto,
        },
      };

     return this.prisma.medico.create({
        data: medicoCreateDto,
      }).then((medico) => {
        return this.prisma.medico.findUnique({
          where: { id: medico.id },
        });
      }).catch((error) => {
        console.log(error);
        throw new BadRequestException('Ops! Ocorreu um erro ao salvar o medico.');
      });
   


  }

  findAll(pageOptionsDto: PaginateOptions) {
    return paginator(pageOptionsDto)(this.prisma.medico).then((result) => {
      return result;
    }).catch((error) => {
      console.log(error);
      throw new BadRequestException('Ops! Ocorreu um erro ao buscar as medicos.');
    });
  }

  findOne(id: UUID) {
    return this.prisma.medico.findUnique({
      where: { id },
      }).then((medico) => {
        console.log(medico);
        if (!medico) {
          throw new Error('Ops! Medico não encontrado.');
        }else{
          return medico;
        }
      }).catch((error) => {
        throw new BadRequestException(`${error}`);
      }
    );
  }

  update(id: UUID, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: UUID) {
    return this.prisma.medico.delete({
      where: { id },
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao remover o medico.'	);
      });
  }
}
