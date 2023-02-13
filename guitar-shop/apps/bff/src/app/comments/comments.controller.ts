import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Headers, HttpStatus, Post } from '@nestjs/common';
import { BffPaths } from '@guitar-shop/core';

import { CommentsService } from './comments.service';

@ApiTags(BffPaths.Comments)
@Controller(BffPaths.Comments)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@Headers() headers) {
    return this.commentsService.getAll(headers);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() comment, @Headers() headers) {
    return this.commentsService.create(comment, headers);
  }
}
