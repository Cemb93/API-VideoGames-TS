import {EditForm, FormCreate} from "../types/Forms"
import { Dispatch } from "redux";
import { GamesGenres, GenerosApi } from "../../../interface/IGames";
import { ActionsTypes, BACK } from "./Action-Types";

export const getAllGames = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res: Response = await fetch(BACK.games);
      const data: GamesGenres = await res.json();
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
  return async (dispatch: Dispatch) => {
    try {
      const res: Response = await fetch(`${BACK.games}?name=${name}`);
      const data: GamesGenres = await res.json();
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
      const res: Response = await fetch(`${BACK.games}/${id}`);
      const data: GamesGenres = await res.json();
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
  return async (dispatch: Dispatch)  => {
    try {
      await fetch(BACK.games, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json"
        }
      })
      .then((res: Response) => res.json())
      .then((data: (string)) => data)
      .catch((error: string) => console.log('ERROR:',error));
    } catch (error) {
      console.log("Error en createGames por:", error);
    }
  }
};

export const getGenres = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res: Response = await fetch(BACK.genres);
      const data: GenerosApi = await res.json();
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
  return async (dispatch: Dispatch) => {
    try {
      await fetch(`${BACK.games}/${id}`, {
        method: "DELETE",
      })
      .then((res: Response) => res.json())
      .then((data: (string)) => data)
      dispatch({
        type: ActionsTypes.DELETE_GAME,
        payload: id,
      });
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};

export const upDateGame = (game: EditForm, id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await fetch(`${BACK.games}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(game),
      })
      .then((res: Response) => res.json())
      .then((res: (string)) => res)
      .catch((error: string) => console.log('ERROR:',error));
    } catch (error) {
      console.log("Error en getGenres por:", error);
    }
  }
};

export const filterByCreation = (filter: string) => {
  return {
    type: ActionsTypes.FILTER_BY_CREATED,
    payload: filter,
  };
};

export const filterByGenre = (filter: string) => {
  /* 
  * Con 100 juegos faltarían estos Generos:
  ! NO HAY: Casual - Board Games - Educational - Card
  */
  return {
    type: ActionsTypes.FILTER_BY_GENRES,
    payload: filter,
  };
};

export const orderByName = (order: string) => {
  return {
    type: ActionsTypes.ORDER_BY_NAME,
    payload: order,
  };
};

export const orderByRating = (order: string) => {
  return {
    type: ActionsTypes.ORDER_BY_RATING,
    payload: order,
  };
};
