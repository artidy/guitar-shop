import { Expose } from 'class-transformer';
import { Product } from '@guitar-shop/shared-types';

export class GuitarRdo implements Product {
  @Expose()
  public id: number;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public previewPath: string;

  @Expose()
  public type: string;

  @Expose()
  public article: string;

  @Expose()
  public stringCount: number;

  @Expose()
  public rating: number;

  @Expose()
  public price: number;

  @Expose()
  public reviewCount: number;
}
