export interface Platforms {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

export interface Generos {
  id?: number
  name: string
}

export interface IVideoGames {
  id?: string
  name: string
  description: string
  released: string
  rating: number
  platforms: Platforms[]
  genres?: Generos[]
  // genres?: GenreGame[]
  background_image: string
}

type PropsGenre = Omit<Generos, 'id'>

export interface IGamesGenres extends PropsGenre {}