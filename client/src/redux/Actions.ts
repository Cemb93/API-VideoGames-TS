import { Action } from "@/interface/Actions";
import { Dispatch } from "react";
import { ActionsTypes, BACK } from "./Action-Types";

// export const getAllGames = () => async (dispatch: Dispatch<Action>): Promise<void> => {
export const getAllGames =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const data = await fetch(BACK.games).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_ALL_GAMES,
        payload: data,
      });
    } catch (error) {
      console.log("Error en getAllGames por:", error);
    }
  };

// export const createGames = (post: any) => async (dispatch: Dispatch<Action>): Promise<void>  => {
export const createGames =
  (post: any) => async (dispatch: Dispatch<Action>) => {
    console.log('POST:', post)
    try {
      const data = await fetch(BACK.games, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((res: any) => {
          console.log('RES:', res);
          res.json();
        })
        .then((data: any) => console.log('DATA:',data))
        .catch((error: string) => console.log('ERROR:',error))
      console.log(data); //! PENDIENTE
      dispatch({
        type: ActionsTypes.CREATE_GAME,
        payload: data,
      });
    } catch (error) {
      console.log("Error en createGames por:", error);
    }
  };

export const getGenres =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const data = await fetch(BACK.genres).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  };
