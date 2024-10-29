// src/descuento/commands/create-descuento.command.ts
import { CreateDescuentoDto } from '../dto/create-descuento.dto.ts.js';

export class CreateDescuentoCommand {
  constructor(public readonly createDescuentoDto: CreateDescuentoDto) {}
}
