import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Auth, fillObject, UrlPaths, User } from '@guitar-shop/core';
import { AuthUser, UserRole } from '@guitar-shop/shared-types';

import { CommentService } from './comment.service';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@ApiTags(UrlPaths.Comment)
@Controller(UrlPaths.Comment)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get(`/${UrlPaths.Guitar}/:id`)
  public async index(@Param('id') id: number) {
    const comments = await this.commentService.findAll(id);

    return fillObject(CommentRdo, comments);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: number) {
    const comment = await this.commentService.findById(id);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Auth()
  @Post('/')
  public async create(@Body() dto: CreateCommentDto, @User() user: AuthUser) {
    const comment = await this.commentService.create(dto, user.id);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Auth(UserRole.Admin)
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() dto: UpdateCommentDto) {
    const comment = await this.commentService.update(id, dto);

    return fillObject(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Auth(UserRole.Admin)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number) {
    return await this.commentService.delete(id);
  }
}
