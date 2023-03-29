import { GamesGenres, GenerosApi } from "../../../interface"

export type InitialState = {
  allGames: GamesGenres[]
  copyAllGames: GamesGenres[]
  genres: GenerosApi[]
  detail?: GamesGenres
}

type PropsForms = Omit<GamesGenres, 'id' | 'genres'>
export type FormCreate = PropsForms & {
  genres: Array<string>
}
export type FormError = FormCreate

export type EditForm = PropsForms