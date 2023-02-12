import { Entity } from '@guitar-shop/core';
import { Comment } from '@guitar-shop/shared-types';

export class CommentEntity implements Entity<Comment>, Comment {
  id: number;
  userId: string;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
  productId: number;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  fillEntity(entity: Comment) {
    this.id = entity.id;
    this.userId = entity.userId;
    this.advantages = entity.advantages;
    this.disadvantages = entity.disadvantages;
    this.text = entity.text;
    this.rating = entity.rating;
    this.productId = entity.productId;
  }

  toObject(): Comment {
    return { ...this };
  }
}
