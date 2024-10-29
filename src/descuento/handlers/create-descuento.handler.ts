// src/descuento/handlers/create-descuento.handler.ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateDescuentoCommand } from '../commands/create-descuento.command';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Descuento } from '../schemas/descuento.schema';

@CommandHandler(CreateDescuentoCommand)
export class CreateDescuentoHandler implements ICommandHandler<CreateDescuentoCommand> {
  constructor(
    @InjectModel(Descuento.name) private readonly descuentoModel: Model<Descuento>,
  ) {}

  async execute(command: CreateDescuentoCommand): Promise<Descuento> {
    const createdDescuento = new this.descuentoModel(command.createDescuentoDto);
    return createdDescuento.save();
  }
}
