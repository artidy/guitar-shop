import { Expose } from 'class-transformer';

export class GuitarRdo {
  @Expose()
  public id: string;

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
