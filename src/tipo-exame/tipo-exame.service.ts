import { Injectable } from '@nestjs/common';
import { CreateTipoExameDto } from './dto/create-tipo-exame.dto';
import { UpdateTipoExameDto } from './dto/update-tipo-exame.dto';

@Injectable()
export class TipoExameService {
  create(createTipoExameDto: CreateTipoExameDto) {
    return 'This action adds a new tipoExame';
  }

  findAll() {
    return `This action returns all tipoExame`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoExame`;
  }

  update(id: number, updateTipoExameDto: UpdateTipoExameDto) {
    return `This action updates a #${id} tipoExame`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoExame`;
  }
}
