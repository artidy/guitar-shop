import { UserRole } from '@guitar-shop/shared-types';
import { Request } from 'express';

interface LoginUser {
  email: string;
  password: string;
}

interface LoggedUser {
  id: string;
  email: string;
  accessToken: string;
}

interface NewUser {
  email: string;
  name: string;
  password: string;
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

interface ExtendedRequest extends Request {
  user: UserRequest | undefined;
}

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

class InitialUser implements User {
  email;
  name;
  passwordHash;
  role;

  constructor() {
    this.email = '';
    this.name = '';
    this.passwordHash = '';
    this.role = UserRole.User;
  }
}

export {
  User,
  LoginUser,
  LoggedUser,
  NewUser,
  UserRequest,
  ExtendedRequest,
  AuthUser,
  InitialUser
}
