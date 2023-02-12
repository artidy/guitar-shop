import { Entity } from '@guitar-shop/core';
import { Order, OrderList } from '@guitar-shop/shared-types';

export class OrderEntity implements Entity<Order>, Order {
  id: number;
  userId: string;
  createdAt: Date;
  orderList: OrderList[];

  constructor(order: Order) {
    this.fillEntity(order);
  }

  fillEntity(entity: Order) {
    this.id = entity.id;
    this.userId = entity.userId;
    this.orderList = entity.orderList;
  }

  toObject(): Order {
    return { ...this };
  }
}
