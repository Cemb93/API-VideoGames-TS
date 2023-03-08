import { Action } from "@/interface/Actions";
import { InitialState } from "@/types";
import { ActionsTypes } from "./Action-Types";

const initialState: InitialState = {
  allGames: [],
  copyAllGames: [],
}

export const Reducer = (state: InitialState = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionsTypes.GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      }
    default: return state;
  }
}