export enum ActionsTypes {
  GET_ALL_GAMES = 'GET_ALL_GAMES',
  GET_NAME = 'GET_NAME',
  GET_ID = 'GET_ID',
  CREATE_GAME = 'CREATE_GAME',
  GET_GENRES = 'GET_GENRES',
  DELETE_GAME = 'DELETE_GAME',
  UPDATE_GAME = 'UPDATE_GAME',
  FILTER_BY_CREATED = 'FILTER_BY_CREATED',
  FILTER_BY_GENRES = 'FILTER_BY_GENRES',
  ORDER_BY_NAME = 'ORDER_BY_NAME',
  ORDER_BY_RATING = 'ORDER_BY_RATING',
}

export enum BACK {
  games = 'http://localhost:3001/videogames',
  genres = 'http://localhost:3001/genres',
}
