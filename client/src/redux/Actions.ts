import { FormCreate } from "@/types";
import { Dispatch } from "redux";
// import { Dispatch } from "react";
import { Action } from "../../../interface/Actions";
import { ActionsTypes, BACK } from "./Action-Types";

export const getAllGames = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const data = await fetch(BACK.games).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_ALL_GAMES,
        payload: data,
      });
    } catch (error) {
      console.log("Error en getAllGames por:", error);
    }
  }
};

export const createGames = (post: FormCreate) => {
  return async (dispatch: Dispatch<Action>)  => {
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
    } catch (error) {
      console.log("Error en createGames por:", error);
    }
  }
};

export const getGenres = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const data = await fetch(BACK.genres).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_GENRES,
        payload: data,
      });
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};

export const deleteGame = (id: string | undefined) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await fetch(`${BACK.games}/${id}`, {
        method: "DELETE",
      })
      .then((res: any) => res.json())
      .then((data: any) => console.log('DATA:', data))
      dispatch({
        type: ActionsTypes.DELETE_GAME,
        payload: id,
      });
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};

export const upDateGame = (game: FormCreate, id: string | undefined) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      await fetch(`${BACK.games}/${id}`, {
        method: "PUT",
        body: JSON.stringify(game)
      })
      .then((res: any) => res.json())
      .then((data: any) => console.log('DATA:', data))
      // dispatch(getAllGames())
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};
