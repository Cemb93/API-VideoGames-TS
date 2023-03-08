import { Action } from "@/interface/Actions";
import { Dispatch } from "react";
import { ActionsTypes, BACK } from "./Action-Types"

export const getAllGames = () => async (dispatch: Dispatch<Action>): Promise<void> => {
  try {
    const data = await fetch(BACK.games).then((res: any) => res.json());
    dispatch({
      type: ActionsTypes.GET_ALL_GAMES,
      payload: data,
    })
  } catch (error) {
    console.log('Error en getAllGames por:', error)
  }
}