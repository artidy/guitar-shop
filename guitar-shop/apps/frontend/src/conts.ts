enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum NameSpace {
  User = 'USER',
  Products = 'PRODUCTS',
  Orders = 'ORDERS',
}

enum AppRoute {
  Main = '/',
  Login = '/login',
  Product = '/product',
  Register = '/register',
  Cart = '/cart',
  Orders = '/orders',
  NotFound = '*',
}

enum BffPaths {
  Users = 'users',
  Products = 'products',
  Comments = 'comments',
  Orders = 'orders'
}

const DEFAULT_REQUEST_TIMEOUT = 5000;
const TOKEN = 'gs-token';

export {
  AuthorizationStatus,
  NameSpace,
  AppRoute,
  BffPaths,
  DEFAULT_REQUEST_TIMEOUT,
  TOKEN
}
