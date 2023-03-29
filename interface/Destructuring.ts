import { GenerosApi } from ".";
import {FormCreate, FormError} from "../client/src/types/Forms";
import {EventChanges, EventDeleteG, EventDeleteP, EventSelect, EventSubmit} from "../client/src/types/Function";

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