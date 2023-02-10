import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, ValidateNested } from 'class-validator';

class CreateOrderList {
  @ApiProperty({
    description: 'Идентификатор товара',
    required: true,
    example: 4
  })
  @IsNumber()
  productId: number;

  @ApiProperty({
    description: 'Цена товара',
    required: true,
    example: 40000
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Количество товара',
    required: true,
    example: 2
  })
  @IsNumber()
  count: number;

  @ApiProperty({
    description: 'Сумма товара',
    required: true,
    example: 80000
  })
  @IsNumber()
  sum: number;
}

export class CreateOrderDto {
  @ApiProperty({
    description: 'Идентификатор пользователя',
    required: true,
    example: '236kgshgskHGhjsd12'
  })
  @IsMongoId()
  userId: string;

  @ApiProperty({
    description: 'Список заказа',
    required: true,
  })
  @ValidateNested()
  orderList: CreateOrderList[];
}
