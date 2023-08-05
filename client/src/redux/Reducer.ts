import { GamesGenres, IGenres } from "../../../interface/Games";
import { Action } from "../../../interface/Redux/Actions";
import { InitialState } from "../types/Forms";
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
    case ActionsTypes.FILTER_BY_CREATED:
      let filterGame: GamesGenres[] = [];
      if (action.payload === "Original Games") {
        let filterOrigin = state.allGames.filter((e:GamesGenres) => {
          if (typeof e.id === 'number') {
            return e.id
          }
        });
        filterGame = filterOrigin;
      }
      if (action.payload === "Added Games") {
        let filterCreated = state.allGames.filter((e:GamesGenres) => {
          if (typeof e.id === 'string') {
            return e.id
          }
        });
        filterGame = filterCreated;
      }
      if (action.payload === "All Games") {
        filterGame = state.allGames;
      }
      console.log('FILTER CREATED:', filterGame)
      return {
        ...state,
        allGames: filterGame,
      };
    case ActionsTypes.FILTER_BY_GENRES:
      const filterGames = state.allGames;
      let genreFilter =
        action.payload === "All"
          ? filterGames
          : filterGames.filter((e:GamesGenres) => {
            let arr1: (IGenres | string)[] = []
            let arr2: (IGenres | string)[] = []
            for (let el of e.genres) {
              if (typeof el === 'object' && el.name === action.payload) {
                arr1.push(el)
              }
              // if (typeof el === 'string' && el.includes(action.payload)) {
              if (typeof el === 'string' && el === action.payload) {
                arr1.push(el)
              }
            }
            arr2 = arr1.concat(arr2)
            return arr2.length > 0 && arr2;
          })
          console.log('FILTER GENRES:',genreFilter)
      return {
        ...state,
        allGames: genreFilter,
      };
    case ActionsTypes.ORDER_BY_NAME:
      let orderGames = state.allGames;
      let alphabeticOrder =
        action.payload === "A-Z"
          ? orderGames.sort((a:GamesGenres, b:GamesGenres) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            })
          : orderGames.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      console.log('ORDER NAME:', alphabeticOrder)
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
      console.log('ORDER RATING:', ratingOrder)
      return {
        ...state,
        allGames: ratingOrder,
      };
    default:
      return state;
  }
};
