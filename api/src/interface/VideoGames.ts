import { Platforms } from "../types/VideoGames"

export interface VideoGames {
  id: string
  name: string
  description: string
  released: string
  rating: number
  platforms: Platforms[]
  image: string
}