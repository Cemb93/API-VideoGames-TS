import React from 'react'
import { GamesGenres } from '../../../../api/src/interface'

export const Game = (
  { id, name, image, released, rating, platforms, genres }: 
  GamesGenres
) => {
  return (
    <div>
      <p>Nombre: {name}</p>
    </div>
  )
}
