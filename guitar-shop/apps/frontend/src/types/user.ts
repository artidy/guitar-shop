export enum UserRole {
  User = 'user',
  Admin = 'admin'
}

export type CommentUser = {
  id: string;
  name: string;
}

export type User = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export type LoginUser = {
  email: string;
  password: string;
}

export type LoggedUser = {
  id: string;
  email: string;
  accessToken: string;
}

export type CreateUser = {
  email: string;
  name: string;
  password: string;
}
