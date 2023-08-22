import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoExameService } from './tipo-exame.service';
import { CreateTipoExameDto } from './dto/create-tipo-exame.dto';
import { UpdateTipoExameDto } from './dto/update-tipo-exame.dto';

@Controller('tipo-exame')
export class TipoExameController {
  constructor(private readonly tipoExameService: TipoExameService) {}

  @Post()
  create(@Body() createTipoExameDto: CreateTipoExameDto) {
    return this.tipoExameService.create(createTipoExameDto);
  }

  @Get()
  findAll() {
    return this.tipoExameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoExameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoExameDto: UpdateTipoExameDto) {
    return this.tipoExameService.update(+id, updateTipoExameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoExameService.remove(+id);
  }
}
