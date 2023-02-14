import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsString, Length, Max, Min, } from 'class-validator';
import { GUITAR_STRINGS } from '@guitar-shop/core';
import { GuitarType, Product } from '@guitar-shop/shared-types';

import { Price } from '../../app.constant';

export class CreateGuitarDto implements Product {
  @ApiProperty({
    description: 'Наименование товара',
    required: true,
    example: 'Электрогитара'
  })
  @Length(10, 100)
  title: string;

  @ApiProperty({
    description: 'Описание товара',
    required: true,
    example: 'Очень хороший звук'
  })
  @Length(20, 1024)
  description: string;

  @ApiProperty({
    description: 'Изображение товара',
    required: true,
    example: 'example.png'
  })
  @IsString()
  previewPath: string;

  @ApiProperty({
    description: 'Тип гитары',
    required: true,
    example: GuitarType.Electric
  })
  @IsEnum(GuitarType)
  type: GuitarType;

  @ApiProperty({
    description: 'Артикль',
    required: true,
    example: 'Hjs123klw'
  })
  @Length(5, 40)
  article: string;

  @ApiProperty({
    description: 'Количество струн',
    required: true,
    example: GUITAR_STRINGS[0]
  })
  @IsIn(GUITAR_STRINGS)
  stringCount: number;

  @ApiProperty({
    description: 'Цена',
    required: true,
    example: 200000
  })
  @Min(Price.Min)
  @Max(Price.Max)
  price: number;
}
