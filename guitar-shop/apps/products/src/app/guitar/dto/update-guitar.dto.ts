import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional, Length, Max, Min } from 'class-validator';
import { GUITAR_STRINGS } from '@guitar-shop/core';
import { GuitarType, UpdateProduct } from '@guitar-shop/shared-types';

import { Price } from '../../app.constant';

export class UpdateGuitarDto implements UpdateProduct {
  @ApiProperty({
    description: 'Наименование товара',
    required: false,
    example: 'Электрогитара'
  })
  @IsOptional()
  @Length(10, 100)
  title?: string;

  @ApiProperty({
    description: 'Описание товара',
    required: false,
    example: 'Очень хороший звук'
  })
  @IsOptional()
  @Length(20, 1024)
  description?: string;

  @ApiProperty({
    description: 'Тип гитары',
    required: false,
    example: GuitarType.Electric
  })
  @IsOptional()
  @IsEnum(GuitarType)
  type?: GuitarType;

  @ApiProperty({
    description: 'Артикль',
    required: false,
    example: 'Hjs123klw'
  })
  @IsOptional()
  @Length(5, 40)
  article?: string;

  @ApiProperty({
    description: 'Количество струн',
    required: false,
    example: GUITAR_STRINGS[0]
  })
  @IsOptional()
  @IsIn(GUITAR_STRINGS)
  stringCount?: number;

  @ApiProperty({
    description: 'Цена',
    required: false,
    example: 200000
  })
  @IsOptional()
  @Min(Price.Min)
  @Max(Price.Max)
  price?: number;
}
