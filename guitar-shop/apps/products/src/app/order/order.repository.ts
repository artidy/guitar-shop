import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@guitar-shop/core';
import { Order } from '@guitar-shop/shared-types';

import { PrismaService } from '../prisma/prisma.service';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderRepository implements CRUDRepository<OrderEntity, number, Order> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(orderEntity: OrderEntity): Promise<Order> {
    const order = orderEntity.toObject();

    return this.prisma.order.create({ data: {
      userId: order.userId,
      createdAt: null,
      orderList: {
        createMany: { data: order.orderList }
      }
    }, include: { orderList: true }});
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.order.delete({ where: { id }});
  }

  public async findById(id: number): Promise<Order | null> {
    return this.prisma.order.findFirst({ where: { id }, include: { orderList: true } });
  }

  public async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({ include: { orderList: true }});
  }

  public async update(id: number, orderEntity: OrderEntity): Promise<Order> {
    return this.findById(id);
  }
}
