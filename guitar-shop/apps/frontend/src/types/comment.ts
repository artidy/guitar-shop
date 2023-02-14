import { CommentUser } from './user';

export type CreateComment = {
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  productId: number;
}

export type Comment = {
  id: number;
  user: CommentUser;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
}
