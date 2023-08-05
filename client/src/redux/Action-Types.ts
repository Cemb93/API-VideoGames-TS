// SOLUTION process.env --> https://frontend-digest.com/environment-variables-in-next-js-9a272f0bf655

const { BACKEND_URL } = process.env

export enum ActionsTypes {
  GET_ALL_GAMES = 'GET_ALL_GAMES',
  GET_NAME = 'GET_NAME',
  GET_ID = 'GET_ID',
  GET_GENRES = 'GET_GENRES',
  DELETE_GAME = 'DELETE_GAME',
  FILTER_BY_GENRES = 'FILTER_BY_GENRES',
  FILTER_BY_CREATED = 'FILTER_BY_CREATED',
  ORDER_BY_NAME = 'ORDER_BY_NAME',
  ORDER_BY_RATING = 'ORDER_BY_RATING',
}

//* ACA SE REEMPLAZA EL LOCAL POR EL DEPLOY
export enum BACK {
  games = 'http://localhost:3001/videogames',
  // games = 'https://demo-games.onrender.com/videogames',
  genres = 'http://localhost:3001/genres',
  // genres = 'https://demo-games.onrender.com/genres',
}