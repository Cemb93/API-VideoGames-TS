import { GamesGenres, GenerosApi } from "../../../interface/Games"

export type InitialState = {
  allGames: GamesGenres[]
  copyAllGames: GamesGenres[]
  genres: GenerosApi[]
  detail?: GamesGenres
}

type PropsForms = Omit<GamesGenres, '_id' | 'genres'>

//! PARA EL FORMULARIO DE CREACION
export type FormCreate = PropsForms & {
  genres: Array<string>
}
export type FormError = FormCreate

//! PARA EL FORMULARIO DE EDICIÓN
export type EditForm = PropsForms
export type EditError = PropsForms