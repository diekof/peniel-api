import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UUID } from 'crypto';
import { PaginateOptions, paginator } from 'src/util/paginator';

@Injectable()
export class RoleService {

  constructor(private readonly prisma: PrismaService) {}
  
  create(createRoleDto: Prisma.roleCreateInput) {
    return this.prisma.role.create({
      data: createRoleDto,
      }).then((role) => {
        return this.prisma.role.findUnique({
          where: { id: role.id },
          });
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao salvar a role.');
      });
  }

  findAll(pageOptionsDto: PaginateOptions) {
    return paginator(pageOptionsDto)(this.prisma.role).then((roles) => {
      return roles;
    }).catch((error) => {
      console.log(error);
      throw new BadRequestException('Ops! Ocorreu um erro ao buscar as roles.');
    });
  }

  findOne(id: UUID) {
    return this.prisma.role.findUnique({
      where: { id },
      }).then((role) => {
        console.log(role);
        if (!role) {
          throw new Error('Ops! Role não encontrada.');
        }else{
          return role;
        }
      }).catch((error) => {
        throw new BadRequestException(`${error}`);
      });
  }

  update(id: UUID, updateRoleDto: Prisma.roleUpdateInput  ) {
    return this.prisma.role.update({
      where: { id },
      data: updateRoleDto,
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao atualizar a role.');
      });
  }
  remove(id: UUID) {
    return this.prisma.role.delete({
      where: { id },
      }).catch((error) => {
        throw new BadRequestException('Ops! Ocorreu um erro ao remover a role.');
      });
  }
}
