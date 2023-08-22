import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoConsultaService } from './tipo-consulta.service';
import { CreateTipoConsultaDto } from './dto/create-tipo-consulta.dto';
import { UpdateTipoConsultaDto } from './dto/update-tipo-consulta.dto';

@Controller('tipo-consulta')
export class TipoConsultaController {
  constructor(private readonly tipoConsultaService: TipoConsultaService) {}

  @Post()
  create(@Body() createTipoConsultaDto: CreateTipoConsultaDto) {
    return this.tipoConsultaService.create(createTipoConsultaDto);
  }

  @Get()
  findAll() {
    return this.tipoConsultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoConsultaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoConsultaDto: UpdateTipoConsultaDto) {
    return this.tipoConsultaService.update(+id, updateTipoConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoConsultaService.remove(+id);
  }
}
