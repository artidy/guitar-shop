import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoDbOptions, mongodbConfig } from '@guitar-shop/core';

import { AuthModule } from './auth/auth.module';
import { ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { jwtConfig } from '../config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [mongodbConfig, jwtConfig],
      validate: validateEnvironments,
    }),
    MongooseModule.forRootAsync(
      getMongoDbOptions()
    ),
    AuthModule
  ]
})
export class AppModule {}
