// src/descuento/descuento.controller.ts
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateDescuentoDto } from './dto/create-descuento.dto.ts';
import { CreateDescuentoCommand } from './commands/create-descuento.command';
import { UpdateDescuentoCommand } from './commands/update-descuento.command';
import { DeleteDescuentoCommand } from './commands/delete-descuento.command';
import { GetDescuentoQuery } from './queries/get-descuento.query';
import { GetAllDescuentosQuery } from './queries/get-all-descuentos.query';

@Controller('descuentos')
export class DescuentoController {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  @Post()
  async create(@Body() createDescuentoDto: CreateDescuentoDto) {
    return this.commandBus.execute(new CreateDescuentoCommand(createDescuentoDto));
  }

  @Get()
  async findAll() {
    return this.queryBus.execute(new GetAllDescuentosQuery());
  }

  @Get(':codigo')
  async findOne(@Param('codigo') codigo: string) {
    return this.queryBus.execute(new GetDescuentoQuery(codigo));
  }

  @Patch(':codigo')
  async update(
    @Param('codigo') codigo: string,
    @Body() updateDescuentoDto: CreateDescuentoDto,
  ) {
    return this.commandBus.execute(new UpdateDescuentoCommand(codigo, updateDescuentoDto));
  }

  @Delete(':codigo')
  async delete(@Param('codigo') codigo: string) {
    return this.commandBus.execute(new DeleteDescuentoCommand(codigo));
  }
}
