import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public userId: string;

  @Expose()
  public advantages: string;

  @Expose()
  public disadvantages: string;

  @Expose()
  public text: string;

  @Expose()
  public rating: number;

  @Expose()
  public createdAt: Date;
}
