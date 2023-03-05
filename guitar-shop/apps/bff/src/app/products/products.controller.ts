import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Headers, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { BffPaths } from '@guitar-shop/core';

import { ProductsService } from './products.service';

@ApiTags(BffPaths.Products)
@Controller(BffPaths.Products)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@Headers() headers) {
    return this.productsService.getAll(headers);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: number, @Headers() headers) {
    return this.productsService.getById(id, headers);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() product, @Headers() headers) {
    return this.productsService.create(product, headers);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() product, @Headers() headers) {
    return this.productsService.update(id, product, headers);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number, @Headers() headers) {
    await this.productsService.delete(id, headers);
  }
}
