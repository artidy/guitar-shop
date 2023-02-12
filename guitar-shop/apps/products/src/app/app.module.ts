import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { PrismaModule } from './prisma/prisma.module';
import { GuitarModule } from './guitar/guitar.module';
import { CommentModule } from './comment/comment.module';
import { OrderModule } from './order/order.module';
import { getHttpConfig } from '../config/http.config';
import { authConfig } from '@guitar-shop/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [authConfig],
      validate: validateEnvironments,
    }),
    HttpModule.registerAsync(getHttpConfig()),
    PrismaModule,
    GuitarModule,
    CommentModule,
    OrderModule
  ]
})
export class AppModule {}
