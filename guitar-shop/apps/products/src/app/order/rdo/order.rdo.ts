import { Expose } from 'class-transformer';

class OrderList {
  @Expose()
  public id: string;

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

export class OrderRdo {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public orderList: OrderList[];
}
