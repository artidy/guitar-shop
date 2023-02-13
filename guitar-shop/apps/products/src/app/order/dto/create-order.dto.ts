import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateOrderProduct } from '@guitar-shop/shared-types';

export class CreateOrderDto implements CreateOrderProduct {
  @ApiProperty({
    description: 'Идентификатор товара',
    required: true,
    example: 4
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    description: 'Количество товара',
    required: true,
    example: 2
  })
  @IsNumber()
  count: number;
}
