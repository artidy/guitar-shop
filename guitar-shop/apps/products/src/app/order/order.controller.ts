import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Auth, fillObject, UrlPaths, User } from '@guitar-shop/core';
import { AuthUser, OrderList, UserRole } from '@guitar-shop/shared-types';

import { OrderService } from './order.service';
import { OrderRdo } from './rdo/order.rdo';
import { CreateOrderDto } from './dto/create-order.dto';
import { GuitarService } from '../guitar/guitar.service';

@ApiTags(UrlPaths.Order)
@Controller(UrlPaths.Order)
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly guitarService: GuitarService
  ) {}

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
  public async create(@Body() dto: CreateOrderDto[], @User() user: AuthUser) {
    const productsIds = dto.map((element) => element.productId);
    const products = await this.guitarService.findByIds(productsIds);

    const orderList: OrderList[] = dto.map((element) => {
      const currentProduct = products.find((product) => product.id === element.productId);

      return {
        productId: element.productId,
        price: currentProduct.price,
        count: element.count,
        sum: currentProduct.price * element.count
      }
    })
    const order = await this.orderService.create(orderList, user.id);

    return fillObject(OrderRdo, order);
  }

  @ApiResponse({
    status: HttpStatus.OK, description: 'Данные успешно обновлены'
  })
  @Auth(UserRole.Admin)
  @Patch('/:id')
  public async update(@Param('id') id: number, @Body() dto: CreateOrderDto) {
    const order = await this.orderService.update(id, [], '');

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
