export interface PlatformsApi {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

export interface GenerosApi {
  id?: number
  name: string
}

//* Esta representa el ENDPOINT
export interface EndPointP {
  id: number
  name: string
}

export interface GamesApi {
  id: number
  name: string
  description?: string //! Se usa SÓLO para el ID
  released: string
  rating: number
  platforms: PlatformsApi[]
  genres: GenerosApi[]
  background_image: string
}

type PropsGames = Omit<GamesApi,'id' | 'background_image' | 'platforms' | 'genres'>

export interface IGenres {
  name: string
}

//TODO: EXTIENDO LAS PROPS DE GAMES API
export interface GamesDb extends PropsGames {
  id: string
  image: string
  platforms: string[]
}
type PropsGamesDb = Omit<GamesDb,'id'>

//TODO: AGRUPO TODAS LAS PROPS PARA LOS DATOS DE SALIDA
export interface GamesGenres extends PropsGamesDb, PropsGames {
  id: string | number
  genres: string[] | Array<IGenres>
}