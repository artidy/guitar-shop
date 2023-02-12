import { Request, Response, NextFunction } from 'express';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

const AUTH_FIELD_NAME = 'user';

export function auth (httpService: HttpService, configService: ConfigService) {
  return async function (req: Request, res: Response, next: NextFunction)
  {
    delete req[AUTH_FIELD_NAME];

    try {
      const {data: user} = await firstValueFrom(
        httpService.get(
          configService.get<string>('auth.url'),
          {headers: req.headers}
        )
      )

      req[AUTH_FIELD_NAME] = user;
    } catch {}

    next();
  }
}
