import { GuitarType } from './product-type.enum';

export interface Product {
  id?: number,
  title: string,
  description: string,
  createdAt: Date,
  previewPath: string,
  type: GuitarType,
  article: string,
  stringCount: number,
  price: number
}
