import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Headers, HttpStatus, Param, Post } from '@nestjs/common';
import { BffPaths, fillObject } from '@guitar-shop/core';

import { CommentsService } from './comments.service';
import { UsersService } from '../users/users.service';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateComment } from '@guitar-shop/shared-types';

@ApiTags(BffPaths.Comments)
@Controller(BffPaths.Comments)
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly usersService: UsersService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:productId')
  public async index(@Param('productId') productId: number, @Headers() headers) {
    const users = await this.usersService.getAll(headers);
    const comments = await this.commentsService.getAll(productId, headers);

    const commentsWithUser = comments.map((comment) => {
      comment.user = users.find((user) => user.id === comment.userId)

      return comment;
    });

    return fillObject(CommentRdo, commentsWithUser);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateComment, @Headers() headers) {
    const comment = await this.commentsService.create(dto, headers);

    comment.user = await this.usersService.getById(comment.userId, headers);

    return fillObject(CommentRdo, comment);
  }
}
