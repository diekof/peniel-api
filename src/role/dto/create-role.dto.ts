import { PartialType } from '@nestjs/swagger';
import { PrismaModel } from 'src/_gen/prisma-class';

export class CreateRoleDto extends PartialType(PrismaModel.role){}
