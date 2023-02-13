enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum NameSpace {
  User = 'USER',
}

const DEFAULT_REQUEST_TIMEOUT = 5000;
const TOKEN = 'gs-token';

export {
  AuthorizationStatus,
  NameSpace,
  DEFAULT_REQUEST_TIMEOUT,
  TOKEN
}
