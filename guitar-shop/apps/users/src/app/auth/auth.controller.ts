import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject, UrlPaths, User } from '@guitar-shop/core';
import { MongoidValidationPipe } from '@guitar-shop/core';
import { UserRequest } from '@guitar-shop/shared-types';

import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRdo } from './rdo/user.rdo';
import { LoggedUserRdo } from './rdo/logged-user.rdo';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags(UrlPaths.Auth)
@Controller(UrlPaths.Auth)
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно получили данные'
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  public async checkAuth(@User() userRequest: UserRequest) {
    const user = await this.authService.getUserByEmail(userRequest.email)

    return fillObject(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно получили данные'
  })
  @Get('all')
  @HttpCode(HttpStatus.OK)
  public async index() {
    const users = await this.authService.getAll();

    return fillObject(UserRdo, users);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно получили данные'
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async getUserById(@Param('id', MongoidValidationPipe) id: string) {
    const user = await this.authService.getUserById(id);

    return fillObject(UserRdo, user);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Вы успешно авторизовались'
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.checkUser(dto);
    const token = await this.authService.login(user);

    return fillObject(LoggedUserRdo, {
      _id: user._id,
      email: user.email,
      accessToken: token.access_token,
    });
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Новый пользователь создан'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateUserDto) {
    const user = this.authService.register(dto);

    return fillObject(UserRdo, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные пользователя успешно обновлены'
  })
  @Put(':id')
  public async put(@Param('id', MongoidValidationPipe) id: string, @Body() dto: UpdateUserDto) {
    const user = this.authService.update(id, dto);

    return fillObject(UserRdo, user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Пользователь успешно удален'
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', MongoidValidationPipe) id: string) {
    return this.authService.delete(id);
  }
}
