// src/descuento/schemas/descuento.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Descuento extends Document {
  @Prop({ required: true, unique: true })
  codigo: string;

  @Prop()
  password: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  nombreDescuento: string;

  @Prop({ type: Number })
  porcentaje: number;

  @Prop()
  fechaExpiracion: Date;

  @Prop()
  aplicableA: string;

  @Prop()
  estado: string;

  @Prop()
  codigoPromocional: string;

  @Prop({ type: Number })
  limiteUso: number;
}

export const DescuentoSchema = SchemaFactory.createForClass(Descuento);
