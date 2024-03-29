import {EditError, EditForm, FormCreate, FormError} from "../client/src/types/Forms";
import {EventChanges, EventDeleteG, EventDeleteP, EventSelect, EventSubmit} from "../client/src/types/Function";
import { GamesGenres, GenerosApi } from "./IGames";

export interface IFormCreated {
  games: FormCreate
  errors: FormError
  genres: GenerosApi[]
  handlerChanges: EventChanges
  SelectP: EventSelect
  DeleteP: EventDeleteP
  SelectG: EventSelect
  DeleteG: EventDeleteG
  handlerSubmit: EventSubmit
}

type PropsI = Omit<IFormCreated, 'games' | 'errors' | 'genres' | 'SelectG' | 'DeleteG' >

export interface IFormEdit extends PropsI {
  games: EditForm
  errors: EditError
  detail?: GamesGenres | undefined
}

export interface INavbar {
  selects: {
    orderName: string
    orderRating: string
    genres: string
    created: string
  }
  filterGenre: EventSelect
  filterCreated: EventSelect
  sortName: EventSelect
  sortRating: EventSelect
}