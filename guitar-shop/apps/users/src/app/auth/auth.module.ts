import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthUserModel, AuthUserSchema } from './auth-user.model';
import { getJwtOptions } from '../../config/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUserRepository } from './auth-user.repository';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtOptions
    }),
    MongooseModule.forFeature([
      { name: AuthUserModel.name, schema: AuthUserSchema }
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthUserRepository, JwtStrategy],
})
export class AuthModule {}
