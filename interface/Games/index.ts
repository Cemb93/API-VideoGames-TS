import { SchemaDefinitionProperty, Types } from "mongoose"

export interface PlatformsApi {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

export interface GenerosApi {
  id?: number
  name: string,
  videoGames: SchemaDefinitionProperty<{
    name: string;
  }[]>
}

//* Esta representa el ENDPOINT
export interface EndPointP {
  id: number
  name: string
}

export interface GamesApi {
  id: number
  name: string
  description_raw?: string //! Se usa SÓLO para el ID
  released: string
  rating: number
  platforms: PlatformsApi[]
  genres: GenerosApi[]
  background_image: string
}

type PropsGames = Omit<GamesApi,'id' | 'description_raw' | 'background_image' | 'platforms' | 'genres'>

export interface IGenres {
  name: string
}

//TODO: EXTIENDO LAS PROPS DE GAMES API
export interface GamesDb extends PropsGames {
  // id?: string
  description?: string
  image: string
  platforms: string[]
  genres: SchemaDefinitionProperty<IGenres[]>
}
type PropsGamesDb = Omit<GamesDb,'id' | "genres">

//TODO: AGRUPO TODAS LAS PROPS PARA LOS DATOS DE SALIDA
export interface GamesGenres extends PropsGamesDb, PropsGames {
  id: string | number
  // id: Types.ObjectId | number
  genres: string[] | Array<IGenres>
}