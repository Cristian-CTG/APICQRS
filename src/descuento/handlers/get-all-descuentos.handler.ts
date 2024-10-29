// src/descuento/handlers/get-all-descuentos.handler.ts
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Descuento } from '../schemas/descuento.schema';
import { GetAllDescuentosQuery } from '../queries/get-all-descuentos.query';

@QueryHandler(GetAllDescuentosQuery)
export class GetAllDescuentosHandler implements IQueryHandler<GetAllDescuentosQuery> {
  constructor(@InjectModel(Descuento.name) private readonly descuentoModel: Model<Descuento>) {}

  async execute(query: GetAllDescuentosQuery): Promise<Descuento[]> {
    return this.descuentoModel.find().exec();
  }
}
