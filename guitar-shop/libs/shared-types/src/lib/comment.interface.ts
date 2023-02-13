export interface Comment {
  id?: number;
  userId: string;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
  productId: number;
}

export interface CreateComment {
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  productId: number;
}

export interface CommentUser {
  id: string;
  name: string;
}

export interface ProductComment {
  id: number;
  user: CommentUser;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
}
