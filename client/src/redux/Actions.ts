import { FormCreate } from "@/types";
import { Dispatch } from "redux";
// import { Dispatch } from "react";
import { Action } from "../../../interface/Actions";
import { ActionsTypes, BACK } from "./Action-Types";

// export const getAllGames = () => async (dispatch: Dispatch<Action>): Promise<void> => {
export const getAllGames = () => async (dispatch: Dispatch<Action>) => {
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

export const createGames = (post: FormCreate) => async (dispatch: Dispatch<Action>): Promise<void>  => {
// export const createGames = (post: FormCreate) => async (dispatch: Dispatch<Action>)  => {
    try {
      const data = await fetch(BACK.games, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((res: any) => res.json())
        .then((data: any) => console.log('DATA:',data.msg))
        .catch((error: string) => console.log('ERROR:',error));
        console.log(data)
      // dispatch({
      //   type: ActionsTypes.CREATE_GAME,
      //   // payload: data,
      // });
    } catch (error) {
      console.log("Error en createGames por:", error);
    }
  };

export const getGenres = () => async (dispatch: Dispatch<Action>): Promise<void> => {
// export const getGenres = () => async (dispatch: Dispatch<Action>) => {
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

export const deleteGame = (id: string | undefined) => async (dispatch: Dispatch<Action>): Promise<void> => {
// export const deleteGame = (id: string) => async (dispatch: Dispatch) => {
  try {
    const data = await fetch(`${BACK.games}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res: any) => res.json());
    // dispatch(getAllGames())
    // dispatch({
    //   type: ActionsTypes.DELETE_GAME,
    //   payload: data,
    // });
  } catch (error) {
    console.log("Error en getGenres por:", error);
  }
};
