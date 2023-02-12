import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.serviceAddress = this.configService.get<string>('bff.usersUrl');
  }

  public async register(user, headers) {
    const registerPath = 'auth/register';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${registerPath}`,
        user,
        {headers}
      )
    )

    return data;
  }

  public async login(user, headers) {
    const loginPath = 'auth/login';

    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${loginPath}`,
        user,
        {headers}
      )
    )

    return data;
  }

  public async getAll(headers) {
    const path = 'auth/all';

    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${path}`,
        {headers}
      )
    )

    return data;
  }
}
