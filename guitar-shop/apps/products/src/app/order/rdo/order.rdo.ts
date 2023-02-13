import { Expose } from 'class-transformer';
import { Order, OrderList } from '@guitar-shop/shared-types';

class OrderListRdo implements OrderList {
  @Expose()
  public id: number;

  @Expose()
  public productId: number;

  @Expose()
  public price: number;

  @Expose()
  public count: number;

  @Expose()
  public sum: number;

  @Expose()
  public createdAt: Date;
}

export class OrderRdo implements Order {
  @Expose()
  public id: number;

  @Expose()
  public userId: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public orderList: OrderListRdo[];
}
