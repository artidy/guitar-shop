import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post, Headers, Get } from '@nestjs/common';
import { BffPaths } from '@guitar-shop/core';
import { LoginUser } from '@guitar-shop/shared-types';

import { UsersService } from './users.service';

@ApiTags(BffPaths.Users)
@Controller(BffPaths.Users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно получили данные'
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  public async checkAuth(@Headers() headers) {
    return this.usersService.checkAuth(headers);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно авторизовались'
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() user: LoginUser, @Headers() headers) {
    return this.usersService.login(user, headers);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() user, @Headers() headers) {
    return this.usersService.register(user, headers);
  }
}
