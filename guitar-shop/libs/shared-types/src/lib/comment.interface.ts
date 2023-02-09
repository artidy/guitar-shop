export interface Comment {
  id?: number,
  userId: string,
  advantages: string,
  disadvantages: string,
  text: string,
  rating: number,
  createdAt: Date,
  productId: number,
}
