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
  EditProduct = '/products/edit',
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

const GUITAR_STRINGS = [4, 6, 7, 12];
const GUITAR_TYPES = [
  {
    id: 'guitar',
    value: 'аккустика',
    title: 'Акустическая гитара'
  },
  {
    id: 'el-guitar',
    value: 'электро',
    title: 'Электрогитара'
  },
  {
    id: 'ukulele',
    value: 'укулеле',
    title: 'Укулеле'
  }
];
const DEFAULT_REQUEST_TIMEOUT = 5000;
const TOKEN = 'gs-token';
const IMAGE_FOLDER = process.env.NX_IMAGE_URL;

export {
  AuthorizationStatus,
  NameSpace,
  AppRoute,
  BffPaths,
  GUITAR_STRINGS,
  GUITAR_TYPES,
  DEFAULT_REQUEST_TIMEOUT,
  TOKEN,
  IMAGE_FOLDER
}
