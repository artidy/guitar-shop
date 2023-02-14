export type Order = {
  id?: number;
  userId: string;
  createdAt?: Date;
  orderList: OrderList[];
}

export type OrderList = {
  id?: number;
  orderId?: number;
  productId: number;
  price: number;
  count: number;
  sum: number;
  createdAt?: Date;
}

export type CreateOrderProduct = {
  productId: number;
  count: number;
}
