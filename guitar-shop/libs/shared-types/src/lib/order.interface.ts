export interface Order {
  id?: number;
  userId: string;
  createdAt?: Date;
  orderList: OrderList[];
}

export interface OrderList {
  id?: number;
  orderId?: number;
  productId: number;
  price: number;
  count: number;
  sum: number;
  createdAt?: Date;
}
