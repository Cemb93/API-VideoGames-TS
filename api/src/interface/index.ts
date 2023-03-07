// export interface Platforms {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
//   platform: {
//     name: string
//   }
// }

export type Platform = {
  name: string
}

export interface Platforms {
  platform: Platform
}

export interface Generos {
  id?: number
  name: string
}

export interface VideoGamesApi {
  id?: string
  name: string
  description: string
  released: string
  rating: number
  platforms: Platforms[]
  genres: Generos[]
  background_image: string
}

type PropsGames = Omit<VideoGamesApi, 'background_image' | 'platforms' | 'genres'>

export interface IGenres {
  name: string
}

export interface IVideoGames extends PropsGames {
  image: string
  platforms: Array<string>
  genres?: Array<IGenres>
}