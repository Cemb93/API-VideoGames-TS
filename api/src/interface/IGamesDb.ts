import { SchemaDefinitionProperty } from "mongoose"
import { IGenres, PropsGames } from "../../../interface/Games"

//TODO: EXTIENDO LAS PROPS DE GAMES API
export interface GamesDb extends PropsGames {
  _id?: string
  description?: string
  image: string
  platforms: string[]
  genres: SchemaDefinitionProperty<IGenres[]>
}