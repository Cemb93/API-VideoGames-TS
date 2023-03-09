import { GamesGenres, GenerosApi } from "../../../api/src/interface"

export type InitialState = {
  allGames: GamesGenres[]
  copyAllGames: GamesGenres[]
  genres: GenerosApi[]
}