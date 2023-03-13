import { ActionsTypes } from "@/redux/Action-Types";
import {GamesGenres, GenerosApi} from '.';

export interface AllGames {
  type: ActionsTypes.GET_ALL_GAMES
  payload: GamesGenres[]
}

export interface GetNames {
  type: ActionsTypes.GET_NAME
  payload: GamesGenres[]
}

export interface DetailGame {
  type: ActionsTypes.GET_ID
  payload: GamesGenres
}

export interface CreateGame {
  type: ActionsTypes.CREATE_GAME
  // payload: GamesGenres
}

export interface GetGenres {
  type: ActionsTypes.GET_GENRES
  payload: GenerosApi[]
}

export interface DeleteGame {
  type: ActionsTypes.DELETE_GAME
  payload: string | undefined
}

export interface UpDateGame {
  type: ActionsTypes.UPDATE_GAME
  // payload: string | undefined
  payload: { msg: string }
}

export type Action = AllGames | GetNames | DetailGame | CreateGame | GetGenres | DeleteGame | UpDateGame