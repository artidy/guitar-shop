import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    example: 'Андрей'
  })
  @IsString()
  @IsOptional()
  public name?: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: false,
    example: '123456789'
  })
  @IsString()
  @IsOptional()
  public password?: string;
}
