import { EditForm, FormCreate } from "@/types";
import axios from "axios";
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

export const getNames = (name: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const data = await fetch(`${BACK.games}?name=${name}`).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_NAME,
        payload: data,
      })
    } catch (error) {
      console.log("Error en getDetailGame por:", error);
    }
  }
}

export const getDetailGame = (id: string | number) => {
  return async (dispatch: Dispatch) => {
    try {
      const data = await fetch(`${BACK.games}/${id}`).then((res: any) => res.json());
      dispatch({
        type: ActionsTypes.GET_ID,
        payload: data,
      })
    } catch (error) {
      console.log("Error en getDetailGame por:", error);
    }
  }
}

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

export const deleteGame = (id: string) => {
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

//! PENDIENTE
export const upDateGame = (game: EditForm, id: string) => {
  console.log('GAME:',game)
  console.log('ID',id)
  return async (dispatch: Dispatch<Action>) => {
  // return async (dispatch: Dispatch) => {
    try {
      const data = await fetch(`${BACK.games}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(game),
      })
      .then((res: any) => res.json().then((r: any) => r))
      .then((res: (string)) => res)
      .catch((error: string) => console.log('ERROR:',error));
      // console.log('PUT ACTION:',data)
      // return dispatch<any>(getAllGames())

      // const data = await fetch(`${BACK.games}/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(game)
      // })
      // .then(response => {
      //   if (!response.ok) {
      //     throw new Error('Network response was not ok');
      //   }
      //   return response.json();
      // })
      // .then(data => {
      //   console.log('PUT request succeeded with JSON response', data);
      // })
      // .catch(error => {
      //   console.error('Error making PUT request:', error);
      // });
      // const {data} = await axios.put(`${BACK.games}/${id}`, game)
      console.log('PUT ACTION:',data)
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};
