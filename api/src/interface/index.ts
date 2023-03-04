export interface Platforms {//! ESTO NO SE PUEDE HACER CON LOS TIPOS
  platform: {
    name: string
  }
}

export interface Genres {
  name: string
}

export interface VideoGames {
  id: string
  name: string
  description: string
  released: string
  rating: number
  platforms: Platforms[]
  genres: Genres[]
  background_image: string
}

export interface Generos {
  id: number
  name: string
}