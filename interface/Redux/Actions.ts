import { ActionsTypes } from "@/redux/Action-Types";
import {GamesGenres, GenerosApi} from '../Games/IGames';

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

export interface GetGenres {
  type: ActionsTypes.GET_GENRES
  payload: GenerosApi[]
}

export interface DeleteGame {
  type: ActionsTypes.DELETE_GAME
  payload: string
}

export interface FilterCreated {
  type: ActionsTypes.FILTER_BY_CREATED
  payload: string
}

export interface FilterGenres {
  type: ActionsTypes.FILTER_BY_GENRES
  payload: string
}

export interface OrderName {
  type: ActionsTypes.ORDER_BY_NAME
  payload: string
}

export interface OrderRating {
  type: ActionsTypes.ORDER_BY_RATING
  payload: string
}

export type Action = AllGames | GetNames | DetailGame | GetGenres | DeleteGame | FilterCreated | FilterGenres | OrderName | OrderRating