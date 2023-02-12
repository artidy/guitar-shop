import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Auth, fillObject } from '@guitar-shop/core';

import { CommentService } from './comment.service';
import { CommentRdo } from './rdo/comment.rdo';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UserRole } from '@guitar-shop/shared-types';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index() {
    const comments = await this.commentService.findAll();

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
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentService.create(dto);

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
