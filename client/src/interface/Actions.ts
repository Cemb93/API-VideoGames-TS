import { ActionsTypes } from "@/redux/Action-Types";
import {GamesGenres} from '../../../api/src/interface';

export interface AllGames {
  type: ActionsTypes.GET_ALL_GAMES
  payload: GamesGenres[]
}

export type Action = AllGames