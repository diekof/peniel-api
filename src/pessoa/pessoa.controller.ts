import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';
import { PaginateOptions } from 'src/util/paginator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pessoa')
@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  create(@Body() createPessoaDto: Prisma.pessoaCreateInput) {
    return this.pessoaService.create(createPessoaDto);
  }

  @Get()
  findAll(
    @Query() pageOptionsDto: PaginateOptions
  ) {
    return this.pessoaService.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.pessoaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updatePessoaDto: Prisma.pessoaUpdateInput) {
    return this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.pessoaService.remove(id);
  }
}
