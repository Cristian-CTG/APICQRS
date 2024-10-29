// src/descuento/commands/update-descuento.command.ts
import { CreateDescuentoDto } from '../dto/create-descuento.dto.ts';

export class UpdateDescuentoCommand {
  constructor(
    public readonly codigo: string,
    public readonly updateDescuentoDto: CreateDescuentoDto,
  ) {}
}
