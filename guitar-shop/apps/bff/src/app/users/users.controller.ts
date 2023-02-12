import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpCode, HttpStatus, Post, Headers, Get } from '@nestjs/common';

import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно авторизовались'
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() user, @Headers() headers) {
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

  @ApiResponse({
    status: HttpStatus.OK, description: 'Успешно получили данные'
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  public async index(@Headers() headers) {
    return this.usersService.getAll(headers);
  }
}
