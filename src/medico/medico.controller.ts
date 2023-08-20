import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { PaginateOptions } from 'src/util/paginator';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { UUID } from 'crypto';

@ApiTags('Médico')
@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicoService.create(createMedicoDto);
  }

  @Get()
  findAll(
    @Query() pageOptionsDto: PaginateOptions
  ) {
    return this.medicoService.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.medicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateMedicoDto: UpdateMedicoDto) {
    return this.medicoService.update(id, updateMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.medicoService.remove(id);
  }
}
