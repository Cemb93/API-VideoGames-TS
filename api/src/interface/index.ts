export interface PlatformsApi {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

export interface GenerosApi {
  id?: number
  name: string
}

export interface GamesApi {
  id?: string
  name: string
  description: string
  released: string
  rating: number
  platforms: PlatformsApi[]
  genres: GenerosApi[]
  background_image: string
}

type PropsGames = Omit<GamesApi, 'background_image' | 'platforms' | 'genres'>

export interface IGenres {
  name: string
}

export interface GamesDb extends PropsGames {
  image: string
  platformsDb: Array<string>
  genresDb?: Array<IGenres>//! Se deja opcional por el modelo
}

export interface GamesGenres extends GamesDb, GamesApi {}