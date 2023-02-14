import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { ServeStaticModule } from '@nestjs/serve-static';
import { authConfig } from '@guitar-shop/core';

import { ASSETS_DIRECTORY, ENV_FILE_PATH } from './app.constant';
import { validateEnvironments } from './env.validation';
import { PrismaModule } from './prisma/prisma.module';
import { GuitarModule } from './guitar/guitar.module';
import { CommentModule } from './comment/comment.module';
import { OrderModule } from './order/order.module';
import { getHttpOptions, httpConfig } from '../config/http.config';
import { getFullPathDirectory } from './helpers';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [httpConfig, authConfig],
      validate: validateEnvironments,
    }),
    ServeStaticModule.forRoot({
      rootPath: getFullPathDirectory(''),
      serveRoot: `/${ASSETS_DIRECTORY}/`,
      exclude: ['/api*'],
    }),
    HttpModule.registerAsync(getHttpOptions()),
    PrismaModule,
    GuitarModule,
    CommentModule,
    OrderModule
  ]
})
export class AppModule {}
