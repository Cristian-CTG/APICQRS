// src/descuento/handlers/get-descuento.handler.ts
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDescuentoQuery } from '../queries/get-descuento.query';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Descuento } from '../schemas/descuento.schema';

@QueryHandler(GetDescuentoQuery)
export class GetDescuentoHandler implements IQueryHandler<GetDescuentoQuery> {
  constructor(@InjectModel(Descuento.name) private readonly descuentoModel: Model<Descuento>) {}

  async execute(query: GetDescuentoQuery): Promise<Descuento> {
    return this.descuentoModel.findOne({ codigo: query.codigo }).exec();
  }
}
