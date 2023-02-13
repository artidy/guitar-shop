import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { UrlPaths } from '@guitar-shop/core';

@Injectable()
export class CommentsService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.serviceAddress = this.configService.get<string>('bff.productsUrl');
  }

  public async getAll(id: number, headers) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Comment}/${UrlPaths.Guitar}/${id}`,
        {headers}
      )
    )

    return data;
  }

  public async create(comment, headers) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.serviceAddress}/${UrlPaths.Comment}`,
        comment,
        {headers}
      )
    )

    return data;
  }
}
