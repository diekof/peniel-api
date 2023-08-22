import { PartialType } from '@nestjs/swagger';
import { CreateTipoConsultaDto } from './create-tipo-consulta.dto';

export class UpdateTipoConsultaDto extends PartialType(CreateTipoConsultaDto) {}
