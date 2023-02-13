import { Expose } from 'class-transformer';
import { CommentUser, ProductComment } from '@guitar-shop/shared-types';

class CommentUserRdo implements CommentUser {
  @Expose()
  id: string;

  @Expose()
  name: string;
}

export class CommentRdo implements ProductComment {
  @Expose()
  public id: number;

  @Expose()
  public user: CommentUserRdo;

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
