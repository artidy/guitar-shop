import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { UrlPaths } from '@guitar-shop/core';

import { UsersService } from '../users/users.service';

@Injectable()
export class CommentsService {
  private readonly serviceAddress: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    this.serviceAddress = this.configService.get<string>('bff.productsUrl');
  }

  public async getAll(headers) {
    const users = await this.usersService.getAll(headers);

    const { data: comments } = await firstValueFrom(
      this.httpService.get(
        `${this.serviceAddress}/${UrlPaths.Comment}`,
        {headers}
      )
    )

    return comments.map((comment) => {
      const user = users.find((user) => comment.userId === user.id);

      return {
        id: comment.id,
        user: {
          id: user.id,
          name: user.name,
        },
        advantages: comment.advantages,
        disadvantages: comment.disadvantages,
        text: comment.text,
        rating: comment.rating,
        createdAt: comment.createdAt,
      }
    });
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
