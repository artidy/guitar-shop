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
  Products = '/products',
  Edit = '/edit',
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
const IMAGE_FOLDER = process.env.NX_IMAGE_URL;

export {
  AuthorizationStatus,
  NameSpace,
  AppRoute,
  BffPaths,
  DEFAULT_REQUEST_TIMEOUT,
  TOKEN,
  IMAGE_FOLDER
}
