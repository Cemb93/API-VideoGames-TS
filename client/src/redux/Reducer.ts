// import { Action } from "@/interface/Actions";
import { InitialState } from "@/types";
import { Action } from "../../../interface/Actions";
import { ActionsTypes } from "./Action-Types";

const initialState: InitialState = {
  allGames: [],
  copyAllGames: [],
  genres: [],
}

export const Reducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionsTypes.GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      }
    case ActionsTypes.CREATE_GAME:
      return {
        ...state,
      }
    case ActionsTypes.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      }
    default: return state;
  }
}