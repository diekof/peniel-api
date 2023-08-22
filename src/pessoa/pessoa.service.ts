import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { PaginateOptions, paginator } from 'src/util/paginator';

@Injectable()
export class PessoaService {

  constructor(private readonly prisma: PrismaService) {}

  create(createPessoaDto: Prisma.pessoaCreateInput) {
    return this.prisma.pessoa.create({
      data: createPessoaDto,
      }).then((pessoa) => {
        return this.prisma.pessoa.findUnique({
          where: { id: pessoa.id },
          });
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao salvar a pessoa.');
      });
  }

  findAll(pageOptionsDto: PaginateOptions) {
    return paginator(pageOptionsDto)(this.prisma.pessoa).then((pessoas) => {
      return pessoas;
    }).catch((error) => {
      console.log(error);
      throw new BadRequestException('Ops! Ocorreu um erro ao buscar as pessoas.');
    });
  }

  findOne(id: UUID) {
    return this.prisma.pessoa.findUnique({
      where: { id },
      }).then((pessoa) => {
        console.log(pessoa);
        if (!pessoa) {
          throw new Error('Ops! Pessoa não encontrada.');
        }else{
          return pessoa;
        }
      }).catch((error) => {
        throw new BadRequestException(`${error}`);
      });
  }

  update(id: UUID, updatePessoaDto: Prisma.pessoaUpdateInput) {
    return this.prisma.pessoa.update({
      where: { id },
      data: updatePessoaDto,
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao atualizar a pessoa.');
      });
  }

  remove(id: UUID) {
    return this.prisma.pessoa.delete({
      where: { id },
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao remover a pessoa.'	);
      });
  }
}
