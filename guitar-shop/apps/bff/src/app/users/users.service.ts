import { HttpException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { UrlPaths } from '@guitar-shop/core';
import { LoginUser } from '@guitar-shop/shared-types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.serviceAddress = `${this.configService.get<string>('bff.usersUrl')}/${UrlPaths.Auth}`;
  }

  public async checkAuth(headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}`,
        {headers}
      ).pipe(catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }))
    )

    return data;
  }

  public async register(user, headers) {
    const path = 'register';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${path}`,
        user,
        {headers}
      ).pipe(catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }))
    )

    return data;
  }

  public async login(user: LoginUser, headers) {
    const path = 'login';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${path}`,
        user,
        {headers}
      ).pipe(catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }))
    )

    return data;
  }

  public async getAll(headers) {
    const path = 'all';

    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${path}`,
        {headers}
      ).pipe(catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }))
    )

    return data;
  }

  public async getById(id, headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${id}`,
        {headers}
      ).pipe(catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }))
    )

    return data;
  }
}
