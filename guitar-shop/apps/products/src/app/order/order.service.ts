import { Injectable } from '@nestjs/common';
import { Order, OrderList } from '@guitar-shop/shared-types';

import { OrderEntity } from './order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository
  ) {}

  public async create(orderList: OrderList[], userId: string): Promise<Order> {
    return this.orderRepository.create(new OrderEntity({
      userId,
      orderList
    }));
  }

  public async update(id: number, orderList: OrderList[], userId: string): Promise<Order | null> {
    return this.orderRepository.update(id, new OrderEntity({
      userId,
      orderList
    }));
  }

  public async findById(id: number): Promise<Order | null> {
    return this.orderRepository.findById(id);
  }

  public async findAll(): Promise<Order[]> {
    return this.orderRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.orderRepository.destroy(id);
  }
}
