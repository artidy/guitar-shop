import { Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ExtendedRequest } from '@guitar-shop/shared-types';
import { HttpException } from '@nestjs/common';

export function auth (httpService: HttpService, configService: ConfigService) {
  return async function (req: ExtendedRequest, res: Response, next: NextFunction)
  {
    if (!req.headers?.Authorization) {
      return next();
    }

    if (req.user) {
      req.user = undefined;
    }

    try {
      const {data: user} = await firstValueFrom(
        httpService.get(
          configService.get<string>('auth.url') ?? '',
          {headers: req.headers}
        ).pipe(catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }))
      )

      req.user = user;
    } catch {}

    next();
  }
}
