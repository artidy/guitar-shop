import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, Length, Max, Min } from 'class-validator';

export class UpdateCommentDto {
  @ApiProperty({
    description: 'Достоинства',
    required: false,
    example: 'Очень хороший звук'
  })
  @IsOptional()
  @Length(50, 100)
  advantages?: string;

  @ApiProperty({
    description: 'Недостатки',
    required: false,
    example: 'Сложно настраивать'
  })
  @IsOptional()
  @Length(50, 100)
  disadvantages?: string;

  @ApiProperty({
    description: 'Текст сообщения',
    required: false,
    example: "Всем советую присмотреться к товару"
  })
  @IsOptional()
  @Length(5, 1024)
  text?: string;

  @ApiProperty({
    description: 'Рейтинг',
    required: false,
    example: 3
  })
  @IsOptional()
  @Min(1)
  @Max(5)
  rating?: number;
}
