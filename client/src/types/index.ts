import { GamesGenres, GenerosApi } from "../../../interface"

export type InitialState = {
  allGames: GamesGenres[]
  copyAllGames: GamesGenres[]
  genres: GenerosApi[]
  detail?: GamesGenres
}

type PropsCreate = Omit<GamesGenres, 'id' | 'genres'>
export type FormCreate = PropsCreate & {
  genres: Array<string>
}

type PropsEdit = Omit<GamesGenres, 'id' | 'genres'>
export type EditForm = PropsEdit