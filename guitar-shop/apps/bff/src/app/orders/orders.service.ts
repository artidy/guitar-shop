import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { UrlPaths } from '@guitar-shop/core';

@Injectable()
export class OrdersService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.serviceAddress = this.configService.get<string>('bff.productsUrl');
  }

  public async create(order, headers) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${UrlPaths.Order}`,
        order,
        {headers}
      )
    )

    return data;
  }

  public async getById(id, headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Order}/${id}`,
        {headers}
      )
    )

    return data;
  }

  public async getAll(headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Order}`,
        {headers}
      )
    )

    return data;
  }

  public async delete(id, headers) {
    const { data } = await firstValueFrom(
      this.httpService.delete(
        `${this.serviceAddress}/${UrlPaths.Order}/${id}`,
        {headers}
      )
    )

    return data;
  }
}
