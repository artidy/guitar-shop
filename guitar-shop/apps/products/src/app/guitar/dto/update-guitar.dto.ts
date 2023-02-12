import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsIn, IsOptional, IsString, Length, Max, Min } from 'class-validator';
import { GuitarType } from '@guitar-shop/shared-types';

import { GUITAR_STRINGS, Price } from '../../app.constant';

export class UpdateGuitarDto {
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
    description: 'Изображение товара',
    required: false,
    example: 'example.png'
  })
  @IsOptional()
  @IsString()
  previewPath?: string;

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
