import { Injectable } from '@nestjs/common';
import { CreateTipoConsultaDto } from './dto/create-tipo-consulta.dto';
import { UpdateTipoConsultaDto } from './dto/update-tipo-consulta.dto';

@Injectable()
export class TipoConsultaService {
  create(createTipoConsultaDto: CreateTipoConsultaDto) {
    return 'This action adds a new tipoConsulta';
  }

  findAll() {
    return `This action returns all tipoConsulta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoConsulta`;
  }

  update(id: number, updateTipoConsultaDto: UpdateTipoConsultaDto) {
    return `This action updates a #${id} tipoConsulta`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoConsulta`;
  }
}
