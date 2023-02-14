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
