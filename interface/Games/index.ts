import { GamesDb } from "../../api/src/interface/IGamesDb"

export interface PlatformsApi {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

//! INTERFAZ GOLBAL
export interface GenerosApi {
  id?: number
  name: string,
}

//* Esta representa el ENDPOINT
export interface EndPointP {
  id: number
  name: string
}

export interface GamesApi {
  id?: number
  name: string
  description_raw?: string //! Se usa SÓLO para el ID
  released: string
  rating: number
  platforms: PlatformsApi[]
  genres: GenerosApi[]
  background_image: string
}

export type PropsGames = Omit<GamesApi,'_id' | 'description_raw' | 'background_image' | 'platforms' | 'genres'>

//! INTERFAZ GOLBAL
export interface IGenres {
  name: string
}

type PropsGamesDb = Omit<GamesDb,'_id' | "genres">

//TODO: AGRUPO TODAS LAS PROPS PARA LOS DATOS DE SALIDA
//! INTERFAZ GOLBAL
export interface GamesGenres extends PropsGamesDb, PropsGames {
  _id: string | number
  genres: string[] | Array<IGenres>
}