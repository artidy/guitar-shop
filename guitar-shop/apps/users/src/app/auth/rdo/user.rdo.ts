import { Expose, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { UserRole } from '@guitar-shop/shared-types';

export class UserRdo {
  @ApiProperty({
    description: 'Уникальный идентификатор пользоателя',
    example: '1'
  })
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'E-mail пользователя',
    example: 'user@email.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Имя пользователя',
    example: 'Андрей'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Роль пользователя',
    required: true,
    example: UserRole.User
  })
  @Expose()
  public role: UserRole;
}
