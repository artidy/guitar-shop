export interface Product {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  previewPath: string;
  type: string;
  article: string;
  stringCount: number;
  price: number;
}

export interface UpdateProduct {
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  article?: string;
  stringCount?: number;
  price?: number;
}
