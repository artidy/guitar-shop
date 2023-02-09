import { Entity } from '@guitar-shop/core';
import { GuitarType, Product } from '@guitar-shop/shared-types';

export class GuitarEntity implements Entity<Product>, Product {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  previewPath: string;
  type: string;
  article: string;
  stringCount: number;
  price: number;

  constructor(product: Product) {
    this.fillEntity(product);
  }

  fillEntity(entity: Product) {
    this.id = entity.id;
    this.title = entity.title;
    this.description = entity.description;
    this.previewPath = entity.previewPath;
    this.type = entity.type;
    this.article = entity.article;
    this.stringCount = entity.stringCount;
    this.price = entity.price;
  }

  toObject(): Product {
    return { ...this };
  }
}
