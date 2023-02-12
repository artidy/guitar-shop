import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard, fillObject, User } from '@guitar-shop/core';
import { AuthUser } from '@guitar-shop/shared-types';

import { GuitarService } from './guitar.service';
import { GuitarRdo } from './rdo/guitar.rdo';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';

@ApiTags('guitar')
@Controller('guitar')
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@User() user: AuthUser) {
    const guitars = await this.guitarService.findAll();

    return fillObject(GuitarRdo, guitars);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: number) {
    const guitar = await this.guitarService.findById(id);

    return fillObject(GuitarRdo, guitar);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() dto: CreateGuitarDto) {
    const guitar = await this.guitarService.create(dto);

    return fillObject(GuitarRdo, guitar);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() dto: UpdateGuitarDto) {
    const guitar = await this.guitarService.update(id, dto);

    return fillObject(GuitarRdo, guitar);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number) {
    return await this.guitarService.delete(id);
  }
}
