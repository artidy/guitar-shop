import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { fillEntity, mongodbConfig } from '@guitar-shop/core';
import { InitialUser, User, UserRole } from '@guitar-shop/shared-types';

import { AuthUserRepository } from './auth-user.repository';
import { AuthUserEntity } from './auth-user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authUserRepository: AuthUserRepository,
    private readonly jwtService: JwtService,
    @Inject(mongodbConfig.KEY)
    private readonly mongoConfig: ConfigType<typeof mongodbConfig>,
  ) {}

  public async checkUser(dto: LoginUserDto) {
    const existUser: User = await this.authUserRepository.findByEmail(dto.email);

    if (!existUser) {
      throw new UnauthorizedException('Пользователя не существует');
    }

    const userEntity = new AuthUserEntity(existUser);

    if (! await userEntity.comparePassword(dto.password)) {
      throw new UnauthorizedException('Неверный пароль пользователя');
    }

    return userEntity.toObject();
  }

  public async login(user: User) {
    const payload = {
      sub: user._id,
      email: user.email,
      role: user.role,
      name: user.name
    }

    return {
      access_token: await this.jwtService.signAsync(payload, { }),
    };
  }

  public async register(dto: CreateUserDto) {
    const existUser = await this.authUserRepository.findByEmail(dto.email);

    if (existUser) {
      throw new Error('Пользователь уже существует');
    }

    const user: User = new InitialUser();
    const usersCount = await this.authUserRepository.getCount();

    if (usersCount === 0) {
      user.role = UserRole.Admin;
    }

    fillEntity<CreateUserDto, User>(dto, user);

    const userEntity = new AuthUserEntity(user);
    await userEntity.setPassword(dto.password);

    return this.authUserRepository.create(userEntity);
  }

  public async update(id: string, dto: UpdateUserDto) {
    const existUser: User = await this.authUserRepository.findById(id);

    if (!existUser) {
      throw new Error('Пользователя не существует');
    }

    const user: User = {
      ...existUser,
    }

    fillEntity<UpdateUserDto, User>(dto, user);

    const userEntity = new AuthUserEntity(user);

    if (dto.password) {
      await userEntity.setPassword(dto.password);
    }

    return this.authUserRepository.update(id, userEntity);
  }

  public async delete(id: string) {
    return this.authUserRepository.destroy(id);
  }

  public async getUserById(id: string) {
    return this.authUserRepository.findById(id);
  }

  public async getUserByEmail(email: string) {
    return this.authUserRepository.findByEmail(email);
  }
}
