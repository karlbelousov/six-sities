export enum AppRoute {
  Main = '/',
  login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  noAuth = 'NO_AUTH',
  unknown = 'UNKNOW'
}
