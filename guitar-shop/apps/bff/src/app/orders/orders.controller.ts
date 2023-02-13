import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Headers, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { BffPaths } from '@guitar-shop/core';

import { OrdersService } from './orders.service';

@ApiTags(BffPaths.Orders)
@Controller(BffPaths.Orders)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/')
  public async index(@Headers() headers) {
    return this.ordersService.getAll(headers);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Get('/:id')
  public async show(@Param('id') id: number, @Headers() headers) {
    return this.ordersService.getById(id, headers);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Post('/')
  public async create(@Body() order, @Headers() headers) {
    return this.ordersService.create(order, headers);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number, @Headers() headers) {
    return this.ordersService.delete(id, headers);
  }
}
