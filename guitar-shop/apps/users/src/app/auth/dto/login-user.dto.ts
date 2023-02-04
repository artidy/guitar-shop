import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

import { EMAIL_FORMAT_NOT_VALID } from '../../app.constant';

export class LoginUserDto {
  @ApiProperty({
    description: 'Уникальный email пользователя',
    required: true,
    example: 'example@mail.com'
  })
  @IsEmail(
    {},
    {
      message: EMAIL_FORMAT_NOT_VALID
    })
  public email: string;

  @ApiProperty({
    description: 'Пароль пользователя',
    required: true,
    example: '123456789'
  })
  @IsString()
  public password: string;
}
