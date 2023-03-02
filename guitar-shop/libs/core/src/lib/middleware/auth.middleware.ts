import { Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ExtendedRequest } from '@guitar-shop/shared-types';
import { HttpException } from '@nestjs/common';

export function auth (httpService: HttpService, configService: ConfigService) {
  return async function (req: ExtendedRequest, res: Response, next: NextFunction)
  {
    const authorization = req.headers?.authorization ?? req.headers?.Authorization;

    if (!authorization) {
      return next();
    }

    if (req.user) {
      req.user = undefined;
    }

    const authUrl = configService.get<string>('auth.url') ?? '';

    try {
      const {data: user} = await firstValueFrom(
        httpService.get(
          authUrl,
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": authorization
            }
          }
        ).pipe(catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }))
      )

      req.user = user;
    } catch {}

    next();
  }
}
