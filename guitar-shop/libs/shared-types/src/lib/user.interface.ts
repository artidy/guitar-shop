import { UserRole } from '@guitar-shop/shared-types';

interface User {
  _id?: string;
  email: string;
  name: string;
  role: UserRole;
  passwordHash: string;
}

class InitialUser implements User {
  email: '';
  name: '';
  passwordHash: '';
  role: UserRole.User;
}

export {
  User,
  InitialUser
}
