// src/descuento/dto/create-descuento.dto.ts
export class CreateDescuentoDto {
    codigo: string;
    password: string;
    email: string;
    nombreDescuento: string;
    porcentaje: number;
    fechaExpiracion: Date;
    aplicableA: string;
    estado: string;
    codigoPromocional: string;
    limiteUso: number;
  }
  