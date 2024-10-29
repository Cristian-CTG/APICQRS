// src/descuento/handlers/update-descuento.handler.ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateDescuentoCommand } from '../commands/update-descuento.command';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Descuento } from '../schemas/descuento.schema';

@CommandHandler(UpdateDescuentoCommand)
export class UpdateDescuentoHandler implements ICommandHandler<UpdateDescuentoCommand> {
  constructor(@InjectModel(Descuento.name) private readonly descuentoModel: Model<Descuento>) {}

  async execute(command: UpdateDescuentoCommand): Promise<Descuento> {
    return this.descuentoModel
      .findOneAndUpdate({ codigo: command.codigo }, command.updateDescuentoDto, { new: true })
      .exec();
  }
}
