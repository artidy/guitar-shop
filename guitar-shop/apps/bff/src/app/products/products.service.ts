import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { UrlPaths } from '@guitar-shop/core';

@Injectable()
export class ProductsService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.serviceAddress = this.configService.get<string>('bff.productsUrl');
  }

  public async getAll(headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Guitar}`,
        {headers}
      )
    )

    return data;
  }

  public async getById(id, headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Guitar}/${id}`,
        {headers}
      )
    )

    return data;
  }

  public async create(product, headers) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${UrlPaths.Guitar}`,
        product,
        {headers}
      )
    )

    return data;
  }

  public async update(id, product, headers) {
    const { data } = await firstValueFrom(
      this.httpService.patch(
        `${this.serviceAddress}/${UrlPaths.Guitar}/${id}`,
        product,
        {headers}
      )
    )

    return data;
  }

  public async delete(id, headers) {
    return await firstValueFrom(
      this.httpService.delete(
        `${this.serviceAddress}/${UrlPaths.Guitar}/${id}`,
        {headers}
      )
    )
  }
}
