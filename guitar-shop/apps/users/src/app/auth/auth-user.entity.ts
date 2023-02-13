import {compare, genSalt, hash} from 'bcrypt';
import {User, UserRole} from '@guitar-shop/shared-types';

import { SALT_ROUNDS } from '../app.constant';

export class AuthUserEntity implements User {
  public _id: string;
  public email: string;
  public name: string;
  public passwordHash: string;
  public role: UserRole;

  constructor(user: User) {
    this.fillEntity(user);
  }

  public toObject() {
    return {...this};
  }

  public async setPassword(password: string): Promise<AuthUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);

    this.passwordHash = await hash(password, salt);

    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(user: User): void {
    this._id = user._id;
    this.email = user.email;
    this.name = user.name;
    this.passwordHash = user.passwordHash;
    this.role = user.role;
  }
}
