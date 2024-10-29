// src/descuento/handlers/delete-descuento.handler.ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteDescuentoCommand } from '../commands/delete-descuento.command';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Descuento } from '../schemas/descuento.schema';

@CommandHandler(DeleteDescuentoCommand)
export class DeleteDescuentoHandler implements ICommandHandler<DeleteDescuentoCommand> {
  constructor(@InjectModel(Descuento.name) private readonly descuentoModel: Model<Descuento>) {}

  async execute(command: DeleteDescuentoCommand): Promise<Descuento> {
    return this.descuentoModel.findOneAndDelete({ codigo: command.codigo }).exec();
  }
}
