import { ActionsTypes } from "@/redux/Action-Types";
import {GamesGenres, GenerosApi} from '.';

export interface AllGames {
  type: ActionsTypes.GET_ALL_GAMES
  payload: GamesGenres[]
}

export interface CreateGames {
  type: ActionsTypes.CREATE_GAME
  // payload: GamesGenres
}

export interface GetGenres {
  type: ActionsTypes.GET_GENRES
  payload: GenerosApi[]
}

export type Action = AllGames | CreateGames | GetGenres