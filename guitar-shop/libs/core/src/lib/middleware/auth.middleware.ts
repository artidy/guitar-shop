import { Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { ExtendedRequest } from '@guitar-shop/shared-types';

export function auth (httpService: HttpService, configService: ConfigService) {
  return async function (req: ExtendedRequest, res: Response, next: NextFunction)
  {
    if (req.user) {
      req.user = undefined;
    }

    try {
      const {data: user} = await firstValueFrom(
        httpService.get(
          configService.get<string>('auth.url') ?? '',
          {headers: req.headers}
        )
      )

      req.user = user;
    } catch {}

    next();
  }
}
