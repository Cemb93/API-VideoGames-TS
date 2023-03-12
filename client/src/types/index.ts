import { GamesGenres, GenerosApi } from "../../../interface"

export type InitialState = {
  allGames: GamesGenres[]
  copyAllGames: GamesGenres[]
  genres: GenerosApi[]
}

type PropsCreate = Omit<GamesGenres, 'genres'>
export type FormCreate = PropsCreate & {
  genres: Array<string>
}

type PropsEdit = Omit<GamesGenres, 'genres'>
export type EditForm = PropsEdit