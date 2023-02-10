import { Injectable } from '@nestjs/common';
import { Order } from '@guitar-shop/shared-types';

import { OrderEntity } from './order.entity';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository
  ) {}

  public async create(dto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.create(new OrderEntity({
      ...dto
    }));
  }

  public async update(id: number, dto: CreateOrderDto): Promise<Order | null> {
    return this.orderRepository.update(id, new OrderEntity({
      ...dto
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
