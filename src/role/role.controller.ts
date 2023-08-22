import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { Prisma } from '@prisma/client';
import { PaginateOptions } from 'src/util/paginator';
import { UUID } from 'crypto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: Prisma.roleCreateInput) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(
    @Query() pageOptionsDto: PaginateOptions
  ) {
    return this.roleService.findAll(pageOptionsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateRoleDto: Prisma.roleUpdateInput) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.roleService.remove(id);
  }
}
