import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Length, Max, Min } from 'class-validator';
import { CreateComment } from '@guitar-shop/shared-types';

export class CreateCommentDto implements CreateComment {
  @ApiProperty({
    description: 'Достоинства',
    required: true,
    example: 'Очень хороший звук'
  })
  @Length(50, 100)
  advantages: string;

  @ApiProperty({
    description: 'Недостатки',
    required: true,
    example: 'Сложно настраивать'
  })
  @Length(50, 100)
  disadvantages: string;

  @ApiProperty({
    description: 'Текст сообщения',
    required: true,
    example: "Всем советую присмотреться к товару"
  })
  @Length(5, 1024)
  text: string;

  @ApiProperty({
    description: 'Рейтинг',
    required: true,
    example: 3
  })
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    description: 'Идентификатор товара',
    required: true,
    example: 4
  })
  @IsNumber()
  productId: number;
}
