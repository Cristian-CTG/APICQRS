// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DescuentoModule } from './descuento/descuento.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mi_basedatos'), // Cambia al URI de tu base de datos
    DescuentoModule,
  ],
})
export class AppModule {}
