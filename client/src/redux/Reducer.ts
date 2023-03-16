import { InitialState } from "@/types";
import { GamesGenres, IGenres } from "../../../interface";
import { Action } from "../../../interface/Actions";
import { ActionsTypes } from "./Action-Types";

const initialState: InitialState = {
  allGames: [],
  copyAllGames: [],
  genres: [],
};

export const Reducer = (
  state: InitialState = initialState,
  action: Action
): InitialState => {
  switch (action.type) {
    case ActionsTypes.GET_ALL_GAMES:
      return {
        ...state,
        allGames: action.payload,
        copyAllGames: action.payload,
      };
    case ActionsTypes.GET_NAME:
      return {
        ...state,
        allGames: action.payload,
      };
    case ActionsTypes.GET_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case ActionsTypes.GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ActionsTypes.DELETE_GAME:
      return {
        ...state,
        allGames: [...state.allGames].filter((el) => el.id !== action.payload),
      };
    case ActionsTypes.FILTER_BY_CREATED:
      let filterGame;
      if (action.payload === "Original Games") {
        let filterOrigin = state.allGames.filter(
          // (e:GamesGenres) => e.id.toString().length < 7
          (e:GamesGenres) => {
            if (typeof e.id === 'number') {
              return e.id
            }
          }
        );
        filterGame = filterOrigin;
      }
      if (action.payload === "Added Games") {
        let filterCreated = state.allGames.filter(
          // (e:GamesGenres) => e.id.toString().length > 6
          (e:GamesGenres) => {
            if (typeof e.id === 'string') {
              return e.id
            }
          }
        );
        filterGame = filterCreated;

        // if (!filterGame.length) {
        //   filterGame = ["No games created"];
        // }
      }
      if (action.payload === "All Games") {
        filterGame = state.allGames;
      }
      return {
        ...state,
        // allGames: filterGame,
      };
    case ActionsTypes.FILTER_BY_GENRES:
      const filterGames = state.allGames;
      let genreFilter =
        action.payload === "All Genres"
          ? filterGames
          : filterGames.filter((e:GamesGenres) => e.genres.map((el:IGenres | string) => {
            if (typeof el === 'object') {
              return el.name.includes(action.payload)
            } else if (typeof el === 'string') {
              return el.includes(action.payload)
            }
          }));
      return {
        ...state,
        allGames: genreFilter,
      };
    case ActionsTypes.ORDER_BY_NAME:
      let orderGames = state.allGames;
      let alphabeticOrder =
        action.payload === "A-Z"
          ? orderGames.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
          : orderGames.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              return 0;
            });

      return {
        ...state,
        allGames: alphabeticOrder,
      };
    case ActionsTypes.ORDER_BY_RATING:
      let ratingOrder =
        action.payload === "higher rating"
          ? state.allGames.sort((a:GamesGenres, b:GamesGenres) => {
              if (a.rating < b.rating) return 1;
              if (a.rating > b.rating) return -1;
              return 0;
            })
          : state.allGames.sort((a:GamesGenres, b:GamesGenres) => {
              if (a.rating < b.rating) return -1;
              if (a.rating > b.rating) return 1;
              return 0;
            });
      return {
        ...state,
        allGames: ratingOrder,
      };
    // case ActionsTypes.FILTERS:
    //   switch (action.payload) {
    //     case ActionsTypes.FILTER_BY_GENRES:
    //       1;
    //     case ActionsTypes.FILTER_BY_CREATED:
    //     default:
    //       return state;
    //   }
    // case ActionsTypes.ORDERS:
    //   switch (action.payload) {
    //     case ActionsTypes.ORDER_BY_NAME:
    //       1;
    //     case ActionsTypes.ORDER_BY_RATING:
    //     default:
    //       return state;
    //   }
    default:
      return state;
  }
};
