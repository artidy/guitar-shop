import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Auth, fillObject } from '@guitar-shop/core';

import { OrderService } from './order.service';
import { OrderRdo } from './rdo/order.rdo';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserRole } from '@guitar-shop/shared-types';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Auth()
  @Get('/')
  public async index() {
    const orders = await this.orderService.findAll();

    return fillObject(OrderRdo, orders);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно получены'
  })
  @Auth(UserRole.Admin)
  @Get('/:id')
  public async show(@Param('id') id: number) {
    const order = await this.orderService.findById(id);

    return fillObject(OrderRdo, order);
  }

  @ApiResponse({
    status: HttpStatus.CREATED, description: 'Данные успешно добавлены'
  })
  @Auth()
  @Post('/')
  public async create(@Body() dto: CreateOrderDto) {
    const order = await this.orderService.create(dto);

    return fillObject(OrderRdo, order);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Auth(UserRole.Admin)
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() dto: CreateOrderDto) {
    const order = await this.orderService.update(id, dto);

    return fillObject(OrderRdo, order);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT, description: 'Данные успешно удалены'
  })
  @Auth(UserRole.Admin)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: number) {
    return await this.orderService.delete(id);
  }
}