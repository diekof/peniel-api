import { Injectable } from '@nestjs/common';
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
      });
  }

  findAll(pageOptionsDto: PaginateOptions) {
    return paginator(pageOptionsDto)(this.prisma.pessoa);
  }

  findOne(id: UUID) {
    return this.prisma.pessoa.findUnique({
      where: { id },
      });
  }

  update(id: UUID, updatePessoaDto: Prisma.pessoaUpdateInput) {
    return this.prisma.pessoa.update({
      where: { id },
      data: updatePessoaDto,
      });
  }

  remove(id: UUID) {
    return this.prisma.pessoa.delete({
      where: { id },
      });
  }
}
