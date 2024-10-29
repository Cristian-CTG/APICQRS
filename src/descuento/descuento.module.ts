// src/descuento/descuento.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CqrsModule } from '@nestjs/cqrs';
import { DescuentoController } from './descuento.controller';
import { CreateDescuentoHandler } from './handlers/create-descuento.handler';
import { GetDescuentoHandler } from './handlers/get-descuento.handler';
import { UpdateDescuentoHandler } from './handlers/update-descuento.handler';
import { DeleteDescuentoHandler } from './handlers/delete-descuento.handler';
import { GetAllDescuentosHandler } from './handlers/get-all-descuentos.handler';
import { Descuento, DescuentoSchema } from './schemas/descuento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Descuento.name, schema: DescuentoSchema }]),
    CqrsModule,
  ],
  controllers: [DescuentoController],
  providers: [
    CreateDescuentoHandler,
    GetDescuentoHandler,
    UpdateDescuentoHandler,
    DeleteDescuentoHandler,
    GetAllDescuentosHandler,
  ],
})
export class DescuentoModule {}
