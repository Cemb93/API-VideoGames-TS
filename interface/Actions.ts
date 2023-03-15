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

export interface GetGenres {
  type: ActionsTypes.GET_GENRES
  payload: GenerosApi[]
}

export interface DeleteGame {
  type: ActionsTypes.DELETE_GAME
  payload: string
}

export interface FilterByCreated {
  type: ActionsTypes.FILTER_BY_CREATED
  payload: string
}

export interface FilterByGenres {
  type: ActionsTypes.FILTER_BY_GENRES
  payload: string
}

export type Action = AllGames | GetNames | DetailGame | GetGenres | DeleteGame | FilterByCreated | FilterByGenres