import { UserRole } from '@guitar-shop/shared-types';

interface LoginUser {
  email: string;
  password: string;
}

interface LoggedUser {
  id: string;
  email: string;
  accessToken: string;
}

interface User {
  _id?: string;
  email: string;
  name: string;
  role: UserRole;
  passwordHash: string;
}

interface UserRequest {
  email: string;
  role: UserRole;
}

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

class InitialUser implements User {
  email: '';
  name: '';
  passwordHash: '';
  role: UserRole.User;
}

export {
  User,
  LoginUser,
  LoggedUser,
  UserRequest,
  AuthUser,
  InitialUser
}
