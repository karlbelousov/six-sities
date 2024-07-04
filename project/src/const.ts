export enum AppRoute {
  Main = '/',
  login = '/login',
  Favorites = '/favorites',
  Room = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  noAuth = 'NO_AUTH',
  unknown = 'UNKNOW'
}

export const STARS_COUNT = 5;

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
